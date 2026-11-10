import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: See what\'s inside a broadcast.';
export default function Image() { return ogImage('Esports broadcast production company', 'See what\'s inside a broadcast.'); }
