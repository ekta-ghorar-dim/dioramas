# v08 review: "Key Visual" (concept #2 after the originality feedback)

**Concept:** every tournament gets its own world. The chrome is neutral black (#0b0b0b) with bone text. **Colour comes from the event you are scrolling through:** the whole page shifts to Pakistan Community Cup green, Mini Mayhem red, Women's War bronze and Halloween Fest purple/orange. Bricolage Grotesque (expressive, ink-trapped grotesk) for display, Geist for body.
- **Hero:** "Every tournament gets its own look." over a pinned-up wall of AOBS's real key visuals and broadcast frames (PCC trophy KV, Women's War, Halloween, prize-pool poster, the Mini Mayhem squeeze-back), drifting slightly with the pointer.
- **Event worlds:** a giant event name in the event colour, the facts, then the chain from poster to holding screen to in-game HUD (PCC), or holding screen to in-game ad to squeeze-back (Mini Mayhem).
- **"What an event gets from AOBS":** 13 deliverables set as one large wrapped line.
- **Teasers:** the two portfolio videos. A **sticker wall** of all 18 event marks, monochrome until hovered.
- Contact: "Start your event's world."
- No ON AIR pills, timecodes, mono eyebrows, gradients or glows.

## Lighthouse (`lighthouse/v08.json`)
| Page | Mode | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| / | mobile | **100** | **100** | 100 | 100 | 0.92s | 0 | 34ms |
| / | mobile (devtools throttling) | 99 | | | | 1.66s | 0 | 90ms |
| / | desktop | 100 | 100 | 100 | 100 | 0.26s | 0 | 0ms |
| /broadcast | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 32ms |
| /graphics-data | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 33ms |
| /work/mini-mayhem | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 27ms |

## Scores
| Category | Score | Why |
|---|---|---|
| First impression | **9** | AOBS's own artwork, loud and colourful. Reads as an esports studio, not a template. |
| Visual design & type | **9** | Bricolage at display sizes has character. The colour-per-event system is memorable and *earned* by the portfolio. |
| Motion / 3D / interaction | 8 | Page-wide colour shift between worlds, pointer-drift collage, logo hovers. No 3D on home (the 3D fly-through remains on /broadcast only in v04). |
| Storytelling | **9** | Shows the full chain from campaign to broadcast, which is AOBS's real differentiator in the portfolio. |
| Credibility | 8 | Everything shown is real output. Viewer numbers are still missing. |
| SEO | 9 | |
| Mobile | 9 | Collage scales down; chains scroll horizontally with snap. |
| Performance | 10 | |
| Accessibility | 10 | |
| Code quality | 8 | World colour via a single `data-world` attribute + CSS variables. The shared base still carries CSS from earlier themes. |
| **Originality** | **9** | |

## Fixed during review
- After the last world, the page stayed purple through the rest of the home page. Non-world sections now reset it (`data-world="none"`).
- The pending-data chip failed contrast on black.
