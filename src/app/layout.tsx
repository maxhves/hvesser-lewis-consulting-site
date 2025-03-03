import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { manrope } from './fonts/fonts'
import './globals.css'
import { clsx } from 'clsx'
import HomeNavigationBar from '@/app/home/components/navigation/home-navigation-bar'
import Footer from '@/app/home/components/common/footer'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        id="home"
        className={clsx(manrope.className, 'flex h-dvh flex-col bg-stone-100 antialiased dark:bg-stone-950')}
      >
        <ThemeProvider attribute="class" enableSystem={false}>
          <HomeNavigationBar />
          {children}
          <Footer />
        </ThemeProvider>
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
