# v02 review

**New:** persistent 3D control room (React Three Fiber, 12 shader-driven monitors on a curved wall, ON AIR sign that flickers on, switcher desk with blinking buttons, camera glides between routes and dollies on scroll); poster image for mobile/low-end; OG images on all 33 pages; full logo wall; decode titles; film grain; 3 more multiviewer sources.

## Lighthouse (`lighthouse/v02.json`)
| Page | Mode | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| / | mobile | **91** | 100 | 100 | 100 | 0.91s | 0 | 383ms |
| / | desktop | **100** | 100 | 100 | 100 | 0.26s | 0 | 28ms |
| /broadcast | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 34ms |
| /broadcast | desktop | 100 | 100 | 100 | 100 | 0.25s | 0 | 0ms |
| /?3d=1 (3D forced, software GL) | desktop | 71 | 100 | 100 | 100 | 0.26s | 0 | 1035ms |

The forced-3D row runs WebGL on a CPU rasteriser (SwiftShader), the worst case. Real visitors on software GL never get 3D (auto-detected); on a real GPU the scene is lazy-loaded after `load` + idle, so it doesn't affect LCP.

## Scores
| Category | v01 | v02 | Why |
|---|---|---|---|
| First impression | 6 | 8 | The 3D control room with a red ON AIR sign behind the headline now feels like a live gallery. |
| Visual design & type | 7 | 8 | Grain, logo wall and gradient vignettes add depth. |
| Motion / 3D / interaction | 5 | 8 | Real 3D, route-aware camera, decode titles. Still no scroll fly-through between stations. |
| Storytelling | 7 | 7 | Same narrative. |
| Credibility | 4 | 4 | Still procedural "feeds", not games people recognise. **Biggest gap.** |
| SEO | 8 | 9 | OG/Twitter images done. |
| Mobile | 6 | 7 | Poster hero is good; trust bar now a clean 2-column grid. |
| Performance | 5 | 8 | Mobile 91, desktop 100. |
| Accessibility | 8 | 10 | 100 everywhere tested. |
| Code quality | 7 | 8 | 3D isolated behind a dynamic import with a capability gate. |

## Top 10 problems → fixes
1. **The "feeds" don't look like any game a buyer knows.** The client asked for real MLBB/HoK screens and proper MLBB overlays. → Build original MLBB-style broadcast overlays (team bar scorebug, pick/ban draft, gold/objective panel) as live HTML/SVG; add a drop-in `public/media/broadcast/` folder so AOBS's own captures appear automatically under the overlays.
2. **Graphics page has no real "graphics package" showcase.** → Monitor mockup that cycles scorebug → draft → stats, with the overlay in a 16:9 programme frame.
3. **Draft / pick-ban is mentioned but never shown.** → Animated draft board where picks lock in on scroll.
4. **3D wall monitors are abstract.** → Feed the 3D PGM monitor from the overlay design language (team colours, timer, kill score).
5. **Home showreel is still an empty slate** (data missing). → Turn it into a "programme" preview that plays the overlay sequence until a real showreel ID is supplied, labelled as a demo.
6. **Mobile TBT 383ms** is from the 11 home-page canvases. → Fewer canvases on mobile (multiview shows 4 tiles under 640px).
7. **Logo wall + featured cases repeat the same logos twice in a row.** → Featured cases get a broadcast-frame visual, not the logo alone.
8. **Case study pages are mostly TODO chips.** → Add the game's overlay style as the case "programme frame" so each page has a real visual even before data arrives.
9. **Page-hero 3D at 50% fights headline contrast on some routes.** → Keep gradient, slightly lower opacity (0.42).
10. **No obvious path for AOBS to add footage.** → Document the media folder in README and `missing-data.md`.
