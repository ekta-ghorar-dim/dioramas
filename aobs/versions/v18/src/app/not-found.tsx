import { Cta } from '@/components/Cta';

export const metadata = { title: 'Signal lost (404)', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative grid min-h-[100svh] place-items-center overflow-hidden pt-20">
      
      <div className="wrap relative text-center">
        <p className="text-mute">Error 404</p>
        <h1 className="display t-hero mt-6">Nothing under the lens.</h1>
        <p className="lede mx-auto mt-6">This page doesn't exist, or it moved. Everything else is where you left it.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3"><Cta href="/">Back to the front page</Cta><Cta href="/work" variant="ghost">See our work</Cta></div>
      </div>
    </section>
  );
}
