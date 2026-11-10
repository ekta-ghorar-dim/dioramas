import { Rich } from './Rich';

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f, i) => (
        <details key={f.q} className="faq group border-b border-line" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6">
            <span className="flex gap-5"><span className="mono pt-1.5 text-mute">Q{String(i + 1).padStart(2, '0')}</span><h3 className="text-lg font-medium md:text-xl">{f.q}</h3></span>
            <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center border border-line-2 text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="max-w-3xl pb-7 pl-[3.4rem] text-mute"><Rich text={f.a} /></p>
        </details>
      ))}
    </div>
  );
}
