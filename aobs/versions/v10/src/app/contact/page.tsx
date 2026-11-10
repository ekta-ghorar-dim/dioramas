import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { Rich } from '@/components/Rich';
import { meta } from '@/lib/seo';
import { site } from '@/lib/content';

export const metadata = meta({
  title: 'Request an Esports Broadcast Quote | AOBS',
  description: 'Request a quote for esports broadcast production from AOBS. Tell us the game, dates and format and we will reply with a production plan.',
  path: '/contact',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" code="TALKBACK" crumbs={[['Contact', '/contact']]} title={<>Request a <span className="text-accent">broadcast quote</span></>} lede="Tell us about the tournament. The more we know about the game, the dates and the format, the sharper the production plan and quote we can send back." />
      <section className="section !pt-14">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8"><ContactForm /></div>
          <aside className="lg:col-span-4">
            <div className="panel p-6 md:p-8">
              <h2 className="mono text-accent">What happens next</h2>
              <ol className="mt-5 space-y-5">
                {['We read your brief and check dates.', 'We come back with questions or a call.', 'You get a production plan and a quote.'].map((s, i) => (<li key={s} className="flex gap-4"><span className="mono pt-1 text-mute">{String(i + 1).padStart(2, '0')}</span><span>{s}</span></li>))}
              </ol>
              <h2 className="mono mt-10 text-accent">Direct</h2>
              <p className="mt-3 text-sm">{site.email.startsWith('{{') ? <Rich text={site.email} /> : <a className="link-u" href={`mailto:${site.email}`}>{site.email}</a>}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
