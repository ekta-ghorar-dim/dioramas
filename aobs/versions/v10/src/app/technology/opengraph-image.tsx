import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Broadcast technology, built in-house';
export default function Image() { return ogImage('AOBS technology', 'Broadcast technology, built in-house'); }
