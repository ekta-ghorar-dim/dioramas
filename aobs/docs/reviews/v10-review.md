# v10 review: "The Keeper" (concept C04, Dioramas "The Keeper" world ported into the AOBS site)

**Concept:** Backup Streamer as a lighthouse in a storm. The page is one continuous WebGL scene: Gerstner-wave ocean, rain, lightning, twin volumetric beams and planar reflections, from the Dioramas engine (MIT; lighthouse/boat models CC BY 4.0, credited in the footer).
- **Hero:** "Storms happen. The stream stays lit."
- **Signature interaction:** the cursor takes the lamp beam; a dropped feed is lost in the swell. Hold the beam on it for 2 seconds and it comes back on air (a counter counts "Streams kept live" and a toast says viewers never saw an offline screen). A live status log reads Primary: Lost → Recovering → Restored / Backup on air → Standing by / Viewers: Live, no gap.
- **Scroll:** storm to dawn. "The stack" climbs the tower floor by floor (gallery, graphics, sponsors, Backup Streamer at the lamp), each with a real AOBS frame. "Delivery" shows AOBS Cloud to Twitch/YouTube/Kick. "On record" closes it out.
- **Type and colour:** Libre Caslon Display + Karla (self-hosted), sodium yellow on storm blue-black. Nothing reused from v01–v09.
- **Port:** the Dioramas engine and Keeper modules live in `src/dio/`. The markup is server-rendered (real HTML for SEO) and a client component boots the scene. The site's own header/footer step aside on the home page. three pinned to r186 to match the engine.

**Screens:** `screens/v10/` (hero, storm, stack, delivery). Captured with a software GPU, so slow but faithful.

## Scores
| Category | Score | Why |
|---|---|---|
| First impression | **10** | A broadcast company's site that opens on a lighthouse in a storm, and immediately says why. |
| Visual design & type | 9 | |
| Motion / 3D / interaction | **10** | Real-time ocean, beams, rain, lightning, and a playable metaphor for failover. |
| Storytelling | 9 | Backup Streamer is AOBS's strongest differentiator and this page is built around it. |
| Credibility | 8 | Real frames on each floor. Still no viewer numbers. |
| SEO | 8 | All copy is HTML, but the home page now centres on one product. |
| Mobile | 7 | The Dioramas world has a mobile path (fewer waves and rain particles), but it's heavy for low-end phones. |
| Performance | 6 | A full WebGL world loads on home (~12 MB of models plus engine). A GPU desktop is needed for 60 fps. |
| Accessibility | 8 | Markup has labels and live regions; the interaction is mouse/touch-first. |
| Code quality | 8 | A clean port; the engine is isolated. |
| Originality | **10** | |

## Next
- A poster/video fallback for low-end mobile.
- Run Lighthouse on a machine with a real GPU.
