# AOBS website · BEST (copy of v08 "Key Visual")

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
- New concept, IA and copy: each tournament is a "world". The page colour shifts per event as you scroll (PCC green, Mini Mayhem red, Women's War bronze, Halloween purple).
- Hero collage of real key visuals and frames; poster → holding screen → HUD chains per event; deliverables line; teasers; monochrome sticker wall of all 18 marks; "Start your event's world" form. Bricolage Grotesque.
- Lighthouse 100/100/100/100 on mobile and desktop for every page tested.

## Where things live
- Content (edit without touching components): `src/content/*.json` (tournaments, stats, services, technology, media manifest, FAQ).
- Real AOBS media: `public/media/` (broadcast frames, key visuals, teasers) and `public/logos/` (tournament marks).
- Missing data shows on the site as visible "pending" chips; the list is in `/docs/missing-data.md`.
- Review, scores and Lighthouse results for this version: `/docs/reviews/v08-review.md`.
