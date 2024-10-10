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
  title: 'Hvesser-Lewis Consulting',
  description: 'Full Stack Developer • Mobile Developer • Web Developer',
}

//endregion

//region Entry

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Hvesser-Lewis Consulting</title>
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body id="home" className={clsx(inter.className, "bg-slate-50 h-dvh flex flex-col antialiased")}>
        <HomeNavigationBar />
        {children}
        <HomeFooter />
        <Analytics />
      </body>
    </html>
  )
}

//endregion
