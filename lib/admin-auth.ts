import {env} from 'cloudflare:workers';
import {getChatGPTUser} from '../app/chatgpt-auth';
export async function isAdmin(){const user=await getChatGPTUser();const email=(env as unknown as {ADMIN_EMAIL?:string}).ADMIN_EMAIL;return !!(user&&email&&user.email.toLowerCase()===email.toLowerCase());}
export function validOrigin(req:Request){const origin=req.headers.get('origin');return origin===new URL(req.url).origin;}
