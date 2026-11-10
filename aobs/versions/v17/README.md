# AOBS website · v17 "Geode"

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
Concept C10: the home page is the Dioramas geode world (engine in `src/dio/`, MIT; models CC BY 4.0), rewritten as "A raw stream is a stone": hold to crack it open; four facets of an AOBS broadcast.

## Where things live
- Content (edit without touching components): `src/content/*.json` (tournaments, stats, services, technology, media manifest, FAQ).
- Real AOBS media: `public/media/` (broadcast frames, key visuals, teasers) and `public/logos/` (tournament marks).
- Missing data shows on the site as visible "pending" chips; the list is in `/docs/missing-data.md`.
- Review, scores and Lighthouse results for this version: `/docs/reviews/v17-review.md`.
