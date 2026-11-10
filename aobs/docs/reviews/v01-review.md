# v01 review

**Build:** Next.js 15 App Router, 36 static routes, 103 kB shared JS (gzip), home 125 kB first load.
**Screens:** `screens/v01/` (desktop 1440, tablet 768, mobile 390, 9 pages each)

## Lighthouse (`lighthouse/v01.json`)
| Page | Mode | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| / | mobile | 67 | 100 | 96 | 100 | 3.05s | 0 | 1791ms |
| / | desktop | 88 | 100 | 96 | 100 | 0.93s | 0 | 271ms |
| /broadcast | mobile | 100 | 97 | 100 | 100 | 0.91s | 0 | 47ms |
| /broadcast | desktop | 100 | 97 | 100 | 100 | 0.25s | 0 | 0ms |

## Scores (Awwwards jury + broadcast buyer)
| Category | Score | Why |
|---|---|---|
| First impression | 6 | Big confident type, ON AIR tally and running timecode work. The tilted multiviewer looks like a widget, not a set. |
| Visual design & type | 7 | Barlow Condensed + Geist on near-black with acid lime is distinctive. Some sections are a heading plus a box. |
| Motion / 3D / interaction | 5 | Boot-up, lower-third reveal, signal flow and failover demo work. **No 3D at all.** |
| Storytelling | 7 | Run-of-show structure, failover section and the end-to-end chain sell the "whole broadcast" story. |
| Credibility | 4 | Only the logos and three counted numbers are real. No footage, no case numbers. (Source data missing, not a design fault.) |
| SEO | 8 | Titles, H1s, canonicals, JSON-LD, sitemap, robots, 404 all done. No OG images yet. |
| Mobile | 6 | Works, but trust bar wraps awkwardly and long hero copy pushes CTAs down. |
| Performance | 5 | Mobile home TBT 1.8s: 13 canvas feeds redrawing every frame, all at once. |
| Accessibility | 8 | 97–100. `definition-list` failure on /broadcast. |
| Code quality | 7 | Clean content/JSON split. Heading utility classes `h-1/h-2/h-3` **collided with Tailwind height utilities**, which collapsed every section heading to 4–12px of height (headings overlapped content). |

## Top 10 problems → fixes
1. **Section headings overlapped body text** (`h-2` = Tailwind `height: 0.5rem`). → Rename to `t-hero/t-1/t-2/t-3`. *(Hotfixed in v01 so the preview is usable; logged here.)*
2. **Hydration error #418** on home: failover log timestamp rendered on the server ≠ client. → Static first log line.
3. **Mobile TBT 1.8s**: every procedural feed animates even off-screen. → Run each feed's loop only while it is in view; drop to 12 fps.
4. **No 3D** although the brief calls for it. → Persistent R3F control room in the root layout, lazy-loaded, desktop + real GPU only, with a poster image for everyone else.
5. **Hero multiviewer reads as a card, not a set.** → Make the 3D control room the hero background; drop the tilted widget.
6. **No OG/Twitter images.** → Branded `opengraph-image` per route, built at build time.
7. **`<dl>` structure invalid** on /broadcast (spans inside `<dl>` rows). → Wrap tag + title in `<dt>`.
8. **No full logo wall on home**; only a marquee strip. → Add a 6-column monochrome wall with the channel-switch hover.
9. **Section titles static.** → Add the decode/scramble effect on reveal (text nodes only, accessible label kept).
10. **No film grain / premium texture.** → Static SVG noise layer, zero JS.
