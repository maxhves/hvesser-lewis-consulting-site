import React from 'react'
import ContentContainer from '@/components/ui/content-container'
import { Link } from '@/components/ui/link'
import ArrowLeftLongIcon from '@/components/icon/arrow-left-long-icon'

export function BackToBlog({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-neutral-700 py-4">
      <ContentContainer>{children}</ContentContainer>
    </div>
  )
}

export function BackToBlogButton({ children }: { children: React.ReactNode }) {
  return (
    <Link className="group flex w-fit items-center gap-x-2" href="/blog">
      <ArrowLeftLongIcon className="size-6 text-emerald-600" />
      <span className="text-sm font-semibold uppercase text-white group-hover:text-emerald-600">{children}</span>
    </Link>
  )
}
