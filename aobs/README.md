# AOBS website explorations

The official website for **AOBS**, an esports broadcast production company, explored as a series of complete, standalone Next.js sites. Each version in `versions/` is a full runnable site (`npm install && npm run dev`). Every version from v10 on ports one of the Dioramas worlds in this repository (`examples/`) into the AOBS site, rewritten around AOBS's real broadcast work.

| Version | Concept |
|---|---|
| v01–v04 | Foundation, 3D control room, real broadcast media, scroll fly-through |
| v05–v06 | Colour/type skins (Cobalt Signal, Tally Amber) |
| v07 | The Rundown: the site as a printed TV running order |
| v08 | Key Visual: a colour world per tournament (also copied to `versions/BEST`) |
| v09 | The Lens: thermal / wire / data lens over real frames |
| v10 | The Keeper: lighthouse storm, Backup Streamer |
| v11 | Gambit: every draft is a game of chess |
| v12 | Movement: a watch movement exploded into broadcast layers |
| v13 | Power Up: hold to go live |
| v14 | Drifting Isles: Online / Bangladesh / Pakistan / Nepal |
| v15 | Abyss: dive through five broadcast layers |
| v16 | Low Frequency: scratchable turntable as replay |
| v17 | Geode: crack open a raw stream |
| v18 | Kōen: one tournament, four seasons |
| v19 | Monolith: drag the sun through one show day |

- `docs/`: content inventory, missing data, concepts list, changelog, reviews and Lighthouse results. Screenshots are in `docs/reviews/screens/`.
- `assets/`: source logos and AOBS portfolio media.
- `tools/scripts/`: review tooling (screenshots, Lighthouse, version copy, Dioramas world port).

Dioramas code is MIT; its models and images are CC BY 4.0 (credited in each ported site's footer).
