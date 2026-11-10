import { PageHero } from '@/components/PageHero';
import { WorkGrid } from '@/components/WorkGrid';
import { CtaBand } from '@/components/CtaBand';
import { meta } from '@/lib/seo';
import { tournaments } from '@/lib/content';

export const metadata = meta({
  title: "Esports Tournaments We've Broadcast | AOBS",
  description: 'Every esports tournament AOBS has broadcast: Mobile Legends: Bang Bang, Free Fire, PUBG Mobile and FC Mobile events, with case studies for each.',
  path: '/work',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Work" code="LOG" crumbs={[['Work', '/work']]} title={<>Tournaments we&apos;ve <span className="text-accent">broadcast</span></>} lede={`${tournaments.length} esports tournaments have gone to air through AOBS broadcast production, across Mobile Legends: Bang Bang, Free Fire, PUBG Mobile and EA Sports FC Mobile. Filter by game, year or type.`} />
      <section className="section !pt-12"><div className="wrap"><WorkGrid items={tournaments} /></div></section>
      <CtaBand title={<>Put your tournament <span className="text-accent">on this wall.</span></>} />
    </>
  );
}
