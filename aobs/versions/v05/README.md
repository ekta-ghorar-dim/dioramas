# AOBS website · v05: "Cobalt Signal" (art direction #2)

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
- New palette (navy + cyan/cobalt gradients), Unbounded display face, rounded glass panels, pill buttons.
- Hero: a real broadcast screen that scales to full-bleed on scroll, with director cuts. Atlas-style "Built for" audience switcher. Giant stats. Footer wordmark. OG images in the new face.
- Perf fixes for image-led heroes (deferred frames, interaction-started cuts).

## Where things live
- Content (edit without touching components): `src/content/*.json` (tournaments, stats, services, technology, media manifest, FAQ).
- Real AOBS media: `public/media/` (broadcast frames, key visuals, teasers) and `public/logos/` (tournament marks).
- Missing data shows on the site as visible "pending" chips; the list is in `/docs/missing-data.md`.
- Review, scores and Lighthouse results for this version: `/docs/reviews/v05-review.md`.
