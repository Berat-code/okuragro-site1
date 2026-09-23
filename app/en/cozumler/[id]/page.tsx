import {seo} from '../../../../lib/seo';
import Site from '../../../site';
import {readContent} from '../../../../lib/content-store';
import {notFound} from 'next/navigation';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;const {content}=await readContent();const s=content.services.find(s=>s.id===id);return s?seo(s.en+' | OKUR AGRO',s.descEn,'/en/cozumler/'+id,true):{title:'Not found'};}
export default async function Detail({params}:{params:Promise<{id:string}>}){const {id}=await params;const {content}=await readContent();if(!content.services.some(s=>s.id===id))notFound();return <Site content={content} detail={id} initialLang="en"/>}
