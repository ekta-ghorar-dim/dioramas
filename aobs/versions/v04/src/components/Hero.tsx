import { getImageProps } from 'next/image';
import { Cta } from './Cta';
import { Timecode } from './Timecode';

/** Art-directed poster: a light portrait frame for phones, the wide control room for desktops. */
function Poster() {
  const common = { alt: '', priority: true, fill: true, quality: 72 } as const;
  const { props: { srcSet: desk } } = getImageProps({ ...common, src: '/media/aobs-control-room-multiviewer-poster.webp', sizes: '100vw' });
  const { props: { srcSet: mob, ...rest } } = getImageProps({ ...common, src: '/media/aobs-control-room-multiviewer-poster-mobile.webp', sizes: '100vw' });
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desk} sizes="100vw" />
      <source media="(max-width: 767px)" srcSet={mob} sizes="100vw" />
      {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
      <img {...rest} srcSet={mob} className="object-cover object-[72%_50%] lg:object-center" />
    </picture>
  );
}

export function Hero() {
  return (
    <section className="hero relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[72px]" aria-labelledby="hero-title">
      {/* Poster paints instantly; on capable desktops the live 3D control room fades in over it. */}
      <div className="hero-poster absolute inset-0 -z-20" aria-hidden="true">
        <Poster />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(5,7,10,0.86)_34%,rgba(5,7,10,0.25)_62%,transparent_100%)] max-lg:bg-[linear-gradient(180deg,rgba(5,7,10,0.72)_0%,rgba(5,7,10,0.82)_55%,var(--color-ink)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

      <div className="wrap hud mt-4 flex items-center justify-between gap-4" aria-hidden="true">
        <div className="flex items-center gap-3">
          <span className="tally live"><span className="dot" />On air</span>
          <span className="mono hidden text-mute sm:inline">PGM · Control room</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="mono hidden text-mute md:inline">TC</span>
          <Timecode className="text-sm text-fg" start={3725} />
          <span className="tally ok hidden sm:inline-flex"><span className="dot" />Backup ready</span>
        </div>
      </div>

      <div className="wrap flex flex-1 items-center py-10">
        <div className="max-w-[820px]">
          <h1 id="hero-title">
            <span className="eyebrow lt-1">Esports broadcast production company</span>
            <span className="display t-hero mt-5 block">
              <span className="lt-2 block">Every frame.</span>
              <span className="lt-3 block">Every stat.</span>
              <span className="lt-4 block text-accent">On air.</span>
            </span>
          </h1>
          <p className="lede lt-5 mt-7 !max-w-[54ch] !text-fg/80">
            AOBS is an esports broadcast production company. We run the whole show (observers, replay, live data graphics, transmission) on technology we build ourselves, so your tournament goes out at world-class level and stays there.
          </p>
          <div className="lt-6 mt-9 flex flex-wrap gap-3">
            <Cta href="/contact" event="request_quote" label="hero">Request a broadcast quote</Cta>
            <Cta href="/work" variant="ghost" className="bg-ink/60 backdrop-blur">See our work</Cta>
          </div>
        </div>
      </div>

      <div className="wrap flex items-center justify-between pb-6" aria-hidden="true">
        <span className="mono text-mute">Scroll · Run of show</span>
        <span className="mono text-mute">MV 01 · 12 sources</span>
      </div>
      <div className="boot" aria-hidden="true" />
    </section>
  );
}
