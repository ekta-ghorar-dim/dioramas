import { ogImage, ogSize, ogContentType } from '@/lib/og';
import { product, technology } from '@/lib/content';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS broadcast technology';
export const generateStaticParams = () => technology.map((t) => ({ slug: t.slug }));
export default async function Image({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const p = product(slug); return ogImage(p?.kind ?? 'AOBS technology', p?.name ?? 'Technology'); }
