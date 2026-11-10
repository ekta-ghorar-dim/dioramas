# Changelog

## v01: foundation
- Full site: Home, Broadcast, Graphics & Data, Technology (+3 product pages), Work (filterable, 18 case studies), About, Contact (+ `/api/contact`), Insights, 404.
- All content in `src/content/*.json`; missing data shown as visible DATA PENDING chips.
- Hero boot-up (power-on line, lower-third headline, running timecode, ON AIR tally), multiview wall, signal flow diagram, failover simulator, live data scorebug, logo marquee, stinger page transitions, Lenis smooth scroll, analytics events, JSON-LD, sitemap, robots.
- Hotfix: heading class collision with Tailwind height utilities.

## v02: the control room
- **Big upgrade:** persistent React Three Fiber control room in the root layout (shader monitors, ON AIR sign, switcher desk). Camera moves per route and on scroll. Lazy, desktop + real-GPU only, poster image fallback.
- OG/Twitter images for every page. Full home logo wall with channel-switch hover. Decode titles. Film grain. Hydration fix. Feeds pause off screen. Mobile perf 67 → 91.

## v03: real broadcast output
- **Big upgrade:** AOBS's own MLBB broadcast frames, key visuals and teasers (DEMO WORKS folder), with faces cropped out and caster names blurred.
- The 3D wall's PGM/PVW/REPLAY/AUX monitors play real frames. Home gets a "This is what goes to air" director-cut monitor and motion teasers.
- Graphics page: real packages, the draft board, the overlay system (HUD / draft / stats), teasers and key-visual masonry.
- PCC and Mini Mayhem case studies with real facts. VideoObject JSON-LD.

## v04: the fly-through
- **Big upgrade:** pinned scroll camera fly-through on /broadcast across six stations on the real monitor wall, with focus dimming.
- Home sponsor-ready strip (Mini Mayhem's three sponsor formats). Lazy, code-split demos. Art-directed mobile poster (24 KB). Mobile performance 70 → 99.
- Fixed: the demo HUD no longer draws over real frames.

## v05: "Cobalt Signal" (art direction #2)
- New palette (navy + cyan/cobalt gradients), Unbounded display face, rounded glass panels, pill buttons.
- Hero: a real broadcast screen that scales to full-bleed on scroll, with director cuts. Atlas-style "Built for" audience switcher. Giant stats. Footer wordmark. OG images in the new face.
- Perf fixes for image-led heroes (deferred frames, interaction-started cuts).

## v06: "Tally Amber" (art direction #3: editorial skin)
- Warm black + bone paper sections, amber, Instrument Serif. Contact-sheet hero strips of real frames.
- Client feedback: the designs are too similar (same tropes, same copy). From v07, each version is a separate concept with its own IA and copy.

## v07: "The Rundown" (concept #1)
- New concept, IA and copy: the site as a printed TV production running order. Paper + ink + one red, Schibsted Grotesk.
- Home: plain statement + Fig. 1 real frame; the record as a sentence; an 8-segment rundown table that opens into real frames and the failover drill; venue/remote/hybrid spec table; in-house tools; tournaments as end credits with a logo proof window; booking sheet; colophon footer.
- All the repeated tropes removed (ON AIR pills, timecodes, mono eyebrows, gradients, glows, grain, stinger, scramble, 3D).

## v08: "Key Visual" (concept #2)
- New concept, IA and copy: each tournament is a "world". The page colour shifts per event as you scroll (PCC green, Mini Mayhem red, Women's War bronze, Halloween purple).
- Hero collage of real key visuals and frames; poster → holding screen → HUD chains per event; deliverables line; teasers; monochrome sticker wall of all 18 marks; "Start your event's world" form. Bricolage Grotesque.
- Lighthouse 100/100/100/100 on mobile and desktop for every page tested.

## v09: "The Lens" (concept C03, from Dioramas' Velocity Lab)
- Cursor lens over real AOBS frames with THERMAL / WIRE / DATA modes; layers highlight, sample cards, ruler measurements, equipment spec plates, sample register, instrument-bar header, equipment-label footer. Lab white + signal orange, Archivo Expanded.

## v10: "The Keeper" (concept C04, Dioramas world port)
- Home is the Dioramas storm/lighthouse WebGL world, rewritten as the AOBS Backup Streamer story: take the beam, hold it on a dropped feed to bring it back on air; storm → dawn; "the stack" up the tower with real frames; delivery; on record.
- Dioramas engine ported into Next.js (`src/dio/`), credited (MIT / CC BY 4.0). Libre Caslon + Karla.

## v11: "Gambit" (concept C05, Dioramas world port)
- "Every draft is a game of chess": the Immortal Game replayed in marble on scroll, then free play; real PCC draft board; match-day order. Bodoni Moda + Inter, black/bone/brass.

## v12: "Movement" (concept C08, Dioramas world port)
- A skeleton watch that explodes into the AOBS broadcast stack, each part labelled as a broadcast layer; wind the "backup reserve"; details, production models, on record. Ivory/navy/rose gold, Cormorant + Montserrat.

## v13: "Power Up" (concept C06, Dioramas world port)
- "Hold to go live": the production rig as a machine that boots on hold; scroll hotspots for the backup core, observers, graphics and sponsors; numbers, run-up, organizer checklist. Gunmetal + hazard amber.

## v14: "Drifting Isles" (concept C12, Dioramas world port)
- Four floating islands = Online / Bangladesh / Pakistan / Nepal with real facts per place; tools as "the fleet"; plan-an-event form that pre-fills the request form. Sky blue + coral, Young Serif + Nunito Sans.

## v15: "Abyss" (concept C09, Dioramas world port)
- A dive through five broadcast layers (programme, data, gallery, cloud, backup) with a relabelled depth gauge; a redundancy section; a brief checklist. Teal-black + orange, Space Grotesk + Plex Mono. Fixed a global `.stage` CSS collision.

## v16: "Low Frequency" (concept C07, Dioramas world port)
- "Rewind the moment": a playable, scratchable turntable (live WebAudio) as replay; the running order as tracks; gallery house rules; AOBS key visuals as record sleeves and on the 3D record wall; rebranded record label. Violet + amber, Syne + Space Mono.

## v17: "Geode" (concept C10, Dioramas world port)
- "A raw stream is a stone": hold to crack it open; four facets (HUD, draft, sponsor formats, backup) as specimens; AOBS key visuals as the identity pieces; provenance with a real frame. Velvet black + amethyst, Italiana/Cinzel/Jost.

## v18: "Kōen" (concept C21, Dioramas world port)
- "One tournament, four seasons": a bonsai through registration, group stage, final and off-season; events on record with identity previews; tools as the craft; a season brief. Washi + maple red, Cormorant Garamond.

## v19: "Monolith" (concept C16, Dioramas world port)
- "From load-in to the last game": drag the sun through one show day (phases relabelled); real AOBS images on hover; the PCC grand final hour by hour with the section relabelled as broadcast layers. Concrete + golden hour, Inter Tight/Plex.
