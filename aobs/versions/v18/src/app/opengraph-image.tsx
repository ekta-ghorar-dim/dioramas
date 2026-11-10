import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: One tournament, four seasons.';
export default function Image() { return ogImage('Leagues & circuits', 'One tournament, four seasons.'); }
