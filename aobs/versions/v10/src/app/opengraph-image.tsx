import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Storms happen. The stream stays lit.';
export default function Image() { return ogImage('Backup Streamer', 'Storms happen. The stream stays lit.'); }
