import { Cta } from './Cta';
import { Timecode } from './Timecode';

export function CtaBand({ title = <>Ready to go <span className="text-accent">on air?</span></>, text = 'Tell us the game, the dates and the format. We will come back with a production plan and a quote.', primary = { href: '/contact', label: 'Request a broadcast quote' }, secondary }: { title?: React.ReactNode; text?: string; primary?: { href: string; label: string }; secondary?: { href: string; label: string } }) {
  return (
    <section className="section relative overflow-hidden border-t border-line" aria-labelledby="cta-title">
      <div className="gridbg absolute inset-0" aria-hidden="true" />
      <div className="wrap relative">
        <div className="reveal flex items-center justify-between" aria-hidden="true"><span className="tally"><span className="dot" />Standby</span><Timecode className="text-xs text-mute" start={86000} /></div>
        <h2 id="cta-title" className="reveal display t-1 mt-8 max-w-5xl">{title}</h2>
        <p className="reveal lede mt-6">{text}</p>
        <div className="reveal mt-9 flex flex-wrap gap-3">
          <Cta href={primary.href} event="request_quote" label="cta-band">{primary.label}</Cta>
          {secondary ? <Cta href={secondary.href} variant="ghost">{secondary.label}</Cta> : null}
        </div>
      </div>
    </section>
  );
}
