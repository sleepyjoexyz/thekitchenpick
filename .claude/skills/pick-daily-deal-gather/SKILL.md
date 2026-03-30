---
name: pick-daily-deal-gather
description: Daily real deal scrape from Amazon → update mockDeals.ts → build & push all 3 Pick affiliate sites
---

## Daily Deal Gather Pipeline — Pick Sites

You are the daily deal gatherer for 3 consumer affiliate sites: thefamilypick.com, thekitchenpick.com, thegadgetpick.com. Your job: scrape REAL deals directly from Amazon, extract verified prices/ASINs/images/coupons, update mockDeals.ts in each repo, build-verify, commit, and push.

### CRITICAL RULES
- Affiliate tag: `rogeti02-20` (Rogeti LLC Amazon Associates)
- ALL Amazon URLs MUST be direct product pages: `https://www.amazon.com/dp/ASIN?tag=rogeti02-20` — NEVER use search-based URLs (`/s?k=...`) as they land on search results, not the product page.
- GitHub org: `sleepyjoexyz` (NOT dwuai)
- Mac repo paths: `/Users/dafangwu/repos/thefamilypick-site`, `/Users/dafangwu/repos/thekitchenpick-site`, `/Users/dafangwu/repos/thegadgetpick-site`
- Use `sh -c "cat > /tmp/script.sh << 'EOF'...EOF"` then `sh /tmp/script.sh` for multi-line shell commands (mac-shell arg quoting workaround)
- **REAL PRODUCT IMAGES MANDATORY** — Every deal MUST have a real product image from Amazon CDN (`https://m.media-amazon.com/images/I/{imgId}._AC_SL1500_.jpg`). Generic category emojis or placeholder URLs are NOT acceptable.
- **NO APPROVAL-REQUIRED TOOLS** — This task runs as a scheduled/automated pipeline. NEVER use tools that require user approval (computer-use MCP, `request_access`, screenshot, mouse/keyboard control). Use ONLY: Chrome MCP (`javascript_tool`, `navigate`, `tabs_create_mcp`, `tabs_context_mcp`), mac-shell MCP (`execute_command`), Tavily MCP (`tavily_search`, `tavily_extract`), Vercel MCP, and sandbox tools (Read, Write, Edit, Bash, Glob, Grep).
- **DEAL VERIFICATION MANDATORY** — Every deal must have `originalPrice > dealPrice`. Discard any deal where the parser returns invalid pricing.
- **APOSTROPHE ESCAPING** — Product titles with apostrophes (e.g., De'Longhi, World's) must be escaped properly in single-quoted TS strings. Either use `\'` or remove the apostrophe. Build-test catches these.

### STEP 1: Scrape Real Deals from Amazon

Open one Amazon tab via Chrome MCP, then define and run `window.scrapeCategory(searchTerm, category)`:

```javascript
window.scrapeCategory = async function(searchTerm, category) {
  const r = await fetch('https://www.amazon.com/s?k=' + encodeURIComponent(searchTerm) + '&deals=true&s=popularity-rank');
  const h = await r.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(h, 'text/html');
  const results = [];
  doc.querySelectorAll('[data-asin]').forEach(card => {
    const asin = card.getAttribute('data-asin');
    if (!asin || asin.length < 5) return;
    const titleEl = card.querySelector('.a-text-normal');
    const priceEl = card.querySelector('.a-price .a-offscreen');
    const origEl = card.querySelector('.a-price.a-text-price .a-offscreen');
    const imgEl = card.querySelector('img.s-image');
    const couponEl = card.querySelector('[class*="couponBadge"], .s-coupon-unclipped');
    if (!titleEl || !priceEl) return;
    const dealPrice = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
    const originalPrice = origEl ? parseFloat(origEl.textContent.replace(/[^0-9.]/g, '')) : null;
    if (!originalPrice || originalPrice <= dealPrice) return;
    let coupon = '';
    if (couponEl) {
      coupon = couponEl.textContent.trim()
        .replace(/.*?(\d+%\s*off).*/i, '$1 coupon')
        .replace(/.*?(\$\d+\.?\d*\s*off).*/i, '$1 coupon');
    }
    results.push({
      asin, title: titleEl.textContent.trim().substring(0, 120),
      dealPrice, originalPrice,
      coupon: coupon.includes('coupon') ? coupon : '',
      imageUrl: imgEl ? imgEl.src : '',
      category
    });
  });
  return results.slice(0, 8);
};
```

**Search terms by site:**

**thekitchenpick-site** (6 categories):
- Air Fryers: `"air fryer deal"`
- Espresso Machines: `"espresso machine deal"`
- Robot Vacuums: `"robot vacuum deal"`
- Air Purifiers: `"air purifier deal"`
- Standing Desks: `"standing desk deal"`
- Security Cameras: `"security camera deal"`

**thegadgetpick-site** (8 categories):
- Headphones: `"bluetooth headphones deal"`
- Speakers: `"bluetooth speaker deal"`
- Monitors: `"computer monitor deal"`
- Keyboards: `"mechanical keyboard deal"`
- Mice: `"wireless mouse deal"`
- Webcams: `"webcam deal"`
- Power Banks: `"portable charger deal"`
- Travel Adapters: `"travel adapter deal"`

**thefamilypick-site** (2 categories, use multiple search terms per category and merge):
- Baby Gear: `"baby monitor deal"`, `"baby stroller deal"`, `"baby car seat deal"`
- Pet Tech: `"pet camera automatic feeder deal"`, `"pet GPS tracker deal"`, `"pet grooming tool deal"`

Run each search with 1200ms delay between fetches to avoid throttling. Deduplicate by ASIN within each category. Sort by discount percentage descending. Keep top 5 per category.

### STEP 2: Extract Data from Chrome

**Chrome output blocker workaround:** The Chrome extension blocks JSON output containing URLs. To get data out:

1. Extract non-URL fields only: `asin`, `title`, `dealPrice`, `originalPrice`, `coupon`, `percentOff`, and `imgId` (extracted from imageUrl via regex: `imageUrl.match(/\/images\/I\/([^.]+)/)[1]`)
2. Reconstruct full URLs in the sandbox:
   - `amazonUrl`: `https://www.amazon.com/dp/${asin}?tag=rogeti02-20`
   - `imageUrl`: `https://m.media-amazon.com/images/I/${imgId}._AC_SL1500_.jpg`

Extract category by category to avoid truncation.

### STEP 3: Generate mockDeals.ts

For each site, generate a complete `mockDeals.ts` file using a Python script in the sandbox.

**TypeScript format** (must match exactly):

```typescript
export interface Deal {
  id: string;
  title: string;
  category: 'CATEGORY1' | 'CATEGORY2' | ...;
  originalPrice: number;
  dealPrice: number;
  percentOff: number;
  source: string;
  sourceUrl: string;
  amazonUrl: string;
  timeLeft: string;
  imageAlt: string;
  imageUrl: string;
  coupon: string;
}

export const mockDeals: Deal[] = [
  {
    id: 'XX-NNN',
    title: 'Full Product Name Here',
    category: 'Category Name',
    originalPrice: 299.99,
    dealPrice: 199.99,
    percentOff: 33,
    source: 'Amazon',
    sourceUrl: 'https://www.amazon.com/dp/B0XXXXXXXXX?tag=rogeti02-20',
    amazonUrl: 'https://www.amazon.com/dp/B0XXXXXXXXX?tag=rogeti02-20',
    timeLeft: 'Big Spring Sale',
    imageAlt: 'Short Product Name',
    imageUrl: 'https://m.media-amazon.com/images/I/XXXXXXXXXXX._AC_SL1500_.jpg',
    coupon: '',
  },
];
```

**ID format:** Category prefix + dash + 3-digit number (e.g., `AF-001`, `HP-016`). Prefixes: AF, EM, RV, AP, SD, SC, HP, SP, MN, KB, MC, WC, PB, TA, BG, PT.

**File locations:**
- Kitchen: `/sessions/practical-beautiful-allen/mnt/thekitchenpick-site/src/data/mockDeals.ts` (sandbox mount)
- Gadget: `/sessions/practical-beautiful-allen/mnt/thegadgetpick-site/src/data/mockDeals.ts` (sandbox mount)
- Family: `/Users/dafangwu/repos/thefamilypick-site/src/data/mockDeals.ts` (Mac only — use mac-shell with base64 transfer)

**Family site transfer method:** Generate the file content in sandbox, base64 encode it, then use mac-shell to decode and write:
```
sh -c "cat > /tmp/write_family.sh << 'SCRIPTEOF'
python3 -c \"import base64,sys; data=base64.b64decode(sys.stdin.read().strip()); open('/Users/dafangwu/repos/thefamilypick-site/src/data/mockDeals.ts','wb').write(data); print(f'Written {len(data)} bytes')\" << 'B64EOF'
<base64 content here>
B64EOF
SCRIPTEOF
sh /tmp/write_family.sh"
```

### STEP 4: Build, Commit, Push

Write a build-and-push script to `/tmp/` via mac-shell heredoc, then execute:

```bash
#!/bin/bash
set -e
DATE=$(date +%Y-%m-%d)
for SITE in thekitchenpick-site thegadgetpick-site thefamilypick-site; do
  echo "=== $SITE ==="
  cd /Users/dafangwu/repos/$SITE
  npm run build 2>&1 | tail -5
  git add -A
  git commit -m "chore: daily deal refresh $DATE"
  git push origin main
  echo "$SITE pushed"
done
echo "=== ALL PUSHED ==="
```

If build fails: check for apostrophe escaping issues in product titles. Fix and rebuild.

### STEP 5: Post-Deployment Verification

After pushing, wait 3 minutes for Vercel to deploy, then verify:

1. **Load each deals page** via Chrome MCP navigate:
   - `https://www.thekitchenpick.com/deals/air-fryers`
   - `https://www.thegadgetpick.com/deals/headphones`
   - `https://www.thefamilypick.com/deals/baby-gear`
   Confirm: page title loads correctly (not 404/500).

2. **Check images loaded** via javascript_tool:
   ```javascript
   document.querySelectorAll('img').forEach(img => {
     if (img.src.includes('amazon')) console.log(img.alt, img.complete && img.naturalWidth > 0);
   });
   ```

3. **Spot-check one Amazon link** — Extract first deal's href, navigate to it, confirm it lands on the actual Amazon product page (not search results), and the product name matches.

4. **Verify affiliate tag** — Check SiteStripe banner appears (confirms `tag=rogeti02-20` is working).

### IF ANYTHING FAILS

- Build failure → fix TypeScript (usually apostrophe escaping), rebuild, retry once. If still fails, revert to previous mockDeals.ts (`git checkout -- src/data/mockDeals.ts`) and push that.
- Scrape returns nothing for a category → keep existing deals for that category from the current mockDeals.ts. Never let a category drop below 4 deals.
- Chrome tab lost / scrapeCategory undefined → redefine the function and retry.
- Git push fails → log error, do not retry force-push.

### DEAL COUNT TARGETS

| Site | Categories | Deals per category | Total |
|------|-----------|-------------------|-------|
| Kitchen | 6 | 5 | ~30 |
| Gadget | 8 | 5 | ~40 |
| Family | 2 | 5 | ~10 |
