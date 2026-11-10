import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Request a broadcast quote';
export default function Image() { return ogImage('Contact', 'Request a broadcast quote'); }
