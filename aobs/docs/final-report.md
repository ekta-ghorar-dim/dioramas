# AOBS website: final report (after 8 versions)

## Winner: v08 "Key Visual" → `/versions/BEST`
v08 is the strongest balance of originality, credibility and craft:
- It is built entirely from **AOBS's own work**: key visuals, campaign posters, holding screens, draft boards, in-game HUDs and sponsor formats. The design's main idea, a colour world per tournament, comes straight from the portfolio, where every event has its own palette.
- It shows the thing that actually separates AOBS in the material supplied: **one crew takes an event from registration poster to grand-final HUD**, with sponsor formats built in.
- **Lighthouse 100 / 100 / 100 / 100** on mobile and desktop for every page tested. LCP 0.92s mobile (1.66s under real slow-4G emulation), CLS 0, TBT ≤ 34ms.

| Category | v08 score |
|---|---|
| First impression | 9 |
| Visual design & typography | 9 |
| Motion, 3D & interaction | 8 |
| Storytelling | 9 |
| Credibility | 8 |
| SEO | 9 |
| Mobile | 9 |
| Performance | 10 |
| Accessibility | 10 |
| Code quality | 8 |
| Originality | 9 |

**Runner-up: v07 "The Rundown".** It's the most industry-native concept (the site as a TV running order, Swiss print design) and the best at explaining *how* a broadcast works. If AOBS wants to sell mainly to publishers and broadcast buyers rather than community organizers, v07 is the better pick.

**Also worth keeping: v04's 3D fly-through** on /broadcast. The camera travels across a 3D control-room wall showing real AOBS frames. It can be carried into whichever direction wins.

## All versions
| Version | Concept | Notes |
|---|---|---|
| v01 | Foundation (dark, lime) | All pages, content system, SEO, form API |
| v02 | 3D control room | Persistent R3F scene, OG images |
| v03 | Real broadcast media | DEMO WORKS frames, overlay system, teasers |
| v04 | Fly-through | Pinned scroll camera through the 3D gallery, mobile perf 99 |
| v05 | "Cobalt Signal" skin | Scale-on-scroll screen hero, audience switcher |
| v06 | "Tally Amber" skin | Editorial serif, contact-sheet hero |
| v07 | **"The Rundown"** concept | Printed running order; first version after the "too similar" feedback |
| v08 | **"Key Visual"** concept | Event colour worlds, AOBS artwork collage |

v01–v06 share one skeleton (the client correctly called them similar). v07 and v08 are genuinely different concepts with their own IA and copy.

## Previews
v01–v08 are served on ports 3001–3008, and BEST on 3009.

## What AOBS should supply next (biggest gains first)
1. **Viewer numbers:** peak concurrent viewers, hours broadcast, per-event results. This is the biggest credibility gap.
2. **A 60–90s showreel** (YouTube ID), plus short clips of: a replay roll-in, a winner screen, and a real failover (or the backup stream's logs).
3. **Frames from more events,** especially BWC 2026 (LAN), MUC 2026 and Presidency Esports Mania (multi-title). No faces.
4. **Confirmations:** PCC year/format, the countries list, head office and region, which tournament the Nepal teaser was for, Desiate vs AOBS credit on posters, and whether AOBS has broadcast Honor of Kings.
5. **Product specs:** Backup Streamer switchover time, AOBS Cloud outputs/latency, and the list of OBS plugins.
6. **Contact email, social links, production domain;** the Desiate logo for the footer credit.

The full list is in `docs/missing-data.md`. All sources are in `docs/content-inventory.md`.
