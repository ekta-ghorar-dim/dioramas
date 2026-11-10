import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: A raw stream is a stone.';
export default function Image() { return ogImage('Esports broadcast production', 'A raw stream is a stone.'); }
