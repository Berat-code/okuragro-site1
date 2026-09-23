import {origin} from '../../lib/seo';
import {pages} from '../editorial-data';
import {readContent} from '../../lib/content-store';
export const dynamic='force-dynamic';
export async function GET(){const {content}=await readContent();const paths=['',...Object.keys(pages).filter(p=>!['gizlilik','kullanim-kosullari'].includes(p)),...content.services.map(s=>'cozumler/'+s.id)];const base=origin();const entries=paths.flatMap(p=>{const tr=base+'/'+p,en=base+'/en'+(p?'/'+p:'');return [tr,en].map(url=>`<url><loc>${url}</loc><xhtml:link rel="alternate" hreflang="tr" href="${tr}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/></url>`)});return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}})}
