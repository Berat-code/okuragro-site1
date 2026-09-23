import {requireChatGPTUser} from '../chatgpt-auth';
import {isAdmin} from '../../lib/admin-auth';
import {readContent} from '../../lib/content-store';
import Admin from './panel';
export const dynamic='force-dynamic';
export const metadata={title:'Yönetim | OKUR AGRO',robots:{index:false,follow:false}};
export default async function AdminPage(){await requireChatGPTUser('/yonetim');if(!await isAdmin())return <main className="section"><h1>Yönetici erişimi gerekiyor</h1><p style={{marginTop:20}}>Bu hesap yönetici olarak tanımlı değil. Yetkili hesabınızla giriş yapın.</p><a className="button green" href="/signout-with-chatgpt?return_to=/yonetim" style={{marginTop:25}}>Hesap değiştir</a><a className="button" href="/">Siteye dön</a></main>;const data=await readContent();return <Admin initial={data.content} initialRevision={data.revision}/>}
