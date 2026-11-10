// Dioramas "atlas" structure; copy rewritten for AOBS. Server-rendered HTML.
export const WORLD_HTML = `
  <canvas id="gl" aria-hidden="true"></canvas>

  <div class="loader" role="status" aria-live="polite">
    <div class="loader-card">
      <p class="loader-mark">AOBS <i>on the map</i></p>
      <svg class="loader-route" viewBox="0 0 360 130" aria-hidden="true">
        <path id="route" d="M24 104 C 90 20, 250 10, 336 88" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="2 7" stroke-linecap="round"/>
        <path class="route-done" d="M24 104 C 90 20, 250 10, 336 88" fill="none" stroke="#ef7d5c" stroke-width="2" stroke-linecap="round"/>
        <circle cx="24" cy="104" r="4.5" fill="#1d2742"/>
        <g class="route-isles" fill="#fff8ee" stroke="#1d2742" stroke-width="1.3">
          <ellipse cx="336" cy="92" rx="13" ry="5"/><path d="M325 92 l11 14 l11 -14" /><path d="M334 86 v-9 l5 3 l-5 2" fill="#ef7d5c" stroke="none"/>
        </g>
        <g class="loader-ship">
          <ellipse cx="0" cy="0" rx="17" ry="7" fill="#f7eedf" stroke="#1d2742" stroke-width="1.3"/>
          <path d="M-9 -6.3 C-3 -7.4 3 -7.4 9 -6.3 M-9 6.3 C-3 7.4 3 7.4 9 6.3" stroke="#ef7d5c" stroke-width="2" fill="none"/>
          <path d="M-17 0 l-6 -6 v12 z" fill="#ef7d5c"/>
          <rect x="-5" y="8" width="10" height="4" rx="1.5" fill="#1d2742"/>
        </g>
        <text x="24" y="124" class="loader-label">AOBS Cloud</text><text x="336" y="124" text-anchor="end" class="loader-label">Your event</text>
      </svg>
      <p class="loader-line">Charting the broadcasts <span class="loader-pct">0</span>%</p><p class="loader-sub">Pakistan · Nepal · Bangladesh · online</p>
    </div>
  </div>

  <header class="nav">
    <a class="brand" href="/" aria-label="AOBS home">
      <img src="/brand/aobs-logo-black.png" width="30" height="31" alt="" aria-hidden="true" style="width:30px;height:auto">
      <span class="brand-words"><b>AOBS</b><i>on the map</i></span>
    </a>
    <nav class="links" aria-label="Primary">
      <a href="#lanternholm" data-go="1">Where we broadcast</a><a href="#fleet" data-go="5">Our tools</a><a href="/work">Work</a>
    </nav>
    <a class="btn btn-coral" href="#book" data-go="6" data-magnetic>Plan an event</a>
  </header>

  <main class="track">
    <!-- 0 · Hero -->
    <section class="stop stop-hero" id="top" data-st="0" aria-label="Welcome">
      <div class="panel hero" data-panel="0">
        <p class="kicker" data-rise>AOBS <span>·</span> Esports broadcast production company</p>
        <h1 class="hero-title">
          <span class="hero-line1" data-rise>Four places on our map.</span><span class="hero-line2" data-rise>One crew<br><em>for all of them.</em></span>
        </h1>
        <p class="hero-sub" data-rise>AOBS is an esports broadcast production company. We have put tournaments on air in Pakistan, Nepal and Bangladesh, and anywhere with an internet line through AOBS Cloud. Fly between them.</p>
        <div class="hero-cta" data-rise>
          <a class="btn btn-ink" href="#lanternholm" data-go="1" data-magnetic>Take the tour</a><span class="hint"><i class="hint-ring" aria-hidden="true"></i>Click any island to fly there</span>
        </div>
      </div>
    </section>

    <!-- 1 · Online -->
    <section class="stop" id="lanternholm" data-st="1" aria-label="Online">
      <article class="panel ticket t-left" data-panel="1"><header class="t-head" data-rise><span class="t-num">I</span><span class="t-route">AOBS Cloud <i>⟶</i> Online</span><span class="t-code">REMOTE</span></header><h2 class="t-name" data-rise>Online</h2><p class="t-meta" data-rise><b>Anywhere</b> with a line <span>·</span> the cloud gallery</p><p class="t-lede" data-rise>The gallery runs in AOBS Cloud, our remote production platform. Casters and observers connect from where they are; the programme is encoded once and sent to Twitch, YouTube and Kick. No venue build, no travel days.</p><ul class="t-list" data-rise><li>Remote production without a venue</li><li>Backup Streamer under every show</li><li>One programme to every platform</li></ul><dl class="t-facts" data-rise><div><dt>Model</dt><dd>Remote</dd></div><div><dt>Platforms</dt><dd>3</dd></div><div><dt>Backup</dt><dd>Always on</dd></div></dl><footer class="t-stub" data-rise><p class="t-price"><small>On record</small><b>Remote</b><span></span></p><p class="t-when">Online leagues · qualifiers</p><a class="btn btn-coral" href="#book" data-go="6" data-dest="lanternholm">Plan an event</a></footer></article>
    </section>

    <!-- 2 · Bangladesh -->
    <section class="stop" id="amberlea" data-st="2" aria-label="Bangladesh">
      <article class="panel ticket t-right" data-panel="2"><header class="t-head" data-rise><span class="t-num">II</span><span class="t-route">AOBS Cloud <i>⟶</i> Bangladesh</span><span class="t-code">BD</span></header><h2 class="t-name" data-rise>Bangladesh</h2><p class="t-meta" data-rise><b>Campus</b> and community <span>·</span> Bangla-language sponsors</p><p class="t-lede" data-rise>DIU Winter Fest, an MLBB tournament at Daffodil International University, opened with an AOBS-cut teaser. Sponsor Shadhin Host ran in Bangla across our Mini Mayhem package: squeeze-back, in-game slot and holding panel.</p><ul class="t-list" data-rise><li>DIU Winter Fest teaser</li><li>Sponsor copy in Bangla</li><li>Squeeze-back, in-game slot, holding panel</li></ul><dl class="t-facts" data-rise><div><dt>Titles</dt><dd>MLBB</dd></div><div><dt>Events</dt><dd>DIU Winter Fest</dd></div><div><dt>Sponsor</dt><dd>Shadhin Host</dd></div></dl><footer class="t-stub" data-rise><p class="t-price"><small>On record</small><b>2+</b><span></span></p><p class="t-when">Campus · community</p><a class="btn btn-coral" href="#book" data-go="6" data-dest="amberlea">Plan an event</a></footer></article>
    </section>

    <!-- 3 · Pakistan -->
    <section class="stop" id="hollowmere" data-st="3" aria-label="Pakistan">
      <article class="panel ticket t-left" data-panel="3"><header class="t-head" data-rise><span class="t-num">III</span><span class="t-route">AOBS Cloud <i>⟶</i> Pakistan</span><span class="t-code">PK</span></header><h2 class="t-name" data-rise>Pakistan</h2><p class="t-meta" data-rise><b>Grand final</b> best of 5 <span>·</span> Pakistan Community Cup</p><p class="t-lede" data-rise>The Pakistan Community Cup ran in its own green, trophy-led identity, from the registration posters to the grand-final HUD. Draft board, holding screen and in-game graphics, with Potatos Gaming as streaming partner.</p><ul class="t-list" data-rise><li>Registration and prize-pool campaign</li><li>Pick/ban draft board, Bo5</li><li>In-game HUD in the cup’s colours</li></ul><dl class="t-facts" data-rise><div><dt>Title</dt><dd>MLBB</dd></div><div><dt>Prize pool</dt><dd>30,000 diamonds</dd></div><div><dt>Partner</dt><dd>Potatos Gaming</dd></div></dl><footer class="t-stub" data-rise><p class="t-price"><small>On record</small><b>Bo5</b><span></span></p><p class="t-when">Grand final</p><a class="btn btn-coral" href="#book" data-go="6" data-dest="hollowmere">Plan an event</a></footer></article>
    </section>

    <!-- 4 · Nepal -->
    <section class="stop" id="hanakumo" data-st="4" aria-label="Nepal">
      <article class="panel ticket t-right" data-panel="4"><header class="t-head" data-rise><span class="t-num">IV</span><span class="t-route">AOBS Cloud <i>⟶</i> Nepal</span><span class="t-code">NP</span></header><h2 class="t-name" data-rise>Nepal</h2><p class="t-meta" data-rise><b>MLBB</b> in Nepal <span>·</span> Battle of Gurkha’s on record</p><p class="t-lede" data-rise>A tournament teaser for MLBB in Nepal (“prepare for the ultimate battle”) cut by AOBS, and Battle of Gurkha’s on our tournament record.</p><ul class="t-list" data-rise><li>Tournament announcement teaser</li><li>Battle of Gurkha’s</li><li>Mobile Legends: Bang Bang</li></ul><dl class="t-facts" data-rise><div><dt>Title</dt><dd>MLBB</dd></div><div><dt>Teaser</dt><dd>37 s</dd></div><div><dt>On record</dt><dd>Battle of Gurkha’s</dd></div></dl><footer class="t-stub" data-rise><p class="t-price"><small>On record</small><b>MLBB</b><span></span></p><p class="t-when">Nepal</p><a class="btn btn-coral" href="#book" data-go="6" data-dest="hanakumo">Plan an event</a></footer></article>
    </section>

    <!-- 5 · Fleet -->
    <section class="stop" id="fleet" data-st="5" aria-label="Our tools">
      <div class="panel fleet" data-panel="5">
        <p class="kicker" data-rise>Our tools</p>
        <h2 class="fleet-title" data-rise>Three tools, each built because a show needed it.</h2>
        <p class="fleet-lede" data-rise>Everything that flies between these places runs on software we wrote and keep running ourselves.</p>
        <ul class="ships">
          <li class="ship is-here" data-rise><span class="ship-tag">The carrier</span><h3><a href="/technology/aobs-cloud">AOBS Cloud</a></h3><p>Cloud production platform</p><p class="ship-note">The gallery in the cloud: sources in, programme out, every platform.</p></li>
          <li class="ship" data-rise><span class="ship-tag">The rigging</span><h3><a href="/technology/obs-plugins">OBS Plugins</a></h3><p>Custom plugins, built in-house</p><p class="ship-note">The tools OBS does not ship with, written by the crew that needed them on air.</p></li>
          <li class="ship" data-rise><span class="ship-tag">The lifeboat</span><h3><a href="/technology/backup-streamer">Backup Streamer</a></h3><p>Redundancy &amp; failover</p><p class="ship-note">A second path for the whole show. If the primary drops, the stream stays up.</p></li>
        </ul>
        <dl class="fleet-stats" data-rise><div><dt>18</dt><dd>tournaments broadcast</dd></div><div><dt>4</dt><dd>game titles</dd></div><div><dt>3</dt><dd>countries on record</dd></div></dl>
      </div>
    </section>

    <!-- 6 · Booking -->
    <section class="stop stop-book" id="book" data-st="6" aria-label="Book a crossing">
      <div class="panel book" data-panel="6">
        <p class="kicker" data-rise>Plan an event</p>
        <h2 class="book-title" data-rise>Put your tournament on the map.</h2>
        <p class="book-lede" data-rise>Pick where it happens and the game. We take it from there with a production plan and a quote.</p>
        <form class="booking" data-rise onsubmit="return false">
          <label class="field"><span>Produced by</span><input value="AOBS" readonly></label>
          <label class="field"><span>Where</span>
            <select name="dest">
              <option value="lanternholm">Online · remote</option><option value="amberlea">Bangladesh</option><option value="hollowmere">Pakistan</option><option value="hanakumo">Nepal</option>
            </select>
          </label>
          <label class="field"><span>First match day</span><input type="date" name="date"></label>
          <label class="field field-small"><span>Game</span><select name="pax"><option selected>MLBB</option><option>Free Fire</option><option>PUBG Mobile</option><option>FC Mobile</option><option>Other</option></select>
          </label>
          <button class="btn btn-coral btn-big" type="submit" data-magnetic>Start the brief</button>
        </form>
        <p class="book-note" data-rise>This opens the full request form with your answers filled in.</p>
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="foot-cloud" aria-hidden="true"></div>
    <div class="foot-inner">
      <p class="foot-mark">AOBS <i>on the map</i></p>
      <div class="foot-cols">
        <div><h4>AOBS</h4><p>Esports broadcast production<br>Pakistan · Nepal · Bangladesh<br><a href="/contact">Request a quote</a></p></div>
        <div><h4>On the map</h4><p><a href="#lanternholm" data-go="1">Online</a><br><a href="#amberlea" data-go="2">Bangladesh</a><br><a href="#hollowmere" data-go="3">Pakistan</a><br><a href="#hanakumo" data-go="4">Nepal</a></p></div>
        <div><h4>Services</h4><p><a href="/broadcast">Broadcast</a><br><a href="/graphics-data">Graphics &amp; data</a><br><a href="/technology">Technology</a><br><a href="/work">Work</a></p></div>
        <div><h4>Credits</h4><p>Island scene and engine: <a href="https://github.com/blendi-remade/dioramas" target="_blank" rel="noopener">Dioramas</a> (MIT / CC BY 4.0). <a href="https://desiate.com" target="_blank" rel="noopener">Developed by Desiate</a></p></div>
      </div>
      <p class="foot-small"><span>© ${new Date().getFullYear()} AOBS. All rights reserved.</span><span>18 tournaments on record</span></p>
    </div>
  </footer>

  <!-- chrome over the world -->
  <div class="pins" aria-hidden="true"></div>
  <aside class="chart" aria-label="Chart of the drift">
    <p class="chart-title"><span>The broadcast map</span><em class="chart-where">AOBS Cloud</em></p>
    <div class="chart-map"><canvas class="chart-canvas"></canvas><div class="chart-dots"></div></div>
  </aside>
  <div class="toast" role="status"></div>

  
  
`;
