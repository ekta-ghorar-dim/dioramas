import { PageHero } from '@/components/PageHero';
import { CtaBand } from '@/components/CtaBand';
import { meta } from '@/lib/seo';
import { insights } from '@/lib/content';

export const metadata = meta({
  title: 'Insights: Esports Broadcast Production | AOBS',
  description: 'Notes from the AOBS gallery on esports broadcast production: stream redundancy, live data graphics and choosing a production model.',
  path: '/insights',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Insights" code="NOTES" crumbs={[['Insights', '/insights']]} title={<>Notes from <span className="text-accent">the gallery</span></>} lede="How esports broadcast production actually works, written by the crew that does it. First articles are in production." />
      <section className="section !pt-14">
        <div className="wrap">
          <ul className="border-t border-line">
            {insights.map((a, i) => (
              <li key={a.slug} className="reveal grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline">
                <span className="mono text-mute md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                <span className="mono text-accent md:col-span-2">{a.tag}</span>
                <div className="md:col-span-7"><h2 className="display t-3 !text-[clamp(1.6rem,2.6vw,2.4rem)]">{a.title}</h2><p className="mt-3 text-mute">{a.summary}</p></div>
                <span className="tally md:col-span-2 md:justify-self-end"><span className="dot" />In production</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
