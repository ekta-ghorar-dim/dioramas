# Missing data

Everything below is shown on the site as a clearly marked **DATA PENDING** chip (source: `{{TODO: ...}}` in `/content/*.json`), never as an invented value. Fill the JSON and the chip disappears.

## A. Blocking (the site cannot reach full credibility without these)

| # | Needed | Where it appears | File to edit |
|---|---|---|---|
| 1 | The portfolio itself: services detail, equipment, workflows, case studies | Everywhere | all |
| 2 | Showreel (60-90 s) as a YouTube ID | Home showreel | `site.json` → `showreelYoutubeId` |
| 3 | Peak concurrent viewers | Home trust bar | `stats.json` |
| 4 | Total hours broadcast | Home trust bar | `stats.json` |
| 5 | Per-tournament case study: challenge, setup (cameras, crew size, graphics, tech), results (numbers) | 18 case study pages | `work/[slug]` template; add fields to `tournaments.json` |
| 6 | Year and format (LAN / online / hybrid) for 16 of 18 tournaments | Work filters, case studies | `tournaments.json` |
| 7 | ~~Real broadcast graphics~~ **Received (6 frames).** More wanted: BWC 2026 LAN, MUC 2026, Presidency (multi-title), replays, lower thirds, winner screens | `content/media.json`, `public/media/broadcast/` |
| 8 | Footage or logs of a real failover | Backup Streamer page | `technology.json` |

## B. Product specifications

| # | Needed | File |
|---|---|---|
| 9 | Backup Streamer: measured switchover time, detection method, number of real failovers handled | `technology.json` |
| 10 | AOBS Cloud: output count, latency, regions | `technology.json` |
| 11 | OBS Plugins: the list of plugins and what each does, supported OBS versions, availability/licensing | `technology.json` |
| 12 | Any other in-house software | `technology.json` |

## C. Company

| # | Needed | File |
|---|---|---|
| 13 | Company story: founding year, origin, milestones | `about.json` → `story` |
| 14 | Where AOBS is based / regions served (also unlocks the regional SEO phrase) | `about.json` → `where`, `site.json` → `region` |
| 15 | Public contact email | `site.json` → `email` |
| 16 | Social profile URLs | `site.json` → `socials` |
| 17 | Production domain | `.env` → `NEXT_PUBLIC_SITE_URL` |
| 18 | Desiate website URL (assumed `https://desiate.com`) and optional Desiate logo | `site.json` → `credit` |

## D. Broadcast page

| # | Needed | File |
|---|---|---|
| 19 | Confirmed camera inventory (player cams, PTZ, handheld, crowd, jib/crane) | `broadcast.json` → `cameraNote` |
| 20 | Organizer requirements checklist | `broadcast.json` → `faq` |
| 21 | Typical lead times (online / LAN) | `broadcast.json` → `faq` |

## E. Claims to verify (written from the brief by inference; correct or delete)

1. AOBS offers all three of venue, remote and hybrid production (the brief lists them as page sections).
2. AOBS Cloud delivers to Twitch, YouTube and Kick simultaneously (from the brief's signal-flow description).
3. Backup Streamer takeover is automatic.
4. OBS plugins connect OBS to live game data.
5. Backup Streamer works with both AOBS Cloud and on-site productions.
6. The four "featured" tournaments are the right ones to feature.
7. Contact form budget brackets (USD) are placeholders; set real brackets and currency.
8. FAQ answers describe the general mechanism; AOBS should check each against how it actually works.

## F. Confirm (from the DEMO WORKS folder)
1. Pakistan Community Cup year = 2025? Online or LAN?
2. Countries: Pakistan, Nepal, Bangladesh. Is that the right list, and where is AOBS based?
3. The Nepal teaser: which tournament is it (Battle of Gurkha's)?
4. DIU Winter Fest: should it get a logo and a case study?
5. Did AOBS produce the PCC/Mini Mayhem promo posters, or did Desiate? (Both marks appear.)
6. Honor of Kings: has AOBS broadcast it? Not shown until confirmed.
