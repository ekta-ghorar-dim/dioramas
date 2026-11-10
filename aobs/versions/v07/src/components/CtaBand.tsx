import Link from 'next/link';

/** v07 sign-off: one line, one action. */
export function CtaBand({ title = 'Have a tournament coming up?', text = 'Send the game, the dates and the format. We reply with a run of show and a quote.', primary = { href: '/contact', label: 'Book a production' } }: { title?: React.ReactNode; text?: string; primary?: { href: string; label: string }; secondary?: { href: string; label: string } }) {
  return (
    <section className="border-t-2 border-fg" aria-labelledby="cta-title">
      <div className="wrap grid items-end gap-8 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-8"><h2 id="cta-title" className="display t-2">{title}</h2><p className="mt-4 max-w-xl text-mute">{text}</p></div>
        <div className="md:col-span-4 md:text-right"><Link href={primary.href} className="group inline-flex items-baseline gap-3 text-2xl font-semibold tracking-[-0.02em]"><span className="border-b-2 border-fg pb-1 transition-colors group-hover:border-accent group-hover:text-accent">{primary.label}</span><span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></Link></div>
      </div>
    </section>
  );
}
