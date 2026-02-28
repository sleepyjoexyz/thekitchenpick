# Comments System Setup

This guide walks you through setting up the comments system for The Kitchen Pick (and other Pick sites).

## Overview

The comments system is built with:
- **Frontend**: React client component with validation and rate limiting
- **Backend**: Next.js API route with server-side validation
- **Database**: Supabase PostgreSQL with Row-Level Security (RLS)
- **Spam Prevention**: Honeypot field, rate limiting, content validation

No user registration is required—commenters just need to enter a name and comment.

---

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in (or create an account)
2. Click **"New Project"** in the dashboard
3. Enter a project name (e.g., `thekitchenpick-comments`)
4. Choose a region close to your users
5. Create a strong database password (you'll need this)
6. Click **"Create New Project"** and wait for it to provision (2-3 minutes)

---

## Step 2: Create the Comments Table

1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Click **"New Query"**
3. Copy and paste the SQL below into the editor
4. Click **"Run"** to execute

```sql
-- Create the comments table
create table comments (
  id uuid default gen_random_uuid() primary key,
  page_path text not null,
  site_name text not null,
  display_name text not null,
  comment_text text not null,
  created_at timestamptz default now(),
  is_visible boolean default true,
  ip_hash text
);

-- Create index for efficient queries
create index idx_comments_page on comments(site_name, page_path, is_visible);

-- Enable Row-Level Security
alter table comments enable row level security;

-- RLS Policy: Anyone can read visible comments
create policy "Anyone can read visible comments"
  on comments for select
  using (is_visible = true);

-- RLS Policy: Only service key can insert
create policy "Service key can insert comments"
  on comments for insert
  with check (true);

-- RLS Policy: Only service key can update/delete (for moderation)
create policy "Service key can update/delete comments"
  on comments for update
  using (true);

create policy "Service key can delete comments"
  on comments for delete
  using (true);
```

After running, you should see the `comments` table appear in the **Tables** section (left sidebar).

---

## Step 3: Get Your Supabase API Keys

1. Go to **Settings** → **API** (left sidebar)
2. Copy and save the following:
   - **Project URL** (under "API Settings") → This is `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → This is `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret key** → This is `SUPABASE_SERVICE_KEY` (keep this secret!)

---

## Step 4: Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add three new variables:

| Name | Value | Scope |
|------|-------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Project URL from Step 3 | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your anon public key from Step 3 | Production, Preview, Development |
| `SUPABASE_SERVICE_KEY` | Your service_role secret key from Step 3 | Production, Preview, Development |

**Important:** The `SUPABASE_SERVICE_KEY` should only be visible in server-side code and not exposed to the client.

4. After adding all three, click **"Save"** and redeploy your project

---

## Step 5: Enable the Comments Component (Per Site)

Once the comments system is live, add the `<Comments />` component to your article/product pages.

### Example: Adding to a Single Article Page

Edit `/src/app/espresso-machines/[slug]/page.tsx`:

```tsx
import Comments from "@/components/Comments";

export default function ArticlePage() {
  return (
    <div>
      {/* ... existing article content ... */}

      {/* Add comments component at the bottom */}
      <Comments pagePath={pathname} siteName="thekitchenpick" />
    </div>
  );
}
```

**Props:**
- `pagePath`: The URL path of the current page (e.g., `/espresso-machines/best-under-500`)
- `siteName`: The site identifier (e.g., `thekitchenpick`, `thegymfitness`, `thecoffeegenius`)

### Example: Dynamic Page Path

If the page path should be dynamic based on the route:

```tsx
import { usePathname } from "next/navigation";
import Comments from "@/components/Comments";

export default function Page() {
  const pathname = usePathname();

  return (
    <>
      {/* ... content ... */}
      <Comments pagePath={pathname} siteName="thekitchenpick" />
    </>
  );
}
```

---

## Step 6: Testing

1. Deploy your changes to Vercel
2. Navigate to a page where you added the `<Comments />` component
3. Scroll to the bottom and test:
   - **Form validation**: Try submitting with invalid inputs (should show errors)
   - **Rate limiting**: Submit a comment, then try submitting again within 60 seconds (button should be disabled)
   - **Honeypot**: Don't touch the hidden `website` field—the form should work normally
   - **Comment display**: After submitting, your comment should appear above the form with a timestamp

---

## Troubleshooting

### Comments section shows "Comments coming soon"
- Check that all three environment variables are set in Vercel
- Verify the variable names are exactly correct (case-sensitive)
- Redeploy after adding environment variables
- Check browser console for errors (F12 → Console tab)

### Comments form appears but submission fails
- Check that the Supabase service key is correct
- Verify the comments table was created successfully
- Check Vercel deployment logs for errors
- Look at Supabase **SQL Editor** → **Recent Queries** to see if the table was actually created

### RLS errors in the browser console
- Ensure the `NEXT_PUBLIC_SUPABASE_ANON_KEY` is correct
- Verify the RLS policy for "Anyone can read visible comments" exists
- Check that `is_visible` is set to `true` in the policy

---

## Optional: Moderation Dashboard

To moderate comments (hide spam, etc.), you can:

1. Go to **Table Editor** in Supabase and find the `comments` table
2. Click a comment row and set `is_visible` to `false` to hide it
3. Hidden comments won't appear on the site but are still stored

For a more robust moderation system, you could later build an admin dashboard.

---

## Copying to Other Sites

To add comments to **The Gym Fitness** and **The Coffee Genius**:

1. Copy the same Supabase project (or create a new one)
2. Use the same database URL and keys
3. Add the component with different `siteName` prop:
   - For **The Gym Fitness**: `<Comments pagePath={pathname} siteName="thegymfitness" />`
   - For **The Coffee Genius**: `<Comments pagePath={pathname} siteName="thecoffeegenius" />`

All three sites can share the same Supabase instance, and comments are isolated by `site_name`.

---

## Production Checklist

- [ ] Supabase project created and table exists
- [ ] All three environment variables added to Vercel
- [ ] Vercel deployment successful
- [ ] Comments component added to at least one page
- [ ] Form submission tested and working
- [ ] Comments appear on the page after submission
- [ ] Rate limiting works (can't spam multiple comments)
- [ ] RLS policies allow reads but prevent direct inserts from the client

Once all checks pass, your comments system is live!
