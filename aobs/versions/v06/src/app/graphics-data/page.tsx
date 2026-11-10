import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHead } from '@/components/SectionHead';
import { LazyLiveData, LazyProgramMonitor } from '@/components/Lazy';
import { OnAir } from '@/components/broadcast/OnAir';
import { TeaserVideo } from '@/components/broadcast/TeaserVideo';
import { KeyVisuals } from '@/components/broadcast/KeyVisuals';
import { CtaBand } from '@/components/CtaBand';
import { Cta } from '@/components/Cta';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd, videoLd } from '@/lib/seo';
import { graphics } from '@/lib/content';
import { draft, videos } from '@/lib/media';

export const metadata = meta({
  title: 'Esports Broadcast Graphics & Live Data | AOBS',
  description: 'Esports broadcast graphics from AOBS: game API live data graphics, MLBB scorebugs, drafts and stats, plus 3D, VFX and motion design for tournaments.',
  path: '/graphics-data',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Graphics & data" code="GFX 02" crumbs={[['Graphics & Data', '/graphics-data']]} title={<>Esports broadcast graphics, <span className="text-accent">driven by live data</span></>} lede={graphics.intro}>
        <Cta href="/contact" event="request_quote" label="gfx-hero">Request a broadcast quote</Cta>
        <Cta href="#on-air" variant="ghost">See real output</Cta>
      </PageHero>

      <section id="on-air" className="section" aria-labelledby="real-title">
        <div className="wrap">
          <SectionHead eyebrow="On air" title={<span id="real-title">Packages we have put on screen.</span>} lede="Real frames from AOBS MLBB broadcasts. Each tournament gets its own identity: green for the Pakistan Community Cup, red for Mini Mayhem, with sponsor formats built in." />
          <div className="reveal mt-12"><OnAir /></div>
          <figure className="reveal mt-12">
            <div className="brackets relative overflow-x-auto border border-line-2 bg-black" tabIndex={0} role="region" aria-label="Draft board, scroll horizontally"><Image src={`/media/broadcast/${draft.file}`} alt={draft.alt} width={draft.w} height={draft.h} sizes="(max-width: 1360px) 100vw, 1280px" className="h-auto w-full min-w-[760px]" /></div>
            <figcaption className="mt-3 flex flex-wrap justify-between gap-3 text-sm text-mute"><span><span className="mono mr-3 text-accent">Draft board</span>Pick/ban phase, grand final, best of 5. <Link className="link-u text-fg" href="/work/pakistan-community-cup">Pakistan Community Cup →</Link></span><span className="mono text-[10px]">Real AOBS broadcast output</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="section border-y border-line bg-panel" aria-labelledby="api-title">
        <div className="wrap">
          <SectionHead eyebrow="Game API integration" title={<span id="api-title">API in. Graphic out.</span>} lede="How the data side works: a match feed drives the HUD, the draft board and the stats panel, so nobody retypes a score. Below is our overlay system running on demo data over a gameplay stand-in." />
          <div className="reveal mt-12"><LazyProgramMonitor /></div>
          <div className="reveal mt-14"><LazyLiveData /></div>
          <ol className="mt-16 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-5">
            {graphics.data.map((d, i) => (
              <li key={d.id} className="reveal bg-panel p-6" style={{ '--d': `${i * 60}ms` } as React.CSSProperties}>
                <span className="mono text-accent">D{String(i + 1).padStart(2, '0')}</span>
                <h3 className="display t-3 mt-6">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{d.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="motion" className="section" aria-labelledby="motion-title">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHead eyebrow="3D · VFX · Motion" title={<span id="motion-title">A look that belongs to your tournament.</span>} lede="Data makes graphics accurate. Design makes them yours. We build the full identity: teasers, key visuals, registration campaigns and the on-air package." />
            </div>
            <ul className="lg:col-span-7">
              {graphics.motion.map((m, i) => (
                <li key={m.id} className="reveal group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-t border-line py-5 last:border-b">
                  <span className="mono text-mute">{String(i + 1).padStart(2, '0')}</span>
                  <div><h3 className="display t-3 transition-colors group-hover:text-accent">{m.title}</h3><p className="mt-2 text-mute">{m.text}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-2">{videos.map((v) => <div key={v.id} className="reveal"><TeaserVideo v={v} /></div>)}</div>
        </div>
      </section>

      <section className="section border-t border-line bg-panel" aria-labelledby="kv-title">
        <div className="wrap">
          <SectionHead eyebrow="Key visuals & campaigns" title={<span id="kv-title">Before the first match goes live.</span>} lede="Registration drives, prize-pool reveals and launch visuals. The campaign that fills the bracket is part of the broadcast." />
          <div className="mt-12"><KeyVisuals /></div>
          <p className="reveal mt-10 text-mute">Graphics run inside the same chain as the rest of the show. See <Link href="/broadcast" className="link-u text-fg">broadcast production</Link>, the <Link href="/technology/obs-plugins" className="link-u text-fg">OBS plugins</Link> that connect data to the switcher, and the <Link href="/work" className="link-u text-fg">tournaments</Link> they have aired on.</p>
        </div>
      </section>

      <CtaBand title={<>Give your tournament <span className="text-accent">its own look.</span></>} secondary={{ href: '/work', label: 'See our work' }} />
      <JsonLd data={[serviceLd('Game API live data graphics', graphics.data.map((d) => d.text).join(' '), '/graphics-data'), serviceLd('3D, VFX and motion graphics for esports', graphics.motion.map((d) => d.text).join(' '), '/graphics-data#motion'), ...videos.map((v) => videoLd(v))]} />
    </>
  );
}
