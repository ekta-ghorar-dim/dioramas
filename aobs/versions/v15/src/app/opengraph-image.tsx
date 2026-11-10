import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: What viewers see is the surface.';
export default function Image() { return ogImage('Esports broadcast production', 'What viewers see is the surface.'); }
