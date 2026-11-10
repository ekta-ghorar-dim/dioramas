import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '../dio/abyssal/style.css';
import { WORLD_HTML } from './world-markup';
import { WorldBoot } from './WorldBoot';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { capabilities } from '@/lib/content';

export const metadata = meta({
  title: 'AOBS | Esports Broadcast Production Company',
  description: 'AOBS is an esports broadcast production company. Dive through every layer under the scorebug: data, gallery, cloud and a backup stream.',
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
