import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: From load-in to the last game.';
export default function Image() { return ogImage('Esports broadcast production', 'From load-in to the last game.'); }
