import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Tournaments we have broadcast';
export default function Image() { return ogImage('Work', 'Tournaments we have broadcast'); }
