import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHead } from '@/components/SectionHead';
import { LiveData } from '@/components/LiveData';
import { Multiview } from '@/components/Multiview';
import { CtaBand } from '@/components/CtaBand';
import { Cta } from '@/components/Cta';
import { Rich } from '@/components/Rich';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { graphics } from '@/lib/content';

export const metadata = meta({
  title: 'Esports Broadcast Graphics & Live Data | AOBS',
  description: 'Esports broadcast graphics from AOBS: game API live data graphics, scorebugs, drafts and stats, plus 3D, VFX and motion design for tournaments.',
  path: '/graphics-data',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Graphics & data" code="GFX 02" crumbs={[['Graphics & Data', '/graphics-data']]} title={<>Esports broadcast graphics, <span className="text-accent">driven by live data</span></>} lede={graphics.intro}>
        <Cta href="/contact" event="request_quote" label="gfx-hero">Request a broadcast quote</Cta>
      </PageHero>

      <section className="section" aria-labelledby="api-title">
        <div className="wrap">
          <SectionHead eyebrow="Game API integration" title={<span id="api-title">API in. Graphic out.</span>} lede="Below is the idea in miniature: a data feed on the left, the on-air graphic it drives on the right. Nobody is typing." />
          <div className="reveal mt-12"><LiveData /></div>
          <ol className="mt-16 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-5">
            {graphics.data.map((d, i) => (
              <li key={d.id} className="reveal bg-ink p-6" style={{ '--d': `${i * 60}ms` } as React.CSSProperties}>
                <span className="mono text-accent">D{String(i + 1).padStart(2, '0')}</span>
                <h3 className="display t-3 mt-6">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{d.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="motion" className="section border-y border-line bg-panel" aria-labelledby="motion-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="3D · VFX · Motion" title={<span id="motion-title">A look that belongs to your tournament.</span>} lede="Data makes graphics accurate. Design makes them yours. We build the full on-air identity, from the show open to the winner screen." />
          </div>
          <ul className="lg:col-span-7">
            {graphics.motion.map((m, i) => (
              <li key={m.id} className="reveal group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-t border-line py-6 last:border-b">
                <span className="mono text-mute">{String(i + 1).padStart(2, '0')}</span>
                <div><h3 className="display t-3 transition-colors group-hover:text-accent">{m.title}</h3><p className="mt-2 text-mute">{m.text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="gal-title">
        <div className="wrap">
          <SectionHead eyebrow="On the monitors" title={<span id="gal-title">Seen in the gallery.</span>} />
          <div className="reveal mt-10 grid gap-6 lg:grid-cols-12">
            <div className="brackets border border-line lg:col-span-8"><Multiview /></div>
            <div className="panel flex flex-col justify-between p-6 lg:col-span-4">
              <p className="mono text-mute">Gallery · stills & clips</p>
              <p className="my-6 text-sm"><Rich text={graphics.galleryNote} /></p>
              <p className="text-sm text-mute">The multiviewer shows stylised stand-in feeds until real broadcast captures are supplied.</p>
            </div>
          </div>
          <p className="reveal mt-10 text-mute">Graphics run inside the same chain as the rest of the show. See <Link href="/broadcast" className="link-u text-fg">broadcast production</Link>, the <Link href="/technology/obs-plugins" className="link-u text-fg">OBS plugins</Link> that connect data to the switcher, and the <Link href="/work" className="link-u text-fg">tournaments</Link> they have aired on.</p>
        </div>
      </section>

      <CtaBand title={<>Give your tournament <span className="text-accent">its own look.</span></>} secondary={{ href: '/work', label: 'See our work' }} />
      <JsonLd data={[serviceLd('Game API live data graphics', graphics.data.map((d) => d.text).join(' '), '/graphics-data'), serviceLd('3D, VFX and motion graphics for esports', graphics.motion.map((d) => d.text).join(' '), '/graphics-data#motion')]} />
    </>
  );
}
