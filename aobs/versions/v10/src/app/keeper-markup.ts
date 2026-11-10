// v10 "The Keeper" (concept C04): markup in the structure the Dioramas Keeper scene drives, with AOBS's story.
// Rendered on the server, so every word here is real HTML for search engines and screen readers.
export const KEEPER_HTML = `
  <canvas id="gl" aria-hidden="true"></canvas>
  <div class="flash" aria-hidden="true"></div>
  <div class="grade" aria-hidden="true"></div>

  <div class="loader" role="status" aria-live="polite">
    <div class="loader-lamp" aria-hidden="true"><i class="loader-beam"></i><i class="loader-beam b2"></i><b></b></div>
    <p class="loader-name">AOBS</p>
    <p class="loader-line"><span>Lighting the backup path</span> <span class="loader-pct">0</span></p>
    <p class="loader-char">Primary · Backup · AOBS Cloud</p>
  </div>

  <header class="nav">
    <a class="brand" href="/" aria-label="AOBS home">
      <img src="/brand/aobs-logo-white.png" width="26" height="27" alt="" aria-hidden="true" style="width:26px;height:auto">
      <span>AOBS</span>
    </a>
    <nav class="links" aria-label="Primary">
      <a href="#storm">The outage</a>
      <a href="#rooms">The stack</a>
      <a href="#crossing">Delivery</a>
      <a href="#dawn">On record</a>
    </nav>
    <div class="nav-right">
      <button class="sound" type="button" aria-pressed="false" data-cursor="link"><span class="sound-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="sound-label">Sound off</span></button>
      <a class="btn btn-lamp" href="/contact" data-magnetic><span class="cta-long">Request a quote</span><span class="cta-short">Quote</span></a>
    </div>
  </header>

  <aside class="log" aria-label="Stream status">
    <div><span class="k">Time</span><span class="v" data-log="time">02:47</span></div>
    <div><span class="k">Primary</span><span class="v" data-log="wind">Lost</span></div>
    <div><span class="k">Backup</span><span class="v" data-log="sea">Backup on air</span></div>
    <div><span class="k">Viewers</span><span class="v" data-log="vis">Live, no gap</span></div>
  </aside>

  <main id="top">
    <section class="hero" data-kf="0">
      <div class="hero-inner">
        <div class="hero-top">
        <p class="eyebrow">AOBS <i>·</i> Esports broadcast production <i>·</i> Backup Streamer</p>
        <h1 class="title">
          <span class="l1">Storms happen.</span>
          <span class="l2">The stream</span>
          <span class="l3">stays lit.</span>
        </h1>
        </div>
        <div class="hero-foot">
          <p class="sub">AOBS is an esports broadcast production company. Under every show we run a second, independent stream path, so when the primary fails your viewers never see an offline screen.</p>
          <div class="ctas">
            <a class="btn btn-lamp" href="/contact" data-magnetic>Request a quote</a>
            <a class="btn btn-ghost" href="#storm" data-magnetic>Take the light <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </div>
      <p class="hero-hint"><span class="dot"></span><span class="hint-desktop">Move your cursor: the backup beam is yours</span><span class="hint-touch">Touch the sea: the backup beam is yours</span></p>
    </section>

    <section class="storm" id="storm">
      <div class="storm-sticky" data-kf="1">
        <div class="storm-copy">
          <p class="eyebrow"><span class="num">01</span> The outage</p>
          <h2>Take the light.</h2>
          <p class="lede">Somewhere in the swell a feed has dropped. The beam is the backup path: aim it, find the feed and hold the light on it for two seconds. It comes back on air.</p>
          <ul class="how">
            <li><kbd class="k-desk">Move</kbd><kbd class="k-touch">Touch</kbd> aim the backup</li>
            <li><kbd>Hold 2s</kbd> on the dropped feed: bring it back</li>
          </ul>
          <p class="storm-foot">Backup Streamer is our own system. It runs from the first frame of a show to the last, so an encoder crash or a dead line is a log entry, not an offline screen.</p>
        </div>
        <div class="tally" aria-live="polite">
          <p class="tally-k">Streams kept live</p>
          <p class="tally-v"><span class="tally-n">0</span></p>
          <ol class="tally-log"></ol>
        </div>
      </div>
    </section>

    <section class="rooms" id="rooms">
      <div class="rooms-sticky">
        <header class="rooms-head">
          <p class="eyebrow"><span class="num">02</span> The stack</p>
          <h2>Four floors, <em>one tower.</em></h2>
        </header>
        <div class="room-stage">
          <article class="room" data-room="0">
            <figure><img src="/media/broadcast/pakistan-community-cup-mlbb-ingame-broadcast.webp" alt="Pakistan Community Cup grand final, AOBS in-game HUD" loading="lazy" width="1280" height="720"></figure>
            <div class="room-text">
              <p class="room-meta"><span>I</span> Ground floor · The gallery</p>
              <h3>Observers &amp; switching</h3>
              <p>Observers follow the fight, the director cuts it, replay rolls the moments back. Everything that becomes the programme starts on this floor.</p>
              <ul><li>Observer positions</li><li>Replay</li><li>Caster returns</li></ul>
            </div>
          </article>
          <article class="room" data-room="1">
            <figure><img src="/media/broadcast/pakistan-community-cup-grand-final-mlbb-draft-ban-phase.webp" alt="Pakistan Community Cup grand final draft board, ban phase" loading="lazy" width="1294" height="325"></figure>
            <div class="room-text">
              <p class="room-meta"><span>II</span> Second floor · Graphics</p>
              <h3>Data on screen</h3>
              <p>Drafts, scoreboards, gold and turrets, read from the match rather than typed in. On the Pakistan Community Cup grand final the board ran a best-of-five draft.</p>
              <ul><li>Draft board</li><li>In-game HUD</li><li>Stats panels</li></ul>
            </div>
          </article>
          <article class="room" data-room="2">
            <figure><img src="/media/broadcast/mini-mayhem-mlbb-ingame-overlay-sponsor-squeezeback.webp" alt="Mini Mayhem broadcast with a sponsor squeeze-back" loading="lazy" width="1600" height="900"></figure>
            <div class="room-text">
              <p class="room-meta"><span>III</span> Third floor · Sponsors</p>
              <h3>Placements that pay</h3>
              <p>On Mini Mayhem the sponsor ran three ways (squeeze-back, in-game slot, holding-screen panel) and the game never left the screen.</p>
              <ul><li>Squeeze-back</li><li>In-game ad slot</li><li>Holding panel</li></ul>
            </div>
          </article>
          <article class="room" data-room="3">
            <figure><img src="/media/broadcast/mini-mayhem-semi-final-stream-starting-screen.webp" alt="Mini Mayhem semi-final holding screen with countdown" loading="lazy" width="1600" height="900"></figure>
            <div class="room-text">
              <p class="room-meta"><span>IV</span> The top · The lamp</p>
              <h3>Backup Streamer</h3>
              <p>The light at the top of the tower. A hot second path, running the whole show, ready to take programme the moment the primary fails.</p>
              <ul><li>Runs the whole show</li><li>Takes over on failure</li><li>Built by AOBS</li></ul>
            </div>
          </article>
        </div>
        <div class="room-pins" aria-hidden="true">
          <div class="pin" data-pin="0"><i></i><span>The gallery</span></div>
          <div class="pin" data-pin="1"><i></i><span>Graphics</span></div>
          <div class="pin" data-pin="2"><i></i><span>Sponsors</span></div>
          <div class="pin" data-pin="3"><i></i><span>Backup Streamer</span></div>
        </div>
        <ol class="room-index" aria-hidden="true"><li>I</li><li>II</li><li>III</li><li>IV</li></ol>
      </div>
    </section>

    <section class="crossing" id="crossing">
      <div class="crossing-sticky">
        <div class="crossing-copy">
          <p class="eyebrow"><span class="num">03</span> Delivery</p>
          <h2>One programme, <em>every platform.</em></h2>
          <p class="lede">The finished show is encoded once in AOBS Cloud, our remote production platform, and sent to every channel your audience watches on. With the gallery in the cloud, an online event needs no venue build at all.</p>
        </div>
        <div class="route" aria-hidden="true">
          <span class="route-a">AOBS Cloud</span>
          <div class="route-line"><i class="route-boat"></i><span class="route-nm">Encode once</span></div>
          <span class="route-b">Twitch · YouTube · Kick</span>
        </div>
        <dl class="facts">
          <div><dt>Remote</dt><dd>Gallery in AOBS Cloud. Casters and observers connect from where they are.</dd></div>
          <div><dt>Venue</dt><dd>Control room, observers and stage screens built on site for LAN finals.</dd></div>
          <div><dt>Either way</dt><dd>The backup path runs under the whole show.</dd></div>
        </dl>
      </div>
    </section>

    <section class="dawn" id="dawn">
      <div class="dawn-sticky">
        <div class="dawn-copy">
          <p class="eyebrow"><span class="num">04</span> On record</p>
          <h2>And then, <em>the final.</em></h2>
          <p class="lede">At the end of the night the sea goes flat and the light goes out. What's left is the broadcast: every game, on air, start to finish.</p>
        </div>
        <div class="rates" id="reserve">
          <p class="rates-from"><b>18</b> tournaments broadcast</p>
          <table id="rates-table">
            <caption class="sr">A selection of tournaments AOBS has broadcast</caption>
            <tbody>
              <tr><th scope="row"><a href="/work/pakistan-community-cup">Pakistan Community Cup</a></th><td>MLBB · Grand final Bo5</td></tr>
              <tr><th scope="row"><a href="/work/mini-mayhem">Mini Mayhem</a></th><td>MLBB · Sponsor package</td></tr>
              <tr><th scope="row"><a href="/work/bwc-2026">BWC 2026</a></th><td>FC Mobile · LAN</td></tr>
              <tr><th scope="row"><a href="/work/presidency-esports-mania-s1">Presidency Esports Mania S1</a></th><td>3 titles</td></tr>
            </tbody>
          </table>
          <p class="rates-note">MLBB, Free Fire, PUBG Mobile and FC Mobile, across Pakistan, Nepal and Bangladesh.</p>
          <div class="ctas">
            <a class="btn btn-lamp" href="/contact" data-magnetic>Request a quote</a>
            <a class="btn btn-ghost rates-write" href="/work" data-magnetic>See all work</a>
            <button class="btn btn-ghost rates-toggle" type="button" aria-expanded="false" aria-controls="rates-table">All events <span aria-hidden="true">+</span></button>
          </div>
        </div>
      </div>
    </section>

    <footer class="foot" id="footer">
      <h2 class="foot-title">Hold the <em>light.</em></h2>
      <div class="foot-cols">
        <p><b>AOBS</b><br>Esports broadcast production<br>Pakistan · Nepal · Bangladesh</p>
        <p><b>Technology</b><br><a href="/technology/backup-streamer">Backup Streamer</a><br><a href="/technology/aobs-cloud">AOBS Cloud</a> · <a href="/technology/obs-plugins">OBS Plugins</a></p>
        <p><b>Pages</b><br><a href="/broadcast">Broadcast</a> · <a href="/graphics-data">Graphics</a><br><a href="/work">Work</a> · <a href="/about">About</a></p>
        <a class="btn btn-lamp" href="/contact" data-magnetic>Request a quote</a>
      </div>
      <p class="foot-small"><span>© ${new Date().getFullYear()} AOBS. All rights reserved.</span><span>Lighthouse scene and engine: <a href="https://github.com/blendi-remade/dioramas" target="_blank" rel="noopener">Dioramas</a> (MIT / CC BY 4.0)</span><a class="credit" href="https://desiate.com" target="_blank" rel="noopener">Developed by Desiate</a></p>
    </footer>
  </main>

  <div class="boat-mark" aria-hidden="true">
    <svg viewBox="0 0 80 80"><circle class="bm-track" cx="40" cy="40" r="30"/><circle class="bm-fill" cx="40" cy="40" r="30"/></svg>
    <span class="bm-label">Stream dropped</span>
  </div>
  <div class="toast" role="status"></div>
`;
