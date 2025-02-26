import React from 'react'
import { clsx } from 'clsx'
import { Link } from '@/components/ui/link'
import { outfit } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import MenuIcon from '@/components/icon/menu-icon'
import CloseIcon from '@/components/icon/close-icon'

//region Container

export function NavigationBar({ children }: { children: React.ReactNode }) {
  return <div className="mb-14">{children}</div>
}

export function NavigationBarContent({ children }: { children: React.ReactNode }) {
  return (
    <nav className="fixed top-0 z-10 h-14 w-full bg-neutral-50">
      <div className="mx-auto flex h-full max-w-screen-2xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative h-9">{children}</div>
      </div>
    </nav>
  )
}

//endregion

//region Home

export function NavigationBarHomeLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href="/" onClick={onClick} className="absolute h-full content-center items-center">
      <div className="flex gap-x-2">{children}</div>
    </Link>
  )
}

export function NavigationBarHomeLinkLabel({ children }: { children: React.ReactNode }) {
  return <p className={clsx(outfit.className, 'text-text-lg font-medium text-neutral-950')}>{children}</p>
}

//endregion

//region Menu

export function NavigationBarMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute end-1/2 start-1/2">
      <div className="hidden items-center justify-center space-x-2 sm:flex">{children}</div>
    </div>
  )
}

export function NavigationBarMenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button plain={true} size="small" href={href}>
      {children}
    </Button>
  )
}

export function NavigationBarActionLink({ href, children }: { href?: string; children: React.ReactNode }) {
  return (
    <div className="absolute end-0 hidden h-full items-center sm:flex">
      <Button size="small" href={href}>
        {children}
      </Button>
    </div>
  )
}

//endregion

//region Drawer

export function NavigationBarDrawerTriggerButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button className="absolute end-0 h-full sm:hidden" onClick={onClick}>
      <div className="grid grid-cols-1 grid-rows-1 text-neutral-950">
        <CloseIcon
          className={clsx(
            'size-6 transition-all duration-500 ease-in-out',
            open ? 'rotate-0 opacity-100' : 'rotate-45 opacity-0'
          )}
          style={{ gridRow: 1, gridColumn: 1 }}
        />
        <MenuIcon
          className={clsx(
            'size-6 transition-all duration-500 ease-in-out',
            open ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
          )}
          style={{ gridRow: 1, gridColumn: 1 }}
        />
      </div>
    </button>
  )
}

export function NavigationBarDrawer({ children, open }: { children: React.ReactNode; open: boolean }) {
  return (
    <div className="pointer-events-none fixed z-[5] mt-14 w-full sm:hidden">
      <nav
        className={clsx(
          open ? 'translate-y-0' : '-translate-y-72',
          'pointer-events-auto flex flex-col gap-y-2 bg-slate-50 p-4 transition-transform duration-300 ease-in-out'
        )}
      >
        {children}
      </nav>
    </div>
  )
}

export function NavigationBarDrawerLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Button plain={true} size="large" href={href} onClick={onClick}>
      {children}
    </Button>
  )
}

//endregion
