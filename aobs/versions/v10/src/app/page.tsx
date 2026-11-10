import '@fontsource/libre-caslon-display/400.css';
import '@fontsource/libre-caslon-text/400.css';
import '@fontsource/libre-caslon-text/400-italic.css';
import '@fontsource/karla/300.css';
import '@fontsource/karla/400.css';
import '@fontsource/karla/500.css';
import '@fontsource/karla/600.css';
import '../dio/keeper/style.css';
import { KEEPER_HTML } from './keeper-markup';
import { KeeperBoot } from './KeeperBoot';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { capabilities } from '@/lib/content';

export const metadata = meta({
  title: 'AOBS | Esports Broadcast Production Company',
  description: 'AOBS is an esports broadcast production company. A backup stream runs under every show, so viewers never see an offline screen.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <div className="kp-root" dangerouslySetInnerHTML={{ __html: KEEPER_HTML }} />
      <KeeperBoot />
      <JsonLd data={capabilities.map((c) => serviceLd(c.title, c.line, c.href))} />
    </>
  );
}
