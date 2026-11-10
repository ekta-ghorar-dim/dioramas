import Image from 'next/image';
import Link from 'next/link';
import { Lens } from '@/components/v9/Lens';
import { Layers } from '@/components/v9/Layers';
import { ContactForm } from '@/components/ContactForm';
import { Rich } from '@/components/Rich';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { capabilities, technology, tournaments } from '@/lib/content';
import { capturesFor, visualsFor } from '@/lib/media';

export const metadata = meta({
  title: 'AOBS | Esports Broadcast Production Company',
  description: 'AOBS is an esports broadcast production company. Look inside a real AOBS broadcast: observers, scoreboard, rosters, data and sponsor formats.',
  path: '/',
});

const SPECIMENS = [
  { slug: 'pakistan-community-cup', file: 'pakistan-community-cup-mlbb-ingame-broadcast.webp', alt: 'Pakistan Community Cup in-game HUD', rows: [['Identity', 'Green, trophy-led'], ['Stage on record', 'Grand final, best of 5'], ['Prize pool', '30,000 diamonds'], ['Partner on screen', 'Potatos Gaming'], ['Frames on file', '3 + draft board']] },
  { slug: 'mini-mayhem', file: 'mini-mayhem-mlbb-ingame-overlay-sponsor-lower-ad.webp', alt: 'Mini Mayhem in-game HUD with sponsor slot', rows: [['Identity', 'Red, loud'], ['Stages on record', 'Top eight and semi-finals, Bo1'], ['Sponsor', 'Shadhin Host'], ['Sponsor formats', 'Squeeze-back, in-game slot, holding panel'], ['Frames on file', '3']] },
];
const MEASURES = [
  { v: 18, max: 20, label: 'tournaments broadcast', note: 'every event mark in the portfolio' },
  { v: 4, max: 5, label: 'game titles', note: 'MLBB, Free Fire, PUBG Mobile, FC Mobile' },
  { v: 3, max: 5, label: 'countries', note: 'Pakistan, Nepal, Bangladesh' },
  { v: 3, max: 5, label: 'tools we built', note: 'AOBS Cloud, OBS Plugins, Backup Streamer' },
];

function Ruler({ v, max }: { v: number; max: number }) {
  return (
    <div className="relative h-10" aria-hidden="true">
      <div className="absolute inset-x-0 bottom-0 h-px bg-fg" />
      {Array.from({ length: max + 1 }).map((_, i) => <span key={i} className={`absolute bottom-0 w-px ${i % 5 === 0 ? 'h-4 bg-fg' : 'h-2 bg-line-2'}`} style={{ left: `${(i / max) * 100}%` }} />)}
      <span className="absolute bottom-0 h-full w-[3px] -translate-x-1/2 bg-accent" style={{ left: `${(v / max) * 100}%` }} />
      <span className="absolute bottom-0 left-0 h-[3px] bg-accent" style={{ width: `${(v / max) * 100}%` }} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="pt-[92px] md:pt-[112px]" aria-labelledby="hero-title">
        <div className="wrap">
          <div className="grid items-end gap-6 pb-8 md:grid-cols-12">
            <h1 id="hero-title" className="display text-[clamp(2.3rem,5.6vw,5.6rem)] md:col-span-8">See what&apos;s inside a broadcast.</h1>
            <p className="text-mute md:col-span-4">AOBS is an esports broadcast production company. Below is a real frame from one of our shows. Move the lens across it to see how it&apos;s built.</p>
          </div>
          <Lens />
        </div>
      </section>

      <section className="section" aria-labelledby="layers-title">
        <div className="wrap">
          <h2 id="layers-title" className="display mb-12 max-w-[20ch] text-[clamp(1.8rem,3.4vw,3.2rem)]">Five layers on one frame, all run by one crew.</h2>
          <Layers />
        </div>
      </section>

      <section className="section lab-grid border-y border-line" aria-labelledby="spec-title">
        <div className="wrap">
          <h2 id="spec-title" className="display max-w-[22ch] text-[clamp(1.8rem,3.4vw,3.2rem)]">Two packages, side by side.</h2>
          <p className="mt-4 max-w-xl text-mute">Same method, different events. Each tournament gets its own identity and its own sponsor plan.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {SPECIMENS.map((s, i) => { const t = tournaments.find((x) => x.slug === s.slug)!; return (
              <article key={s.slug} className="border border-fg bg-ink">
                <div className="flex items-baseline justify-between border-b border-fg px-4 py-2 text-sm"><span className="font-semibold">Sample {String.fromCharCode(65 + i)}</span><span className="text-mute">{t.games.join(', ')}</span></div>
                <div className="relative aspect-video bg-black"><Image src={`/media/broadcast/${s.file}`} alt={s.alt} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover" loading="lazy" /></div>
                <div className="p-5">
                  <h3 className="display text-2xl"><Link href={`/work/${s.slug}`} className="hover:text-accent">{t.name}</Link></h3>
                  <dl className="mt-4 text-sm">{s.rows.map(([k, v]) => <div key={k} className="grid grid-cols-[9rem_1fr] gap-3 border-t border-line py-2"><dt className="text-mute">{k}</dt><dd>{v}</dd></div>)}</dl>
                </div>
              </article>); })}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="measure-title">
        <div className="wrap">
          <h2 id="measure-title" className="display text-[clamp(1.8rem,3.4vw,3.2rem)]">Measured</h2>
          <dl className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {MEASURES.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <p className="flex items-baseline gap-3"><span className="display text-6xl tabular-nums">{m.v}</span><span className="text-lg">{m.label}</span></p>
                  <div className="mt-3"><Ruler v={m.v} max={m.max} /></div>
                  <p className="mt-2 text-sm text-mute">{m.note}</p>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-mute">Not measured yet: <Rich text="{{TODO: peak concurrent viewers}}" /></p>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="eq-title">
        <div className="wrap">
          <h2 id="eq-title" className="display text-[clamp(1.8rem,3.4vw,3.2rem)]">Equipment we built</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {technology.map((p) => (
              <article key={p.slug} className="flex flex-col border-t-4 border-accent bg-panel p-6">
                <p className="text-sm text-mute">{p.kind}</p>
                <h3 className="display mt-2 text-3xl">{p.name}</h3>
                <p className="mt-3">{p.value}</p>
                <table className="mt-6 w-full text-sm"><tbody>{p.specs.map(([k, v]) => <tr key={k} className="border-t border-line-2"><th scope="row" className="py-2 pr-3 text-left font-normal text-mute">{k}</th><td className="py-2"><Rich text={v} /></td></tr>)}</tbody></table>
                <Link href={`/technology/${p.slug}`} className="link-u mt-auto pt-6 font-semibold">Read the spec →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="reg-title">
        <div className="wrap">
          <h2 id="reg-title" className="display text-[clamp(1.8rem,3.4vw,3.2rem)]">Sample register</h2>
          <p className="mt-4 max-w-xl text-mute">Every tournament in the portfolio, with what we hold on file for it.</p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead><tr className="border-b-2 border-fg"><th scope="col" className="py-2 font-semibold">Event</th><th scope="col" className="py-2 font-semibold">Title</th><th scope="col" className="py-2 font-semibold">Year</th><th scope="col" className="py-2 font-semibold">On file</th></tr></thead>
              <tbody>{tournaments.map((t) => { const c = capturesFor(t.slug).length; const k = visualsFor(t.slug).length; return (
                <tr key={t.slug} className="border-b border-line hover:bg-panel">
                  <td className="py-2.5 pr-4"><Link href={`/work/${t.slug}`} className="font-semibold hover:text-accent">{t.name}</Link></td>
                  <td className="py-2.5 pr-4 text-mute">{t.games.join(', ')}</td>
                  <td className="py-2.5 pr-4 tabular-nums text-mute">{t.year ?? '—'}</td>
                  <td className="py-2.5">{c ? <span className="font-semibold text-accent">{c} broadcast frame{c > 1 ? 's' : ''}</span> : k ? `${k} key visual${k > 1 ? 's' : ''}` : <span className="text-mute">Event mark</span>}</td>
                </tr>); })}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="quote" className="section bg-fg text-ink" aria-labelledby="quote-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><h2 id="quote-title" className="display text-[clamp(1.8rem,3.4vw,3.2rem)]">Put your tournament under the lens.</h2><p className="mt-4 opacity-75">Game, dates, format, platforms. We reply with a production plan and a quote.</p></div>
          <div className="v9-form screen lg:col-span-8"><ContactForm /></div>
        </div>
      </section>
      <JsonLd data={capabilities.map((c) => serviceLd(c.title, c.line, c.href))} />
    </>
  );
}
