import React from 'react';
import type {Metadata} from 'next'
import {Analytics} from '@vercel/analytics/react';
import {Spline_Sans_Mono} from "next/font/google";
import './globals.css'

//region Font

const splineSansMono = Spline_Sans_Mono({weight: ['300', '400', '500', '600', '700'], subsets: ['latin']})

//endregion

//region Metadata

// TODO: Update metadata
export const metadata: Metadata = {
  title: 'Maximilian Hvesser-Lewis',
  description: 'Senior Android Developer',
}
// TODO: Update metadata

//endregion

//region Entry

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body id="home" className={`${splineSansMono.className} [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] bg-old-lace dark:bg-tiber`}>
        {/* Content */}
        {children}

        {/* Analytics */}
        <Analytics/>
      </body>
    </html>
  )
}

//endregion
