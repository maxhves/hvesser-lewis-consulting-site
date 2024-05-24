import React from 'react';
import type {Metadata} from 'next'
import {Analytics} from '@vercel/analytics/react';
import {JetBrains_Mono} from "next/font/google";
import './globals.css'
import {clsx} from "clsx";
import HomeNavigationBar from "@/app/home/components/home-navigation-bar";

//region Font

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body id="home" className={clsx(jetBrainsMono.className, "dark:bg-lavender-950 h-dvh flex flex-col antialiased")}>
        {/* Navigation bar */}
        <HomeNavigationBar />

        {/* Content */}
        {children}

        {/* Footer */}
        {/* TODO: Footer component goes here */}

        {/* Analytics */}
        <Analytics/>
      </body>
    </html>
  )
}

//endregion
