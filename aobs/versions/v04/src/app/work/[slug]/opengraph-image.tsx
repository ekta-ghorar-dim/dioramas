import { ogImage, ogSize, ogContentType } from '@/lib/og';
import { tournament, tournaments } from '@/lib/content';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS tournament broadcast production case study';
export const generateStaticParams = () => tournaments.map((t) => ({ slug: t.slug }));
export default async function Image({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return ogImage('Case study · Broadcast production', tournament(slug)?.name ?? 'Tournament'); }
