// Dioramas "horologie" structure; copy rewritten for AOBS. Server-rendered HTML.
export const WORLD_HTML = `
  <canvas id="gl" aria-hidden="true"></canvas>

  <div class="loader" role="status" aria-live="polite">
    <svg class="loader-gauge" viewBox="0 0 200 200" aria-hidden="true">
      <circle class="lg-track" cx="100" cy="100" r="86"/>
      <circle class="lg-fill" cx="100" cy="100" r="86"/>
      <g class="lg-ticks"></g>
      <g class="lg-balance">
        <circle cx="100" cy="100" r="34" fill="none" stroke="currentColor" stroke-width="2.4"/>
        <path d="M100 66V134M70.6 83L129.4 117M70.6 117L129.4 83" stroke="currentColor" stroke-width="1.6"/>
        <circle cx="100" cy="100" r="4" fill="currentColor"/>
      </g>
      <path class="lg-spring" d="M100 100m0-6a6 6 0 1 1-6 6a9 9 0 1 1 9 9a12 12 0 1 1-12-12a15 15 0 1 1 15 15a18 18 0 1 1-18-18" fill="none" stroke="currentColor" stroke-width=".8"/>
    </svg>
    <p class="loader-h"><span class="loader-n">0</span><small>h</small></p>
    <p class="loader-line caps">Winding the reserve</p>
  </div>

  <header class="nav">
    <a class="brand" href="/" aria-label="AOBS home">
      <img src="/brand/aobs-logo-black.png" width="24" height="25" alt="" aria-hidden="true" style="width:24px;height:auto">
      <span class="brand-name">AOBS</span>
      <span class="brand-sub caps">Broadcast production</span>
    </a>
    <nav class="links" aria-label="Primary">
      <a href="#calibre">The stack</a>
      <a href="#finishing">Details</a>
      <a href="#collection">Models</a>
      <a href="/work">Work</a>
    </nav>
    <div class="nav-r">
      <button class="sound caps" type="button" aria-pressed="true" data-cursor="link"><i></i><span>Sound</span></button>
      <a class="btn btn-line" href="/contact" data-magnetic>Request a quote</a>
    </div>
  </header>

  <main>
    <section class="hero" id="top" aria-label="Introduction">
      <div class="hero-inner">
        <p class="eyebrow caps">AOBS &nbsp;·&nbsp; Esports broadcast production company</p>
        <h1 class="hero-title"><span class="ln">Fourteen layers.</span><span class="ln">One programme.</span><span class="ln"><em>No dropped beats.</em></span></h1>
        <p class="hero-lede">AOBS is an esports broadcast production company. A broadcast is a movement: observers, data, graphics, sponsors, transmission and a reserve that never runs out, all turning together. Scroll, and we will take one apart.</p>
        <div class="hero-cta">
          <a class="btn btn-solid" href="/contact" data-magnetic>Request a broadcast quote</a>
          <a class="btn-text caps" href="#calibre">Open the case <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <dl class="hero-spec caps">
        <div><dt>On record</dt><dd>18 tournaments</dd></div>
        <div><dt>Titles</dt><dd>MLBB · FF · PUBGM · FC Mobile</dd></div>
        <div><dt>Reserve</dt><dd>Backup Streamer</dd></div>
      </dl>
      <p class="hint caps" aria-hidden="true"><span class="hint-dot"></span>Move to tilt the movement &nbsp;·&nbsp; scroll to open it</p>
    </section>

    <section class="calibre" id="calibre" aria-label="The calibre, exploded">
      <div class="stage">
        <article class="step" data-k="1">
          <p class="fig caps">Fig. I &nbsp;—&nbsp; The case, opened</p>
          <h2>Remove the overlays, and what is left is <em>a machine.</em></h2>
          <p>Every part of an AOBS broadcast is labelled on this movement, from the viewer output on top to the cloud plate underneath. Keep scrolling and we will take it apart, layer by layer.</p>
        </article>
        <article class="step" data-k="2">
          <p class="fig caps">Fig. II &nbsp;—&nbsp; Exploded along the axis</p>
          <h2>Every layer, <em>one crew.</em></h2>
          <p>Viewer output, scorebug, identity, graphics, sponsors, switcher, observers, game data, replay, casters, cloud. Most tournaments buy these from four vendors. We run them as one movement, and the hands still show your time.</p>
          <ul class="spec caps"><li><b>18</b> tournaments</li><li><b>4</b> titles</li><li><b>3</b> countries</li></ul>
        </article>
        <article class="step" data-k="3">
          <p class="fig caps">Fig. III &nbsp;—&nbsp; Reserve</p>
          <h2>Hold the crown. <em>Wind the reserve.</em></h2>
          <p>The barrel is Backup Streamer: stored power that runs under the whole show. If the primary path fails, the reserve takes the programme and the hands keep moving.</p>
          <p class="step-hint caps"><span class="hint-dot"></span>Press and hold the crown, or the gauge</p>
        </article>
        <article class="step" data-k="4">
          <p class="fig caps">Fig. IV &nbsp;—&nbsp; Transmission</p>
          <h2>Four stages turn a match <em>into a broadcast.</em></h2>
          <p>Observers pick the fight. The switcher makes one programme. Graphics and data sit on top. AOBS Cloud encodes it once and sends it to Twitch, YouTube and Kick.</p>
          <ul class="spec caps"><li><b>OBS</b> observers</li><li><b>PGM</b> switcher</li><li><b>CLD</b> delivery</li></ul>
        </article>
        <article class="step" data-k="5">
          <p class="fig caps">Fig. V &nbsp;—&nbsp; Regulation</p>
          <h2>Every tick, <em>from the match.</em></h2>
          <p>The escapement is the game data: each kill, turret and gold swing lets the scoreboard move on. Graphics that read the match keep time with it; graphics typed by hand drift.</p>
          <ul class="spec caps"><li><b>Score</b> live</li><li><b>Gold</b> live</li><li><b>Draft</b> live</li></ul>
        </article>
        <ol class="rail caps" aria-hidden="true">
          <li data-k="1">I</li><li data-k="2">II</li><li data-k="3">III</li><li data-k="4">IV</li><li data-k="5">V</li>
        </ol>
      </div>
    </section>

    <section class="finishing" id="finishing" aria-label="Finishing">
      <div class="stage">
        <header class="fin-head" data-k="6">
          <p class="fig caps">Details</p>
          <h2>What no one asks for, <em>we build anyway.</em></h2>
        </header>
        <article class="fin" data-k="6">
          <p class="fin-n"><b>T−15</b><span class="caps">minutes before game one</span></p>
          <h3>Holding screens</h3>
          <p>Countdown, match-ups and a sponsor panel in the event’s identity, so the stream looks like the event before a single game starts.</p>
        </article>
        <article class="fin" data-k="7">
          <p class="fin-n"><b>Bo5</b><span class="caps">PCC grand final draft</span></p>
          <h3>Draft boards</h3>
          <p>Bans and picks land as they lock in, with the series state on the same screen. Built for the Pakistan Community Cup grand final.</p>
        </article>
        <article class="fin" data-k="8">
          <p class="fin-n"><b>3</b><span class="caps">sponsor formats, one show</span></p>
          <h3>Squeeze-backs</h3>
          <p>On Mini Mayhem the sponsor ran around a live game, in an in-game slot and on the holding screen. The game never left the screen.</p>
        </article>
      </div>
    </section>

    <section class="collection" id="collection" aria-label="The collection">
      <div class="stage">
        <header class="col-head" data-k="9">
          <p class="fig caps">Reassembled</p>
          <h2>Every layer back in place. <em>Then we go live.</em></h2>
          <p>Scroll back and the movement closes. That is the show your audience sees: one programme, with every part behind it still turning.</p>
        </header>
        <header class="refs-head" data-k="10">
          <p class="fig caps">Production models</p>
          <h2>Three ways to run it. <em>One movement.</em></h2>
        </header>
        <div class="refs" data-k="10">
          <article class="ref">
            <p class="caps ref-n">Model A</p>
            <h3>Venue</h3>
            <p>Control room, observers, replay and stage screens built on site.</p>
            <p class="price">LAN finals</p>
          </article>
          <article class="ref ref-main">
            <p class="caps ref-n">Model B</p>
            <h3>Remote</h3>
            <p>The gallery in AOBS Cloud. Casters and observers connect from where they are.</p>
            <p class="price">Online leagues</p>
          </article>
          <article class="ref">
            <p class="caps ref-n">Model C</p>
            <h3>Hybrid</h3>
            <p>Cameras and stage on site; switching, graphics and replay in the cloud.</p>
            <p class="price">Lighter builds</p>
          </article>
        </div>
      </div>
    </section>

    <section class="atelier" id="atelier" aria-label="The atelier">
      <div class="stage">
        <div class="at" data-k="11">
          <p class="fig caps">On record &nbsp;·&nbsp; Pakistan · Nepal · Bangladesh</p>
          <h2>Eighteen tournaments. <em>One crew.</em></h2>
          <p>From community cups to LAN finals, every one went out through the same movement. The tools under it are ours: AOBS Cloud, our OBS plugins and Backup Streamer.</p>
          <dl class="stats">
            <div><dt>18</dt><dd class="caps">tournaments broadcast</dd></div>
            <div><dt>4</dt><dd class="caps">game titles</dd></div>
            <div><dt>3</dt><dd class="caps">countries</dd></div>
            <div><dt>3</dt><dd class="caps">tools built in-house</dd></div>
          </dl>
          <p class="bench caps"><a href="/work">See all eighteen &nbsp;→</a></p>
        </div>
      </div>
    </section>

    <section class="cta" id="appointment" aria-label="Appointments">
      <div class="cta-inner" data-k="12">
        <p class="fig caps">Request a quote</p>
        <h2>Your broadcast begins <em>with a brief.</em></h2>
        <p>Tell us the game, the dates, the format and the platforms. We reply with a production plan and a quote.</p>
        <div class="cta-row">
          <a class="btn btn-solid" href="/contact" data-magnetic>Request a quote</a>
          <a class="btn-text caps" href="#calibre">Open it again <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </section>

    <footer class="foot">
      <div class="foot-top">
        <p class="foot-word">AOBS</p>
        <p class="foot-line">Esports broadcast production, <em>end to end.</em></p>
      </div>
      <div class="foot-cols caps">
        <p>AOBS<br>Esports broadcast production<br>Pakistan · Nepal · Bangladesh</p>
        <p><a href="/broadcast">Broadcast</a><br><a href="/graphics-data">Graphics &amp; data</a><br><a href="/technology">Technology</a></p>
        <p><a href="/work">Work</a><br><a href="/about">About</a><br><a href="/contact">Contact</a></p>
        <p>© ${new Date().getFullYear()} AOBS. All rights reserved.<br>Movement scene: <a href="https://github.com/blendi-remade/dioramas" target="_blank" rel="noopener">Dioramas</a><br><a href="https://desiate.com" target="_blank" rel="noopener">Developed by Desiate</a></p>
      </div>
    </footer>
  </main>

  <svg class="orbit" viewBox="0 0 400 400" aria-hidden="true">
    <defs><path id="obPath" d="M200,200 m-166,0 a166,166 0 1,1 332,0 a166,166 0 1,1 -332,0"/></defs>
    <circle cx="200" cy="200" r="196" class="ob-c"/>
    <g class="ob-rot"><g class="ob-ticks"></g><circle cx="200" cy="7" r="2.4" class="ob-dot"/></g>
    <text class="ob-t"><textPath href="#obPath" startOffset="0">AOBS · Esports broadcast production · Observers · Data · Graphics · Sponsors · Backup Streamer · AOBS Cloud ·</textPath></text>
    <path d="M4 200H40M360 200H396" class="ob-c"/>
  </svg>
  <div class="labels" aria-hidden="true"><svg class="leaders"></svg></div>
  <div class="crown-hint" aria-hidden="true"><i></i><b></b><span class="caps">Hold to wind</span></div>
  <aside class="reserve" aria-label="Backup reserve">
    <button class="reserve-btn" type="button" data-cursor="drag" data-cursor-label="Hold" aria-label="Press and hold to wind the backup reserve">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle class="rv-track" cx="60" cy="60" r="50"/>
        <circle class="rv-fill" cx="60" cy="60" r="50"/>
        <g class="rv-ticks"></g>
      </svg>
      <span class="rv-val"><b>24</b><small>h</small></span>
    </button>
    <p class="rv-label caps"><span>Backup reserve</span><em>Hold to wind</em></p>
  </aside>
  <div class="toast caps" role="status"></div>

  
  
`;
