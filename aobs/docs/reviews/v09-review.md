# v09 review: "The Lens" (concept C03, after Dioramas' Velocity Lab)

**Concept:** a lab for broadcasts. A lens follows the cursor over a real AOBS frame (PCC or Mini Mayhem). Inside it, the frame renders as THERMAL (luminance heat map), WIRE (edge-detected blueprint) or DATA (each HUD element boxed and labelled with where its information comes from). Keys 1–3 switch modes and arrow keys move the lens; on touch, tap or drag. Pure CSS clip-path + SVG filters, no WebGL.
**New blocks (none used in v01–v08):** hover-to-highlight "Five layers" on a darkened real frame; "Two packages, side by side" sample cards with spec rows; "Measured" ruler scales; "Equipment we built" spec plates showing each product's spec table; "Sample register" table of all 18 events with what's on file; a dark request block with underline-only fields; a centred instrument-bar header; and a footer set as one equipment label.
**Look:** lab white #f2f3f5, graphite, signal orange. Archivo at 125% width for display, normal width for text.

## Lighthouse (`lighthouse/v09.json`)
| Page | Mode | Perf | A11y | BP | SEO | LCP | CLS |
|---|---|---|---|---|---|---|---|
| / | mobile (simulated) | 93 | 97 | 100 | 100 | 3.24s | 0 |
| / | desktop | 100 | 100 | 100 | 100 | 0.72s | 0.04 |
| /broadcast | mobile | 100 | 97 | 100 | 100 | 0.91s | 0 |
| /work/pakistan-community-cup | mobile | 100 | 97 | 100 | 100 | 0.91s | 0 |
The remaining a11y item is `target-size` on mobile (small inline links). Mobile home LCP is the lens image (simulated value; image-led heroes measure about 1.7s under real throttling in v05–v08).

## Scores
| Category | Score |
|---|---|
| First impression | 9: the lens is discoverable immediately and looks like nothing else on an esports site |
| Visual design & type | 8 |
| Motion / interaction | 9 |
| Storytelling | 9: explains what's in a broadcast package using AOBS's own frames |
| Credibility | 8 |
| SEO | 9 |
| Mobile | 8 |
| Performance | 9 |
| Accessibility | 9 |
| Code quality | 8 |
| Originality | 9 |

## Next
- Fix the mobile `target-size` misses.
- The thermal palette skews purple; tune it toward a classic FLIR ramp.
