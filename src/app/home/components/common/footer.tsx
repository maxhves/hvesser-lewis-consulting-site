import React from 'react'
import { clsx } from 'clsx'
import { outfit } from '@/app/fonts'
import ContentContainer from '@/components/ui/content-container'
import { Link } from '@/components/ui/link'

//region Model

const siteLinks = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Services',
    href: '/#services',
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
]

//endregion

//region Entry

export default function Footer() {
  return (
    <footer className="bg-neutral-50">
      <ContentContainer className="py-16">
        <MotivationalQuote>Is today day one, or will you let it remain just one day</MotivationalQuote>
        <SiteInformation>
          <Copyright>© 2024 Hvesser-Lewis Consulting</Copyright>
          <span className="mx-4 hidden text-sm font-medium text-neutral-950 sm:inline-block">|</span>
          <SiteLinks>
            {siteLinks.map((link) => (
              <SiteLink key={link.label} href={link.href}>
                {link.label}
              </SiteLink>
            ))}
          </SiteLinks>
        </SiteInformation>
      </ContentContainer>
    </footer>
  )
}

//endregion

//region Container

function SiteInformation({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 flex flex-col items-center space-y-1 sm:flex-row sm:space-y-0">{children}</div>
}

//endregion

//region Text

function MotivationalQuote({ children }: { children: React.ReactNode }) {
  return (
    <p className={clsx(outfit.className, 'text-center text-base font-medium text-neutral-950 sm:text-start')}>
      {children}
    </p>
  )
}

function Copyright({ children }: { children: React.ReactNode }) {
  return <p className="flex-none text-sm font-medium text-neutral-950">{children}</p>
}

//endregion

//region Site Links

function SiteLinks({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-x-6">{children}</div>
}

function SiteLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <span className="text-sm font-normal text-neutral-700 hover:text-emerald-600">{children}</span>
    </Link>
  )
}

//endregion
