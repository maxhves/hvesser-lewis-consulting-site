import type {Metadata} from 'next'
import {Analytics} from '@vercel/analytics/react';
import {Providers} from './providers'
import {Spline_Sans_Mono} from "next/font/google";
import './globals.css'

const splineSansMono = Spline_Sans_Mono({weight: ['300', '400', '500', '600', '700'], subsets: ['latin']})

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
      <body id="home" className={`${splineSansMono.className} [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] bg-old-lace dark:bg-tiber`}>
        <Providers>
          {children}
        </Providers>
        <Analytics/>
      </body>
    </html>
  )
}
