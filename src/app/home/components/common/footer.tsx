import React from 'react'
import { ContentContainerNew } from '@/components/ui/content-container'
import { IconBrandGithub, IconBrandLinkedin, IconClipboardText, IconMail } from '@tabler/icons-react'
import { Link } from '@/components/ui/link'

//region Social Links

const socialLinks = [
  {
    label: 'Github',
    href: 'https://github.com/maxhves',
    icon: IconBrandGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maxhves/',
    icon: IconBrandLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:max@hvesserlewis.com',
    icon: IconMail,
  },
  {
    label: 'Resume',
    href: 'https://hvesserlewis.com/resume',
    icon: IconClipboardText,
  },
]

//endregion

export default function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <ContentContainerNew className="py-8">
        <div className="flex flex-col items-center justify-normal gap-5 border-y border-stone-200 md:flex-row md:justify-between">
          <Name />
          <SocialLinks />
        </div>
      </ContentContainerNew>
    </footer>
  )
}

//region Name

function Name() {
  return (
    <div className="mx-5 flex w-full justify-center border-b border-stone-200 md:w-fit md:border-none">
      <div className="flex h-8 items-center border-x border-stone-200 text-sm text-stone-500">
        Maximilian Hvesser-Lewis
      </div>
    </div>
  )
}

//endregion

//region Social Links

function SocialLinks() {
  return (
    <div className="mx-5 flex w-full justify-center border-t border-stone-200 md:w-fit md:border-none">
      <div className="flex w-fit items-center gap-1 border-x border-stone-200">
        {socialLinks.map((link) => (
          <Link
            className="flex h-8 items-center gap-1 px-3 text-sm text-stone-500 hover:text-stone-700"
            key={link.label}
            href={link.href}
            rel="noreferrer"
            target="_blank"
          >
            <link.icon className="size-5 md:size-4" />
            <span className="hidden md:flex">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

//endregion