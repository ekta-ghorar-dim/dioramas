import Image from 'next/image';
import Link from 'next/link';
import { OnAir } from './broadcast/OnAir';
import { Rich } from './Rich';
import { captures } from '@/lib/media';
import { site } from '@/lib/content';

const SPONSOR = [
  { file: 'mini-mayhem-mlbb-ingame-overlay-sponsor-squeezeback.webp', tag: 'Squeeze-back', text: 'Gameplay stays live inside an L-frame while the sponsor message runs around it.' },
  { file: 'mini-mayhem-mlbb-ingame-overlay-sponsor-lower-ad.webp', tag: 'In-game ad', text: 'A branded slot inside the full HUD, between the player rail and the action.' },
  { file: 'mini-mayhem-semi-final-stream-starting-screen.webp', tag: 'Holding screen', text: 'Sponsor panel beside the countdown and the match-ups, before a single game starts.' },
];

/** Home: the proof. Real AOBS programme frames on a director-cut monitor, then the sponsor formats that pay for the show. */
export function RealOutput() {
  return (
    <section className="section" aria-labelledby="out-title">
      <div className="wrap">
        <div className="reveal grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7"><p className="eyebrow">Programme output</p><h2 id="out-title" data-decode className="display t-2 mt-4">This is what goes to air.</h2></div>
          <p className="lede md:col-span-5 md:pt-10">Real frames from AOBS MLBB broadcasts: in-game HUDs, draft boards and holding screens. Pick a source, or let the director cut.</p>
        </div>
        <div className="reveal mt-12"><OnAir /></div>

        <div className="mt-20 grid gap-6 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <p className="eyebrow">Sponsor-ready</p>
            <h3 className="display t-2 mt-4">Broadcasts that pay for themselves.</h3>
          </div>
          <p className="reveal lede md:col-span-6 md:col-start-7 md:pt-10">On Mini Mayhem, sponsor Shadhin Host ran in three formats without the game ever leaving the screen.</p>
        </div>
        <ul className="mt-10 grid gap-px bg-line md:grid-cols-3">
          {SPONSOR.map((s, i) => { const c = captures.find((x) => x.file === s.file)!; return (
            <li key={s.file} className="reveal bg-ink" style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
              <figure>
                <div className="group relative aspect-video overflow-hidden"><Image src={`/media/broadcast/${s.file}`} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" /></div>
                <figcaption className="p-5"><span className="mono text-accent">{String(i + 1).padStart(2, '0')} · {s.tag}</span><p className="mt-2 text-sm text-mute">{s.text}</p></figcaption>
              </figure>
            </li>); })}
        </ul>

        <div className="reveal mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <span className="flex flex-wrap gap-6"><Link href="/work/mini-mayhem" className="link-u mono text-fg">Mini Mayhem case study →</Link><Link href="/graphics-data#motion" className="link-u mono text-fg">Watch the motion teasers →</Link></span>
          {!site.showreelYoutubeId ? <span className="text-sm"><Rich text="{{TODO: full 60-90 second showreel (YouTube ID)}}" /></span> : null}
        </div>
      </div>
    </section>
  );
}
