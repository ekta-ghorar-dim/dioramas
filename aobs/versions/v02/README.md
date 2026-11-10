# AOBS website · v02: the control room

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
- **Big upgrade:** persistent React Three Fiber control room in the root layout (shader monitors, ON AIR sign, switcher desk). Camera moves per route and on scroll. Lazy, desktop + real-GPU only, poster image fallback.
- OG/Twitter images for every page. Full home logo wall with channel-switch hover. Decode titles. Film grain. Hydration fix. Feeds pause off screen. Mobile perf 67 → 91.

## Where things live
- Content (edit without touching components): `src/content/*.json` (tournaments, stats, services, technology, media manifest, FAQ).
- Real AOBS media: `public/media/` (broadcast frames, key visuals, teasers) and `public/logos/` (tournament marks).
- Missing data shows on the site as visible "pending" chips; the list is in `/docs/missing-data.md`.
- Review, scores and Lighthouse results for this version: `/docs/reviews/v02-review.md`.
