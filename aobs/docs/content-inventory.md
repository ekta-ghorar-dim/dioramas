# AOBS content inventory

Single source of truth for every fact used on the site. **If it is not in this file, it is not on the site** (or it is shown as a `{{TODO}}` "data pending" chip and listed in `missing-data.md`).

## 0. What source material actually existed

| Expected by the brief | Found? | Notes |
|---|---|---|
| `./portfolio/` (company portfolio, data, case studies, footage) | **Partly** ("DEMO WORKS" shared folder, received during v03) | 21 files: real broadcast frames, a draft screen, holding screens, key visuals/posters and 2 motion teasers. Saved to `/assets/portfolio/`. Still no viewership numbers, crew/equipment lists or written case studies. |
| `./assets/tournament-logos/` | **Yes** (via shared drive link) | 19 PNG files = 18 unique tournaments (Next Door Showdown has a black and a white variant). Saved to `/assets/tournament-logos/`. |
| AOBS logo | **Yes** (2 images attached to the brief) | Black-on-transparent and white-on-transparent, 2000x2000 WebP. Saved to `/assets/aobs-logo-black.webp`, `/assets/aobs-logo-white.webp`. Traced to SVG for the site. |
| Desiate logo | **Not provided** | Footer credit is text only. Set `credit.logo` in `content/site.json` to show one. |
| Primary market / region | **Not filled in** (`[COUNTRY / REGION, or "global"]`) | Site makes no regional claim. |
| Desiate website URL | **Not filled in** (`[https://DESIATE-WEBSITE-URL]`) | Assumed `https://desiate.com` from the sender's domain. Editable in `content/site.json`. |

## 1. Facts from the project brief (source: the brief itself)

| Fact | Used on |
|---|---|
| AOBS is an esports broadcast production company | Everywhere |
| Main strength: live esports production | Home, Broadcast |
| Game API data graphics | Home, Graphics & Data |
| 3D, VFX, motion graphics | Graphics & Data |
| In-house technology: cloud production platform ("AOBS Cloud") | Technology |
| In-house technology: custom OBS plugins | Technology |
| In-house technology: backup streamer / failover system ("Backup Streamer") | Home, Technology |
| Signal chain: game servers → observers → switcher → graphics/data → AOBS Cloud → Twitch / YouTube / Kick | Home (signal flow) |
| Production modes offered: venue, remote, hybrid | Broadcast |
| Stations: control room, observer room, replay, caster desk, stage and LED screens | Broadcast |
| Credit: "Developed by Desiate" | Footer |

## 2. Facts from the tournament logo folder (source: file names + the logos themselves)

Counted facts: **18 tournaments**, **4 game titles** (MLBB, Free Fire, PUBG Mobile, FC Mobile), **17 events featuring MLBB**, **1 confirmed LAN event**, **2 events dated 2026**.

| # | Tournament | Game(s) | Year | Format | Source file |
|---|---|---|---|---|---|
| 1 | BWC 2026 | FC Mobile | 2026 | LAN | `FC Mobile - BWC 2026 (LAN Event).png` |
| 2 | MUC 2026 ("Unity Championship 2026" on the logo) | MLBB | 2026 | unknown | `MLBB - MUC 2026.png` |
| 3 | Presidency Esports Mania S1 | MLBB, Free Fire, PUBG Mobile | unknown | unknown | `MLBB, Free Fire & PUBG Mobile - Presidency Esports Mania S1.png` |
| 4 | MLBB Champions Legacy S2 | MLBB | unknown | unknown | `MLBB - MLBB Champions Legacy S2.png` |
| 5 | MLBB Heritage Supremacy | MLBB | unknown | unknown | `MLBB - MLBB Heritage Supremacy.png` |
| 6 | AOBS Celestial Cup | MLBB | unknown | unknown | `MLBB - AOBS Celestial Cup.png` |
| 7 | AOBS Halloween Fest | MLBB | unknown | unknown | `MLBB - AOBS Halloween Fest.png` |
| 8 | Battle of Gurkha's | MLBB | unknown | unknown | `MLBB - Battle of Gurkha's.png` |
| 9 | Code of the Knights | MLBB | unknown | unknown | `MLBB - Code of the Knights.png` |
| 10 | Division Conqueror Championship | MLBB | unknown | unknown | `MLBB - Division Conqueror Championship.png` |
| 11 | Fight of Divisions | MLBB | unknown | unknown | `MLBB - Fight of Divisions.png` |
| 12 | Hillside Conqueror Championship | MLBB | unknown | unknown | `MLBB - Hillside Conqueror Championship.png` |
| 13 | MLBB Campus Risers | MLBB | unknown | unknown | `MLBB - MLBB Campus Risers.png` |
| 14 | MLBB Rising Star | MLBB | unknown | unknown | `MLBB - MLBB Rising Star.png` |
| 15 | MLBB Women's War | MLBB | unknown | unknown | `MLBB - MLBB Women's War.png` |
| 16 | Mini Mayhem | MLBB | unknown | unknown | `MLBB - Mini Mayhem.png` |
| 17 | Next Door Showdown | MLBB | unknown | unknown | `MLBB - Next Door Showdown (white).png` (+ black variant) |
| 18 | Pakistan Community Cup | MLBB | unknown | unknown | `MLBB - Pakistan Community Cup.png` |

"Featured" on the home page (chosen because they carry the most verifiable detail: a year, a format or multiple titles): BWC 2026, MUC 2026, Presidency Esports Mania S1, MLBB Champions Legacy S2. **AOBS should confirm which tournaments are actually its flagship work.**

## 3. Assets

| Asset | Source | Site path |
|---|---|---|
| AOBS logo (vector, traced) | `/assets/aobs-logo-black.webp` | `public/brand/aobs-logo.svg` |
| AOBS logo (white PNG, 512px) | `/assets/aobs-logo-white.webp` | `public/brand/aobs-logo-white.png` |
| 18 tournament logos (trimmed, max 640px, WebP) | `/assets/tournament-logos/*.png` | `public/logos/<slug>-tournament-logo.webp` |

See section 6 for the DEMO WORKS media. Remaining procedural "feeds" (multiview stand-ins, the overlay demo) are labelled as stand-ins or demo data. No people appear anywhere: the one frame containing caster photos was cropped, and caster names in one frame were blurred.

## 4. Copy that describes how broadcast works (general industry knowledge, not AOBS-specific claims)

Explanations of what an observer, switcher, replay position, caster desk, remote production or failover *is* are standard broadcast definitions. They are written so they do not assert AOBS-specific numbers, kit or clients. Anything AOBS-specific that could not be verified is a `{{TODO}}`.

## 5. Inferred statements AOBS must confirm (see `missing-data.md` § "Claims to verify")

These follow from the brief but were not explicitly stated in it; they are flagged rather than hidden.


## 6. DEMO WORKS folder (received during v03; source: `/assets/portfolio/`)

### Broadcast frames used (site path `public/media/broadcast/`)
| Source file | What it shows | Facts extracted | Site file |
|---|---|---|---|
| `Screenshot_2025-02-07-02-59-10-81_…jpg` | Pakistan Community Cup MLBB in-game broadcast | Grand final; team scoreboard with kills, turrets, gold, timer; minimap; player rails; "Presented by Desiate" credit; screenshot dated 7 Feb 2025 | `pakistan-community-cup-mlbb-ingame-broadcast.webp` (caster names **blurred**) |
| `Screenshot_2025-02-07-02-57-19-20_…jpg` | PCC grand final stream-starting screen | Countdown, up-next card, streaming partner Potatos Gaming | `pakistan-community-cup-grand-final-stream-starting.webp` |
| `IMG_20250207_030049.jpg` | PCC draft board, ban phase | Grand final, **best of 5**, round 1, streaming partner **Potatos Gaming** | `…-draft-ban-phase.webp` (**cropped**: caster photo panel removed) |
| `ingame (Sponsor 2).png` | Mini Mayhem in-game, L-shaped sponsor squeeze-back | Stage **Top Eight Bo1**; sponsor **Shadhin Host** (Bangla copy + URL) | `mini-mayhem-…-squeezeback.webp` |
| `ingame with Ad.png` | Mini Mayhem in-game with a corner sponsor ad | Same sponsor | `mini-mayhem-…-lower-ad.webp` |
| `Sponsor Template.png` | Mini Mayhem stream-starting screen | **Semi-final Bo1**, sponsor panel, countdown | `mini-mayhem-semi-final-stream-starting-screen.webp` |

### Key visuals used (`public/media/key-visuals/`)
PCC key visual, trophy render, prize-pool poster (**30,000 diamonds**), registration opening soon, registration now, "08 slots left", "We are coming, Pakistan" teaser; MLBB Women's War "Coming soon" (#FightForChampions); AOBS Halloween Fest registration poster.

### Videos used (`public/media/video/`, audio stripped, MP4 + WebM + poster)
| Source | Content | Site id |
|---|---|---|
| `VID-20241229-WA0011.mp4` (37 s) | MLBB tournament teaser, "Prepare for the ultimate battle in Nepal", "Coming soon"; Desiate watermark | `mlbb-nepal-tournament-teaser` |
| `VID-20241229-WA0012.mp4` (31 s) | **DIU Winter Fest** teaser (Daffodil International University), "Register now" | `diu-winter-fest-mlbb-teaser` |
`uploadDate` in VideoObject = 2024-12-29, taken from the WhatsApp file names.

### Not used (and why)
| File | Reason |
|---|---|
| `Can you identify these heroes!…png` | Political imagery, unrelated to broadcast work |
| `IMG-20241229-WA0004.jpg` (21 February / Language Martyrs' Day post) | Commemorative social post, not portfolio |
| `IMG-20241229-WA0007.jpg` (26 March / Independence Day post) | Commemorative social post, not portfolio |
| `2.png` | Duplicate of the PCC key visual |

### Facts newly on the site from this folder
- Pakistan Community Cup: country Pakistan; grand final best of 5; prize pool 30,000 diamonds; streaming partner Potatos Gaming; year **2025** (inferred from 7 Feb 2025 screenshot dates; please confirm).
- Mini Mayhem: top eight Bo1, semi-final Bo1; sponsor Shadhin Host integrated as squeeze-back, in-game ad and holding-screen panel.
- "Countries on record: 3" (Pakistan, Nepal, Bangladesh), inferred from the PCC material, the Nepal teaser, DIU Winter Fest and the Bangla sponsor copy. **AOBS should confirm.**
- DIU Winter Fest is a fourth evidence-backed event without a logo in the logo folder, so it appears only as a video, not on the logo wall.
- Hours-broadcast stat removed from the trust bar (no data) and replaced by countries on record; peak viewers stays as DATA PENDING.
