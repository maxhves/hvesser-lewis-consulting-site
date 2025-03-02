import React from 'react'
import { clsx } from 'clsx'

//region Main Component

export default function SectionBadge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={clsx(className, 'text-xs font-extrabold uppercase tracking-wide text-emerald-600')}>{children}</p>
  )
}

//endregion
