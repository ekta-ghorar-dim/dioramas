# Insights: starter article outlines

Target: organizers, publishers and brand managers searching for how esports broadcasts work. Each article targets one phrase and links to the matching service page. **Numbers and examples marked TODO must come from AOBS.**

## 1. How we keep esports streams online with zero downtime
- **Target phrase:** stream backup and failover / esports stream redundancy
- **Links to:** `/technology/backup-streamer`, `/broadcast`
- **Outline**
  1. The 90 seconds every organizer fears: what an offline screen costs (viewers, sponsors, trust)
  2. What actually fails on a live stream: encoder, internet uplink, power, platform ingest
  3. Single points of failure in a typical OBS-only setup
  4. How a hot backup path works: primary + backup running in parallel, health detection, takeover
  5. What the audience sees during a failover (TODO: real clip or log from an AOBS show)
  6. Checklist: 7 redundancy questions to ask any production company
- **Needs from AOBS:** measured switchover time, one real incident story, a diagram of the actual topology

## 2. From game API to scorebug: how live data graphics work
- **Target phrase:** game API live data graphics / esports broadcast graphics
- **Links to:** `/graphics-data`, `/technology/obs-plugins`
- **Outline**
  1. Why hand-typed graphics are always late, and sometimes wrong
  2. What a game data feed contains: kills, gold, objectives, draft, timers
  3. The pipeline: feed → parser → graphics engine → keyer → programme
  4. Scorebug, draft screen, stat panel: what each one needs from the data
  5. When there is no official API: spectator-client and manual fallbacks
  6. What data-driven graphics change for casters and viewers
- **Needs from AOBS:** which titles/APIs are supported, screenshots of real graphics, latency figures

## 3. Venue, remote or hybrid: choosing a production model for your tournament
- **Target phrase:** remote esports production / cloud esports production
- **Links to:** `/broadcast#remote`, `/technology/aobs-cloud`
- **Outline**
  1. The three models in one paragraph each
  2. Venue: when the room is the show (LAN finals, crowd, stage)
  3. Remote: online tournaments without a venue build
  4. Hybrid: cameras on site, control room in the cloud
  5. Comparison table: crew on site, build time, internet needs, cost drivers
  6. Decision tree: five questions that pick the model for you
- **Needs from AOBS:** typical crew sizes and lead times per model, one example event per model
