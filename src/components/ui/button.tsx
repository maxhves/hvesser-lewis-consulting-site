import React from 'react'
import { Link } from '@/components/ui/link'
import { clsx } from 'clsx'
import { dmSans } from '@/app/fonts/fonts'
import { Button as HeadlessButton, type ButtonProps as HeadlessButtonProps } from '@headlessui/react'

//region Model

const styles = {
  base: [
    // Base
    'relative isolate inline-flex items-center justify-center gap-x-2 rounded-full text-sm',

    // Focus
    'focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500',

    // Disabled
    'data-[disabled]:opacity-50',

    // Border
    'border border-stone-200',
  ],
  solid: ['text-stone-800 bg-stone-100 hover:bg-stone-100/90 font-medium'],
  plain: ['text-stone-800 bg-white hover:bg-white/90 font-medium'],
  sizes: {
    large: ['px-3.5 py-2.5'],
    medium: ['px-4 py-1.5'],
    small: ['px-2.5 py-1.5'],
  },
}

//endregion

//region Base

type ButtonProps = (
  | { size?: keyof typeof styles.sizes; plain?: true }
  | { size?: keyof typeof styles.sizes; plain?: never }
) & { className?: string; children: React.ReactNode } & (
    | HeadlessButtonProps
    | React.ComponentPropsWithoutRef<typeof Link>
  )

export const Button = React.forwardRef(function Button(
  { size, plain, className, children, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  let classes = clsx(
    dmSans.className,
    className,
    styles.base,
    plain ? styles.plain : styles.solid,
    styles.sizes[size ?? 'medium']
  )

  return 'href' in props ? (
    <Link {...props} className={classes} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
      {children}
    </Link>
  ) : (
    <HeadlessButton {...props} className={clsx(classes, 'cursor-default')} ref={ref}>
      {children}
    </HeadlessButton>
  )
})

//endregion
