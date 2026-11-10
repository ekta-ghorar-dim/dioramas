import { Cta } from '@/components/Cta';
import { Feed } from '@/components/Feed';

export const metadata = { title: 'Signal lost (404)', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative grid min-h-[100svh] place-items-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-25"><Feed kind="bars" /></div>
      <div className="absolute inset-0 bg-ink/70" />
      <div className="wrap relative text-center">
        <span className="tally"><span className="dot" />No signal · 404</span>
        <h1 className="display t-hero mt-6">Signal lost.</h1>
        <p className="lede mx-auto mt-6">This page is off air. The rest of the broadcast is still live.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3"><Cta href="/">Back to programme</Cta><Cta href="/work" variant="ghost">See our work</Cta></div>
      </div>
    </section>
  );
}
