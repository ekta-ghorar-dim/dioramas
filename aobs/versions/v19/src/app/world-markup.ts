// Dioramas "monolith" structure; copy rewritten for AOBS. Server-rendered HTML.
export const WORLD_HTML = `
  <canvas id="gl" aria-hidden="true"></canvas>

  <div class="loader" role="status" aria-live="polite">
    <svg class="loader-dial" viewBox="0 0 240 132" aria-hidden="true">
      <path class="loader-arc" d="M10 120 A110 110 0 0 1 230 120" />
      <line x1="0" y1="120" x2="240" y2="120" class="loader-horizon" />
      <g class="loader-ticks"></g>
      <circle class="loader-sun" r="5" cx="10" cy="120" />
    </svg>
    <p class="loader-line"><span class="loader-label">Plotting the show day</span><span class="loader-pct">00</span></p>
    <p class="loader-meta mono">AOBS · match day · load-in to wrap</p>
  </div>

  <header class="nav">
    <a class="brand" href="/" aria-label="AOBS home">
      <i class="brand-mark" aria-hidden="true"></i><span>AOBS</span>
    </a>
    <nav class="links" aria-label="Primary">
      <a href="#works"><span class="mono">01</span>Work</a>
      <a href="#cliff"><span class="mono">02</span>The final</a>
      <a href="#principles"><span class="mono">03</span>Principles</a>
      <a href="#studio"><span class="mono">04</span>Crew</a>
    </nav>
    <a class="btn btn-line" href="/contact" data-magnetic>Request a quote <span aria-hidden="true">→</span></a>
  </header>

  <!-- Sun HUD: always present, it is the page's main control -->
  <div class="sun-tag" aria-hidden="true"><span class="sun-tag-time">18:52</span><span class="sun-tag-hint">Drag the show day</span></div>
  <div class="hud" aria-label="Time of day">
    <div class="hud-read">
      <p class="hud-time" aria-live="off">18:52</p>
      <p class="hud-meta mono"><span class="hud-phase">Match day</span><span>Az <b class="hud-az">283°</b></span><span>Alt <b class="hud-alt">21°</b></span><span class="hud-shw">Shadow <b class="hud-sh">×0.4</b></span></p>
    </div>
    <button class="play" type="button" aria-label="Play the whole day" data-cursor="label" data-cursor-label="Play"><svg viewBox="0 0 16 16" aria-hidden="true"><path class="i-play" d="M5 3.5v9l7.5-4.5z"/><path class="i-pause" d="M4.5 3.5h2.5v9H4.5zM9 3.5h2.5v9H9z"/></svg><span class="mono">Play the day</span></button>
    <div class="daybar" role="slider" tabindex="0" aria-label="Time of the show day" aria-valuemin="5.5" aria-valuemax="22.75" aria-valuenow="18.9" aria-valuetext="18:52">
      <div class="daybar-sky"></div>
      <div class="daybar-ticks"></div>
      <div class="daybar-knob"><i></i></div>
    </div>
  </div>

  <main id="top">
<section class="hero" data-k="hero">
<div class="grid">
<p class="hero-meta mono col-a">AOBS<br>Esports broadcast production<br>Pakistan · Nepal · Bangladesh</p>
<p class="hero-meta mono col-b">Match days, finals<br>and everything between</p>
<h1 class="hero-title">
<span class="line"><span>From load-in</span></span>
<span class="line"><span>to <em>the last game.</em></span></span>
</h1>
<p class="hero-sub">AOBS is an esports broadcast production company. A show day has its own light: rehearsal, holding screen, group matches, the final, the wrap. The sun on this building stands for that day. Take it and move it.</p>
</div>
<p class="scroll-cue mono" aria-hidden="true"><i></i>Scroll — through the show day</p>
</section>
<section class="works" id="works" data-k="works">
<div class="grid">
<header class="sec-head">
<p class="mono sec-num">01 — Selected work</p>
<h2>Five events, <em>five kinds of light.</em></h2>
</header>
<ol class="work-list">
<li class="work" data-img="" data-self>
<span class="w-num mono">01</span>
<span class="w-name"><a href="/work/pakistan-community-cup">Pakistan Community Cup</a></span>
<span class="w-place">MLBB · Pakistan</span>
<span class="w-light mono"><span class="wl-a">Built for a best-of-five grand final</span><span class="wl-b">Scroll for the case study →</span></span>
<span class="w-year mono">2025</span>
</li>
<li class="work" data-img="stal">
<span class="w-num mono">02</span>
<span class="w-name"><a href="/work/pakistan-community-cup">PCC campaign</a></span>
<span class="w-place">Key visual · posters</span>
<span class="w-light mono">Built before the first match</span>
<span class="w-year mono">2025</span>
</li>
<li class="work" data-img="mertola">
<span class="w-num mono">03</span>
<span class="w-name"><a href="/work/mini-mayhem">Mini Mayhem</a></span>
<span class="w-place">MLBB · sponsor package</span>
<span class="w-light mono">Built around a sponsor</span>
<span class="w-year mono">Bo1</span>
</li>
<li class="work" data-img="ulvik">
<span class="w-num mono">04</span>
<span class="w-name"><a href="/work/mlbb-womens-war">MLBB Women’s War</a></span>
<span class="w-place">MLBB · launch identity</span>
<span class="w-light mono">Built for the announcement</span>
<span class="w-year mono">—</span>
</li>
<li class="work" data-img="lajes">
<span class="w-num mono">05</span>
<span class="w-name"><a href="/work/aobs-halloween-fest">AOBS Halloween Fest</a></span>
<span class="w-place">MLBB · our own event</span>
<span class="w-light mono">Built for the night</span>
<span class="w-year mono">—</span>
</li>
</ol>
<p class="works-note mono">Hover an event · 18 tournaments broadcast across 4 titles</p>
</div>
<figure class="work-reveal" aria-hidden="true"><div class="work-reveal-in"></div><figcaption class="mono"></figcaption></figure>
</section>
<section class="cliff" id="cliff">
<div class="cliff-intro" data-k="cliffIntro">
<div class="grid">
<header class="sec-head">
<p class="mono sec-num">02 — Case study</p>
<h2>The grand final, <em>hour by hour.</em></h2>
</header>
<dl class="facts">
<div><dt class="mono">Event</dt><dd>Pakistan Community Cup, MLBB</dd></div>
<div><dt class="mono">Stage</dt><dd>Grand final, best of 5</dd></div>
<div><dt class="mono">Prize pool</dt><dd>30,000 diamonds</dd></div>
<div><dt class="mono">Partner</dt><dd>Potatos Gaming, streaming</dd></div>
</dl>
</div>
</div>
<article class="step step-plan" data-k="plan">
<div class="step-card">
<p class="mono step-num">A — Before game one</p>
<h3>The holding screen, <em>T−15.</em></h3>
<p>Countdown, the up-next match card and the streaming partner, all in the cup’s green. The stream looks like the event before a single game starts.</p>
<p class="step-note mono">Holding screen · countdown · up next</p>
</div>
</article>
<article class="step step-section" data-k="section">
<div class="step-card">
<p class="mono step-num">B — The draft</p>
<h3>Pick and ban, <em>as it locks.</em></h3>
<p>A board for a best-of-five: bans, picks and the round, filling as the draft happens. Casters read it; viewers see it.</p>
<p class="step-note mono">Ban phase · best of 5 · round 1</p>
</div>
</article>
<article class="step step-detail" data-k="detail">
<div class="step-card">
<p class="mono step-num">C — The game</p>
<h3>Where the data <em>meets the fight.</em></h3>
<p>The in-game HUD carries the team scoreboard, kills, turrets, gold and the clock across the top, the minimap and both rosters at the sides, with a backup stream running underneath.</p>
<p class="step-note mono">In-game HUD · from match data</p>
</div>
</article>
</section>
<section class="principles" id="principles" data-k="principles">
<div class="grid">
<header class="sec-head">
<p class="mono sec-num">03 — Principles</p>
<h2>Four rules we keep <em>on every show.</em></h2>
</header>
<ol class="rules">
<li><span class="r-num">01</span><div><h3>Running order before graphics.</h3><p>We write the show day first: holding screen, draft, games, replays, breaks. The package follows the run of show, never the other way round.</p></div></li>
<li><span class="r-num">02</span><div><h3>One identity, honestly.</h3><p>Every event gets its own look, from the registration poster to the winner screen, and it stays consistent across all of them.</p></div></li>
<li><span class="r-num">03</span><div><h3>Data is a material.</h3><p>Scores, gold, turrets and drafts come from the match. If a number is on screen, the game put it there.</p></div></li>
<li><span class="r-num">04</span><div><h3>Never go dark.</h3><p>A second stream path runs under every show. If the primary fails, Backup Streamer takes the programme.</p></div></li>
</ol>
</div>
</section>
<section class="studio" id="studio" data-k="studio">
<div class="grid">
<header class="sec-head">
<p class="mono sec-num">04 — The crew</p>
<h2>One crew, <em>three countries of daylight.</em></h2>
</header>
<p class="studio-lede">Our tournaments have gone out in Pakistan, Nepal and Bangladesh, and anywhere with an internet line through AOBS Cloud. Below: the Pakistan Community Cup grand final, as broadcast.</p>
<figure class="studio-img"><img src="/img/monolith/studio.webp" alt="Pakistan Community Cup grand final, AOBS in-game HUD" loading="lazy"><figcaption class="mono">Pakistan Community Cup — grand final, in-game</figcaption></figure>
<div class="stats">
<div><b>18</b><span class="mono">tournaments broadcast</span></div>
<div><b>4</b><span class="mono">game titles</span></div>
<div><b>3</b><span class="mono">countries on record</span></div>
<div><b>3</b><span class="mono">tools built in-house</span></div>
</div>
<ul class="awards">
<li><span class="mono">Tool</span><span><a href="/technology/aobs-cloud">AOBS Cloud</a></span><span>Cloud production platform</span></li>
<li><span class="mono">Tool</span><span><a href="/technology/obs-plugins">OBS Plugins</a></span><span>Custom plugins, built in-house</span></li>
<li><span class="mono">Tool</span><span><a href="/technology/backup-streamer">Backup Streamer</a></span><span>Redundancy and failover</span></li>
<li><span class="mono">Model</span><span>Venue · remote · hybrid</span><span>Wherever the gallery should sit</span></li>
<li><span class="mono">Titles</span><span>MLBB · Free Fire</span><span>PUBG Mobile · FC Mobile</span></li>
</ul>
</div>
</section>
<section class="contact" id="contact" data-k="contact">
<div class="grid">
<p class="mono sec-num">05 — Your event</p>
<h2 class="contact-title">Tell us when the sun <em>rises on your show day.</em></h2>
<p class="contact-lede">Dates and a format are enough to begin. Send us the game, the schedule and the platforms, and we reply with a run of show and a quote.</p>
<div class="contact-cta">
<a class="btn btn-solid" href="/contact" data-magnetic>Request a quote <span aria-hidden="true">→</span></a>
<a class="btn btn-line" href="/work" data-magnetic>See the work</a>
</div>
</div>
</section>
<footer class="foot" data-k="footer">
<div class="grid">
<div class="foot-office"><p class="mono">AOBS</p><p>Esports broadcast production<br>Pakistan · Nepal · Bangladesh</p><p class="mono foot-clock" data-off="0">—</p></div>
<div class="foot-office"><p class="mono">Credits</p><p>Scene and engine: <a href="https://github.com/blendi-remade/dioramas" target="_blank" rel="noopener">Dioramas</a><br><a href="https://desiate.com" target="_blank" rel="noopener">Developed by Desiate</a></p><p class="mono foot-clock" data-off="1">—</p></div>
<nav class="foot-links" aria-label="Footer"><a href="/broadcast">Broadcast</a><a href="/graphics-data">Graphics</a><a href="/technology">Technology</a><a href="/work">Work</a><a href="/contact">Contact</a></nav>
<p class="foot-mark">AOBS</p>
<p class="foot-legal mono">© ${new Date().getFullYear()} AOBS. All rights reserved. · Time shown is the show day’s, not yours.</p>
</div>
</footer>
</main>

  <div class="anchors" aria-hidden="true"></div>

  
  
`;
