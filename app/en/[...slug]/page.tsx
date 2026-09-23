import {notFound} from 'next/navigation';
import {pages} from '../../editorial-data';
import Editorial from '../../editorial';
import {readContent} from '../../../lib/content-store';
import {seo} from '../../../lib/seo';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}){const slug=(await params).slug.join('/');const p=pages[slug]?.en;return p?{...seo(p.title+' | OKUR AGRO',p.description,'/en/'+slug,true),...(['gizlilik','kullanim-kosullari'].includes(slug)?{robots:{index:false,follow:true}}:{})}:{title:'Page not found'};}
export default async function Page({params}:{params:Promise<{slug:string[]}>}){const slug=(await params).slug.join('/');if(!pages[slug])notFound();return <Editorial slug={slug} en content={(await readContent()).content}/>}
