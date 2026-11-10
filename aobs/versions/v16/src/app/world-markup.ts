// Dioramas "lowfreq" structure; copy rewritten for AOBS. Server-rendered HTML.
export const WORLD_HTML = `
  <canvas id="gl" aria-hidden="true"></canvas>
  <div class="grain" aria-hidden="true"></div>

  <div class="loader" role="status" aria-live="polite">
    <div class="loader-disc" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <circle class="ld-body" cx="100" cy="100" r="96"/>
        <g class="ld-grooves"></g>
        <circle class="ld-label" cx="100" cy="100" r="31"/>
        <circle class="ld-hole" cx="100" cy="100" r="2.4"/>
      </svg>
      <span class="loader-pct">000</span>
    </div>
    <p class="loader-line mono">Warming the gallery</p>
  </div>

  <header class="nav">
    <a class="brand" href="/" aria-label="AOBS home">
      <img src="/brand/aobs-logo-white.png" width="24" height="25" alt="" aria-hidden="true" style="width:24px;height:auto">
      <span>AOBS</span>
    </a>
    <nav class="links" aria-label="Primary">
      <a href="#pressing">Running order</a>
      <a href="#bar">The gallery</a>
      <a href="#catalogue">Events</a>
      <a href="/work">Work</a>
    </nav>
    <div class="nav-right">
      <button class="sound" type="button" aria-pressed="false" data-cursor="link">
        <span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        <span class="sound-label mono">Sound off</span>
      </button>
      <a class="btn btn-ghost" href="/contact" data-magnetic>Request a quote</a>
    </div>
  </header>

  <main id="top">
<section class="sec hero" id="hero" data-cam="hero">
<div class="hero-copy">
<p class="eyebrow mono"><span class="dot"></span> AOBS · Esports broadcast production company</p>
<h1 class="title"><span class="line">Rewind</span><span class="line">the moment<em>.</em></span></h1>
<p class="sub">AOBS is an esports broadcast production company. Replays, the caster mix, the crowd, the music bed under the countdown: the part of a broadcast you feel before you see it. Put your hand on the record and scrub it, the way our replay position does.</p>
<div class="hero-cta">
<button class="btn btn-solid play-main" type="button" data-magnetic>
<span class="pi" aria-hidden="true"></span><span class="pl">Drop the needle</span>
</button>
<a class="btn btn-ghost" href="#pressing" data-magnetic>Tonight’s running order</a>
</div>
</div>
<p class="vert jp" aria-hidden="true">REPLAY · REWIND · ROLL</p>
<div class="hero-meta mono" aria-hidden="true">
<span>AOBS · Side A</span><span class="rpm-read">33⅓ rpm</span><span class="bpm-read">— bpm</span>
</div>
</section>
<section class="sec pressing" id="pressing" data-cam="press">
<div class="col col-right">
<p class="eyebrow mono">02 — Tonight’s running order</p>
<h2>One match day, <em>side A</em></h2>
<p class="byline mono">Four segments · one crew · one programme</p>
<p class="lede">Every match day goes out in the same order. Cue a segment and the arm finds it; each has its own bed, the way the show does.</p>
<ol class="tracks">
<li data-track="0"><button type="button" class="cue" data-cursor="link" aria-label="Cue A1"><span class="ci" aria-hidden="true"></span></button><span class="tn mono">A1</span><span class="tt">Holding screen bed</span><span class="tb mono">T−15</span><span class="td mono">pre-show</span></li>
<li data-track="1"><button type="button" class="cue" data-cursor="link" aria-label="Cue A2"><span class="ci" aria-hidden="true"></span></button><span class="tn mono">A2</span><span class="tt">Draft, pick and ban</span><span class="tb mono">T−5</span><span class="td mono">draft</span></li>
<li data-track="2"><button type="button" class="cue" data-cursor="link" aria-label="Cue A3"><span class="ci" aria-hidden="true"></span></button><span class="tn mono">A3</span><span class="tt">Game one</span><span class="tb mono">00:00</span><span class="td mono">live</span></li>
<li data-track="3"><button type="button" class="cue" data-cursor="link" aria-label="Cue A4"><span class="ci" aria-hidden="true"></span></button><span class="tn mono">A4</span><span class="tt">Replay and stats</span><span class="tb mono">break</span><span class="td mono">between</span></li>
</ol>
<p class="fine mono">Each cue is a short loop synthesised in your browser when you press it. Nothing is streamed or sampled.</p>
<div class="buy">
<span class="price">18</span>
<a class="btn btn-solid" href="/contact" data-magnetic>Request a quote</a>
<span class="mono stock"><i></i> tournaments on record</span>
</div>
</div>
</section>
<section class="sec bar" id="bar" data-cam="bar">
<div class="col col-left">
<p class="eyebrow mono">03 — The gallery</p>
<h2>One room. <em>One rule</em> we never break.</h2>
<p class="lede">A broadcast gallery is a listening room with more screens. Observers, replay, casters and the director share one programme, and everybody in the room is accountable for what goes out.</p>
</div>
<div class="bar-grid">
<article class="rule">
<p class="mono k">House rule</p>
<p class="big">No dead air.</p>
<p class="small">A backup stream runs under every show. If the primary fails, the programme keeps playing.</p>
</article>
<article>
<p class="mono k">Positions</p>
<p class="mid">Observers · replay<br>casters · director</p>
<p class="small">Observers read the map ahead of the fight; replay rolls the moment back at the next break.</p>
</article>
<article>
<p class="mono k">Sound</p>
<p class="mid">Game, casters, crowd</p>
<p class="small">Caster returns, game audio and the room, mixed into the programme your viewers hear.</p>
</article>
<article>
<p class="mono k">Sponsors</p>
<p class="mid">On the sheet, not ad-libbed</p>
<p class="small">Squeeze-backs, in-game slots and holding panels, scheduled like everything else.</p>
</article>
</div>
<div class="stats">
<div><b>18</b><span class="mono">tournaments</span></div>
<div><b>4</b><span class="mono">game titles</span></div>
<div><b>3</b><span class="mono">countries</span></div>
<div><b>3</b><span class="mono">tools we built</span></div>
</div>
</section>
<section class="sec catalogue" id="catalogue" data-cam="cat">
<div class="cat-head">
<p class="eyebrow mono">04 — The catalogue</p>
<h2>Every event, <em>its own sleeve.</em></h2>
<p class="lede">Each tournament gets its own identity before it gets a broadcast. These are AOBS key visuals from the portfolio.</p>
</div>
<div class="sleeves">
<article class="sleeve" data-img="aubergine"><div class="sl-art"><div class="sl-disc"></div><div class="sl-cover"></div></div><p class="mono sl-cat">MLBB · 2025</p><h3><a href="/work/pakistan-community-cup">Pakistan Community Cup</a></h3><p class="sl-by">Key visual</p><p class="mono sl-st on">Grand final Bo5</p></article>
<article class="sleeve" data-img="tidal"><div class="sl-art"><div class="sl-disc"></div><div class="sl-cover"></div></div><p class="mono sl-cat">MLBB</p><h3><a href="/work/mlbb-womens-war">MLBB Women’s War</a></h3><p class="sl-by">Launch visual</p><p class="mono sl-st">#FightForChampions</p></article>
<article class="sleeve" data-img="counter"><div class="sl-art"><div class="sl-disc"></div><div class="sl-cover"></div></div><p class="mono sl-cat">MLBB · 2025</p><h3><a href="/work/pakistan-community-cup">Prize pool reveal</a></h3><p class="sl-by">Pakistan Community Cup</p><p class="mono sl-st">30,000 diamonds</p></article>
<article class="sleeve" data-img="rain"><div class="sl-art"><div class="sl-disc"></div><div class="sl-cover"></div></div><p class="mono sl-cat">MLBB</p><h3><a href="/work/aobs-halloween-fest">AOBS Halloween Fest</a></h3><p class="sl-by">Registration</p><p class="mono sl-st">AOBS event</p></article>
<article class="sleeve" data-img="valves"><div class="sl-art"><div class="sl-disc"></div><div class="sl-cover"></div></div><p class="mono sl-cat">MLBB</p><h3><a href="/work/mini-mayhem">Mini Mayhem</a></h3><p class="sl-by">Semi-final holding screen</p><p class="mono sl-st">Sponsor package</p></article>
<article class="sleeve" data-img="geometry"><div class="sl-art"><div class="sl-disc"></div><div class="sl-cover"></div></div><p class="mono sl-cat">MLBB · 2025</p><h3><a href="/work/pakistan-community-cup">Registration open</a></h3><p class="sl-by">Pakistan Community Cup</p><p class="mono sl-st">Campaign</p></article>
</div>
</section>
<section class="sec club" id="club" data-cam="club">
<div class="col col-left">
<p class="eyebrow mono">05 — How we run it</p>
<h2>Three ways to put it <em>on air.</em></h2>
<p class="lede">Where the gallery sits depends on the event. The crew, the package and the backup path don’t change.</p>
</div>
<div class="tiers">
<article class="tier">
<header><p class="mono k">Remote</p><p class="price">Cloud<span class="mono">gallery</span></p></header>
<ul><li>Gallery in AOBS Cloud</li><li>Casters and observers connect remotely</li><li>No venue build</li></ul>
<a class="btn btn-ghost" href="/broadcast#remote" data-magnetic>Remote production</a>
</article>
<article class="tier tier-lit">
<header><p class="mono k">Venue <span class="tag">LAN finals</span></p><p class="price">On site<span class="mono">gallery</span></p></header>
<ul><li>Control room and observer room on site</li><li>Stage and LED screen feeds</li><li>Player, caster and crowd cameras</li><li>Backup stream underneath</li></ul>
<a class="btn btn-solid" href="/broadcast#venue" data-magnetic>Venue production</a>
</article>
<article class="tier">
<header><p class="mono k">Hybrid</p><p class="price">Both<span class="mono">split</span></p></header>
<ul><li>Cameras and stage on site</li><li>Switching, graphics and replay in the cloud</li><li>A lighter build</li></ul>
<a class="btn btn-ghost" href="/broadcast#hybrid" data-magnetic>Hybrid production</a>
</article>
</div>
</section>
<footer class="sec visit" id="visit" data-cam="end">
<div class="visit-inner">
<p class="eyebrow mono">06 — Your event</p>
<h2 class="foot-title">Countdown at T−15.<br><em>Needle</em> at zero.</h2>
<div class="foot-cta">
<a class="btn btn-solid" href="/contact" data-magnetic>Request a quote</a>
<a class="btn btn-ghost" href="/work" data-magnetic>See the work</a>
</div>
<div class="foot-cols">
<p class="mono">AOBS<br>Esports broadcast production<br>Pakistan · Nepal · Bangladesh</p>
<p class="mono"><a href="/broadcast">Broadcast</a><br><a href="/graphics-data">Graphics &amp; data</a><br><a href="/technology">Technology</a></p>
<p class="mono"><a href="/about">About</a><br><a href="/insights">Insights</a><br><a href="https://desiate.com" target="_blank" rel="noopener">Developed by Desiate</a></p>
<p class="mono colophon">Every sound on this page is synthesised live with the Web Audio API. Turntable scene and engine: <a href="https://github.com/blendi-remade/dioramas" target="_blank" rel="noopener">Dioramas</a> (MIT / CC BY 4.0). © ${new Date().getFullYear()} AOBS. All rights reserved.</p>
</div>
</div>
</footer>
</main>

  <!-- Projected over the 3D record -->
  <div class="fx">
  <div class="scratch" data-cursor="drag" data-cursor-label="Scratch" aria-label="Drag the record to scratch" role="slider" aria-valuetext="record"></div>
  <div class="hint" aria-hidden="true">
    <svg viewBox="0 0 200 200">
      <defs><path id="hintPath" d="M100,100 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0"/></defs>
      <text><textPath href="#hintPath" startOffset="0">HOLD &amp; DRAG TO SCRATCH · LET GO AND IT RIDES AGAIN · HOLD &amp; DRAG TO SCRATCH · LET GO AND IT RIDES AGAIN ·</textPath></text>
    </svg>
  </div>
  <div class="hint-chip mono" aria-hidden="true"><span class="hand"></span>Drag the record</div>
  <svg class="leader" aria-hidden="true"><path d=""/><circle r="3.5"/></svg>
  </div>

  <div class="player" role="region" aria-label="Deck">
    <button class="pp" type="button" aria-label="Play" data-cursor="link"><span class="pi" aria-hidden="true"></span></button>
    <div class="now"><span class="mono np-k">Now on the deck</span><span class="np-t">A1 · Holding screen bed</span></div>
    <div class="rpm mono" role="group" aria-label="Speed"><button type="button" class="on" data-rpm="1">33</button><button type="button" data-rpm="1.35">45</button></div>
  </div>
  <div class="toast mono" role="status"></div>

  
  
`;
