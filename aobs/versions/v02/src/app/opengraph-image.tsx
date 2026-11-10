import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Every frame. Every stat. On air.';
export default function Image() { return ogImage('Esports broadcast production company', 'Every frame. Every stat. On air.'); }
