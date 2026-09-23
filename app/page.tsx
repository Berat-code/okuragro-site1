import {seo} from '../lib/seo';
import Site from './site';
import { readContent } from '../lib/content-store';
export const dynamic='force-dynamic';
export default async function Home() { return <Site content={(await readContent()).content} />; }

export async function generateMetadata(){return seo("Tarım Ürünleri, Salep ve Topraksız Tarım | OKUR AGRO","Siirt merkezli OKUR AGRO ile Türkiye genelinde tohum, fide, gübre, salep ve topraksız tarım çözümleri. Ürün ve tedarik bilgisi için arayın.",'/',false)}
