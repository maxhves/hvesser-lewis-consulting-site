import React from 'react';
import type {Metadata} from 'next'
import {Analytics} from '@vercel/analytics/react';
import {inter} from './fonts';
import './globals.css'
import {clsx} from "clsx";
import HomeNavigationBar from "@/app/home/components/home-navigation-bar";
import HomeFooter from "@/app/home/components/home-footer";

//region Metadata

export const metadata: Metadata = {
  title: 'Maximilian Hvesser-Lewis',
  description: 'Full Stack Developer | Mobile | Android',
}

//endregion

//region Entry

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="home" className={clsx(inter.className, "bg-stone-100 h-dvh flex flex-col antialiased")}>
        {/* Navigation bar */}
        <HomeNavigationBar />

        {/* Content */}
        {children}

        {/* Footer */}
        <HomeFooter />

        {/* Analytics */}
        <Analytics/>
      </body>
    </html>
  )
}

//endregion
