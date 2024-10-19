import React from "react";
import {Link} from "@/components/ui/link";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import {Button as HeadlessButton, type ButtonProps as HeadlessButtonProps} from '@headlessui/react'

//region Model

const styles = {
  base: [
    // Base
    'relative isolate inline-flex items-center justify-center gap-x-2 rounded-sm text-sm',

    // Sizing
    'sm:text-sm/6',

    // Focus
    'focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500',

    // Disabled
    'data-[disabled]:opacity-50'
  ],
  solid: [
    'text-neutral-50 bg-emerald-600 hover:bg-emerald-500 data-[disabled]:bg-emerald-700 font-semibold'
  ],
  plain: [
    'text-neutral-700 bg-transparent hover:bg-neutral-950/5 font-normal'
  ],
  accent: [
    'bg-neutral-50 hover:bg-neutral-200 text-emerald-600 font-semibold'
  ],
  sizes: {
    large: [
      'px-3.5 py-2.5'
    ],
    medium: [
      'px-3 py-2'
    ],
    small: [
      'px-2.5 py-1.5'
    ]
  }
}

//endregion

//region Base

type ButtonProps = (
  | { size?: keyof typeof styles.sizes; accent?: never, plain?: true }
  | { size?: keyof typeof styles.sizes; accent?: true, plain?: never }
  | { size?: keyof typeof styles.sizes; accent?: never, plain?: never }
) &{ className?: string, children: React.ReactNode } & (HeadlessButtonProps | React.ComponentPropsWithoutRef<typeof Link>)

export const Button = React.forwardRef(function Button(
  {size, accent, plain, className, children, ...props}: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  let classes = clsx(
    outfit.className,
    className,
    styles.base,
    accent ? styles.accent : plain ? styles.plain : styles.solid,
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