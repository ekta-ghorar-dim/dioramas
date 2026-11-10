import Image from 'next/image';
import Link from 'next/link';
import { Credits } from '@/components/v7/Credits';
import { LazyFailover } from '@/components/Lazy';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { capabilities, broadcast, technology, tournaments } from '@/lib/content';
import { draft } from '@/lib/media';
import rundown from '@/content/rundown.json';

export const metadata = meta({
  title: 'AOBS | Esports Broadcast Production Company',
  description: 'AOBS is an esports broadcast production company: observers, replay, game-data graphics, sponsor placements, backup streaming and transmission.',
  path: '/',
});

const ROWS = ['Where the gallery sits', 'Crew on site', 'Best for'];
const MODES: Record<string, string[]> = {
  venue: ['At the venue', 'Full crew', 'LAN finals, arena shows, stage moments'],
  remote: ['In AOBS Cloud', 'None', 'Online leagues and qualifiers, no venue build'],
  hybrid: ['In the cloud', 'Cameras and stage only', 'Venue energy with a lighter build'],
};

export default function Home() {
  return (
    <>
      {/* Front page */}
      <section className="pt-[96px] md:pt-[120px]" aria-labelledby="hero-title">
        <div className="wrap">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-fg pb-3 text-sm text-mute">
            <span>AOBS · Esports broadcast production company</span>
            <span>Pakistan · Nepal · Bangladesh</span>
          </div>
          <h1 id="hero-title" className="display t-hero mt-10 max-w-[16ch] md:mt-14">We run the broadcast. <span className="text-mute">You run the tournament.</span></h1>
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <p className="text-lg md:col-span-6 md:text-xl">AOBS is an esports broadcast production company. Observers, replay, game-data graphics, sponsor placements, a backup stream and transmission: one crew, one signal chain, built on tools we wrote ourselves.</p>
            <div className="flex flex-col items-start gap-3 md:col-span-5 md:col-start-8 md:items-end md:text-right">
              <Link href="/contact" className="group inline-flex items-baseline gap-3 text-2xl font-semibold tracking-[-0.02em]"><span className="border-b-2 border-fg pb-1 group-hover:border-accent group-hover:text-accent">Book a production</span><span aria-hidden="true">→</span></Link>
              <a href="#rundown" className="link-u text-mute">or read a show, segment by segment ↓</a>
            </div>
          </div>
        </div>
        <figure className="wrap mt-14 md:mt-20">
          <div className="screen relative aspect-video overflow-hidden bg-black">
            <Image src="/media/broadcast/pakistan-community-cup-mlbb-ingame-broadcast.webp" alt="Pakistan Community Cup grand final MLBB broadcast with the AOBS in-game HUD" fill priority sizes="(max-width: 1360px) 100vw, 1260px" quality={70} className="object-cover" />
          </div>
          <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-sm text-mute"><span><b className="font-semibold text-fg">Fig. 1</b> Pakistan Community Cup, grand final. AOBS in-game HUD, as broadcast.</span><Link href="/work/pakistan-community-cup" className="link-u">Case →</Link></figcaption>
        </figure>
      </section>

      {/* The record, as one sentence */}
      <section className="section" aria-labelledby="record-title">
        <div className="wrap">
          <h2 id="record-title" className="sr-only">The record</h2>
          <p className="display max-w-[22ch] text-[clamp(1.9rem,4.4vw,4.4rem)]">
            {tournaments.length} tournaments broadcast. 4 game titles. 3 countries. <span className="text-mute">3 broadcast tools built in-house, so the show doesn&apos;t depend on anyone else&apos;s.</span>
          </p>
        </div>
      </section>

      {/* The rundown */}
      <section id="rundown" className="section !pt-0" aria-labelledby="rd-title">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-12">
            <h2 id="rd-title" className="display t-2 md:col-span-6">Running order</h2>
            <p className="text-mute md:col-span-5 md:col-start-8">How an AOBS tournament day runs, top to bottom. Open a segment to see it as it went out on a real show.</p>
          </div>
          <div className="rd mt-10">
            <div className="rd-head" aria-hidden="true"><span>No.</span><span>Time</span><span>Segment</span><span>What AOBS runs</span><span>Sources</span><span /></div>
            {rundown.map((r, i) => (
              <details key={r.id} className="rd-row" open={i === 2} data-live={r.live ? '' : undefined}>
                <summary>
                  <span className="rd-no">{String(i + 1).padStart(2, '0')}</span>
                  <span className="rd-time text-mute">{r.time}</span>
                  <span className="rd-seg">{r.segment}</span>
                  <span className="rd-what text-mute">{r.what}</span>
                  <span className="rd-src">{r.sources.map((s) => <b key={s}>{s}</b>)}</span>
                  <span className="rd-plus" aria-hidden="true">+</span>
                </summary>
                <div className="rd-body">
                  <span className="hidden md:block" /><span className="hidden md:block" />
                  <div className="grid gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-4"><p className="text-lg">{r.detail}</p>{r.link ? <Link href={r.link.href} className="link-u mt-4 inline-block font-semibold">{r.link.label} →</Link> : null}</div>
                    <div className="lg:col-span-8">
                      {r.image ? (
                        <figure>
                          <div className={`screen relative overflow-hidden bg-black ${r.wide ? 'overflow-x-auto' : 'aspect-video'}`}>
                            {r.wide ? <Image src={`/media/broadcast/${r.image}`} alt={r.caption} width={draft.w} height={draft.h} sizes="(max-width: 1024px) 100vw, 800px" className="h-auto w-full min-w-[640px]" /> : <Image src={`/media/broadcast/${r.image}`} alt={r.caption} fill sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" />}
                          </div>
                          <figcaption className="mt-2 text-sm text-mute">{r.caption}</figcaption>
                        </figure>
                      ) : r.drill ? <div className="screen p-4 md:p-6"><LazyFailover /></div> : <p className="border-l-2 border-line-2 pl-4 text-sm text-mute">No capture of this segment in the portfolio yet.</p>}
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Production models, as a spec table */}
      <section className="section border-t-2 border-fg" aria-labelledby="models-title">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-12"><h2 id="models-title" className="display t-2 md:col-span-6">Venue, remote or hybrid</h2><p className="text-mute md:col-span-5 md:col-start-8">Where the control room lives depends on the event. We run all three.</p></div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead><tr className="border-b-2 border-fg"><th scope="col" className="w-1/4 py-3 font-normal text-mute"><span className="sr-only">Property</span></th>{broadcast.modes.map((m) => <th key={m.id} scope="col" className="py-3 text-xl font-semibold tracking-[-0.02em]"><Link href={`/broadcast#${m.id}`} className="link-u">{m.title}</Link></th>)}</tr></thead>
              <tbody>{ROWS.map((row, k) => <tr key={row} className="border-b border-line-2"><th scope="row" className="py-4 pr-4 font-normal text-mute">{row}</th>{broadcast.modes.map((m) => <td key={m.id} className="py-4 pr-6">{MODES[m.id][k]}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section border-t-2 border-fg" aria-labelledby="tools-title">
        <div className="wrap">
          <h2 id="tools-title" className="display t-2">Our own equipment</h2>
          <ul className="mt-10 grid gap-x-10 md:grid-cols-3">
            {technology.map((p) => (
              <li key={p.slug} className="border-t border-fg py-6">
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{p.name}</h3>
                <p className="mt-1 text-sm text-mute">{p.kind}</p>
                <p className="mt-4">{p.value}</p>
                <Link href={`/technology/${p.slug}`} className="link-u mt-5 inline-block font-semibold">Spec sheet →</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Credits */}
      <section className="section border-t-2 border-fg" aria-labelledby="credits-title">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-12"><h2 id="credits-title" className="display t-2 md:col-span-6">Credits</h2><p className="text-mute md:col-span-5 md:col-start-8">Tournaments that went out through an AOBS production. Hover a name to see the event mark.</p></div>
          <div className="mt-10"><Credits /></div>
        </div>
      </section>

      {/* Booking sheet */}
      <section id="quote" className="section border-t-2 border-fg" aria-labelledby="quote-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><h2 id="quote-title" className="display t-2">Booking sheet</h2><p className="mt-4 text-mute">Game, dates, format, platforms. We come back with a run of show and a quote.</p></div>
          <div className="lg:col-span-8"><ContactForm /></div>
        </div>
      </section>

      <JsonLd data={capabilities.map((c) => serviceLd(c.title, c.line, c.href))} />
    </>
  );
}
