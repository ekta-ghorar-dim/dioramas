import { ogImage, ogSize, ogContentType } from '@/lib/og';
export const size = ogSize; export const contentType = ogContentType; export const alt = 'AOBS: We run the broadcast. You run the tournament.';
export default function Image() { return ogImage('Esports broadcast production company', 'We run the broadcast. You run the tournament.'); }
