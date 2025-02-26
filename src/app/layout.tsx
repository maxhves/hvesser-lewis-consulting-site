import React from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { inter } from './fonts'
import './globals.css'
import { clsx } from 'clsx'
import HomeNavigationBar from '@/app/home/components/home-navigation-bar'
import HomeFooter from '@/app/home/components/home-footer'

//region Metadata

export const metadata: Metadata = {
  title: 'Hvesser-Lewis Consulting',
  description: 'Full Stack Developer | Mobile Developer | Web Developer',
}

//endregion

//region Entry

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="home" className={clsx(inter.className, 'flex h-dvh flex-col bg-neutral-50 antialiased')}>
        <HomeNavigationBar />
        {children}
        <HomeFooter />
        <Analytics />
      </body>
    </html>
  )
}

//endregion
