import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Notes from the gallery';
export default function Image() { return ogImage('Insights', 'Notes from the gallery'); }
