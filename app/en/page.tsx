import {seo} from '../../lib/seo';
import Site from '../site';
import {readContent} from '../../lib/content-store';
export const dynamic='force-dynamic';

export default async function English(){return <Site content={(await readContent()).content} initialLang="en"/>}

export async function generateMetadata(){return seo("Agricultural Products & Growing Solutions | OKUR AGRO","Siirt-based agricultural products, equipment, salep and soilless growing solutions throughout Türkiye. Call or enquire on WhatsApp.",'/en',true)}
