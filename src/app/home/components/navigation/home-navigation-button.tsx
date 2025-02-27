import { ReactNode } from 'react'
import Link from 'next/link'

export function HomeNavigationButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-700"
      href={href}
    >
      {children}
    </Link>
  )
}
