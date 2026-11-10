# v04 review

**New:** the scroll camera fly-through on /broadcast (pinned GSAP ScrollTrigger; the 3D camera travels to Observer → Replay → Caster → Stage → Cameras on the real monitor wall and dims the rest), the sponsor-ready strip on Home, lazy-mounted demos, an art-directed mobile poster, and the fix for the demo HUD drawn over real frames.

## Lighthouse (`lighthouse/v04.json`)
| Page | Mode | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| / | mobile | **99** | 100 | 100 | 100 | 0.91s | 0 | 117ms |
| / | desktop | 100 | 100 | 100 | 100 | 0.26s | 0 | 19ms |
| /broadcast | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 52ms |
| /broadcast | desktop | 100 | 100 | 100 | 100 | 0.26s | 0 | 0ms |
| /graphics-data | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 25ms |
| /work/mini-mayhem | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 26ms |

All Core Web Vitals targets are met (LCP < 2.5s, CLS < 0.1, TBT as an INP proxy < 200ms). Shared JS is 103 kB gzip.

## Scores
| Category | v03 | v04 | Why |
|---|---|---|---|
| First impression | 9 | 9 | |
| Visual design & type | 8 | 8 | Polished, but still one look: lime on black. Feels like a premium template family. |
| Motion / 3D / interaction | 8 | **9** | The fly-through is the signature moment of the site. |
| Storytelling | 8 | 8 | |
| Credibility | 7 | 7 | Capped by data AOBS has not supplied yet (viewers, results). |
| SEO | 9 | 9 | |
| Mobile | 7 | 8 | Fast and clean, but the home page is very long (13.7k px). |
| Performance | 6 | **10** | |
| Accessibility | 10 | 10 | |
| Code quality | 8 | 9 | |

## Client direction received during v04
"For all future versions try new designs with different colours and keep exploring, until it is a $5,000+ website. Take ideas from the reference sites and other $10,000+ websites."
→ From v05 on, each version is a **distinct art direction** (palette, type, layout, hero composition, 3D scene grading), built on the same content, data and accessible component base, so every direction can be compared fairly.

## Top 10 problems → fixes (carried into the v05+ explorations)
1. A single visual language since v01. → New art direction per version.
2. Home is 13.7k px on mobile. → Tighter home: proof first, fewer sections, link out to depth pages.
3. Trust bar reads as a spreadsheet. → Make the numbers a design moment (giant type / ticker).
4. Cards and grids repeat the same bordered-panel motif everywhere. → Vary the section rhythm: full-bleed media, split screens, horizontal reels.
5. Typography: Barlow Condensed everywhere. → Try other display faces per direction (wide grotesk, sharp serif accent).
6. The tournament logo wall is visually noisy (mixed logo styles). → Uniform plates with consistent padding, or a slow marquee in place of a grid.
7. Featured cases only cover 2 with footage. → Fine for now; give them more space and cinematic treatment.
8. The CTA band is repeated on every page and looks identical everywhere. → Per-direction CTA treatment.
9. The 2D multiview fallback (mobile) uses procedural tiles. → Prefer real frames on mobile.
10. The footer is plain. → A large wordmark / sign-off moment in the footer.
