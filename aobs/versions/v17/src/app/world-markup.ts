// Dioramas "lithos" structure; copy rewritten for AOBS. Server-rendered HTML.
export const WORLD_HTML = `
  <canvas id="gl" aria-hidden="true"></canvas>

  <div class="loader" role="status" aria-live="polite">
    <div class="loader-half loader-top"></div>
    <div class="loader-half loader-bot"></div>
    <div class="loader-core">
      <svg class="loader-stone" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" stroke-width=".6" opacity=".35"/>
        <path class="loader-crack" pathLength="1" d="M16 60 L27 58 L33 62 L41 57 L49 61 L57 58 L64 62 L71 57 L80 61 L88 58 L95 61 L104 60"/>
      </svg>
      <p class="loader-word">AOBS</p>
      <p class="loader-line">Opening the stone <span class="loader-pct">0</span>%</p>
    </div>
  </div>

  <header class="nav">
    <a class="brand" href="/" aria-label="AOBS home">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 18.5 8 16 20.5H8L5.5 8Z M5.5 8h13 M12 2.5 9.5 8 12 20.5 14.5 8Z" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/></svg>
      <span>AOBS</span>
    </a>
    <nav class="links" aria-label="Primary">
      <a href="#collection">Inside</a>
      <a href="#jewellery">Identity</a>
      <a href="/work">Work</a>
      <a href="#visit">Your event</a>
    </nav>
    <div class="nav-right">
      <button class="sound" type="button" aria-pressed="false" data-cursor="link"><i></i><i></i><i></i><span>Sound</span></button>
      <a class="btn btn-ghost" href="/contact" data-magnetic>Request a quote</a>
    </div>
  </header>

  <main id="top">
<section class="hero" data-station="hero">
<p class="eyebrow cz">AOBS &nbsp;·&nbsp; Esports broadcast production company</p>
<h1 class="title" aria-label="A raw stream is a stone.">
<span class="line"><span>A raw stream</span></span>
<span class="line"><span><em>is a</em> stone.</span></span>
</h1>
<div class="hero-foot">
<p class="sub">Grey, closed, and nothing to look at. AOBS is an esports broadcast production company: we crack it open and put what is inside on air.</p>
<p class="label cz"><b>Specimen I</b><br>A raw game feed<br>Still sealed</p>
</div>
</section>
<section class="crack" id="crack" data-station="crack">
<div class="crack-copy">
<p class="eyebrow cz">I &nbsp;·&nbsp; The opening</p>
<h2 class="h2">Every tournament is<br>a sealed stone.</h2>
<p class="lede">Before production it is a lobby, a game client and a spectator view. Observers, graphics, data, sponsors and transmission are what turn it into something people stay to watch.</p>
<p class="lede strong">Open it.</p>
<div class="hold-cta">
<span class="hold-ring" aria-hidden="true"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17"/><circle class="p" cx="20" cy="20" r="17" pathLength="1"/></svg></span>
<span class="cz">Press &amp; hold the stone</span>
</div>
<button class="reseal cz" type="button" data-cursor="link">Seal it again</button>
</div>
</section>
<div id="collection" class="collection">
<header class="col-head">
<p class="eyebrow cz">II &nbsp;·&nbsp; What is inside</p>
<h2 class="h2">Four facets, <em>one broadcast.</em></h2>
</header>
<section class="spec spec-left" data-station="amethyst">
<article class="spec-card">
<p class="spec-num cz"><span>Facet I</span><span>HUD</span></p>
<h3>The In-game HUD</h3>
<p class="spec-desc">Team scoreboard, kills, turrets, gold, timer, minimap and both rosters, filled from match data and set in the event’s own colours.</p>
<dl class="facts">
<div><dt>Event</dt><dd>Pakistan Community Cup</dd></div>
<div><dt>Stage</dt><dd>Grand final</dd></div>
<div><dt>Title</dt><dd>MLBB</dd></div>
<div><dt>Identity</dt><dd>Green, trophy-led</dd></div>
</dl>
<a class="btn btn-solid" href="/work/pakistan-community-cup" data-magnetic>See the case</a>
</article>
</section>
<section class="spec spec-right" data-station="quartz">
<article class="spec-card">
<p class="spec-num cz"><span>Facet II</span><span>Draft</span></p>
<h3>The Draft Board</h3>
<p class="spec-desc">Bans and picks land as they lock in, with the series state on the same screen. Clear enough to read at a glance on a phone.</p>
<dl class="facts">
<div><dt>Event</dt><dd>Pakistan Community Cup</dd></div>
<div><dt>Series</dt><dd>Best of 5</dd></div>
<div><dt>Phase</dt><dd>Ban → pick</dd></div>
<div><dt>Source</dt><dd>The draft itself</dd></div>
</dl>
<a class="btn btn-solid" href="/graphics-data" data-magnetic>Graphics &amp; data</a>
</article>
</section>
<section class="spec spec-left" data-station="pyrite">
<article class="spec-card">
<p class="spec-num cz"><span>Facet III</span><span>Sponsors</span></p>
<h3>The Sponsor Formats</h3>
<p class="spec-desc">Three placements on one show, each square-cut to fit the broadcast: an L-frame around live gameplay, a slot inside the HUD, a panel on the holding screen.</p>
<dl class="facts">
<div><dt>Event</dt><dd>Mini Mayhem</dd></div>
<div><dt>Sponsor</dt><dd>Shadhin Host</dd></div>
<div><dt>Formats</dt><dd>3</dd></div>
<div><dt>Game on screen</dt><dd>Always</dd></div>
</dl>
<a class="btn btn-solid" href="/work/mini-mayhem" data-magnetic>See the case</a>
</article>
</section>
<section class="spec spec-right" data-station="ammonite">
<article class="spec-card">
<p class="spec-num cz"><span>Facet IV</span><span>Backup</span></p>
<h3>The Second Chamber</h3>
<p class="spec-desc">Like the chambers of a shell, a second stream path sits behind the first for the whole show. If the primary fails, Backup Streamer takes the programme.</p>
<dl class="facts">
<div><dt>System</dt><dd>Backup Streamer</dd></div>
<div><dt>Runs</dt><dd>Whole show</dd></div>
<div><dt>On failure</dt><dd>Takes programme</dd></div>
<div><dt>Built by</dt><dd>AOBS</dd></div>
</dl>
<a class="btn btn-solid" href="/technology/backup-streamer" data-magnetic>Backup Streamer</a>
</article>
</section>
</div>
<section class="jewel" id="jewellery" data-station="wide">
<div class="jewel-head">
<p class="eyebrow cz">III &nbsp;·&nbsp; Cut for each event</p>
<h2 class="h2">The identity, <em>before the first game.</em></h2>
<p class="lede">Every tournament gets its own look, cut from the same production. These are AOBS key visuals from the portfolio.</p>
</div>
<div class="pieces">
<figure class="piece">
<div class="piece-img"><img src="/media/key-visuals/pakistan-community-cup-key-visual.webp" alt="Pakistan Community Cup key visual with the trophy" loading="lazy" width="1200" height="1200"></div>
<figcaption><p class="cz piece-from">MLBB · 2025</p><h3><a href="/work/pakistan-community-cup">Pakistan Community Cup</a></h3><p>Trophy-led key visual in the cup’s green.</p><p class="piece-price">Grand final Bo5</p></figcaption>
</figure>
<figure class="piece piece-mid">
<div class="piece-img"><img src="/media/key-visuals/mlbb-womens-war-coming-soon-key-visual.webp" alt="MLBB Women's War coming soon key visual" loading="lazy" width="1200" height="675"></div>
<figcaption><p class="cz piece-from">MLBB</p><h3><a href="/work/mlbb-womens-war">MLBB Women’s War</a></h3><p>Bronze and fire for the launch visual.</p><p class="piece-price">#FightForChampions</p></figcaption>
</figure>
<figure class="piece">
<div class="piece-img"><img src="/media/key-visuals/aobs-halloween-fest-registration-poster.webp" alt="AOBS Halloween Fest registration poster" loading="lazy" width="720" height="534"></div>
<figcaption><p class="cz piece-from">MLBB</p><h3><a href="/work/aobs-halloween-fest">AOBS Halloween Fest</a></h3><p>Our own seasonal event, in pumpkin orange.</p><p class="piece-price">Run by AOBS</p></figcaption>
</figure>
</div>
</section>
<section class="prov" id="provenance" data-station="low">
<div class="prov-inner">
<p class="eyebrow cz">IV &nbsp;·&nbsp; Provenance</p>
<h2 class="h2">Every broadcast arrives<br><em>with its paperwork.</em></h2>
<div class="prov-grid">
<figure class="prov-photo"><img src="/media/broadcast/pakistan-community-cup-mlbb-ingame-broadcast.webp" alt="Pakistan Community Cup grand final, AOBS in-game HUD" loading="lazy" width="1280" height="720"><figcaption class="cz">Pakistan Community Cup — grand final, as broadcast</figcaption></figure>
<ol class="principles">
<li><span class="cz">01</span><h3>Real output, named</h3><p>Every frame on this site is from an AOBS broadcast, labelled with the event and stage it came from.</p></li>
<li><span class="cz">02</span><h3>Data, not typing</h3><p>Scores, gold, turrets and the draft come from the match. If a number is on screen, the game put it there.</p></li>
<li><span class="cz">03</span><h3>A second path, always</h3><p>Backup Streamer runs under every show, so the broadcast your sponsors paid for stays on air.</p></li>
</ol>
</div>
<div class="stats">
<div><b>18</b><span class="cz">tournaments broadcast</span></div>
<div><b>4</b><span class="cz">game titles</span></div>
<div><b>3</b><span class="cz">tools built in-house</span></div>
</div>
</div>
</section>
<section class="visit" id="visit" data-station="final">
<div class="visit-inner">
<p class="eyebrow cz">V &nbsp;·&nbsp; Your event</p>
<h2 class="visit-title">Bring us the stone.<br><em>We will open it.</em></h2>
<p class="lede">Tell us the game, the dates, the format and the platforms. We reply with a production plan and a quote.</p>
<div class="visit-cta">
<a class="btn btn-solid btn-lg" href="/contact" data-magnetic>Request a quote</a>
<a class="btn btn-ghost btn-lg" href="/work" data-magnetic>See the work</a>
</div>
</div>
</section>
<footer class="foot" data-station="foot" data-hold="1">
<div class="foot-grid">
<div class="foot-brand"><span class="cz">AOBS</span><p>Esports broadcast production.<br>Pakistan · Nepal · Bangladesh.</p></div>
<p><a href="/broadcast">Broadcast</a><br><a href="/graphics-data">Graphics &amp; data</a><br><a href="/technology">Technology</a></p>
<p><a href="/work">Work</a><br><a href="/about">About</a><br><a href="/contact">Contact</a></p>
<p><a href="https://desiate.com" target="_blank" rel="noopener">Developed by Desiate</a><br>Stone scene and engine: <a href="https://github.com/blendi-remade/dioramas" target="_blank" rel="noopener">Dioramas</a></p>
</div>
<p class="fine cz">© ${new Date().getFullYear()} AOBS. All rights reserved. Specimens rendered in real time; broadcast frames are real.</p>
</footer>
</main>

  <div class="press" aria-hidden="true"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="34"/><circle class="p" cx="40" cy="40" r="34" pathLength="1"/></svg><span class="cz">Hold</span></div>
  <div class="toast cz" role="status"></div>
  <div class="light-hint cz" aria-hidden="true">Your cursor is the light</div>

  
  
`;
