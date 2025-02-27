import React from 'react'
import { clsx } from 'clsx'
import { dmSans } from '@/app/fonts/fonts'

//region Page

export function PageHeading({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <h2 className={clsx(className, dmSans.className, 'text-2xl font-semibold text-neutral-950 sm:text-3xl')}>
      {children}
    </h2>
  )
}

export function PageDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={clsx(className, 'text-base font-normal text-neutral-700')}>{children}</h3>
}

//endregion
