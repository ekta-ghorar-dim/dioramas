import Link from 'next/link';
import { capabilities } from '@/lib/content';

/** Laid out like a running order (rundown) rather than a stack of cards. */
export function Capabilities() {
  return (
    <section className="paper section" aria-labelledby="cap-title">
      <div className="wrap">
        <div className="reveal grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Run of show</p>
            <h2 id="cap-title" className="display t-2 mt-4">One crew. The whole signal chain.</h2>
          </div>
          <p className="lede md:col-span-5 md:pt-10">Most tournaments stitch a broadcast together from four vendors. AOBS runs production, graphics, data and transmission as one system.</p>
        </div>
        <ol className="rundown mt-14 border-t border-fg">
          {capabilities.map((c, i) => (
            <li key={c.id} className="reveal border-b border-line" style={{ '--d': `${i * 60}ms` } as React.CSSProperties}>
              <Link href={c.href} className="group grid items-center gap-x-6 gap-y-3 py-7 md:grid-cols-12 md:py-9">
                <span className="mono text-mute md:col-span-2"><span className="mr-3 inline-block h-2 w-2 rounded-full bg-line-2 align-middle transition-colors group-hover:bg-air" />{c.code}</span>
                <span className="display text-[clamp(2rem,4.4vw,4rem)] transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:text-accent md:col-span-5">{c.title}</span>
                <span className="text-mute md:col-span-4">{c.line}
                  <span className="mt-3 flex flex-wrap gap-2">{c.points.map((p) => <span key={p} className="mono border border-line-2 px-2 py-1 text-[10px] text-fg/80">{p}</span>)}</span>
                </span>
                <span className="hidden text-right text-2xl text-mute transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:block" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
