import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Create Supabase client using available keys (service key preferred, anon key fallback)
function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const key = serviceKey || anonKey;

  if (!url || !key) {
    return null;
  }
  return createClient(url, key);
}

// Send email via Resend API
async function sendWelcomeEmail(email: string, siteName: string): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY not configured");
    return false;
  }

  const siteConfig: { [key: string]: { title: string; description: string } } = {
    thekitchenpick: {
      title: "The Kitchen Pick",
      description: "Get the best kitchen and cookware deals delivered to your inbox.",
    },
  };

  const config = siteConfig[siteName] || { title: "The Kitchen Pick", description: "Get the best deals delivered to your inbox." };

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
          h1 { color: #1f2937; font-size: 28px; margin-bottom: 16px; }
          p { color: #4b5563; line-height: 1.6; margin-bottom: 12px; }
          .highlight { background-color: #f3f4f6; padding: 16px; border-radius: 6px; margin: 20px 0; }
          .footer { color: #9ca3af; font-size: 12px; margin-top: 32px; border-top: 1px solid #e5e7eb; padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to ${config.title}!</h1>
          <p>Thanks for subscribing. You're all set!</p>
          <div class="highlight">
            <p><strong>What to expect:</strong></p>
            <p>We'll send you the best deals and product picks curated just for you. Expect quality over quantity—no spam, we promise.</p>
          </div>
          <p>You'll start seeing deals in your inbox soon. If you ever want to unsubscribe, just click the link at the bottom of any email.</p>
          <p>Happy shopping!</p>
          <p>The ${config.title} Team</p>
          <div class="footer">
            <p>You're receiving this because you subscribed to ${config.title}.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: email,
        subject: `Welcome to ${config.title}!`,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Resend API error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending email via Resend:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const supabase = getSupabaseClient();

    if (!supabase) {
      console.error("Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY or SUPABASE_SERVICE_KEY");
      return NextResponse.json({ error: "Service is not configured" }, { status: 503 });
    }

    // Use RPC to bypass PostgREST schema cache issues
    const { data, error: rpcError } = await supabase.rpc("subscribe_email", {
      p_email: trimmedEmail,
      p_site_name: "thekitchenpick",
    });

    if (rpcError) {
      console.error("Supabase RPC error:", rpcError);
      return NextResponse.json({ error: "Failed to save subscription" }, { status: 500 });
    }

    const result = data as { status: string; id: string };

    if (result.status === "already_subscribed") {
      return NextResponse.json(
        { success: true, message: "You're already subscribed" },
        { status: 200 }
      );
    }

    // Send welcome email
    const emailSent = await sendWelcomeEmail(trimmedEmail, "thekitchenpick");

    if (!emailSent) {
      console.warn("Failed to send welcome email, but subscription was saved");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Welcome! Check your email for confirmation.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/subscribe:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
