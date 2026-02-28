import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient, createClientSupabaseClient, Comment } from "@/lib/supabase";

// Rate limiting map: IP -> timestamps of recent requests
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per minute

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const times = rateLimitMap.get(ip) || [];

  // Remove timestamps older than the window
  const recentTimes = times.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recentTimes.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false; // Rate limited
  }

  // Add current timestamp and update map
  recentTimes.push(now);
  rateLimitMap.set(ip, recentTimes);

  return true; // Not rate limited
}

// GET: Fetch comments for a specific page
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pagePath = searchParams.get("path");
    const siteName = searchParams.get("site");

    if (!pagePath || !siteName) {
      return NextResponse.json(
        { error: "Missing required query parameters: path, site" },
        { status: 400 }
      );
    }

    const supabase = createClientSupabaseClient();

    if (!supabase) {
      return NextResponse.json(
        { error: "Comments service is not configured" },
        { status: 503 }
      );
    }

    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("site_name", siteName)
      .eq("page_path", pagePath)
      .eq("is_visible", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch comments" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      comments: (data as Comment[]) || [],
      count: (data || []).length,
    });
  } catch (err) {
    console.error("Error in GET /api/comments:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST: Create a new comment
export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: "Too many comments. Please wait before posting again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, comment, page_path, site_name, website } = body;

    // Honeypot check - if website field is filled, silently reject
    if (website) {
      // Return 200 to fool bots, but don't actually save anything
      return NextResponse.json({ success: true });
    }

    // Server-side validation
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (name.trim().length < 2 || name.trim().length > 50) {
      return NextResponse.json(
        { error: "Name must be between 2 and 50 characters" },
        { status: 400 }
      );
    }

    if (!comment || typeof comment !== "string") {
      return NextResponse.json(
        { error: "Comment is required" },
        { status: 400 }
      );
    }

    if (comment.trim().length < 10 || comment.trim().length > 2000) {
      return NextResponse.json(
        { error: "Comment must be between 10 and 2000 characters" },
        { status: 400 }
      );
    }

    if (!page_path || !site_name) {
      return NextResponse.json(
        { error: "Missing required fields: page_path, site_name" },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();

    if (!supabase) {
      return NextResponse.json(
        { error: "Comments service is not configured" },
        { status: 503 }
      );
    }

    // Insert comment
    const { data, error } = await supabase
      .from("comments")
      .insert({
        display_name: name.trim(),
        comment_text: comment.trim(),
        page_path,
        site_name,
        is_visible: true,
        ip_hash: clientIp, // Store IP for potential spam detection
      })
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save comment" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        comment: data?.[0],
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error in POST /api/comments:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
