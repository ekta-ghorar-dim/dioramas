# AOBS website · v04: the fly-through

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
- **Big upgrade:** pinned scroll camera fly-through on /broadcast across six stations on the real monitor wall, with focus dimming.
- Home sponsor-ready strip (Mini Mayhem's three sponsor formats). Lazy, code-split demos. Art-directed mobile poster (24 KB). Mobile performance 70 → 99.
- Fixed: the demo HUD no longer draws over real frames.

## Where things live
- Content (edit without touching components): `src/content/*.json` (tournaments, stats, services, technology, media manifest, FAQ).
- Real AOBS media: `public/media/` (broadcast frames, key visuals, teasers) and `public/logos/` (tournament marks).
- Missing data shows on the site as visible "pending" chips; the list is in `/docs/missing-data.md`.
- Review, scores and Lighthouse results for this version: `/docs/reviews/v04-review.md`.
