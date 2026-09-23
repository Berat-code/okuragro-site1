import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import {env} from 'cloudflare:workers';
import {origin} from '../lib/seo';
import Analytics from './analytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata():Promise<Metadata>{return {
  title: 'OKUR AGRO | Geleceği Topraktan Üretiyoruz.',
  description: 'Siirt merkezli OKUR AGRO: tarım danışmanlığı, salep, safran, topraksız tarım, tohum, fide, gübre ve ekipman. Siirt merkezli, Türkiye genelinde üreticinin yanında.',
 verification:{google:(env as unknown as {GOOGLE_SITE_VERIFICATION?:string}).GOOGLE_SITE_VERIFICATION||undefined},
};}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}<Analytics id={(env as unknown as {GA_MEASUREMENT_ID?:string}).GA_MEASUREMENT_ID||''}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"OKUR AGRO",url:origin(),telephone:"+905461166424",founder:{"@type":"Person",name:"Eyüp Okur"},foundingDate:"2026",areaServed:"TR",address:{"@type":"PostalAddress",streetAddress:"Afetevleri Mah. Kurtalan Yolu Üzeri, İpekyolu Kavşağı No: 184/1",postalCode:"56100",addressLocality:"Siirt",addressCountry:"TR"},sameAs:["https://instagram.com/okuragro"]}).replace(/</g,'\u003c')}}/>
      </body>
    </html>
  );
}
