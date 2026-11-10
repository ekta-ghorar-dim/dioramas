import '@fontsource-variable/nunito-sans';
import '@fontsource-variable/nunito-sans/wght-italic.css';
import '@fontsource/young-serif/400.css';
import '../dio/atlas/style.css';
import { WORLD_HTML } from './world-markup';
import { WorldBoot } from './WorldBoot';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { capabilities } from '@/lib/content';

export const metadata = meta({
  title: 'AOBS | Esports Broadcast Production Company',
  description: 'AOBS is an esports broadcast production company with tournaments on record in Pakistan, Nepal and Bangladesh, and online through AOBS Cloud.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <div className="kp-root" dangerouslySetInnerHTML={{ __html: WORLD_HTML }} />
      <WorldBoot />
      <JsonLd data={capabilities.map((c) => serviceLd(c.title, c.line, c.href))} />
    </>
  );
}
