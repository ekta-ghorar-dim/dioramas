import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: A broadcast company that builds its own tools';
export default function Image() { return ogImage('About AOBS', 'A broadcast company that builds its own tools'); }
