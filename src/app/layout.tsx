import type {Metadata} from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Providers } from './providers'
import {IBM_Plex_Mono} from "next/font/google";
import './globals.css'
import Head from "next/head";

const ibmPlexMono = IBM_Plex_Mono({weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Maximilian Hvesser-Lewis',
  description: 'Senior Android Developer',
}

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
    </Head>
    <body id="home"
          className={`${ibmPlexMono.className} [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] bg-old-lace dark:bg-tiber`}>
    <Providers>
      {children}
    </Providers>
    <SpeedInsights/>
    <Analytics/>
    </body>
    </html>
  )
}
