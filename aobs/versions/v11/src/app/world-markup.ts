// Dioramas "gambit" structure; copy rewritten for AOBS. Server-rendered HTML.
export const WORLD_HTML = `
  <canvas id="gl" aria-hidden="true"></canvas>
  <div class="grade" aria-hidden="true"></div>

  <div class="loader" role="status" aria-live="polite">
    <svg class="tour" viewBox="0 0 80 80" aria-hidden="true"><g class="tour-grid"></g><polyline class="tour-line" fill="none"/><circle class="tour-knight" r="1.6"/></svg>
    <p class="loader-brand">AOBS</p>
    <p class="loader-line">Setting the board <span class="loader-pct">0</span></p>
  </div>

  <header class="nav">
    <a class="brand" href="/" aria-label="AOBS home">
      <img src="/brand/aobs-logo-white.png" width="24" height="25" alt="" aria-hidden="true" style="width:24px;height:auto">
      <span>AOBS</span>
    </a>
    <nav class="links" aria-label="Primary">
      <a href="#game">The game</a>
      <a href="#set">The draft</a>
      <a href="#salon">Match day</a>
      <a href="/work">Work</a>
    </nav>
    <div class="nav-right">
      <button class="sound" type="button" aria-pressed="false" aria-label="Toggle sound"><i></i><i></i><i></i><i></i><span>Sound</span></button>
      <a class="btn btn-ghost" href="/contact" data-magnetic>Request a quote</a>
    </div>
  </header>

  <main id="top">
    <!-- Hero ─────────────────────────────────────────────────────────────── -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-inner">
        <div class="hero-top">
          <p class="eyebrow">AOBS · Esports broadcast production · Graphics &amp; data</p>
          <h1 id="hero-title" class="hero-title"><span class="ln"><span>Every draft</span></span><span class="ln"><span>is a <em>game of chess.</em></span></span></h1>
        </div>
        <div class="hero-bottom">
        <p class="hero-sub">AOBS is an esports broadcast production company. We read every pick, ban and fight as it happens and put it on screen before the casters finish the sentence. To show you how we follow a game move by move, start with the most famous one ever played.</p>
        <div class="hero-cta">
          <a class="btn btn-solid" href="#game" data-magnetic>Replay the game</a>
          <a class="link-arrow" href="/contact">Request a broadcast quote</a>
        </div>
        </div>
      </div>
      <div class="scroll-cue" aria-hidden="true"><span class="cue-line"><i></i></span><span>Scroll to play the first move</span></div>
    </section>

    <!-- The replay (pinned) ──────────────────────────────────────────────── -->
    <section class="replay" id="game" aria-label="The Immortal Game, replayed">
      <div class="replay-pin">
        <div class="replay-intro">
          <p class="eyebrow">London · 21 June 1851</p>
          <h2>The Immortal Game</h2>
          <p>Anderssen gives away a bishop, both rooks and his queen, and mates with what is left. Twenty-three moves, each one annotated as it lands: exactly what our draft and stats graphics do for an MLBB series.</p>
        </div>

        <aside class="score" aria-label="Game score">
          <header class="score-head">
            <p class="eyebrow">The score</p>
            <p class="players"><span><i class="dot w"></i>Adolf Anderssen</span><span class="vs">—</span><span><i class="dot b"></i>Lionel Kieseritzky</span></p>
            <p class="opening">King’s Gambit Accepted · Bryan Counter-Gambit</p>
          </header>
          <div class="score-window"><ol class="score-list"></ol></div>
          <footer class="score-foot">
            <div class="score-bar"><i></i></div>
            <p><span class="score-move">Before the first move</span><span class="score-count">0 / 23</span></p>
          </footer>
        </aside>

        <div class="caption" aria-live="polite">
          <p class="caption-san"><span class="caption-num"></span><span class="caption-text"></span></p>
          <p class="caption-note"></p>
        </div>
        <div class="tag" aria-hidden="true"><span class="tag-san"></span><i class="tag-line"></i></div>
      </div>
    </section>

    <!-- Free play ────────────────────────────────────────────────────────── -->
    <section class="free" id="play" aria-labelledby="free-title">
      <div class="free-pin">
        <div class="free-copy">
          <p class="eyebrow">1–0 · Your move</p>
          <h2 id="free-title">The game is over.<br><em>The board is yours.</em></h2>
          <p>Pick up any piece and put it down wherever you like. Drop it on an opponent and it falls. Live graphics should feel this direct: the game changes, and the screen changes with it.</p>
          <div class="free-actions">
            <button class="btn btn-ghost" type="button" data-arrange="final" data-magnetic>Restore the final position</button>
            <button class="btn btn-ghost" type="button" data-arrange="start" data-magnetic>Set up a new game</button>
          </div>
        </div>
        <p class="free-hint" aria-hidden="true"><span class="hand"></span>Drag any piece · drop it on a square</p>
      </div>
    </section>

    <!-- The set ──────────────────────────────────────────────────────────── -->
    <section class="set panel" id="set" aria-labelledby="set-title">
      <div class="set-copy">
        <p class="eyebrow">Graphics · Pick &amp; ban</p>
        <h2 id="set-title">The draft,<br><em>on screen.</em></h2>
        <p class="lede">On the Pakistan Community Cup grand final, a best-of-five, our draft board showed every ban and pick as it locked in, with both rosters and the series state on one screen.</p><figure class="draft-shot"><img src="/media/broadcast/pakistan-community-cup-grand-final-mlbb-draft-ban-phase.webp" alt="Pakistan Community Cup grand final MLBB draft board in the ban phase" width="1294" height="325" loading="lazy"></figure><p class="lede" style="display:none"></p>
        <dl class="specs">
          <div><dt>Bans</dt><dd>Both sides, in draft order, with the phase on screen</dd></div>
          <div><dt>Picks</dt><dd>Heroes land on the board as they lock in, under each player</dd></div>
          <div><dt>Series</dt><dd>Best-of, round and stage, in the event’s own identity</dd></div>
          <div><dt>Then</dt><dd>In-game HUD: score, gold, turrets, timer, rosters</dd></div>
        </dl>
        <div class="price-row" id="reserve">
          <p class="price">Live <span>from the draft feed, never retyped</span></p>
          <a class="btn btn-solid" href="/graphics-data" data-magnetic>Graphics &amp; data</a>
        </div>
      </div>
      <div class="set-notes" aria-hidden="true">
        <div class="note-card"><span class="nc-k">In</span><b>Draft feed</b><span>picks and bans as they lock</span></div>
        <div class="note-card"><span class="nc-k">Out</span><b>Pick/ban board</b><span>on screen, in the event’s colours</span></div>
      </div>
    </section>

    <!-- The salon ────────────────────────────────────────────────────────── -->
    <section class="salon panel" id="salon" aria-labelledby="salon-title">
      <div class="salon-copy">
        <p class="eyebrow">Match day · How a series runs</p>
        <h2 id="salon-title">One series,<br><em>start to finish.</em></h2>
        <p class="lede">Observers, replay, casters, graphics and transmission, run by one crew. Here is the order a series goes out in.</p>
        <ol class="evenings">
          <li><span class="ev-day">Before</span><div><h3>Holding screen</h3><p>Countdown, match-ups and the sponsor panel, in the tournament’s identity.</p></div><span class="ev-time">T−15</span></li>
          <li><span class="ev-day">Draft</span><div><h3>Pick and ban</h3><p>The board fills as the draft locks in. Casters read it; viewers see it.</p></div><span class="ev-time">T−5</span></li>
          <li><span class="ev-day">Game</span><div><h3>Observers and HUD</h3><p>The fight on screen before it starts; the numbers from the match. A backup stream runs under all of it.</p></div><span class="ev-time">00:00</span></li>
        </ol>
        <div class="price-row">
          <p class="price">18 <span>tournaments on record · MLBB, Free Fire, PUBG Mobile, FC Mobile</span></p>
          <a class="btn btn-ghost" href="/work" data-magnetic>See the work</a>
        </div>
      </div>
    </section>

    <!-- CTA + footer ─────────────────────────────────────────────────────── -->
    <footer class="foot panel" id="visit">
      <h2 class="foot-title">Your <em>move.</em></h2>
      <div class="foot-cta">
        <a class="btn btn-solid" href="/contact" data-magnetic>Request a broadcast quote</a>
        <a class="btn btn-ghost" href="/broadcast" data-magnetic>Broadcast production</a>
      </div>
      <div class="foot-cols">
        <p><span class="k">AOBS</span>Esports broadcast production<br>Pakistan · Nepal · Bangladesh</p>
        <p><span class="k">Technology</span><a href="/technology/backup-streamer">Backup Streamer</a> · <a href="/technology/aobs-cloud">AOBS Cloud</a><br><a href="/technology/obs-plugins">OBS Plugins</a></p>
        <p><span class="k">Write</span><a href="/contact">Request a quote</a><br><a href="/about">About AOBS</a></p>
      </div>
      <p class="fine">© ${new Date().getFullYear()} AOBS. All rights reserved. The Immortal Game: Anderssen – Kieseritzky, London 1851, 1–0. Chess scene and engine: <a href="https://github.com/blendi-remade/dioramas" target="_blank" rel="noopener">Dioramas</a> (MIT / CC BY 4.0). <a href="https://desiate.com" target="_blank" rel="noopener">Developed by Desiate</a></p>
    </footer>
  </main>

  
  
`;
