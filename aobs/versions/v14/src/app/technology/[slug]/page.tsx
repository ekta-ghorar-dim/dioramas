import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { SectionHead } from '@/components/SectionHead';
import { ProductVisual } from '@/components/ProductVisual';
import { LazyFailover } from '@/components/Lazy';
import { CtaBand } from '@/components/CtaBand';
import { Cta } from '@/components/Cta';
import { Rich } from '@/components/Rich';
import { LogoTile } from '@/components/LogoTile';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { technology, product, featured } from '@/lib/content';

const SEO: Record<string, { title: string; description: string; h1: React.ReactNode }> = {
  'aobs-cloud': { title: 'AOBS Cloud: Cloud Esports Production | AOBS', description: 'AOBS Cloud is a cloud esports production platform: remote production with sources, switching and encoding in the cloud, out to every platform.', h1: <>AOBS Cloud: <span className="text-accent">cloud esports production</span></> },
  'obs-plugins': { title: 'OBS Plugins for Esports Broadcasts | AOBS', description: 'Custom OBS plugins for esports, built in-house by AOBS for live production workflows and proven on our own tournament broadcasts.', h1: <>OBS plugins <span className="text-accent">for esports</span></> },
  'backup-streamer': { title: 'Backup Streamer: Stream Backup & Failover | AOBS', description: 'Backup Streamer is the AOBS stream backup and failover system: a hot second path that takes over when the primary drops, so the stream stays live.', h1: <>Backup Streamer: <span className="text-accent">stream backup and failover</span></> },
};

export const dynamicParams = false;
export const generateStaticParams = () => technology.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const s = SEO[slug];
  return s ? meta({ title: s.title, description: s.description, path: `/technology/${slug}` }) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = product(slug); if (!p) notFound();
  const others = technology.filter((o) => o.slug !== slug);
  return (
    <>
      <PageHero eyebrow={p.kind} code={p.code} crumbs={[['Technology', '/technology'], [p.name, `/technology/${slug}`]]} title={SEO[slug].h1} lede={p.intro}>
        <Cta href={`/contact?demo=${slug}`} event="request_demo" label={slug}>Request a demo</Cta>
        <Cta href="/technology" variant="ghost">All technology</Cta>
      </PageHero>

      {slug === 'backup-streamer' ? (
        <section className="section border-b border-line bg-panel" aria-labelledby="sim-title">
          <div className="wrap">
            <SectionHead eyebrow="Try it" title={<span id="sim-title">Pull the plug. We stay live.</span>} lede="Kill the primary encoder and watch what the audience sees." />
            <div className="reveal screen mt-12 p-4 md:p-8"><LazyFailover /></div>
          </div>
        </section>
      ) : null}

      <section className="section" aria-labelledby="feat-title">
        <div className="wrap grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHead eyebrow="What it does" title={<span id="feat-title">{p.value}</span>} />
            <ul className="mt-10 border-t border-line">
              {p.features.map((f, i) => (
                <li key={f} className="reveal flex gap-6 border-b border-line py-5"><span className="mono pt-1 text-accent">{String(i + 1).padStart(2, '0')}</span><span className="text-lg text-fg">{f}</span></li>
              ))}
            </ul>
          </div>
          <div className="reveal lg:sticky lg:top-28 lg:col-span-6">
            <div className="screen p-5 md:p-8"><ProductVisual slug={slug} /></div>
            <table className="mt-6 w-full text-left text-sm">
              <caption className="mono mb-3 text-left text-mute">Specifications</caption>
              <tbody>
                {p.specs.map(([k, v]) => (<tr key={k} className="border-t border-line"><th scope="row" className="w-2/5 py-3 pr-4 font-normal text-mute">{k}</th><td className="py-3"><Rich text={v} /></td></tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-panel" aria-labelledby="rel-title">
        <div className="wrap">
          <SectionHead eyebrow="In production" title={<span id="rel-title">Part of every AOBS show.</span>} lede={`${p.name} is one layer of our **broadcast production** stack, alongside live data graphics and the rest of our in-house technology.`} />
          <div className="reveal mt-10 grid grid-cols-2 gap-px md:grid-cols-4">{featured.map((t) => <LogoTile key={t.slug} t={t} />)}</div>
          <ul className="reveal mt-10 flex flex-wrap gap-3">
            <li><Link href="/broadcast" className="btn">Broadcast production<span className="arr" aria-hidden="true">→</span></Link></li>
            <li><Link href="/graphics-data" className="btn">Graphics &amp; data<span className="arr" aria-hidden="true">→</span></Link></li>
            {others.map((o) => <li key={o.slug}><Link href={`/technology/${o.slug}`} className="btn">{o.name}<span className="arr" aria-hidden="true">→</span></Link></li>)}
          </ul>
        </div>
      </section>

      <CtaBand title={<>See {p.name} <span className="text-accent">in action.</span></>} text="Book a walkthrough with the crew that built it and runs it on live shows." primary={{ href: `/contact?demo=${slug}`, label: 'Request a demo' }} />
      <JsonLd data={serviceLd(p.name, p.intro, `/technology/${slug}`)} />
    </>
  );
}
