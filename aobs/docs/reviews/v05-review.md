# v05 review: "Cobalt Signal" (new art direction)

**Direction:** deep navy (#050914), electric cyan (#38e1ff) to cobalt (#3b6bff) gradients, ON AIR red kept for tally. Display face **Unbounded** (wide geometric) in mixed case, Geist body. Rounded "glass" panels, pill buttons with cobalt glow, dotted-grid backgrounds.
**Signature moments:**
- **Hero:** a real AOBS programme screen sits under a centred headline. On desktop, scrolling grows it to full-bleed (Apple-style scale-on-scroll) while the director cuts between real frames.
- **Atlas-style "Built for" switcher:** organizers, publishers, brands, venues.
- Giant gradient numbers, and a huge AOBS wordmark in the footer.
- The 3D control room is kept for the /broadcast fly-through and inner pages only. Home doesn't load it.

## Lighthouse (`lighthouse/v05.json`)
| Page | Mode | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| / | mobile (simulated) | 93 | 100 | 100 | 100 | 3.2s | 0 | 26ms |
| / | mobile (**devtools throttling**) | **98** | | | | **1.77s** | 0 | 131ms |
| / | desktop | 100 | 100 | 100 | 100 | 0.26s | 0 | 20ms |
| /broadcast | mobile | 99 | 100 | 100 | 100 | 0.91s | 0 | 101ms |
| /graphics-data | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 65ms |
| /work/pakistan-community-cup | mobile | 100 | 100 | 100 | 100 | 0.91s | 0 | 54ms |

Note on the home LCP: the LCP element is now an image (the real broadcast frame), not text. On a real slow-4G emulation it paints at 1.77s. Lighthouse's *simulated* model estimates 3.2s for image-led heroes. Two fixes went in: the director cuts no longer start before the first interaction (a swapped frame was being re-reported as LCP), and frames/thumbnails that aren't needed yet are no longer downloaded early.

## Scores
| Category | v04 | v05 | Why |
|---|---|---|---|
| First impression | 9 | **9** | A real MLBB broadcast filling the screen as you scroll is direct and confident. Less "mysterious" than the 3D gallery, more "this is our output". |
| Visual design & type | 8 | **9** | Unbounded + gradient cyan/cobalt reads as a modern tech product (Atlas tier). Distinct from v01–v04. |
| Motion / 3D / interaction | 9 | 8 | Scale-on-scroll is strong, but home has no 3D now. |
| Storytelling | 8 | **9** | "Built for" tabs answer "what's in it for me" per buyer. |
| Credibility | 7 | 7 | Same data. |
| SEO | 9 | 9 | |
| Mobile | 8 | 8 | Mobile hero is clean; home is still long. |
| Performance | 10 | 9 | Simulated LCP on mobile home 3.2s (real throttled 1.77s). |
| Accessibility | 10 | 10 | |
| Code quality | 9 | 9 | |

## Top problems → ideas for the next directions
1. The hero still uses a "big centred headline" pattern common to SaaS sites. → v06: an asymmetric, editorial, magazine-style layout.
2. Cyan/cobalt is safe. → v06: warm palette (amber/orange "tally" + bone/black).
3. Home has no 3D. → v06 brings 3D back as the hero centrepiece in a new form.
4. Too many bordered/rounded panels. → v06: fewer containers, more full-bleed type and media.
5. Logo marquee logos are still mixed styles. → Uniform tiles or a timeline treatment.
