# v07 review: "The Rundown" (concept #1 after the client's originality feedback)

**Concept:** the site *is* a TV production running order. It's printed-paper Swiss design: off-white paper (#f3f2ee), black ink, one signal red, and Schibsted Grotesk throughout (a newspaper grotesk, with no separate "display font").
- **Front page:** a plain statement, "We run the broadcast. You run the tournament.", then Fig. 1, a full-width real PCC frame with an editorial caption.
- **The record as a sentence:** "18 tournaments broadcast. 4 game titles. 3 countries…" instead of counters.
- **Running order:** an 8-row rundown table (stream open, draft, game, sponsor placement, replay, stats, backup path, transmission). Each row has time, segment, what AOBS runs and source tags (live sources marked red), and opens into the real frame from that moment. The backup row opens the failover drill. Built on `<details>`, so it works without JS.
- **Venue / remote / hybrid** as a spec table. **Our own equipment** in three columns.
- **Credits:** tournaments set as end credits, with the event mark appearing in a proof window beside the cursor. The full logo grid stays on /work.
- **Booking sheet** form. A colophon footer.
- Dark "screen" inserts: every monitor, demo and real frame sits on a black field inside the paper page, like screen grabs in a printed document.
- **Removed:** ON AIR pills, timecodes, mono eyebrows, gradients, glows, grain, stinger wipes, scramble titles, the 3D stage, and "Every frame" slogans.

## Lighthouse (`lighthouse/v07.json`)
| Page | Mode | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| / | mobile (simulated) | 96 | 100 | 100 | 100 | 2.8s | 0 | 54ms |
| / | mobile (devtools throttling) | 99 | | | | **1.66s** | 0 | 79ms |
| / | desktop | 100 | 100 | 100 | 100 | 0.25s | 0 | 0ms |
| /broadcast | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 66ms |
| /graphics-data | mobile | 97 | 100 | 100 | 100 | 2.66s* | 0 | 36ms |
| /work/pakistan-community-cup | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 35ms |
\*Simulated value with an image as the LCP element. Real throttled runs on comparable pages measure about 1.7s.

## Scores
| Category | Score | Why |
|---|---|---|
| First impression | 8 | Calm and confident, unlike any other esports site. Some buyers will want more spectacle up top. |
| Visual design & type | **9** | Disciplined Swiss system. The red is used only for "live" sources and hovers. |
| Motion / 3D / interaction | 6 | Deliberately restrained: rundown rows, credit peek, failover drill. No 3D. |
| Storytelling | **9** | The rundown explains what AOBS does in the order it happens on a show day. Industry-native. |
| Credibility | 8 | Every segment with a real capture shows it, and the ones without say so plainly. |
| SEO | 9 | Same keyword structure. More real text on home (rundown details are in the HTML). |
| Mobile | 8 | Rundown collapses to a stacked list. Images scroll horizontally where needed. |
| Performance | 9 | |
| Accessibility | 10 | 100 after the contrast fix (accent darkened to #b8141d). |
| Code quality | 8 | Re-theming via scoped CSS variables (`.screen`) works, but the shared base still carries old-theme CSS. |
| **Originality** | **9** | A distinct concept with its own IA and copy. |

## Top problems → fixes
1. The /work logo grid uses dark-theme monochrome filters that wash out on paper. → Paper-specific logo treatment (multiply, darker).
2. The hero has no imagery above the fold on desktop (Fig. 1 starts at ~870px). → Possibly pull Fig. 1 up into a split layout.
3. The inner-page SceneBuilder and the failover widget are still the dark-theme designs (acceptable as "screens", but not native to the concept).
4. There's no single "wow" moment for buyers who want spectacle. → v08 goes the opposite way.
