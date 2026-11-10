import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Esports broadcast production services';
export default function Image() { return ogImage('Broadcast production', 'Esports broadcast production services'); }
