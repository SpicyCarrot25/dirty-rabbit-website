import { getMachineFacts } from '../../lib/business-facts';
export const GET = () => new Response(JSON.stringify(getMachineFacts(), null, 2) + '\n', { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
