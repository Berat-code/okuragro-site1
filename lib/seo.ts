import {env} from 'cloudflare:workers';
import type {Metadata} from 'next';
export function origin(){const configured=(env as unknown as {SITE_URL?:string}).SITE_URL;return configured==='https://okuragro.com'?configured:'https://okur-agro.ekerberat005.chatgpt.site'}
export function seo(title:string,description:string,path:string,en=false):Metadata{const tr=path.replace(/^\/en(?=\/|$)/,'')||'/';const english='/en'+(tr==='/'?'':tr);return {title,description,alternates:{canonical:origin()+path,languages:{tr:origin()+tr,en:origin()+english,'x-default':origin()+tr}},openGraph:{title,description,url:origin()+path,siteName:'OKUR AGRO',locale:en?'en_US':'tr_TR',type:'website'}}}
export const address='Afetevleri Mah. Kurtalan Yolu Üzeri, İpekyolu Kavşağı No: 184/1, 56100 Merkez/Siirt';
