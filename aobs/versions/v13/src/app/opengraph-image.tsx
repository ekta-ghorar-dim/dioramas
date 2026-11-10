import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Hold to go live.';
export default function Image() { return ogImage('Esports broadcast production', 'Hold to go live.'); }
