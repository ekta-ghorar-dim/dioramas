import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Four places. One crew.';
export default function Image() { return ogImage('Pakistan · Nepal · Bangladesh · online', 'Four places. One crew.'); }
