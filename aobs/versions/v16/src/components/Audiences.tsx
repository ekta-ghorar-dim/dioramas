'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useId, useState } from 'react';
import audiences from '@/content/audiences.json';

/** Atlas-style "built for" switcher: one tab per buyer, each with its own promise, proof and a real frame. */
export function Audiences() {
  const [i, setI] = useState(0); const id = useId(); const a = audiences[i];
  return (
    <section className="section" aria-labelledby="aud-title">
      <div className="wrap">
        <div className="reveal max-w-3xl"><p className="eyebrow">Built for</p><h2 id="aud-title" className="display t-2 mt-4">Whoever is paying for the stream, it has to land.</h2></div>
        <div role="tablist" aria-label="Who AOBS works with" className="reveal mt-10 flex flex-wrap gap-2">
          {audiences.map((x, k) => (
            <button key={x.id} id={`${id}-t${k}`} role="tab" type="button" aria-selected={k === i} aria-controls={`${id}-p`} onClick={() => setI(k)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${k === i ? 'border-transparent bg-fg text-ink' : 'border-line-2 text-fg/80 hover:border-fg/60'}`}>{x.label}</button>
          ))}
        </div>
        {/* Every audience's copy is in the HTML; only the selected panel is visible. */}
        {audiences.map((x, k) => (
          <div key={x.id} id={k === i ? `${id}-p` : undefined} role="tabpanel" aria-labelledby={`${id}-t${k}`} hidden={k !== i} className="mt-8 grid items-stretch gap-6 lg:grid-cols-12">
            <div className="panel flex flex-col p-7 md:p-10 lg:col-span-5">
              <h3 className="display t-3 !text-[clamp(1.4rem,2.2vw,2rem)]">{x.title}</h3>
              <ul className="mt-7 space-y-3">{x.points.map((p) => <li key={p} className="flex gap-3 text-mute"><span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{p}</li>)}</ul>
              <Link href={x.proof.href} className="link-u mono mt-auto pt-8 text-accent">Proof: {x.proof.label} →</Link>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-[18px] border border-line lg:col-span-7">
              <Image src={`/media/broadcast/${x.proof.image}`} alt="" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" loading="lazy" />
              <span className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" />
              <span className="mono absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1 text-fg">{a.id === x.id ? x.proof.label : ''}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
