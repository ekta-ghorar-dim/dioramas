import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Rewind the moment.';
export default function Image() { return ogImage('Replay · sound · running order', 'Rewind the moment.'); }
