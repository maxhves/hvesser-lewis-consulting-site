import { ReactNode } from 'react'
import Link from 'next/link'

export function HomeNavigationButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className="box-border flex h-8 items-center rounded-full border border-transparent bg-white px-4 text-sm font-medium text-stone-500 transition-colors hover:border-stone-200 hover:bg-stone-50 hover:text-stone-700"
      href={href}
    >
      {children}
    </Link>
  )
}
