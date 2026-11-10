import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHead } from '@/components/SectionHead';
import { SceneBuilder } from '@/components/SceneBuilder';
import { Faq } from '@/components/Faq';
import { CtaBand } from '@/components/CtaBand';
import { Cta } from '@/components/Cta';
import { Rich } from '@/components/Rich';
import { LogoTile } from '@/components/LogoTile';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd, faqLd } from '@/lib/seo';
import { broadcast, tournament } from '@/lib/content';

export const metadata = meta({
  title: 'Esports Broadcast Production Services | AOBS',
  description: 'Esports broadcast production services from AOBS: venue, remote and hybrid live esports production with control room, observers, replay and failover.',
  path: '/broadcast',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Broadcast production" code="PCR 01" crumbs={[['Broadcast', '/broadcast']]} title={<>Esports broadcast production <span className="text-accent">services</span></>} lede={broadcast.intro}>
        <Cta href="/contact" event="request_quote" label="broadcast-hero">Request a broadcast quote</Cta>
        <Cta href="#scene" variant="ghost">Tour the broadcast</Cta>
      </PageHero>

      <section className="section" aria-labelledby="modes-title">
        <div className="wrap">
          <SectionHead eyebrow="Three ways to produce" title={<span id="modes-title">Venue. Remote. Hybrid.</span>} lede="Live esports production is not one size. The format, the venue and the budget decide where the control room should live." />
          <div className="mt-14 grid gap-px bg-line lg:grid-cols-3">
            {broadcast.modes.map((m, i) => {
              const proof = m.proof ? tournament(m.proof.tournament) : null;
              return (
                <article key={m.id} id={m.id} className="reveal flex flex-col bg-ink p-7 md:p-9" style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
                  <p className="mono flex items-center justify-between text-mute"><span>{m.code}</span><span className="text-accent">0{i + 1}</span></p>
                  <h3 className="display t-3 mt-8 !text-[clamp(2rem,3vw,2.8rem)]">{m.title}</h3>
                  <p className="mt-2 font-medium text-fg">{m.line}</p>
                  <p className="mt-4 text-mute"><Rich text={m.text} /></p>
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-sm">
                    {m.bullets.map((b) => <li key={b} className="flex gap-3"><span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />{b}</li>)}
                  </ul>
                  {proof ? <p className="mono mt-auto pt-8 text-mute">LAN on record: <Link className="link-u text-fg" href={`/work/${proof.slug}`}>{proof.name} →</Link></p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="scene" className="section border-y border-line bg-panel" aria-labelledby="scene-title">
        <div className="wrap">
          <SectionHead eyebrow="Broadcast scene builder" title={<span id="scene-title">Walk the floor.</span>} lede="Every position on an esports broadcast has one job. Select a station to see what it does and how it connects to the gallery." />
          <div className="reveal mt-12"><SceneBuilder /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="stations-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHead eyebrow="Positions" title={<span id="stations-title">Who does what.</span>} /></div>
          <dl className="lg:col-span-8">
            {broadcast.stations.map((s) => (
              <div key={s.id} className="reveal grid gap-2 border-t border-line py-6 md:grid-cols-[120px_1fr_2fr] md:gap-6">
                <dt className="contents"><span className="mono text-accent">{s.tag}</span><span className="display t-3">{s.title}</span></dt>
                <dd className="text-mute">{s.text}</dd>
              </div>
            ))}
            <div className="reveal grid gap-2 border-y border-line py-6 md:grid-cols-[120px_1fr_2fr] md:gap-6">
              <dt className="contents"><span className="mono text-accent">KIT</span><span className="display t-3">Camera package</span></dt>
              <dd className="text-mute"><Rich text={broadcast.cameraNote} /></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section border-t border-line bg-panel" aria-labelledby="proof-title">
        <div className="wrap">
          <SectionHead eyebrow="Proof" title={<span id="proof-title">Shows that went to air.</span>} lede="Every one of these went out through an AOBS production. Each links to its case study, and to the graphics and technology behind it." />
          <div className="reveal mt-10 grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6">
            {['pakistan-community-cup', 'mini-mayhem', 'bwc-2026', 'muc-2026', 'presidency-esports-mania-s1', 'mlbb-champions-legacy-s2'].map((s) => <LogoTile key={s} t={tournament(s)!} />)}
          </div>
          <p className="reveal mt-8 text-mute">Broadcasts run on <Link className="link-u text-fg" href="/technology/aobs-cloud">AOBS Cloud</Link>, protected by <Link className="link-u text-fg" href="/technology/backup-streamer">Backup Streamer</Link>, with <Link className="link-u text-fg" href="/graphics-data">live data graphics</Link> on top. <Link className="link-u text-accent" href="/work">See all tournaments →</Link></p>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHead eyebrow="FAQ" title={<span id="faq-title">Straight answers.</span>} /></div>
          <div className="reveal lg:col-span-8"><Faq items={broadcast.faq} /></div>
        </div>
      </section>

      <CtaBand secondary={{ href: '/work', label: 'See our work' }} />
      <JsonLd data={[...broadcast.modes.map((m) => serviceLd(`Esports ${m.title.toLowerCase()}`, m.text, `/broadcast#${m.id}`)), faqLd(broadcast.faq)]} />
    </>
  );
}
