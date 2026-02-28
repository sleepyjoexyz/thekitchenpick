import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

// Server-side client (uses service key for full access)
export const createServerSupabaseClient = () => {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(
      "Missing Supabase credentials: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_KEY"
    );
  }
  return createClient(supabaseUrl, supabaseServiceKey);
};

// Client-side client (uses anon key, limited by RLS)
export const createClientSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      "Missing Supabase credentials: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY. Comments will not be available."
    );
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
};

export interface Comment {
  id: string;
  page_path: string;
  site_name: string;
  display_name: string;
  comment_text: string;
  created_at: string;
  is_visible: boolean;
}
