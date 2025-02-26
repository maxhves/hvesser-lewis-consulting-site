import React from 'react'
import { clsx } from 'clsx'

//region Implementation

export default function ContentContainer({
  className,
  style,
  children,
}: {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, 'flex w-full justify-center px-4 sm:px-8')} style={style}>
      <div className="flex w-full max-w-4xl flex-col">{children}</div>
    </div>
  )
}

//endregion
