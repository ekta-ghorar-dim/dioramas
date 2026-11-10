import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Every tournament gets its own look.';
export default function Image() { return ogImage('Esports broadcast production company', 'Every tournament gets its own look.'); }
