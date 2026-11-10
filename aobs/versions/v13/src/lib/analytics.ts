'use client';
type Props = Record<string, string | number | boolean>;
declare global { interface Window { plausible?: (e: string, o?: { props?: Props }) => void; gtag?: (...a: unknown[]) => void } }

/** Fire a custom event to whichever analytics provider is configured (Plausible or GA4). */
export function track(event: 'form_submit' | 'showreel_play' | 'request_demo' | 'request_quote' | 'failover_sim', props?: Props) {
  if (typeof window === 'undefined') return;
  window.plausible?.(event, props ? { props } : undefined);
  window.gtag?.('event', event, props);
}
