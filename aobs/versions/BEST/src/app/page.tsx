import Image from 'next/image';
import Link from 'next/link';
import { Collage } from '@/components/v8/Collage';
import { WorldObserver } from '@/components/v8/WorldObserver';
import { TeaserVideo } from '@/components/broadcast/TeaserVideo';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd, videoLd } from '@/lib/seo';
import { capabilities, tournaments } from '@/lib/content';
import { videos } from '@/lib/media';

export const metadata = meta({
  title: 'AOBS | Esports Broadcast Production Company',
  description: 'AOBS is an esports broadcast production company. We design each tournament’s look, then produce its broadcast: HUDs, drafts, sponsors, replays.',
  path: '/',
});

type Step = { src: string; w: number; h: number; label: string; alt: string };
const WORLDS: { id: string; slug: string; name: string; line: string; facts: string[]; steps: Step[] }[] = [
  { id: 'pcc', slug: 'pakistan-community-cup', name: 'Pakistan Community Cup', line: 'A green, trophy-led identity carried from the first registration poster to the grand-final HUD.',
    facts: ['MLBB', 'Grand final, best of 5', '30,000-diamond prize pool', 'Streaming partner: Potatos Gaming'],
    steps: [
      { src: '/media/key-visuals/pakistan-community-cup-registration-now.webp', w: 1200, h: 1200, label: 'Registration poster', alt: 'Pakistan Community Cup registration poster' },
      { src: '/media/broadcast/pakistan-community-cup-grand-final-stream-starting.webp', w: 1280, h: 720, label: 'Holding screen', alt: 'Pakistan Community Cup grand final holding screen' },
      { src: '/media/broadcast/pakistan-community-cup-mlbb-ingame-broadcast.webp', w: 1280, h: 720, label: 'In-game HUD', alt: 'Pakistan Community Cup in-game HUD' },
    ] },
  { id: 'mm', slug: 'mini-mayhem', name: 'Mini Mayhem', line: 'A red, loud package built around a sponsor: three placements, and the game never left the screen.',
    facts: ['MLBB', 'Top eight and semi-finals, Bo1', 'Sponsor: Shadhin Host'],
    steps: [
      { src: '/media/broadcast/mini-mayhem-semi-final-stream-starting-screen.webp', w: 1600, h: 900, label: 'Holding screen + sponsor panel', alt: 'Mini Mayhem semi-final holding screen with sponsor panel' },
      { src: '/media/broadcast/mini-mayhem-mlbb-ingame-overlay-sponsor-lower-ad.webp', w: 1600, h: 900, label: 'In-game ad slot', alt: 'Mini Mayhem in-game HUD with a sponsor ad slot' },
      { src: '/media/broadcast/mini-mayhem-mlbb-ingame-overlay-sponsor-squeezeback.webp', w: 1600, h: 900, label: 'Squeeze-back', alt: 'Mini Mayhem gameplay squeezed back inside a sponsor frame' },
    ] },
  { id: 'ww', slug: 'mlbb-womens-war', name: "MLBB Women's War", line: 'Bronze and fire for a women’s tournament. The launch visual set the tone before the bracket opened.',
    facts: ['MLBB', '#FightForChampions'],
    steps: [{ src: '/media/key-visuals/mlbb-womens-war-coming-soon-key-visual.webp', w: 1200, h: 675, label: 'Launch key visual', alt: "MLBB Women's War coming-soon key visual" }] },
  { id: 'hf', slug: 'aobs-halloween-fest', name: 'AOBS Halloween Fest', line: 'Our own seasonal event, in pumpkin orange and night purple.',
    facts: ['MLBB', 'Run by AOBS'],
    steps: [{ src: '/media/key-visuals/aobs-halloween-fest-registration-poster.webp', w: 720, h: 534, label: 'Registration announcement', alt: 'AOBS Halloween Fest registration poster' }] },
];
const DELIVERABLES = ['Event identity', 'Key visual', 'Registration campaign', 'Teaser', 'Holding screen', 'Draft board', 'In-game HUD', 'Sponsor squeeze-back', 'Replay stingers', 'Stats panels', 'Winner screen', 'Backup stream', 'Multi-platform delivery'];

export default function Home() {
  return (
    <>
      <WorldObserver />
      <section data-world="none" className="overflow-hidden pt-[92px] md:pt-[110px]" aria-labelledby="hero-title">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h1 id="hero-title" className="display t-hero !text-[clamp(2.8rem,6vw,6.4rem)]">Every tournament gets its own look.<span className="mt-4 block text-[0.42em] leading-[1.05] tracking-[-0.03em] text-[var(--world)]">On the poster, on the stream, on the scorebug.</span></h1>
            <p className="mt-7 max-w-[46ch] text-lg text-mute">AOBS is an esports broadcast production company. We design the event&apos;s identity, then produce the broadcast it lives in: holding screens, draft boards, in-game HUDs, sponsor placements, replays and a backup stream.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">Start a project<span className="arr" aria-hidden="true">→</span></Link>
              <a href="#worlds" className="btn">Walk through the events<span className="arr" aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="lg:col-span-7"><Collage /></div>
        </div>
      </section>

      <section id="worlds" aria-labelledby="worlds-title" className="pt-24">
        <h2 id="worlds-title" className="sr-only">Event worlds</h2>
        {WORLDS.map((w) => (
          <article key={w.id} data-world={w.id} className="world border-t border-white/10 py-20 md:py-28" aria-labelledby={`w-${w.id}`}>
            <div className="wrap">
              <div className="grid gap-8 lg:grid-cols-12">
                <h3 id={`w-${w.id}`} className="world-name lg:col-span-8"><Link href={`/work/${w.slug}`} className="hover:underline decoration-4 underline-offset-8">{w.name}</Link></h3>
                <div className="lg:col-span-4 lg:pt-4">
                  <p className="text-lg">{w.line}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">{w.facts.map((f) => <li key={f} className="rounded-full border border-white/25 px-3 py-1 text-sm">{f}</li>)}</ul>
                  <Link href={`/work/${w.slug}`} className="link-u mt-6 inline-block font-semibold text-[var(--world)]">Full case study →</Link>
                </div>
              </div>
              <ol className={`mt-12 ${w.steps.length > 1 ? 'chain' : 'max-w-3xl'}`}>
                {w.steps.map((s, k) => (
                  <li key={s.src}>
                    <figure>
                      <div className={`relative overflow-hidden bg-black/40 ${w.steps.length > 1 ? 'aspect-video' : ''}`}>{w.steps.length > 1 ? <Image src={s.src} alt={s.alt} fill sizes="(max-width: 768px) 85vw, 33vw" className={Math.abs(s.w / s.h - 16 / 9) < 0.05 ? 'object-cover' : 'object-contain'} loading="lazy" /> : <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="(max-width: 768px) 85vw, 50vw" className="h-auto w-full" loading="lazy" />}</div>
                      <figcaption className="mt-3 flex items-baseline gap-3 text-sm"><span className="chain-arrow font-semibold">{String(k + 1).padStart(2, '0')}</span>{s.label}{k < w.steps.length - 1 ? <span className="chain-arrow ml-auto" aria-hidden="true">→</span> : null}</figcaption>
                    </figure>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </section>

      <section data-world="none" className="section border-t border-white/10" aria-labelledby="deliv-title">
        <div className="wrap">
          <h2 id="deliv-title" className="text-lg text-mute">What an event gets from AOBS</h2>
          <p className="deliv mt-8">{DELIVERABLES.map((d, i) => <span key={d}>{d}{i < DELIVERABLES.length - 1 ? <i aria-hidden="true">/</i> : null} </span>)}</p>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-4">
            {capabilities.map((c) => <Link key={c.id} href={c.href} className="group bg-[var(--bgw)] p-6 transition-colors hover:bg-white/5"><span className="text-xl font-semibold group-hover:text-[var(--world)]">{c.title}</span><span className="mt-2 block text-sm text-mute">{c.line}</span></Link>)}
          </div>
        </div>
      </section>

      <section data-world="none" className="section border-t border-white/10" aria-labelledby="motion-title">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-12"><h2 id="motion-title" className="display t-2 md:col-span-7">Teasers that sell the bracket.</h2><p className="text-mute md:col-span-4 md:col-start-9">Two cuts from the portfolio: a tournament announcement for Nepal and the DIU Winter Fest teaser for Daffodil International University.</p></div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">{videos.map((v) => <TeaserVideo key={v.id} v={v} />)}</div>
        </div>
      </section>

      <section data-world="none" className="section border-t border-white/10" aria-labelledby="wall-title">
        <div className="wrap text-center">
          <h2 id="wall-title" className="display t-2">{tournaments.length} tournaments, one production crew.</h2>
          <p className="mx-auto mt-4 max-w-xl text-mute">Every event mark we&apos;ve broadcast. Hover one to see it in its own colours.</p>
          <ul className="stickers mt-14">
            {tournaments.map((t, i) => (
              <li key={t.slug}><Link href={`/work/${t.slug}`} className="sticker" data-mono={t.mono} style={{ '--r': `${((i * 37) % 13) - 6}deg` } as React.CSSProperties} aria-label={`${t.name} case study`}>
                <Image src={`/logos/${t.logo}`} alt={`${t.name} logo`} width={t.w} height={t.h} sizes="150px" className="max-h-full w-auto max-w-full object-contain" loading="lazy" />
              </Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section data-world="none" id="quote" className="section border-t border-white/10" aria-labelledby="quote-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><h2 id="quote-title" className="display t-2">Start your event&apos;s world.</h2><p className="mt-4 text-mute">Tell us the game, the dates and the format. We reply with a look, a run of show and a quote.</p></div>
          <div className="lg:col-span-8"><ContactForm /></div>
        </div>
      </section>
      <JsonLd data={[...capabilities.map((c) => serviceLd(c.title, c.line, c.href)), ...videos.map((v) => videoLd(v))]} />
    </>
  );
}
