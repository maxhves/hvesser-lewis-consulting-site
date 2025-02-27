import React from 'react'
import { ContentContainerNew } from '@/components/ui/content-container'

//region Social Links

const socialLinks = [
  {
    label: 'Github',
    href: 'https://github.com/maxhves',
    icon:
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maxhves/',
  },
  {
    label: 'Email',
    href: 'mailto:max@hvesserlewis.com',
  },
  {
    label: 'Resume',
    href: 'https://hvesserlewis.com/resume',
  },
]

//endregion

export default function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <ContentContainerNew className="py-8">
        <div className="flex h-8 items-center border-y border-stone-200 px-6">
          <Name />
        </div>
      </ContentContainerNew>
    </footer>
  )
}

//region Name

function Name() {
  return (
    <div className="flex h-full items-center border-x border-stone-200 text-sm text-stone-500">
      Maximilian Hvesser-Lewis
    </div>
  )
}

//endregion