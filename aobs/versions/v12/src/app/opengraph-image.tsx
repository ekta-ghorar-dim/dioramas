import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Fourteen layers. One programme.';
export default function Image() { return ogImage('Esports broadcast production', 'Fourteen layers. One programme.'); }
