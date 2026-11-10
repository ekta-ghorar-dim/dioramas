import Image from 'next/image';
import { Cta } from './Cta';
import { Timecode } from './Timecode';
import { captures, keyVisuals } from '@/lib/media';

const A = captures; const B = [...keyVisuals.filter((k) => k.w >= k.h * 0.9).slice(0, 5)];

function Strip({ items, dir, base }: { items: { src: string; label: string; w: number; h: number }[]; dir: 'up' | 'down'; base: string }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className={`strip ${dir === 'down' ? 'rev' : ''}`}>
        {[...items, ...items].map((x, i) => (
          <figure key={i} className="relative overflow-hidden border border-line bg-black" style={{ aspectRatio: `${x.w} / ${x.h}` }}>
            <Image src={`${base}${x.src}`} alt="" fill sizes="(max-width: 1024px) 45vw, 18vw" className="object-cover" loading="lazy" />
            <figcaption className="mono absolute left-0 top-0 bg-ink/85 px-1.5 py-0.5 text-[9px] text-fg">{x.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/** v06 "Tally Amber": an editorial front page. Giant serif headline, two contact-sheet strips of real AOBS output. */
export function Hero() {
  const a = A.map((c, i) => ({ src: c.file, label: i === 0 ? 'PGM' : `SRC ${i + 1}`, w: c.w, h: c.h }));
  const b = B.map((k, i) => ({ src: k.file, label: `KV ${i + 1}`, w: k.w, h: k.h }));
  return (
    <section className="relative overflow-hidden border-b border-line pt-[72px]" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="mono flex items-center justify-between border-b border-line py-4 text-mute" aria-hidden="true">
          <span className="flex items-center gap-3"><span className="tally live"><span className="dot" />On air</span><span className="hidden sm:inline">The broadcast desk · Edition 06</span></span>
          <Timecode className="text-xs text-fg" start={3725} />
        </div>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="pb-14 pt-12 lg:col-span-8 lg:pb-20 lg:pt-16">
            <h1 id="hero-title">
              <span className="eyebrow">Esports broadcast production company</span>
              <span className="display t-hero mt-6 block">We put esports <em>on air.</em></span>
            </h1>
            <div className="mt-10 grid gap-8 border-t border-fg/80 pt-6 md:grid-cols-2">
              <p className="text-lg text-mute">AOBS is an esports broadcast production company. Observers, replay, live data graphics, sponsor integrations and transmission, run end to end on technology we build ourselves.</p>
              <div className="flex flex-wrap content-start gap-3">
                <Cta href="/contact" event="request_quote" label="hero">Request a broadcast quote</Cta>
                <Cta href="/work" variant="ghost">See our work</Cta>
              </div>
            </div>
          </div>
          <div className="relative hidden h-[min(82vh,820px)] grid-cols-2 gap-3 lg:col-span-4 lg:grid" aria-label="Contact sheet of real AOBS broadcast frames and key visuals" role="img">
            <Strip items={a} dir="up" base="/media/broadcast/" />
            <Strip items={b} dir="down" base="/media/key-visuals/" />
            <span className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
          </div>
        </div>
      </div>
      <div className="lg:hidden" aria-hidden="true">
        <div className="marquee overflow-hidden pb-8"><div className="marquee-track flex w-max gap-3">{[...a, ...a].map((x, i) => (
          <div key={i} className="relative h-28 overflow-hidden border border-line" style={{ aspectRatio: `${x.w} / ${x.h}` }}><Image src={`/media/broadcast/${x.src}`} alt="" fill sizes="200px" className="object-cover" loading="lazy" /></div>))}</div></div>
      </div>
    </section>
  );
}
