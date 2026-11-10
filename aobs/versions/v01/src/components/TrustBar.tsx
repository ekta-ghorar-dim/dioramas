import Image from 'next/image';
import { Counter } from './Counter';
import { stats, tournaments } from '@/lib/content';

export function TrustBar() {
  return (
    <section className="relative border-y border-line bg-panel" aria-labelledby="trust-title">
      <h2 id="trust-title" className="sr-only">AOBS in numbers</h2>
      <dl className="wrap grid grid-cols-2 md:grid-cols-5">
        {stats.map((s, i) => (
          <div key={s.label} className={`reveal flex flex-col-reverse justify-end gap-2 border-line py-8 md:py-10 ${i % 2 ? 'pl-5' : 'pr-5 border-r'} md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 ${i === stats.length - 1 ? 'col-span-2 md:col-span-1 !border-r-0 border-t md:border-t-0 !pl-0 md:!pl-6' : ''} ${i >= 2 && i < 4 ? 'border-t md:border-t-0' : ''}`} style={{ '--d': `${i * 70}ms` } as React.CSSProperties}>
            <dt>
              <span className="mono block text-fg">{s.label}</span>
              {'note' in s && s.note ? <span className="mt-1 block text-xs text-mute">{s.note}</span> : null}
            </dt>
            <dd className="display text-[clamp(3rem,6vw,5rem)] leading-none">
              {s.value !== null ? <><Counter value={s.value as number} /><span className="text-accent">{s.suffix}</span></> : <span className="text-line-2" title="Awaiting data from AOBS">--<span className="todo ml-2 align-middle !text-[0.6rem]">{s.todo}</span></span>}
            </dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-line">
        <div className="wrap flex items-center gap-6 py-5">
          <p className="mono shrink-0 text-mute">Tournaments<br className="hidden sm:block" /> we&apos;ve broadcast</p>
          <div className="marquee relative flex-1 overflow-hidden" aria-hidden="true">
            <div className="marquee-track flex w-max items-center gap-12">
              {[...tournaments, ...tournaments].map((t, i) => (
                <span key={i} className="logo-strip flex h-12 items-center" data-mono={t.mono}>
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
