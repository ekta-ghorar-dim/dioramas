# AOBS website · v01: foundation

A complete, standalone build of the AOBS website (Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4).

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
```
Production build:
```bash
npm run build && npm start
```
Copy `.env.example` to `.env.local` to configure the site URL, the contact form destination (webhook or Resend) and analytics (Plausible or GA4).

## What's new in this version
- Full site: Home, Broadcast, Graphics & Data, Technology (+3 product pages), Work (filterable, 18 case studies), About, Contact (+ `/api/contact`), Insights, 404.
- All content in `src/content/*.json`; missing data shown as visible DATA PENDING chips.
- Hero boot-up (power-on line, lower-third headline, running timecode, ON AIR tally), multiview wall, signal flow diagram, failover simulator, live data scorebug, logo marquee, stinger page transitions, Lenis smooth scroll, analytics events, JSON-LD, sitemap, robots.
- Hotfix: heading class collision with Tailwind height utilities.

## Where things live
- Content (edit without touching components): `src/content/*.json` (tournaments, stats, services, technology, media manifest, FAQ).
- Real AOBS media: `public/media/` (broadcast frames, key visuals, teasers) and `public/logos/` (tournament marks).
- Missing data shows on the site as visible "pending" chips; the list is in `/docs/missing-data.md`.
- Review, scores and Lighthouse results for this version: `/docs/reviews/v01-review.md`.
