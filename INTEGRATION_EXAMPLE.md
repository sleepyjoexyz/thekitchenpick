# Comments Integration Examples

After setting up Supabase (see `COMMENTS_SETUP.md`), add the Comments component to your pages.

## Example 1: Article Page (Dynamic Path)

For pages like `/espresso-machines/best-espresso-machines-under-500`:

```tsx
// src/app/espresso-machines/[slug]/page.tsx
"use client";

import { usePathname } from "next/navigation";
import Comments from "@/components/Comments";

export default function ArticlePage() {
  const pathname = usePathname();

  return (
    <div className="bg-white">
      {/* ... existing article content ... */}

      {/* Add Comments at the bottom */}
      <Comments pagePath={pathname} siteName="thekitchenpick" />
    </div>
  );
}
```

## Example 2: Category Page (Static Path)

For pages like `/espresso-machines`:

```tsx
// src/app/espresso-machines/page.tsx
import Comments from "@/components/Comments";

export default function EspressoMachinesPage() {
  return (
    <div className="bg-white">
      {/* ... existing category content ... */}

      {/* Add Comments with fixed path */}
      <Comments pagePath="/espresso-machines" siteName="thekitchenpick" />
    </div>
  );
}
```

## Example 3: Home Page

```tsx
// src/app/page.tsx
import Comments from "@/components/Comments";

export default function Home() {
  return (
    <div>
      {/* ... homepage content ... */}

      {/* Comments for homepage */}
      <Comments pagePath="/" siteName="thekitchenpick" />
    </div>
  );
}
```

## Multiple Sites Usage

To use the same Supabase project for multiple Pick sites:

### The Gym Fitness
```tsx
<Comments pagePath={pathname} siteName="thegymfitness" />
```

### The Coffee Genius
```tsx
<Comments pagePath={pathname} siteName="thecoffeegenius" />
```

Comments are isolated by the `siteName` parameter, so each site can have its own comment threads even if they share the same Supabase instance.

## Styling Notes

The Comments component uses Tailwind CSS classes that match the existing site design:
- Clean gray borders (`border-gray-200`, `border-gray-300`)
- Subtle backgrounds (`bg-gray-50`)
- Blue accent for buttons (`bg-blue-600`, `hover:bg-blue-700`)
- Consistent spacing and typography

No additional CSS is needed—it integrates seamlessly with your existing Tailwind setup.

## Component Props

```typescript
interface CommentsProps {
  pagePath: string;      // URL path of the current page (e.g., "/espresso-machines")
  siteName: string;      // Site identifier (e.g., "thekitchenpick")
}
```

Both props are required.

## What's Included

The Comments component provides:
- ✓ Comment form with name and message fields
- ✓ Client-side validation (2-50 chars for name, 10-2000 for comment)
- ✓ Display of existing comments sorted by newest first
- ✓ Timestamps on each comment (e.g., "Feb 28, 2026")
- ✓ Rate limiting (60-second cooldown after posting)
- ✓ Honeypot spam protection
- ✓ Graceful fallback if Supabase isn't configured
- ✓ Loading states and error handling
- ✓ Success confirmation message

## Testing Before Deployment

1. **Local Testing** (before deployment):
   ```bash
   npm run dev
   # Visit http://localhost:3000 and try the form
   # Comments won't save locally without Supabase, but UI validation will work
   ```

2. **Production Testing** (after Vercel deployment):
   - Navigate to a page with the Comments component
   - Submit a test comment
   - Verify it appears immediately
   - Refresh the page—comment should still be there
   - Try submitting again within 60 seconds—should be rate limited
   - Check another page's comments—should be separate

## Troubleshooting

**Comments form doesn't appear?**
- Ensure `COMMENTS_SETUP.md` is complete
- Check browser console (F12) for errors
- Verify Vercel environment variables are set

**Comments submit but don't appear?**
- Check Supabase table exists and has data
- Verify RLS policies are enabled
- Check the `is_visible` field is `true`

**Form shows "Comments coming soon"?**
- Supabase environment variables are missing
- Redeploy after adding variables
