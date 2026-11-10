# AOBS website · v07: "The Rundown" (concept #1)

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
- New concept, IA and copy: the site as a printed TV production running order. Paper + ink + one red, Schibsted Grotesk.
- Home: plain statement + Fig. 1 real frame; the record as a sentence; an 8-segment rundown table that opens into real frames and the failover drill; venue/remote/hybrid spec table; in-house tools; tournaments as end credits with a logo proof window; booking sheet; colophon footer.
- All the repeated tropes removed (ON AIR pills, timecodes, mono eyebrows, gradients, glows, grain, stinger, scramble, 3D).

## Where things live
- Content (edit without touching components): `src/content/*.json` (tournaments, stats, services, technology, media manifest, FAQ).
- Real AOBS media: `public/media/` (broadcast frames, key visuals, teasers) and `public/logos/` (tournament marks).
- Missing data shows on the site as visible "pending" chips; the list is in `/docs/missing-data.md`.
- Review, scores and Lighthouse results for this version: `/docs/reviews/v07-review.md`.
