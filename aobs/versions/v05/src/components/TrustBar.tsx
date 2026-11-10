import Image from 'next/image';
import { Counter } from './Counter';
import { Rich } from './Rich';
import { stats, tournaments } from '@/lib/content';

/** v05: giant numbers, then a slow logo marquee. */
export function TrustBar() {
  const real = stats.filter((s) => s.value !== null); const pending = stats.filter((s) => s.value === null);
  return (
    <section className="relative border-y border-line" aria-labelledby="trust-title">
      <h2 id="trust-title" className="sr-only">AOBS in numbers</h2>
      <div className="wrap py-14 md:py-20">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {real.map((s, i) => (
            <div key={s.label} className="reveal flex flex-col-reverse" style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
              <dt className="mt-3 border-t border-line pt-3"><span className="block text-fg">{s.label}</span>{'note' in s && s.note ? <span className="mt-1 block text-xs text-mute">{s.note}</span> : null}</dt>
              <dd className="stat5 text-[clamp(4.5rem,11vw,10rem)]"><span className="hero5-grad"><Counter value={s.value as number} pad={1} /></span></dd>
            </div>
          ))}
        </dl>
        {pending.length ? <p className="mt-10 text-sm text-mute">Next on the board: {pending.map((p) => <Rich key={p.label} text={`{{TODO: ${p.todo}}}`} />)}</p> : null}
      </div>
      <div className="border-t border-line py-6">
        <p className="mono wrap mb-5 text-mute">Tournaments we&apos;ve broadcast</p>
        <div className="marquee relative overflow-hidden" aria-hidden="true">
          <div className="marquee-track flex w-max items-center gap-14">
            {[...tournaments, ...tournaments].map((t, i) => (
              <span key={i} className="logo-strip flex h-14 items-center" data-mono={t.mono}><Image src={`/logos/${t.logo}`} alt="" width={t.w} height={t.h} sizes="140px" className="h-full w-auto object-contain" loading="lazy" /></span>
            ))}
          </div>
        </div>
        <ul className="sr-only">{tournaments.map((t) => <li key={t.slug}>{t.name}</li>)}</ul>
      </div>
    </section>
  );
}
