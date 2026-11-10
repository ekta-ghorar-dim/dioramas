import '@fontsource/chakra-petch/400.css';
import '@fontsource/chakra-petch/500.css';
import '@fontsource/chakra-petch/600.css';
import '@fontsource/chakra-petch/700.css';
import '@fontsource/chakra-petch/500-italic.css';
import '@fontsource/rajdhani/400.css';
import '@fontsource/rajdhani/500.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/share-tech-mono/400.css';
import '../dio/hangar/style.css';
import { WORLD_HTML } from './world-markup';
import { WorldBoot } from './WorldBoot';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { capabilities } from '@/lib/content';

export const metadata = meta({
  title: 'AOBS | Esports Broadcast Production Company',
  description: 'AOBS is an esports broadcast production company. Hold to go live: observers, graphics, data, sponsors and a backup core, one crew.',
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
