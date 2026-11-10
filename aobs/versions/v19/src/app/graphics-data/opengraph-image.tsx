import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Esports broadcast graphics, driven by live data';
export default function Image() { return ogImage('Graphics & data', 'Esports broadcast graphics, driven by live data'); }
