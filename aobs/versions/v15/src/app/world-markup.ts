// Dioramas "abyssal" structure; copy rewritten for AOBS. Server-rendered HTML.
export const WORLD_HTML = `
  <canvas id="gl" aria-hidden="true"></canvas>

  <div class="loader" role="status" aria-live="polite">
    <div class="scope" aria-hidden="true">
      <i class="scope-sweep"></i><i class="scope-ring r1"></i><i class="scope-ring r2"></i><i class="scope-ring r3"></i>
      <b class="scope-blip"></b>
      <span class="scope-pct"><em>000</em>%</span>
    </div>
    <p class="loader-title mono">AOBS · pre-show checks</p>
    <ol class="checks mono">
      <li data-at="0.18"><span>Observer feeds</span><b>—</b></li>
      <li data-at="0.42"><span>Backup path</span><b>—</b></li>
      <li data-at="0.66"><span>Graphics package</span><b>—</b></li>
      <li data-at="0.9"><span>Cloud encoder</span><b>—</b></li>
    </ol>
  </div>

  <header class="nav">
    <a class="brand" href="/" aria-label="AOBS home">
      <svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="14" cy="9" r="6.2" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M14 15.2V24" stroke="currentColor" stroke-width="1.3"/><circle cx="14" cy="25.2" r="1.5" fill="currentColor"/><path d="M8.6 9h10.8" stroke="currentColor" stroke-width="1" opacity=".5"/></svg>
      <span>AOBS</span>
    </a>
    <nav class="links" aria-label="Primary">
      <a href="#sunlight">The layers</a>
      <a href="#crew">Redundancy</a>
      <a href="/work">Work</a>
      <a href="#book">Your event</a>
    </nav>
    <div class="nav-end">
      <button class="sound mono" type="button" aria-pressed="false" data-cursor="link"><i></i><span>Sound off</span></button>
      <a class="btn btn-solid" href="/contact" data-magnetic>Request a quote</a>
    </div>
  </header>

  <!-- The instrument: travels down the rail as you descend -->
  <aside class="gauge" aria-label="Depth gauge">
    <div class="rail">
      <ol class="rail-zones mono" aria-hidden="true">
        <li style="--p:0"><span>Programme</span><b>0</b></li>
        <li style="--p:.2"><span>Data</span><b>200</b></li>
        <li style="--p:.4"><span>Gallery</span><b>1,000</b></li>
        <li style="--p:.6"><span>Cloud</span><b>4,000</b></li>
        <li style="--p:.8"><span>Backup</span><b>6,000</b></li>
        <li style="--p:1"><span>The floor</span><b>10,935</b></li>
      </ol>
      <div class="rail-fill"></div>
      <div class="mark"><div class="mark-body">
        <p class="mark-label mono"><span class="mark-zone">Programme</span><span class="mark-time">T+ 0:00:00</span></p>
        <div class="odo" aria-hidden="true"></div>
        <p class="sr-only depth-sr" aria-live="off">0 metres</p>
        <dl class="reads mono">
          <div><dt>Temp</dt><dd><b class="r-temp">27.0</b> °C</dd></div>
          <div><dt>Press</dt><dd><b class="r-press">1</b> atm</dd></div>
          <div><dt>Light</dt><dd><b class="r-light">100</b> %</dd></div>
        </dl>
      </div></div>
    </div>
  </aside>

  <ol class="divelog mono" aria-label="Dive log"></ol>
  <div class="hint mono" aria-hidden="true"><span class="hint-a"><i class="chev"></i>Scroll to descend</span><span class="hint-b"><span class="hint-mouse"><kbd>Move</kbd> steer floodlights <kbd>Fast</kbd> stir plankton <kbd>Click</kbd> sonar ping</span><span class="hint-touch"><kbd>Drag</kbd> steer &amp; stir <kbd>Tap</kbd> sonar ping</span></span></div>
  <div class="toast mono" role="status"></div>
  <div class="tags" aria-hidden="true"></div>
  <div class="hotspots" aria-hidden="true"></div>

  <main>
<section class="stage hero" id="top" data-station="0">
<div class="hero-copy">
<p class="eyebrow mono">AOBS · Esports broadcast production company · five layers deep</p>
<h1><span class="l"><span>What your viewers see</span></span> <span class="l"><span>is the surface.</span></span> <span class="l"><span><em>We run the rest.</em></span></span></h1>
<p class="sub">AOBS is an esports broadcast production company. Under every scorebug there are observers, a switcher, live data, a cloud encoder and a backup stream. Scroll down through all of it.</p>
<div class="cta">
<a class="btn btn-solid" href="/contact" data-magnetic>Request a quote</a>
<a class="btn btn-ghost" href="#sunlight" data-magnetic>Begin the descent <span aria-hidden="true">↓</span></a>
</div>
</div>
</section>
<section class="stage zone left" id="sunlight" data-station="1">
<article class="zone-card">
<header><span class="mono">Layer 01 / 05</span><span class="mono">The surface</span></header>
<h2>Programme <em>What viewers see</em></h2>
<p class="lede">The thin, bright layer everyone sees: the game, the in-game HUD, the scorebug, the holding screen before game one. On the Pakistan Community Cup grand final it carried the team scoreboard, gold, turrets, timer, minimap and both rosters.</p>
<dl class="stats mono">
<div><dt>On screen</dt><dd>HUD · scorebug</dd></div>
<div><dt>Before games</dt><dd>Holding screen</dd></div>
<div><dt>Identity</dt><dd>Per event</dd></div>
<div><dt>Platforms</dt><dd>Twitch · YouTube · Kick</dd></div>
</dl>
<p class="see"><span class="mono">Real example</span><a href="/work/pakistan-community-cup">Pakistan Community Cup, grand final HUD →</a></p>
</article>
</section>
<section class="stage zone left" id="twilight" data-station="2">
<article class="zone-card">
<header><span class="mono">Layer 02 / 05</span><span class="mono">Just below</span></header>
<h2>Data <em>Game API graphics</em></h2>
<p class="lede">Every number on screen comes up from here. Kills, gold, turrets and the draft are read from the match and fed to the graphics, so the scoreboard is never behind the game and nobody retypes a stat.</p>
<dl class="stats mono">
<div><dt>Draft</dt><dd>Live pick/ban</dd></div>
<div><dt>Score</dt><dd>From match data</dd></div>
<div><dt>Stats</dt><dd>Between games</dd></div>
<div><dt>Typed by hand</dt><dd>Nothing</dd></div>
</dl>
<p class="see"><span class="mono">Real example</span><a href="/graphics-data">The Bo5 draft board and stats panels →</a></p>
</article>
</section>
<section class="stage zone left" id="midnight" data-station="3">
<article class="zone-card">
<header><span class="mono">Layer 03 / 05</span><span class="mono">In the dark</span></header>
<h2>Gallery <em>Observers &amp; switcher</em></h2>
<p class="lede">Nobody watching ever sees this layer, and it decides everything they do see. Observers read the map ahead of the fight and drive the in-game cameras; the director cuts them, replay and casters into one programme.</p>
<dl class="stats mono">
<div><dt>Observers</dt><dd>Ahead of the fight</dd></div>
<div><dt>Switcher</dt><dd>One programme</dd></div>
<div><dt>Replay</dt><dd>Rolled at breaks</dd></div>
<div><dt>Casters</dt><dd>Programme return</dd></div>
</dl>
<p class="see"><span class="mono">More</span><a href="/broadcast">Broadcast production →</a></p>
</article>
</section>
<section class="stage zone left" id="abyss" data-station="4">
<article class="zone-card">
<header><span class="mono">Layer 04 / 05</span><span class="mono">The heat</span></header>
<h2>Cloud <em>AOBS Cloud</em></h2>
<p class="lede">The vent at the bottom of the trench: where the finished show is encoded and sent up to every platform at once. Because the gallery can live here too, an online event needs no venue build at all.</p>
<dl class="stats mono">
<div><dt>Encode</dt><dd>Once</dd></div>
<div><dt>Deliver</dt><dd>Every platform</dd></div>
<div><dt>Gallery</dt><dd>Remote if needed</dd></div>
<div><dt>Built by</dt><dd>AOBS</dd></div>
</dl>
<p class="see"><span class="mono">More</span><a href="/technology/aobs-cloud">AOBS Cloud →</a></p>
</article>
</section>
<section class="stage zone left" id="hadal" data-station="5">
<article class="zone-card">
<header><span class="mono">Layer 05 / 05</span><span class="mono">The floor</span></header>
<h2>Backup <em>Backup Streamer</em></h2>
<p class="lede">The deepest layer, and the one everything rests on. A second, independent stream path runs from the first frame of the show to the last. If the primary fails, it takes the programme, and the people at the surface never see an offline screen.</p>
<dl class="stats mono">
<div><dt>Runs</dt><dd>Whole show</dd></div>
<div><dt>On failure</dt><dd>Takes programme</dd></div>
<div><dt>Viewers see</dt><dd>No gap</dd></div>
<div><dt>Built by</dt><dd>AOBS</dd></div>
</dl>
<p class="see"><span class="mono">More</span><a href="/technology/backup-streamer">Backup Streamer →</a></p>
</article>
</section>
<section class="stage pelagia" id="pelagia" data-station="6">
<div class="pelagia-copy">
<p class="eyebrow mono">The vessel</p>
<h2>One crew</h2>
<p class="lede">Everything you just passed is run by the same people, in one signal chain. Most tournaments buy these layers from four vendors. We take the whole dive.</p>
<dl class="specs mono">
<div><dt>On record</dt><dd>18 tournaments</dd></div>
<div><dt>Titles</dt><dd>MLBB · FF · PUBGM · FC Mobile</dd></div>
<div><dt>Countries</dt><dd>Pakistan · Nepal · Bangladesh</dd></div>
<div><dt>Models</dt><dd>Venue · remote · hybrid</dd></div>
<div><dt>Tools we built</dt><dd>3</dd></div>
</dl>
<div class="hs-detail" aria-live="polite"><p class="mono"><span class="hs-d-num">01</span> · <span class="hs-d-sub"></span></p><h3 class="hs-d-title"></h3><p class="hs-d-text"></p></div>
</div>
</section>
<section class="stage book" id="book" data-station="7">
<div class="glass">
<p class="eyebrow mono">Your event</p>
<h2>One brief. One crew. <em>Every layer.</em></h2>
<div class="price-row">
<div class="price">
<p class="mono">Start with</p>
<b>A brief</b>
</div>
<ul class="incl">
<li><span>Game, dates and format: venue, remote or hybrid</span></li>
<li>The platforms you stream to</li>
<li>Your sponsors and the formats they want</li>
<li>Your brand assets: logos, team names and marks</li>
<li>We reply with a production plan and a quote</li>
</ul>
</div>
<table class="dates mono" id="dates">
<thead><tr><th>Event</th><th>Title</th><th>On record</th><th>Footage</th></tr></thead>
<tbody>
<tr><td><a href="/work/pakistan-community-cup">Pakistan Community Cup</a></td><td>MLBB</td><td>Grand final Bo5</td><td><span class="seats"><i class="on"></i><i class="on"></i><i class="on"></i></span> 3 frames</td></tr>
<tr><td><a href="/work/mini-mayhem">Mini Mayhem</a></td><td>MLBB</td><td>Top 8 · semis</td><td><span class="seats"><i class="on"></i><i class="on"></i><i class="on"></i></span> 3 frames</td></tr>
<tr class="full"><td><a href="/work/bwc-2026">BWC 2026</a></td><td>FC Mobile</td><td>LAN</td><td><span class="seats"><i></i><i></i><i></i></span> Mark only</td></tr>
</tbody>
</table>
<div class="book-cta"><a class="btn btn-solid" href="/contact" data-magnetic>Request a quote</a><p class="mono">Or see all eighteen tournaments on the <a href="/work">work page</a>.</p></div>
</div>
</section>
<section class="stage crew" id="crew" data-station="8">
<div class="glass">
<p class="eyebrow mono">Redundancy</p>
<h2>Every show has a second path. <em>That is the point.</em></h2>
<div class="crew-grid">
<article><span class="mono">Primary</span><h3>Main encode</h3><p>The programme as produced, encoded in AOBS Cloud or on site and sent to your channels.</p></article>
<article><span class="mono">Backup</span><h3>Backup Streamer</h3><p>A second, independent path running the whole time, ready to take programme the moment the primary fails.</p></article>
<article><span class="mono">Result</span><h3>No offline screen</h3><p>An encoder crash or a dropped line becomes a log entry instead of a black stream your sponsors paid for.</p></article>
</div>
<ul class="safety mono">
<li><b>2</b><span>independent stream paths under every AOBS show</span></li>
<li><b>3</b><span>platforms from one programme: Twitch, YouTube, Kick</span></li>
<li><b>18</b><span>tournaments broadcast</span></li>
<li><b>1</b><span>crew accountable for all of it</span></li>
</ul>
</div>
</section>
<footer class="stage foot" id="surface" data-station="9">
<div class="foot-inner">
<p class="eyebrow mono">Layer 05 · the floor · you are here</p>
<h2 class="foot-title">Surface.</h2>
<button class="btn btn-solid ascend" type="button" data-magnetic>Begin the ascent <span aria-hidden="true">↑</span></button>
<div class="foot-cols mono">
<p>AOBS<br>Esports broadcast production<br>Pakistan · Nepal · Bangladesh</p>
<p><a href="/contact">Request a quote</a><br><a href="https://desiate.com" target="_blank" rel="noopener">Developed by Desiate</a></p>
<nav aria-label="Footer"><a href="/broadcast">Broadcast</a><a href="/graphics-data">Graphics</a><a href="/technology">Technology</a><a href="/work">Work</a></nav>
</div>
<p class="fine mono">© ${new Date().getFullYear()} AOBS. All rights reserved. Ocean scene and engine: <a href="https://github.com/blendi-remade/dioramas" target="_blank" rel="noopener">Dioramas</a> (MIT / CC BY 4.0)</p>
</div>
</footer>
</main>

  
  
`;
