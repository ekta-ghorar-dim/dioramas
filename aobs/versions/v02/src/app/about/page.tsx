import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHead } from '@/components/SectionHead';
import { CtaBand } from '@/components/CtaBand';
import { Rich } from '@/components/Rich';
import { Counter } from '@/components/Counter';
import { meta } from '@/lib/seo';
import { about, stats } from '@/lib/content';

export const metadata = meta({
  title: 'About AOBS | Esports Broadcast Production Company',
  description: 'AOBS is an esports broadcast production company that produces live tournaments end to end and builds the technology it runs them on.',
  path: '/about',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="About" code="ID" crumbs={[['About', '/about']]} title={<>A broadcast company <span className="text-accent">that builds its own tools</span></>} lede={about.intro} />
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHead eyebrow="Mission" title={about.mission} /></div>
          <div className="reveal space-y-10 lg:col-span-6 lg:col-start-7">
            <div><h3 className="mono text-accent">Story</h3><p className="mt-3 text-lg text-mute"><Rich text={about.story} /></p></div>
            <div><h3 className="mono text-accent">Where we operate</h3><p className="mt-3 text-lg text-mute"><Rich text={about.where} /></p></div>
            <dl className="grid grid-cols-3 gap-px bg-line">
              {stats.filter((s) => s.value !== null).map((s) => (<div key={s.label} className="bg-ink p-5"><dd className="display text-5xl"><Counter value={s.value as number} /></dd><dt className="mono mt-2 text-mute">{s.label}</dt></div>))}
            </dl>
          </div>
        </div>
      </section>
      <section className="section border-y border-line bg-panel" aria-labelledby="diff-title">
        <div className="wrap">
          <SectionHead eyebrow="What makes AOBS different" title={<span id="diff-title">Four things we will not outsource.</span>} />
          <ol className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {about.different.map((d, i) => (
              <li key={d.title} className="reveal bg-panel p-7 md:p-10"><span className="display text-6xl text-line-2">{String(i + 1).padStart(2, '0')}</span><h3 className="display t-3 mt-6">{d.title}</h3><p className="mt-3 text-mute">{d.text}</p></li>
            ))}
          </ol>
          <p className="reveal mt-10 text-mute">Go deeper: <Link className="link-u text-fg" href="/broadcast">broadcast production</Link>, <Link className="link-u text-fg" href="/graphics-data">graphics &amp; data</Link>, <Link className="link-u text-fg" href="/technology">technology</Link>, or the <Link className="link-u text-fg" href="/work">tournaments we have broadcast</Link>.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
