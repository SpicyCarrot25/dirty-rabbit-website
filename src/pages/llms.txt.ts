import { getLlmsText } from '../lib/business-facts';
export const GET = () => new Response(getLlmsText(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
