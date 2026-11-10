// Dioramas "koen" structure; copy rewritten for AOBS. Server-rendered HTML.
export const WORLD_HTML = `
  <canvas id="gl" aria-hidden="true"></canvas>

  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
      <filter id="brush" x="-5%" y="-40%" width="110%" height="180%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035 0.9" numOctaves="3" seed="7" result="n"/>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G"/>
      </filter>
      <filter id="brush-soft" x="-5%" y="-40%" width="110%" height="180%">
        <feTurbulence type="fractalNoise" baseFrequency="0.02 0.6" numOctaves="2" seed="3" result="n"/>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="4"/>
      </filter>
    </defs>
  </svg>

  <div class="loader" role="status" aria-live="polite">
    <div class="loader-enso"><img data-src="img/koen/enso.webp" alt=""><p class="loader-seal" aria-hidden="true"><span>AO</span><span>BS</span></p></div>
    <p class="loader-line">Preparing the season <span class="loader-pct">0</span></p>
  </div>

  <header class="nav">
    <a class="brand" href="/" aria-label="AOBS home">
      <span class="seal" aria-hidden="true"><i>AO</i><i>BS</i></span>
      <span class="brand-name">AOBS<small>Broadcast production</small></span>
    </a>
    <nav class="links" aria-label="Primary">
      <a href="#seasons">The season</a>
      <a href="#nursery">On record</a>
      <a href="#craft">Tools</a>
      <a href="/work">Work</a>
    </nav>
    <a class="btn btn-line" href="/contact" data-magnetic>Request a quote</a>
  </header>

  <main id="top">
<section class="hero" aria-labelledby="hero-title">
<div class="hero-inner">
<p class="eyebrow">AOBS <i></i> Esports broadcast production company <i></i> Leagues &amp; circuits</p>
<h1 id="hero-title" class="hero-title">
<span class="ln">One tournament,</span>
<span class="ln">four</span>
<span class="ln"><em>seasons.</em></span>
</h1>
<p class="hero-sub">AOBS is an esports broadcast production company. A league is a living thing: it opens, grows through weeks of match days, turns red for the final, and rests before the next. We produce every season of it with one crew, and the same care each time.</p>
<div class="hero-cta">
<a class="btn btn-ink" href="/contact" data-magnetic>Request a quote</a>
<a class="btn btn-line" href="#seasons" data-magnetic>Turn the season</a>
</div>
</div>
<p class="hero-vert" aria-hidden="true">REGISTRATION · GROUPS · FINAL · REST</p>
<ul class="hint" aria-label="How to explore">
<li><b>Scroll</b> to turn the season</li>
<li><b>Drag</b> the dial</li>
<li><b class="hint-touch">Touch</b> the tree</li>
</ul>
</section>
<section class="seasons" id="seasons" aria-label="Four seasons of a tournament">
<div class="seasons-pin">
<p class="kicker">A season, in four trees <span class="kicker-jp">I–IV</span></p>
<ol class="rail" aria-hidden="true">
<li data-i="0"><b>I</b><span>open</span><em>registration</em></li>
<li data-i="1"><b>II</b><span>grow</span><em>group stage</em></li>
<li data-i="2"><b>III</b><span>peak</span><em>the final</em></li>
<li data-i="3"><b>IV</b><span>rest</span><em>off-season</em></li>
</ol>
<div class="season-copy">
<article data-i="2">
<p class="s-num">01 <i></i> The final · the red week</p>
<h2>A few days <em>of red.</em></h2>
<p>Everything a season builds up goes on screen at once: the draft board for a best-of-five, the in-game HUD in the event’s colours, the stage, the trophy. On the Pakistan Community Cup it was a grand final in green and gold, with a 30,000-diamond prize pool.</p>
<p class="s-note"><b>On air</b> Draft board, HUD, holding screen, winner moments, backup stream underneath.</p>
</article>
<article data-i="3">
<p class="s-num">02 <i></i> Off-season · the bare tree</p>
<h2>The structure, <em>undressed.</em></h2>
<p>With the leaves gone you see the work: every branch of the production placed on purpose, from observers to the cloud encoder. This is when the next season’s identity and package are drawn.</p>
<p class="s-note"><b>Behind the scenes</b> The next brief: format, platforms, sponsors, look.</p>
</article>
<article data-i="0">
<p class="s-num">03 <i></i> Registration · first leaves</p>
<h2>Lighter <em>than air.</em></h2>
<p>A season starts before anyone plays: the key visual, the “registration open” poster, the slots-left countdown, the prize-pool reveal. AOBS ran this whole campaign for the Pakistan Community Cup.</p>
<p class="s-note"><b>On social</b> Key visual, registration, slots left, prize pool.</p>
</article>
<article data-i="1">
<p class="s-num">04 <i></i> Group stage · deep green</p>
<h2>Storing <em>the light.</em></h2>
<p>The long middle of a league: match day after match day, the same running order every time, holding screen at T−15, draft at T−5, game at zero. Remote production keeps it affordable; the backup stream keeps it on air.</p>
<p class="s-note"><b>Every match day</b> Observers, data graphics, casters, sponsors, two stream paths.</p>
</article>
</div>
<div class="season-progress" aria-hidden="true"><i></i></div>
<p class="season-glyph" aria-hidden="true"><span data-i="0">I</span><span data-i="1">II</span><span data-i="2">III</span><span data-i="3">IV</span></p>
</div>
</section>
<div class="brush-divider bd-right" aria-hidden="true"></div>
<section class="nursery panel" id="nursery" aria-labelledby="nursery-title">
<div class="panel-col">
<p class="kicker">The garden <span class="kicker-jp">on record</span></p>
<h2 id="nursery-title">Events we have looked after, <em>season by season.</em></h2>
<p class="lede">Eighteen tournaments have gone out through an AOBS production. Hover a name to see its identity.</p>
<ol class="catalogue">
<li data-img="media/key-visuals/pakistan-community-cup-key-visual.webp">
<span class="c-no">MLBB</span>
<span class="c-name"><b>PCC</b> <a href="/work/pakistan-community-cup">Pakistan Community Cup</a> <small>grand final · best of 5</small></span>
<span class="c-age">2025<small>Pakistan</small></span>
<span class="c-price">Full campaign</span>
</li>
<li data-img="media/broadcast/mini-mayhem-semi-final-stream-starting-screen.webp">
<span class="c-no">MLBB</span>
<span class="c-name"><b>MM</b> <a href="/work/mini-mayhem">Mini Mayhem</a> <small>top eight · semi-finals</small></span>
<span class="c-age">Bo1<small>sponsor package</small></span>
<span class="c-price">3 sponsor formats</span>
</li>
<li data-img="media/key-visuals/mlbb-womens-war-coming-soon-key-visual.webp">
<span class="c-no">MLBB</span>
<span class="c-name"><b>WW</b> <a href="/work/mlbb-womens-war">MLBB Women’s War</a> <small>launch identity</small></span>
<span class="c-age">—<small>#FightForChampions</small></span>
<span class="c-price">Key visual</span>
</li>
<li data-img="media/key-visuals/aobs-halloween-fest-registration-poster.webp">
<span class="c-no">MLBB</span>
<span class="c-name"><b>HF</b> <a href="/work/aobs-halloween-fest">AOBS Halloween Fest</a> <small>our own seasonal event</small></span>
<span class="c-age">—<small>run by AOBS</small></span>
<span class="c-price">Registration</span>
</li>
<li class="c-ours">
<span class="c-no">All</span>
<span class="c-name"><b>18</b> <a href="/work">Every tournament</a> <small>MLBB · Free Fire · PUBG Mobile · FC Mobile</small></span>
<span class="c-age">3<small>countries</small></span>
<span class="c-price">See all</span>
</li>
</ol>
<p class="fine">Each event keeps its own identity; the crew and the method stay the same.</p>
<a class="btn btn-ink" href="/work" data-magnetic>See the work</a>
</div>
</section>
<section class="craft" id="craft" aria-label="The craft">
<div class="craft-pin">
<p class="kicker">The craft <span class="kicker-jp">three tools</span></p>
<h2 class="craft-title">Three tools. <em>Every season.</em></h2>
<div class="craft-steps">
<article data-i="0">
<p class="s-num">I <i></i> The gallery</p>
<h3><b>CLD</b> AOBS Cloud <small>remote production</small></h3>
<p>The gallery in the cloud: sources in, one programme out, delivered to Twitch, YouTube and Kick. It is what keeps a long group stage affordable.</p>
</article>
<article data-i="1">
<p class="s-num">II <i></i> The wiring</p>
<h3><b>PLG</b> OBS Plugins <small>built in-house</small></h3>
<p>The tools OBS does not ship with, written by the crew that needed them on air, and used on our own tournament broadcasts.</p>
</article>
<article data-i="2">
<p class="s-num">III <i></i> The roots</p>
<h3><b>BKP</b> Backup Streamer <small>failover</small></h3>
<p>A second stream path under the whole season. If the primary fails on match day nine, the programme stays on air.</p>
</article>
</div>
<ol class="craft-index" aria-hidden="true"><li>Cloud</li><li>Plugins</li><li>Backup</li></ol>
</div>
</section>
<div class="brush-divider bd-left" aria-hidden="true"></div>
<section class="visit panel" id="visit" aria-labelledby="visit-title">
<div class="panel-col">
<p class="kicker">Your season <span class="kicker-jp">brief</span></p>
<h2 id="visit-title">Bring us one event. <em>Stay for all four seasons.</em></h2>
<dl class="facts">
<div><dt>Format</dt><dd>Single event, league or circuit<br>Venue, remote or hybrid</dd></div>
<div><dt>Titles</dt><dd>MLBB, Free Fire, PUBG Mobile, FC Mobile, and more on request.</dd></div>
<div><dt>Where</dt><dd>Pakistan, Nepal, Bangladesh, and online anywhere through AOBS Cloud.</dd></div>
<div><dt>You bring</dt><dd>Schedule, lobby access, brand assets and the channels you stream to.</dd></div>
</dl>
<div class="visit-cta">
<a class="btn btn-ink" href="/contact" data-magnetic>Request a quote</a>
<a class="btn btn-line" href="/broadcast" data-magnetic>Broadcast production</a>
</div>
</div>
</section>
</main>
<footer class="foot">
<div class="foot-inner">
<div class="foot-mark">
<span class="seal seal-lg" aria-hidden="true"><i>AO</i><i>BS</i></span>
<p class="foot-line">One crew, every season.<br><em>Esports broadcast production.</em></p>
</div>
<nav class="foot-cols" aria-label="Footer">
<div><h4>Services</h4><a href="/broadcast">Broadcast</a><a href="/graphics-data">Graphics &amp; data</a><a href="/technology">Technology</a></div>
<div><h4>AOBS</h4><a href="/work">Work</a><a href="/about">About</a><a href="/contact">Contact</a></div>
<div><h4>Credits</h4><p>Bonsai scene and engine: <a href="https://github.com/blendi-remade/dioramas" target="_blank" rel="noopener">Dioramas</a> (MIT / CC BY 4.0).</p><a href="https://desiate.com" target="_blank" rel="noopener">Developed by Desiate →</a></div>
</nav>
</div>
<div class="foot-base">
<p>© ${new Date().getFullYear()} AOBS. All rights reserved.</p>
<p class="foot-sekki"></p>
</div>
</footer>

  <!-- fixed UI -->
  <div class="dial-wrap">
    <div class="dial" role="slider" aria-valuemin="0" aria-valuemax="4" aria-label="Season dial"></div>
    <p class="dial-caption"></p>
  </div>
  <div class="callout" aria-hidden="true"><svg><line x1="0" y1="0" x2="0" y2="0"/><circle r="3.5"/></svg><p></p></div>
  <div class="preview" aria-hidden="true"><img alt=""></div>

  
  
`;
