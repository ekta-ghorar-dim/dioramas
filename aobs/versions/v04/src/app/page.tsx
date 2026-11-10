import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { RealOutput } from '@/components/RealOutput';
import { Capabilities } from '@/components/Capabilities';
import { LazyLiveData, LazyFailover } from '@/components/Lazy';
import { SignalFlow } from '@/components/SignalFlow';
import { FeaturedCases } from '@/components/FeaturedCases';
import { LogoWall } from '@/components/LogoWall';
import { ContactForm } from '@/components/ContactForm';
import { Cta } from '@/components/Cta';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { capabilities } from '@/lib/content';

export const metadata = meta({
  title: 'AOBS | Esports Broadcast Production Company',
  description: 'AOBS is an esports broadcast production company: live production, game API data graphics, 3D and motion, plus in-house cloud and failover tech.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <RealOutput />
      <Capabilities />

      <section className="section border-t border-line bg-panel" aria-labelledby="data-title">
        <div className="wrap">
          <div className="reveal grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7"><p className="eyebrow">Live data → broadcast graphics</p><h2 id="data-title" className="display t-2 mt-4">The game talks. The graphics listen.</h2></div>
            <p className="lede md:col-span-5 md:pt-10">Every kill, objective and gold swing arrives as data before a caster can say it. Our graphics read that feed directly, so the scorebug is never behind the game.</p>
          </div>
          <div className="reveal mt-12"><LazyLiveData /></div>
          <div className="reveal mt-10"><Cta href="/graphics-data" variant="ghost">Explore graphics &amp; data</Cta></div>
        </div>
      </section>

      <section className="section" aria-labelledby="flow-title">
        <div className="wrap">
          <div className="reveal max-w-3xl"><p className="eyebrow">End-to-end workflow</p><h2 id="flow-title" className="display t-2 mt-4">From game server to every screen.</h2>
            <p className="lede mt-6">One signal chain, owned end to end. Hover a stage to see what happens there.</p></div>
          <div className="reveal mt-10"><SignalFlow /></div>
        </div>
      </section>

      <section className="section border-y border-line bg-panel" aria-labelledby="fo-title">
        <div className="wrap">
          <div className="reveal grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7"><p className="eyebrow !text-air-text">Backup Streamer</p><h2 id="fo-title" className="display t-2 mt-4">Pull the plug. We stay live.</h2></div>
            <p className="lede md:col-span-5 md:pt-10">Encoders crash. Connections drop. Our Backup Streamer keeps a second path hot for the whole show. Try it: kill the primary.</p>
          </div>
          <div className="reveal mt-12"><LazyFailover /></div>
          <div className="reveal mt-10"><Cta href="/technology/backup-streamer" variant="ghost" event="request_demo" label="home-failover">How Backup Streamer works</Cta></div>
        </div>
      </section>

      <FeaturedCases />
      <LogoWall />

      <section id="quote" className="section border-t border-line" aria-labelledby="quote-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <p className="eyebrow">Request a quote</p>
            <h2 id="quote-title" className="display t-2 mt-4">Ready to go <span className="text-accent">on air?</span></h2>
            <p className="lede mt-6">Tell us the game, the dates and the format. We will come back with a production plan and a quote.</p>
          </div>
          <div className="reveal lg:col-span-7"><ContactForm /></div>
        </div>
      </section>

      <JsonLd data={capabilities.map((c) => serviceLd(c.title, c.line, c.href))} />
    </>
  );
}
