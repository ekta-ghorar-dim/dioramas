# AOBS website · v03: real broadcast output

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
- **Big upgrade:** AOBS's own MLBB broadcast frames, key visuals and teasers (DEMO WORKS folder), with faces cropped out and caster names blurred.
- The 3D wall's PGM/PVW/REPLAY/AUX monitors play real frames. Home gets a "This is what goes to air" director-cut monitor and motion teasers.
- Graphics page: real packages, the draft board, the overlay system (HUD / draft / stats), teasers and key-visual masonry.
- PCC and Mini Mayhem case studies with real facts. VideoObject JSON-LD.

## Where things live
- Content (edit without touching components): `src/content/*.json` (tournaments, stats, services, technology, media manifest, FAQ).
- Real AOBS media: `public/media/` (broadcast frames, key visuals, teasers) and `public/logos/` (tournament marks).
- Missing data shows on the site as visible "pending" chips; the list is in `/docs/missing-data.md`.
- Review, scores and Lighthouse results for this version: `/docs/reviews/v03-review.md`.
