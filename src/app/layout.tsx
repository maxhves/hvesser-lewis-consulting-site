import React from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { inter } from './fonts'
import './globals.css'
import { clsx } from 'clsx'
import HomeNavigationBar from '@/app/home/components/navigation/home-navigation-bar'
import Footer from '@/app/home/components/common/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="home" className={clsx(inter.className, 'flex h-dvh flex-col bg-stone-100 antialiased')}>
        <HomeNavigationBar />
        {children}
        {/*<HomeFooter />*/}
        <Analytics />
      </body>
    </html>
  )
}

//region Metadata

export const metadata: Metadata = {
  title: 'Maximilian Hvesser-Lewis | Full Stack & Mobile App Developer',
  description: 'Full Stack, and Mobile App Developer based in Oslo, Norway',
}

//endregion
