'use client';
import { useEffect, useRef, useState } from 'react';
import { track } from '@/lib/analytics';
import { gameNames } from '@/lib/content';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;
const validate = (d: Record<string, string>): Errors => {
  const e: Errors = {};
  if ((d.name || '').trim().length < 2) e.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((d.email || '').trim())) e.email = 'Please enter a valid email address.';
  if ((d.message || '').trim().length < 10) e.message = 'Tell us a little about the event (at least 10 characters).';
  return e;
};

function Field({ id, label, error, required, children, className = '' }: { id: string; label: string; error?: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mono mb-2 block text-fg/80">{label}{required ? <span className="text-accent" aria-hidden="true"> *</span> : null}</label>
      {children}
      {error ? <p id={`${id}-error`} className="mt-2 text-sm text-air-text">{error}</p> : null}
    </div>
  );
}
const input = 'w-full border border-line-2 bg-ink px-4 py-3 text-fg placeholder:text-mute/70 transition-colors focus:border-accent focus:outline-none aria-[invalid=true]:border-air';

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [serverError, setServerError] = useState('');
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => { const q = new URLSearchParams(location.search); const f = form.current; if (!f) return; const g = q.get('game'); const r = q.get('region'); if (g) (f.elements.namedItem('game') as HTMLInputElement).value = g; if (r) (f.elements.namedItem('message') as HTMLTextAreaElement).value = `Tournament in: ${r}\n`; }, []);

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const d = Object.fromEntries(new FormData(ev.currentTarget).entries()) as Record<string, string>;
    const e = validate(d); setErrors(e);
    const first = Object.keys(e)[0];
    if (first) { (form.current?.elements.namedItem(first) as HTMLElement | null)?.focus(); return; }
    setStatus('sending'); setServerError('');
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) { if (j.errors) setErrors(j.errors); throw new Error(j.error || 'Please check the form and try again.'); }
      setStatus('done'); track('form_submit', { format: d.format || 'unspecified' });
    } catch (err) { setStatus('error'); setServerError(err instanceof Error ? err.message : 'Something went wrong.'); }
  };

  if (status === 'done') {
    return (
      <div className="panel brackets p-8 md:p-12" role="status" aria-live="polite" tabIndex={-1}>
        <span className="tally ok"><span className="dot" />Received</span>
        <h3 className="display t-2 mt-6">We have your brief.</h3>
        <p className="lede mt-4">Thanks. Your request is with the AOBS production desk and we will reply by email.</p>
        <button type="button" className="btn mt-8" onClick={() => setStatus('idle')}>Send another request</button>
      </div>
    );
  }
  const a = (k: keyof Errors) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-error` : undefined });
  return (
    <form ref={form} onSubmit={onSubmit} noValidate className="panel grid gap-5 p-6 md:grid-cols-2 md:p-10" aria-label="Request a broadcast quote">
      <Field id="name" label="Your name" required error={errors.name}><input id="name" name="name" autoComplete="name" required className={input} {...a('name')} /></Field>
      <Field id="email" label="Email" required error={errors.email}><input id="email" name="email" type="email" autoComplete="email" required className={input} {...a('email')} /></Field>
      <Field id="company" label="Company / organizer"><input id="company" name="company" autoComplete="organization" className={input} /></Field>
      <Field id="event" label="Event name"><input id="event" name="event" className={input} /></Field>
      <Field id="game" label="Game">
        <input id="game" name="game" list="games" className={input} placeholder="e.g. Mobile Legends: Bang Bang" />
        <datalist id="games">{Object.values(gameNames).map((g) => <option key={g} value={g} />)}</datalist>
      </Field>
      <Field id="dates" label="Event dates"><input id="dates" name="dates" className={input} placeholder="e.g. 12-14 March, or TBC" /></Field>
      <Field id="format" label="Venue or online">
        <select id="format" name="format" className={input} defaultValue="">
          <option value="">Select…</option><option>Venue (LAN)</option><option>Online (remote production)</option><option>Hybrid</option><option>Not sure yet</option>
        </select>
      </Field>
      <Field id="budget" label="Budget range">
        <select id="budget" name="budget" className={input} defaultValue="">
          <option value="">Select…</option><option>Under $1,000</option><option>$1,000 – $5,000</option><option>$5,000 – $20,000</option><option>$20,000+</option><option>To be discussed</option>
        </select>
      </Field>
      <Field id="message" label="What do you need on air?" required error={errors.message} className="md:col-span-2">
        <textarea id="message" name="message" rows={5} required className={input} placeholder="Format, number of match days, platforms, graphics needs…" {...a('message')} />
      </Field>
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="flex flex-wrap items-center gap-5 md:col-span-2">
        <button type="submit" disabled={status === 'sending'} className="btn btn-primary disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send request'}<span className="arr" aria-hidden="true">→</span></button>
        <p className="text-sm text-mute" role="alert">{status === 'error' ? <span className="text-air-text">{serverError}</span> : null}</p>
      </div>
    </form>
  );
}
