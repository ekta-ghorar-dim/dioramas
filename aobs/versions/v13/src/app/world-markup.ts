// Dioramas "hangar" structure; copy rewritten for AOBS. Server-rendered HTML.
export const WORLD_HTML = `
  <canvas id="gl" aria-hidden="true"></canvas>
  <div class="flash" aria-hidden="true"></div>
  <div class="scrim scrim-l" aria-hidden="true"></div><div class="scrim scrim-r" aria-hidden="true"></div><div class="scrim scrim-b" aria-hidden="true"></div>

  <!-- Loader: firmware boot behind two blast-door halves -->
  <div class="loader" role="status" aria-live="polite">
    <div class="ld-door ld-top"></div>
    <div class="ld-door ld-bot"></div>
    <div class="ld-bar"><i></i></div>
    <div class="ld-in">
      <div class="ld-up">
        <div class="ld-head mono"><span>AOBS Production Systems</span><span>Gallery FW 2026</span></div>
        <p class="ld-num"><span class="ld-pct">000</span><i>%</i></p>
      </div>
      <ol class="ld-log mono ld-down">
        <li data-at="0.02">› Gallery link established</li><li data-at="0.2">› Loading the production rig</li><li data-at="0.45">› Observer map ··· 3/3</li><li data-at="0.7">› Backup path armed</li><li data-at="0.92">› Warming shaders</li><li data-at="1">› Standby. Awaiting director.</li>
      </ol>
    </div>
  </div>

  <header class="nav">
    <a class="brand" href="/" aria-label="AOBS home">
      <img src="/brand/aobs-logo-white.png" width="24" height="25" alt="" aria-hidden="true" style="width:24px;height:auto">
      <span>AOBS<b>Live</b></span>
    </a>
    <nav class="links" aria-label="Primary">
      <a href="#warden">Go live</a><a href="#systems">Systems</a><a href="#numbers">Numbers</a><a href="#program">The run-up</a>
    </nav>
    <div class="nav-r">
      <button class="snd mono" type="button" aria-pressed="false" aria-label="Toggle sound">Snd <span class="snd-bars"><i></i><i></i><i></i><i></i></span><span class="snd-state">Off</span></button>
      <a class="btn btn-amber" href="/contact" data-magnetic>Request a quote</a>
    </div>
  </header>

  <!-- HUD frame: boots during power-up -->
  <div class="hud" aria-hidden="true">
    <i class="hc tl"></i><i class="hc tr"></i><i class="hc bl"></i><i class="hc br"></i>
    <div class="hud-top mono"><span class="hud-id">AOBS · PCR 01</span><span class="hud-sep"></span><span class="hud-state">Gallery cold</span><span class="hud-sep"></span><span class="hud-clock">03:12:07</span></div>
    <div class="hud-side mono">
      <div class="rd"><span>BKP</span><b class="rd-rctr">0.3%</b><i><em style="--v:.02"></em></i></div>
      <div class="rd"><span>ENC</span><b class="rd-core">31°C</b><i><em style="--v:.05"></em></i></div>
      <div class="rd"><span>NET</span><b class="rd-hyd">0 bar</b><i><em style="--v:0"></em></i></div>
      <div class="rd"><span>SYNC</span><b class="rd-sync">—</b><i><em style="--v:0"></em></i></div>
    </div>
    <div class="hud-scan"></div>
    <div class="hud-reticle"><i></i><i></i><i></i><i></i><span class="mono">AOBS PRODUCTION RIG<br><b>DIRECTOR · STANDING BY</b></span></div>
    <ol class="hud-boot mono"></ol>
  </div>

  <!-- Hotspot markers (positioned from 3D) -->
  <div class="spots" role="group" aria-label="Systems hotspots"></div>
  <svg class="leader" aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0"/><circle r="3"/></svg>
  <div class="ruler" aria-hidden="true"><i class="ruler-line"></i><span class="ruler-top mono">18 events</span><span class="ruler-bot mono">0.0</span></div>

  <!-- Press-and-hold gauge that follows the pointer in the hero -->
  <div class="hold" aria-hidden="true">
    <svg viewBox="0 0 100 100"><circle class="h-track" cx="50" cy="50" r="44"/><circle class="h-fill" cx="50" cy="50" r="44" pathLength="1"/></svg>
    <span class="h-label mono">Hold</span>
  </div>

  <main id="top">
    <section class="sec hero" data-shot="hero">
      <div class="pin">
        <div class="hero-copy">
          <p class="eyebrow mono"><span class="blink"></span>AOBS · Esports broadcast production company</p>
          <h1 class="title" aria-label="AOBS: hold to go live"><span class="t1">Hold</span><span class="t2"><q>to go live</q></span></h1>
          <p class="tag">One crew. <em>Every system.</em></p>
          <p class="lede">AOBS is an esports broadcast production company. This is our production rig, drawn as a machine: observers, graphics, data, sponsors and a backup core. It has been dark since the last show. Bring it up.</p>
        </div>
        <div class="ignite">
          <button class="gauge" type="button" aria-label="Press and hold to power up the production rig">
            <svg viewBox="0 0 160 160" aria-hidden="true">
              <circle class="g-ticks" cx="80" cy="80" r="74"/>
              <circle class="g-track" cx="80" cy="80" r="64"/>
              <circle class="g-fill" cx="80" cy="80" r="64" pathLength="1"/>
            </svg>
            <span class="g-core"><span class="g-label">Hold to<br>initiate</span><span class="g-pct mono">00</span></span>
          </button>
          <div class="ignite-copy">
            <p class="ignite-title mono">Cold start</p>
            <p class="ignite-hint">Press and hold anywhere, or hold <kbd>Space</kbd>, to bring the gallery up.</p>
          </div>
        </div>
        <p class="scroll-cue mono"><span><b>Move</b> to aim the searchlight</span><span><b>Scroll</b> to walk around it</span><i></i></p>
      </div>
    </section>

    <section class="sec power" id="warden" data-shot="power">
      <div class="pin">
        <div class="block block-r">
          <p class="kicker mono">01 — Cold start</p>
          <h2>Dark gallery to programme out, <em>in one sequence.</em></h2><p class="body">That is what a show day feels like from the inside: monitors on, feeds in, graphics loaded, data synced, backup armed, then the director takes it to air. We run that sequence for every match day, in the same order, every time.</p>
          <ol class="steps">
            <li><b class="mono">T−15</b><span><strong>Holding screen.</strong> Countdown, match-ups and the sponsor panel go out first.</span></li><li><b class="mono">T−5</b><span><strong>Draft.</strong> The pick/ban board fills from the draft as it locks in.</span></li><li><b class="mono">00:00</b><span><strong>Game.</strong> Observers on the fight, HUD on screen, backup running underneath.</span></li>
          </ol>
        </div>
      </div>
    </section>

    <div id="systems">
      <section class="sec spec" data-shot="reactor" data-spot="0">
        <div class="pin">
          <article class="card card-l">
            <p class="kicker mono"><span>02.1</span> Systems · Backup core</p><h3>A second stream path, running the whole show.</h3><p class="body">Backup Streamer is the core of the rig. It is our own system, it runs from the first frame to the last, and if the primary path fails it takes the programme so the channel stays up.</p><dl class="data mono"><div><dt>Runs</dt><dd>Whole show</dd></div><div><dt>On failure</dt><dd>Takes programme</dd></div><div><dt>Built by</dt><dd>AOBS</dd></div></dl>
          </article>
        </div>
      </section>
      <section class="sec spec" data-shot="actuators" data-spot="1">
        <div class="pin">
          <article class="card card-r">
            <p class="kicker mono"><span>02.2</span> Systems · Observers</p><h3>The joints that move before the fight does.</h3><p class="body">Observers drive the in-game cameras. They read the map ahead of the action, so the right fight is already on screen when it starts, and the director can cut to it without a search.</p><dl class="data mono"><div><dt>Feeds</dt><dd>Observer 1–3</dd></div><div><dt>Into</dt><dd>Switcher / PGM</dd></div><div><dt>Plus</dt><dd>Replay position</dd></div></dl>
          </article>
        </div>
      </section>
      <section class="sec spec" data-shot="armour" data-spot="2">
        <div class="pin">
          <article class="card card-l">
            <p class="kicker mono"><span>02.3</span> Systems · Graphics</p><h3>Panels that change for every event.</h3><p class="body">The graphics package bolts onto the same rig in each tournament’s own identity: green and trophy-led for the Pakistan Community Cup, red and loud for Mini Mayhem. Scoreboard, rosters, timer and minimap fill from match data.</p><dl class="data mono"><div><dt>HUD</dt><dd>From match data</dd></div><div><dt>Draft</dt><dd>Live pick/ban</dd></div><div><dt>Identity</dt><dd>Per event</dd></div></dl>
          </article>
        </div>
      </section>
      <section class="sec spec" data-shot="weapons" data-spot="3">
        <div class="pin">
          <article class="card card-r">
            <p class="kicker mono"><span>02.4</span> Systems · Sponsors</p><h3>The hardpoints that pay for the show.</h3><p class="body">On Mini Mayhem, sponsor Shadhin Host ran in three formats: a squeeze-back around live gameplay, an in-game ad slot and a holding-screen panel. The game never left the screen.</p><dl class="data mono"><div><dt>Format 1</dt><dd>Squeeze-back</dd></div><div><dt>Format 2</dt><dd>In-game slot</dd></div><div><dt>Format 3</dt><dd>Holding panel</dd></div></dl>
          </article>
        </div>
      </section>
    </div>

    <section class="sec stats" id="numbers" data-shot="stats">
      <div class="pin">
        <div class="block block-l">
          <p class="kicker mono">03 — The numbers on record</p>
          <ul class="figs">
            <li><b data-count="18" data-dec="0">0</b><i>events</i><span class="mono">Tournaments broadcast</span></li><li><b data-count="4" data-dec="0">0</b><i>titles</i><span class="mono">MLBB · Free Fire · PUBG Mobile · FC Mobile</span></li><li><b data-count="3" data-dec="0">0</b><i>countries</i><span class="mono">Pakistan · Nepal · Bangladesh</span></li><li><b data-count="3" data-dec="0">0</b><i>tools</i><span class="mono">AOBS Cloud · OBS Plugins · Backup Streamer</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="sec program" id="program" data-shot="program">
      <div class="pin">
        <div class="block block-l wide">
          <p class="kicker mono">04 — The run-up to your event</p><h2>From brief <em>to first broadcast.</em></h2>
          <ol class="timeline">
            <li><b class="mono">Step 1</b><strong>Brief</strong><span>Game, dates, format, platforms, sponsors. Venue, remote or hybrid.</span></li><li><b class="mono">Step 2</b><strong>Identity</strong><span>Key visual, registration campaign and the on-air package in the event’s colours.</span></li><li><b class="mono">Step 3</b><strong>Rig</strong><span>Observers, data, graphics, delivery and the backup path, set up and tested.</span></li><li><b class="mono">Step 4</b><strong>Air</strong><span>Every match day, in the same order, with one crew accountable.</span></li>
          </ol>
          <div class="req">
            <p class="mono req-t">You bring</p>
            <ul>
              <li>The match schedule and format</li><li>Spectator access to the game lobbies</li><li>Your brand assets: logos, sponsor marks, team names</li><li>The channels you want to stream to</li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>

    <section class="sec apply" id="apply" data-shot="apply">
      <div class="pin">
        <div class="cta">
          <p class="kicker mono">05 — Request a quote</p>
          <h2 class="cta-title">Your show<br>starts <em>here.</em></h2>
          <p class="body">Send the game, the dates and the format. We come back with a production plan, a run of show and a quote.</p>
          <div class="cta-row">
            <a class="btn btn-amber btn-lg" href="/contact" data-magnetic data-cursor="label" data-cursor-label="Go">Request a quote</a><a class="btn btn-ghost btn-lg" href="/work" data-magnetic>See the work</a>
          </div>
          <p class="cta-meta mono">18 tournaments · MLBB · Free Fire · PUBG Mobile · FC Mobile</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="foot-in">
      <div class="foot-brand">
        <p class="foot-mark">AOBS<b>Live</b></p><p class="mono">Esports broadcast production · Pakistan · Nepal · Bangladesh</p>
      </div>
      <nav class="foot-cols" aria-label="Footer">
        <div><p class="mono">Services</p><a href="/broadcast">Broadcast</a><a href="/graphics-data">Graphics &amp; data</a><a href="/technology">Technology</a></div>
        <div><p class="mono">AOBS</p><a href="/work">Work</a><a href="/about">About</a><a href="/insights">Insights</a></div>
        <div><p class="mono">Contact</p><a href="/contact">Request a quote</a><a href="https://desiate.com" target="_blank" rel="noopener">Developed by Desiate</a></div>
      </nav>
      <p class="foot-legal mono"><span>© ${new Date().getFullYear()} AOBS. All rights reserved.</span><span>Machine scene and engine: <a href="https://github.com/blendi-remade/dioramas" target="_blank" rel="noopener">Dioramas</a> (MIT / CC BY 4.0)</span></p>
    </div>
  </footer>

  
  
`;
