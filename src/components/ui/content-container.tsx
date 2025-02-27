import { ReactNode, CSSProperties } from 'react'
import { clsx } from 'clsx'

export default function ContentContainer({
  className,
  style,
  children,
}: {
  className?: string
  style?: CSSProperties
  children: ReactNode
}) {
  return (
    <div className={clsx(className, 'flex w-full justify-center px-4 sm:px-8')} style={style}>
      <div className="flex w-full max-w-4xl flex-col">{children}</div>
    </div>
  )
}

//TODO: Refactor old container with new
export function ContentContainerNew({
  outerClassName,
  className,
  children,
}: {
  outerClassName?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={clsx(outerClassName, 'relative flex justify-center px-6 md:px-8')}>
      <div className="absolute inset-y-0 left-1/2 z-0 w-px bg-stone-200"></div>
      <div className={clsx(className, 'z-10 flex w-full max-w-6xl flex-col border-x border-stone-200')}>{children}</div>
    </div>
  )
}
