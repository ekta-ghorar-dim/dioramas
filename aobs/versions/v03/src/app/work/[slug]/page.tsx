import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { CtaBand } from '@/components/CtaBand';
import { Cta } from '@/components/Cta';
import { Rich } from '@/components/Rich';
import { JsonLd } from '@/components/JsonLd';
import { meta, caseLd } from '@/lib/seo';
import { OnAir } from '@/components/broadcast/OnAir';
import { KeyVisuals } from '@/components/broadcast/KeyVisuals';
import { capturesFor, visualsFor, draft } from '@/lib/media';
import { tournaments, tournament, gameNames } from '@/lib/content';

export const dynamicParams = false;
export const generateStaticParams = () => tournaments.map((t) => ({ slug: t.slug }));
const gamesText = (g: string[]) => g.map((x) => gameNames[x] || x).join(', ').replace(/, ([^,]*)$/, ' and $1');

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = tournament(slug); if (!t) return {};
  return meta({ title: `${t.name} Broadcast Production | AOBS`, description: `${t.name} broadcast production by AOBS: the ${gamesText(t.games)} tournament${t.format ? ` (${t.format})` : ''}, its setup, graphics and technology.`.slice(0, 154), path: `/work/${slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = tournament(slug); if (!t) notFound();
  const i = tournaments.indexOf(t); const prev = tournaments[(i - 1 + tournaments.length) % tournaments.length]; const next = tournaments[(i + 1) % tournaments.length];
  const caps = capturesFor(slug); const kvs = visualsFor(slug); const hasDraft = draft.tournament === slug;
  const facts: [string, string][] = [
    ['Game', gamesText(t.games)], ...(t.country ? [['Country', t.country] as [string, string]] : []), ['Year', t.year ? String(t.year) : `{{TODO: ${t.name} year}}`], ['Format', t.format ? `${t.format} event` : `{{TODO: ${t.name} format (LAN / online / hybrid)}}`], ...(t.facts || []), ['AOBS role', 'Broadcast production'],
  ];
  const blocks: [string, string, string][] = [
    ['01', 'Challenge', `{{TODO: ${t.name}: what the organizer needed and what made this broadcast hard}}`],
    ['02', 'Setup', t.setup ? `${t.setup} {{TODO: crew size and camera / observer setup}}` : `{{TODO: ${t.name}: cameras, crew size, graphics package and AOBS technology used}}`],
    ['03', 'Results', `{{TODO: ${t.name}: peak viewers, hours broadcast, match days, platforms}}`],
  ];
  return (
    <>
      <PageHero eyebrow="Case study" code={`CASE ${String(i + 1).padStart(2, '0')}`} crumbs={[['Work', '/work'], [t.name, `/work/${slug}`]]} title={<>{t.name} <span className="text-accent">broadcast production</span></>} lede={`${t.name} broadcast production was delivered by AOBS for this ${gamesText(t.games)} tournament${t.format === 'LAN' ? ', produced as a LAN event' : ''}${t.country ? ` in ${t.country}` : ''}. ${t.summary ?? ''}`} />

      <section className="section !pt-14">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <div className={`brackets relative flex aspect-video items-center justify-center overflow-hidden border border-line p-[12%] scanlines ${t.hoverBg === 'light' ? 'bg-[#f1f4f5]' : 'bg-panel'}`}>
              <Image src={`/logos/${t.logo}`} alt={`${t.name} logo`} width={t.w} height={t.h} priority sizes="(max-width: 1024px) 80vw, 600px" className="max-h-full w-auto max-w-full object-contain" />
              <span className="tally absolute left-3 top-3 !bg-ink/80"><span className="dot" />PGM</span>
            </div>
          </div>
          <dl className="reveal lg:col-span-5">
            {facts.map(([k, v]) => (<div key={k} className="grid grid-cols-[110px_1fr] gap-4 border-t border-line py-4 last:border-b"><dt className="mono pt-1 text-mute">{k}</dt><dd className="text-fg"><Rich text={v} /></dd></div>))}
          </dl>
        </div>
      </section>

      {caps.length ? (
        <section className="section border-t border-line !pt-14" aria-labelledby="air-title">
          <div className="wrap">
            <p className="eyebrow reveal">On air</p>
            <h2 id="air-title" className="reveal display t-2 mt-4">The broadcast, frame by frame.</h2>
            <div className="reveal mt-10"><OnAir items={caps} /></div>
            {hasDraft ? <figure className="reveal mt-8"><div className="overflow-hidden border border-line-2"><Image src={`/media/broadcast/${draft.file}`} alt={draft.alt} width={draft.w} height={draft.h} sizes="(max-width: 1360px) 100vw, 1280px" className="h-auto w-full" /></div><figcaption className="mono mt-2 text-[10px] text-mute">Draft board · ban phase</figcaption></figure> : null}
          </div>
        </section>
      ) : null}

      <section className="section border-y border-line bg-panel !py-0" aria-label="Case study">
        <div className="wrap grid lg:grid-cols-3">
          {blocks.map(([n, h, body], k) => (
            <article key={h} className={`reveal border-line py-12 lg:py-16 ${k ? 'border-t lg:border-l lg:border-t-0 lg:pl-10' : ''} ${k < 2 ? 'lg:pr-10' : ''}`}>
              <p className="mono text-accent">{n}</p>
              <h2 className="display t-2 mt-4">{h}</h2>
              <p className="mt-6 text-mute"><Rich text={body} /></p>
            </article>
          ))}
        </div>
      </section>

      {kvs.length ? (
        <section className="section !pb-0" aria-labelledby="kv-title">
          <div className="wrap">
            <p className="eyebrow reveal">Campaign</p>
            <h2 id="kv-title" className="reveal display t-2 mt-4">Key visuals.</h2>
            {t.campaign ? <p className="reveal lede mt-6">{t.campaign}</p> : null}
            <div className="mt-10"><KeyVisuals items={kvs} /></div>
          </div>
        </section>
      ) : null}

      <section className="section" aria-labelledby="used-title">
        <div className="wrap">
          <p className="eyebrow reveal">The stack</p>
          <h2 id="used-title" className="reveal display t-2 mt-4">What an AOBS broadcast runs on.</h2>
          <ul className="reveal mt-10 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
            {[['Broadcast production', '/broadcast', 'Control room, observers, replay and casters in one chain.'], ['Live data graphics', '/graphics-data', 'Scorebugs, drafts and stats driven by game data.'], ['AOBS Cloud', '/technology/aobs-cloud', 'Our cloud production platform.'], ['Backup Streamer', '/technology/backup-streamer', 'Failover that keeps the stream live.']].map(([n, h, d]) => (
              <li key={h} className="bg-ink"><Link href={h} className="group block h-full p-6 transition-colors hover:bg-panel-2"><h3 className="display t-3 group-hover:text-accent">{n}</h3><p className="mt-3 text-sm text-mute">{d}</p><span className="mono mt-5 inline-block text-accent" aria-hidden="true">→</span></Link></li>
            ))}
          </ul>
          <nav aria-label="More case studies" className="reveal mt-14 grid gap-px bg-line sm:grid-cols-2">
            <Link href={`/work/${prev.slug}`} className="group bg-ink p-6 hover:bg-panel-2"><span className="mono text-mute">← Previous</span><span className="display t-3 mt-2 block group-hover:text-accent">{prev.name}</span></Link>
            <Link href={`/work/${next.slug}`} className="group bg-ink p-6 text-right hover:bg-panel-2"><span className="mono text-mute">Next →</span><span className="display t-3 mt-2 block group-hover:text-accent">{next.name}</span></Link>
          </nav>
        </div>
      </section>

      <CtaBand title={<>Your tournament, <span className="text-accent">produced like this.</span></>} secondary={{ href: '/work', label: 'All tournaments' }} />
      <JsonLd data={caseLd(`${t.name} broadcast production`, `${t.name} broadcast production by AOBS for ${gamesText(t.games)}. ${t.summary ?? ''}`, `/work/${slug}`, caps[0] ? `/media/broadcast/${caps[0].file}` : `/logos/${t.logo}`)} />
    </>
  );
}
