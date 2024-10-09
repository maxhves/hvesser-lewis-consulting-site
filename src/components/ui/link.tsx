import {DataInteractive as HeadlessDataInteractive} from '@headlessui/react'
import NextLink, {type LinkProps} from 'next/link'
import React from 'react'
import {clsx} from "clsx";

export const Link = React.forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <HeadlessDataInteractive>
      <NextLink {...props} ref={ref} />
    </HeadlessDataInteractive>
  )
})

//region External

export function ExternalLink({className, href, children}: {
  className?: string,
  href: string,
  children: React.ReactNode
}) {
  return (
    <Link className={clsx(className, "underline font-medium")} href={href} rel="noreferrer" target="_blank">
      {children}
    </Link>
  )
}

//endregion
