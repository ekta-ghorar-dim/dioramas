# v03 review

**New:** real AOBS broadcast media from the DEMO WORKS folder. There are 6 broadcast frames (PCC and Mini Mayhem in-game HUDs, a sponsor squeeze-back, holding screens, the PCC draft board), 8 key visuals and 2 motion teasers. They appear on the 3D control-room wall (PGM/PVW/REPLAY/AUX are real frames), in a new switcher-style "This is what goes to air" monitor on Home, on the Graphics page, on the case studies and in the featured cases. Also new: an original MLBB-style overlay system (in-game HUD, 20-step pick/ban draft, stats panel) driven by demo data; VideoObject JSON-LD; real facts for PCC and Mini Mayhem.

## Lighthouse (`lighthouse/v03.json`)
| Page | Mode | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| / | mobile | **70** | 100 | 100 | 100 | **3.19s** | 0 | 1140ms |
| / | desktop | 100 | 100 | 100 | 100 | 0.26s | 0 | 18ms |
| /graphics-data | mobile | 100 | 100 | 100 | 100 | 0.92s | 0 | 46ms |
| /graphics-data | desktop | 100 | 100 | 100 | 100 | 0.25s | 0 | 9ms |
| /work/pakistan-community-cup | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 49ms |
| /work/pakistan-community-cup | desktop | 100 | 100 | 100 | 100 | 0.26s | 0 | 0ms |

## Scores
| Category | v02 | v03 | Why |
|---|---|---|---|
| First impression | 8 | 9 | Real MLBB broadcast frames on the 3D wall under a red ON AIR sign. Instantly credible. |
| Visual design & type | 8 | 8 | Strong, but featured-case logo badges float awkwardly on top of the frames. |
| Motion / 3D / interaction | 8 | 8 | Director-cut monitor, draft animation. Still no scroll fly-through between stations. |
| Storytelling | 7 | 8 | "This is what goes to air" right after the trust bar is the right order. |
| Credibility | 4 | 7 | Real output, real sponsor integrations, real facts. Still no viewer numbers or written challenge/results. |
| SEO | 9 | 9 | VideoObject added, descriptive media filenames and alts. |
| Mobile | 7 | 7 | Works, but the home page is long and heavy. |
| Performance | 8 | **6** | Mobile home regressed: LCP 3.19s, TBT 1.1s. Main thread: style/layout 518ms, "other" 969ms (paint of the full-screen grain blend layer, many large images, backdrop-filters). |
| Accessibility | 10 | 10 | 100. The switcher monitor is an ARIA tablist and the videos have transcripts. |
| Code quality | 8 | 8 | Media manifest is clean. **Bug:** `GameFrame` picks real captures, so the *demo* HUD gets drawn on top of a real frame that already has an AOBS overlay. |

## Top 10 problems → fixes
1. **Demo HUD on top of a real overlay** (Graphics, ProgramMonitor). → The demo always runs over the clean gameplay stand-in. Real frames are only ever shown as themselves.
2. **Mobile LCP 3.19s.** → Art-directed, lighter mobile hero poster; full-screen grain removed under 1024px; no `backdrop-filter` on mobile.
3. **Mobile TBT 1.1s.** → Stop hydrating below-the-fold interactive islands until they near the viewport (lazy client islands for Failover, LiveData, SignalFlow, OnAir).
4. **Home page too long** (two demo sections plus real output). → Fold LiveData into the Graphics page and keep one live-data teaser on Home.
5. **Featured-case logo badges float.** → Put the logo in a solid plate in the card's top corner, as a channel bug.
6. **No scroll fly-through** (signature effect #3). → Broadcast page: a pinned GSAP ScrollTrigger sequence where the 3D camera stops at observer, replay, casters and graphics.
7. **Broadcast page doesn't use the real frames.** → Pair each production mode with a real frame (venue → BWC LAN logo; remote → PCC frames).
8. **Mini Mayhem's sponsor story is buried in a case page.** → Home "Sponsor-ready broadcasts" strip: squeeze-back, in-game ad, holding screen, each a real frame.
9. **Draft board crop is very wide on mobile.** → Horizontal-scroll container with a hint on small screens.
10. **Work grid tiles are logo-only.** → Show "Footage on file" badges for tournaments that have real frames.
