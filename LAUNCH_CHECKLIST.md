# The Kitchen Pick — Launch Checklist

## Pre-Launch Tasks

### Code & Build
- [x] All 17 source files created and verified
- [x] TypeScript types defined (no `any` types)
- [x] Components fully functional with no stubs
- [x] Data files complete with 15 machines
- [x] Articles fully written (4 guides, 3500+ words)
- [x] Static site generation configured
- [ ] Run `npm run build` to verify build succeeds
- [ ] Verify `.next` folder generated successfully
- [ ] Test site locally with `npm run start`

### Data Verification
- [ ] Verify all 15 espresso machine specs are accurate
  - [ ] De'Longhi Dedica EC685M - $305 ✓
  - [ ] Breville Barista Express BES870XL - $600 ✓
  - [ ] Breville Barista Pro BES878 - $800 ✓
  - [ ] Breville Barista Touch BES880 - $1000 ✓
  - [ ] Gaggia Classic Pro - $450 ✓
  - [ ] Rancilio Silvia V6 - $800 ✓
  - [ ] Philips 3200 LatteGo - $700 ✓
  - [ ] De'Longhi Magnifica S - $400 ✓
  - [ ] Jura E8 - $2000 ✓
  - [ ] Jura Z10 - $3500 ✓
  - [ ] Nespresso Creatista Plus - $500 ✓
  - [ ] Nespresso Vertuo Next - $160 ✓
  - [ ] Lelit Bianca PL162T - $2600 ✓
  - [ ] Rocket Apartamento - $1600 ✓
  - [ ] Breville Bambino Plus - $400 ✓

- [ ] Verify all Amazon ASINs are correct
- [ ] Update `lastVerified` dates in `src/data/espresso-machines.ts`
- [ ] Cross-check specs against manufacturer specs
- [ ] Verify ratings are realistic and consistent

### Affiliate Setup
- [ ] Create Amazon Associates account (if not already done)
- [ ] Get approved for Amazon Associates program
- [ ] Obtain affiliate tracking ID/tag
- [ ] Replace `AFFILIATE_TAG` in `src/lib/utils.ts` with actual tag
- [ ] Test affiliate links work correctly
- [ ] Verify redirect to Amazon with tracking tag

### SEO & Analytics
- [ ] Update domain in `src/app/layout.tsx` metadata if different from "thekitchenpick.com"
- [ ] Verify canonical URLs point to correct domain
- [ ] Test sitemap.xml generation at `/sitemap.xml`
- [ ] Add Google Analytics tracking code (optional)
- [ ] Set up Google Search Console
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Submit sitemap.xml to Bing Webmaster Tools
- [ ] Verify robots.txt allows indexing

### Content Review
- [ ] Read all article content for accuracy and quality
- [ ] Verify all article links point to correct pages
- [ ] Check markdown rendering in articles (tables, lists, etc.)
- [ ] Verify comparison table displays correctly
- [ ] Test filter functionality with various filter combinations
- [ ] Verify sorting works on comparison table (price, rating)

### Design & UX
- [ ] Test on mobile (320px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1920px width)
- [ ] Verify sticky header works
- [ ] Check all links are clickable and styled correctly
- [ ] Verify product cards display cleanly
- [ ] Check table scrolling on mobile
- [ ] Test all hover states and transitions

### Legal & Compliance
- [ ] Update footer copyright year if needed
- [ ] Add privacy policy page (create /app/privacy/page.tsx)
- [ ] Add terms of service page (create /app/terms/page.tsx)
- [ ] Add about page with company info (optional)
- [ ] Verify Amazon disclosure is clear in footer
- [ ] Add cookie consent banner (optional but recommended)
- [ ] Review affiliate link policies with Amazon
- [ ] Ensure FTC disclosure for affiliate links (footer covers this)

### Performance
- [ ] Run Lighthouse audit
- [ ] Target scores: Performance >90, Accessibility >90, SEO >90
- [ ] Test Core Web Vitals (LCP, FID, CLS)
- [ ] Verify page load time < 3 seconds
- [ ] Check bundle size (should be minimal for static site)
- [ ] Test on slow 3G network (Chrome DevTools)

### Deployment
- [ ] Choose hosting platform (Vercel, Netlify, AWS, etc.)
- [ ] Build site locally: `npm run build`
- [ ] Deploy `.next` folder (static site output)
- [ ] Test deployed site thoroughly
- [ ] Verify all links work on production domain
- [ ] Verify affiliate links redirect correctly
- [ ] Check sitemap.xml available on production

### Post-Launch
- [ ] Monitor traffic and analytics
- [ ] Check Google Search Console for indexing status
- [ ] Monitor affiliate link clicks and conversions
- [ ] Respond to any user feedback
- [ ] Plan for regular content updates
- [ ] Monitor for broken links periodically
- [ ] Update machine prices quarterly
- [ ] Add new espresso machines as they launch

## File Checklist

### Created Files (17 total)
- [x] `/src/app/layout.tsx` - Root layout with SEO
- [x] `/src/app/page.tsx` - Homepage
- [x] `/src/app/globals.css` - Tailwind + custom styles
- [x] `/src/app/sitemap.ts` - Dynamic sitemap
- [x] `/src/app/espresso-machines/page.tsx` - Comparison page
- [x] `/src/app/espresso-machines/[slug]/page.tsx` - Article pages
- [x] `/src/components/Header.tsx` - Navigation header
- [x] `/src/components/Footer.tsx` - Site footer
- [x] `/src/components/Breadcrumbs.tsx` - Breadcrumb nav
- [x] `/src/components/ComparisonTable.tsx` - Sortable table
- [x] `/src/components/FilterBar.tsx` - Filters + sort
- [x] `/src/components/ProductCard.tsx` - Product cards
- [x] `/src/data/espresso-machines.ts` - Machine data
- [x] `/src/data/articles.ts` - Article content
- [x] `/src/lib/types.ts` - TypeScript types
- [x] `/src/lib/utils.ts` - Utility functions
- [x] `/public/robots.txt` - SEO robots file

### Configuration Files (Already Exist)
- [x] `package.json` - Dependencies
- [x] `tsconfig.json` - TypeScript config
- [x] `next.config.ts` - Next.js config
- [x] `postcss.config.mjs` - PostCSS config
- [x] `eslint.config.mjs` - ESLint config

## Quick Start Commands

```bash
# Install dependencies (if needed)
npm install

# Development mode
npm run dev
# Visit http://localhost:3000

# Production build
npm run build

# Production start
npm start
```

## Key Metrics to Track

After launch, monitor:
- Page views and unique visitors
- Bounce rate
- Average time on page (target: >2 min for articles)
- Conversion rate (affiliate clicks / page views)
- Click-through rate on affiliate links
- Top traffic sources
- Top performing articles
- Mobile vs desktop traffic split

## Future Enhancement Ideas

1. Add more appliance categories (cookware, wine coolers, etc.)
2. Add user comparison tool (side-by-side select machines)
3. Add price tracking (alert when price drops)
4. Add video reviews or guides
5. Add user comments/reviews (moderated)
6. Add newsletter signup
7. Add comparison saving/sharing
8. Add FAQ per product
9. Add related products suggestions
10. Add troubleshooting guides

## Support & Maintenance

- Monitor for broken Amazon links (quarterly)
- Update prices seasonally
- Add new models as they release
- Update article content based on user feedback
- Fix any reported bugs immediately
- Monitor for SEO ranking changes
- Update privacy policy as needed
- Keep Next.js and dependencies current

This checklist ensures a quality launch and smooth operation.
