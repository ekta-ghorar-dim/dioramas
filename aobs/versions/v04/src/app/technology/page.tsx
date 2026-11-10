import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ProductVisual } from '@/components/ProductVisual';
import { CtaBand } from '@/components/CtaBand';
import { Cta } from '@/components/Cta';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { technology } from '@/lib/content';

export const metadata = meta({
  title: 'Esports Broadcast Technology | AOBS',
  description: 'AOBS builds its own broadcast technology: AOBS Cloud remote production, custom OBS plugins for esports, and Backup Streamer stream failover.',
  path: '/technology',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="AOBS technology" code="SYS 04" crumbs={[['Technology', '/technology']]} title={<>Broadcast technology, <span className="text-accent">built in-house</span></>} lede="We do not just operate broadcast tools. We write them. Three products sit under every AOBS show: a cloud production platform, custom **OBS plugins for esports**, and a **stream backup and failover** system." />
      {technology.map((p, i) => (
        <section key={p.slug} id={p.slug} className={`section ${i % 2 ? 'bg-panel border-y border-line' : ''}`} aria-labelledby={`${p.slug}-title`}>
          <div className="wrap grid items-center gap-12 lg:grid-cols-12">
            <div className={`reveal lg:col-span-6 ${i % 2 ? 'lg:order-2' : ''}`}>
              <p className="mono flex items-center gap-3 text-mute"><span className="border border-accent px-2 py-1 text-accent">{p.code}</span>{p.kind}</p>
              <h2 id={`${p.slug}-title`} className="display t-1 mt-6">{p.name}</h2>
              <p className="mt-5 text-xl text-fg md:text-2xl">{p.value}</p>
              <ul className="mt-8 space-y-3 border-t border-line pt-8">
                {p.features.map((f) => <li key={f} className="flex gap-3 text-mute"><span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />{f}</li>)}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <Cta href={`/contact?demo=${p.slug}`} event="request_demo" label={p.slug}>Request a demo</Cta>
                <Link href={`/technology/${p.slug}`} className="btn">Product details<span className="arr" aria-hidden="true">→</span></Link>
              </div>
            </div>
            <div className={`reveal lg:col-span-6 ${i % 2 ? 'lg:order-1' : ''}`}><div className="brackets panel p-5 md:p-8"><ProductVisual slug={p.slug} /></div></div>
          </div>
        </section>
      ))}
      <CtaBand title={<>See it run <span className="text-accent">on a real show.</span></>} text="Ask for a walkthrough of AOBS Cloud, our OBS plugins or Backup Streamer with the crew that built them." primary={{ href: '/contact?demo=technology', label: 'Request a demo' }} />
      <JsonLd data={technology.map((p) => serviceLd(p.name, p.value, `/technology/${p.slug}`))} />
    </>
  );
}
