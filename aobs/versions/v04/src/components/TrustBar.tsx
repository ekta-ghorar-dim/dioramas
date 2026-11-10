import Image from 'next/image';
import { Counter } from './Counter';
import { stats, tournaments } from '@/lib/content';

export function TrustBar() {
  return (
    <section className="relative border-y border-line bg-panel" aria-labelledby="trust-title">
      <h2 id="trust-title" className="sr-only">AOBS in numbers</h2>
      <div className="wrap !px-0 md:!px-[clamp(20px,4vw,56px)]">
        <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-5">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal flex flex-col-reverse justify-end gap-3 bg-panel px-5 py-8 md:px-6 md:py-10 ${i === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''}`} style={{ '--d': `${i * 70}ms` } as React.CSSProperties}>
              <dt>
                <span className="mono block text-fg">{s.label}</span>
                {'note' in s && s.note ? <span className="mt-1 block text-xs text-mute">{s.note}</span> : null}
                {s.value === null ? <span className="todo mt-2 !text-[0.6rem]">{s.todo}</span> : null}
              </dt>
              <dd className="display text-[clamp(3.2rem,6vw,5.2rem)] leading-none">
                {s.value !== null ? <Counter value={s.value as number} /> : <span className="text-line-2" aria-label="Awaiting data">--</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:gap-8">
          <p className="mono shrink-0 text-mute">Tournaments we&apos;ve broadcast</p>
          <div className="marquee relative min-w-0 flex-1 overflow-hidden" aria-hidden="true">
            <div className="marquee-track flex w-max items-center gap-12">
              {[...tournaments, ...tournaments].map((t, i) => (
                <span key={i} className="logo-strip flex h-11 items-center" data-mono={t.mono}>
                  <Image src={`/logos/${t.logo}`} alt="" width={t.w} height={t.h} sizes="120px" className="h-full w-auto object-contain" loading="lazy" />
                </span>
              ))}
            </div>
          </div>
          <ul className="sr-only">{tournaments.map((t) => <li key={t.slug}>{t.name}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
