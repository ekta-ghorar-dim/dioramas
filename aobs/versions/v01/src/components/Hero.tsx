import { Cta } from './Cta';
import { Logo } from './Logo';
import { Timecode } from './Timecode';
import { Multiview } from './Multiview';

export function Hero() {
  return (
    <section className="hero relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[72px]" aria-labelledby="hero-title">
      <div className="gridbg absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

      {/* HUD */}
      <div className="wrap hud mt-4 flex items-center justify-between gap-4" aria-hidden="true">
        <div className="flex items-center gap-3">
          <span className="tally live"><span className="dot" />On air</span>
          <span className="mono hidden text-mute sm:inline">PGM · 1080p</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="mono hidden text-mute md:inline">TC</span>
          <Timecode className="text-sm text-fg" start={3725} />
          <span className="tally ok hidden sm:inline-flex"><span className="dot" />Backup ready</span>
        </div>
      </div>

      <div className="wrap grid flex-1 items-center gap-10 py-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <h1 id="hero-title">
            <span className="eyebrow lt-1">Esports broadcast production company</span>
            <span className="display t-hero mt-5 block">
              <span className="lt-2 block">Every frame.</span>
              <span className="lt-3 block">Every stat.</span>
              <span className="lt-4 block text-accent">On air.</span>
            </span>
          </h1>
          <p className="lede lt-5 mt-7">
            AOBS is an esports broadcast production company. We run the whole show (observers, replay, live data graphics, transmission) on technology we build ourselves, so your tournament goes out at world-class level and stays there.
          </p>
          <div className="lt-6 mt-9 flex flex-wrap gap-3">
            <Cta href="/contact" event="request_quote" label="hero">Request a broadcast quote</Cta>
            <Cta href="/work" variant="ghost">See our work</Cta>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="wall brackets">
            <Multiview />
            <div className="flex items-center justify-between border-t border-line bg-panel px-3 py-2">
              <span className="mono text-mute">MV 01 · Control room</span>
              <Logo size={18} className="text-fg/70" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrap flex items-center justify-between pb-6" aria-hidden="true">
        <span className="mono text-mute">Scroll · Run of show</span>
        <span className="mono text-mute">CH 01 / 08</span>
      </div>
      <div className="boot" aria-hidden="true" />
    </section>
  );
}
