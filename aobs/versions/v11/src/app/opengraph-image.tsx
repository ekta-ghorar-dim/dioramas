import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: Every draft is a game of chess.';
export default function Image() { return ogImage('Graphics & data', 'Every draft is a game of chess.'); }
