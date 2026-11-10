import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const FIELDS = ['name', 'email', 'company', 'event', 'game', 'dates', 'format', 'budget', 'message'] as const;
type Body = Record<(typeof FIELDS)[number], string> & { website?: string };

/**
 * POST /api/contact
 * Destination is configured in .env (see .env.example):
 *   CONTACT_WEBHOOK_URL            -> JSON POST to any webhook
 *   RESEND_API_KEY + CONTACT_TO_EMAIL -> email through Resend
 * With neither set the submission is logged server-side and accepted (useful in development).
 */
export async function POST(req: Request) {
  let raw: Partial<Body>;
  try { raw = await req.json(); } catch { return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 }); }
  if (raw.website) return NextResponse.json({ ok: true }); // honeypot: silently accept bots

  const data = Object.fromEntries(FIELDS.map((k) => [k, String(raw[k] ?? '').trim().slice(0, 4000)])) as Body;
  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (data.message.length < 10) errors.message = 'Tell us a little about the event (at least 10 characters).';
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const payload = { ...data, receivedAt: new Date().toISOString(), source: 'aobs-website' };
  try {
    const { CONTACT_WEBHOOK_URL, RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
    if (CONTACT_WEBHOOK_URL) {
      const text = `New broadcast quote request\n` + FIELDS.map((k) => `${k}: ${data[k] || '-'}`).join('\n');
      const r = await fetch(CONTACT_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, text, content: text }) });
      if (!r.ok) throw new Error(`Webhook responded ${r.status}`);
    } else if (RESEND_API_KEY && CONTACT_TO_EMAIL) {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST', headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: CONTACT_FROM_EMAIL || 'AOBS Website <onboarding@resend.dev>', to: [CONTACT_TO_EMAIL], reply_to: data.email, subject: `Broadcast quote request: ${data.event || data.company || data.name}`, text: FIELDS.map((k) => `${k.toUpperCase()}: ${data[k] || '-'}`).join('\n') }),
      });
      if (!r.ok) throw new Error(`Resend responded ${r.status}`);
    } else {
      console.info('[contact] No destination configured. Submission:', payload);
    }
  } catch (err) {
    console.error('[contact] delivery failed', err);
    return NextResponse.json({ ok: false, error: 'We could not send your request. Please try again.' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
