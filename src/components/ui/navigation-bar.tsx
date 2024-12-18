import React from 'react';
import {clsx} from "clsx";
import {Link} from "@/components/ui/link";
import {outfit} from "@/app/fonts";
import {Button} from "@/components/ui/button";
import MenuIcon from "@/components/icon/menu-icon";
import CloseIcon from "@/components/icon/close-icon";

//region Container

export function NavigationBar({children}: { children: React.ReactNode }) {
  return (
    <div className="mb-14">
      {children}
    </div>
  )
}

export function NavigationBarContent({children}: { children: React.ReactNode }) {
  return (
    <nav className="w-full h-14 fixed top-0 z-10 bg-neutral-50">
      <div className="h-full flex flex-col mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 justify-center">
        <div className="h-9 relative">
          {children}
        </div>
      </div>
    </nav>
  );
}

//endregion

//region Home

export function NavigationBarHomeLink({onClick, children}: { onClick: () => void, children: React.ReactNode }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="h-full absolute items-center content-center"
    >
      <div className="flex gap-x-2">
        {children}
      </div>
    </Link>
  )
}

export function NavigationBarHomeLinkLabel({children}: { children: React.ReactNode }) {
  return (
    <p className={clsx(outfit.className, "text-neutral-950 text-text-lg font-medium")}>
      {children}
    </p>
  )
}

//endregion

//region Menu

export function NavigationBarMenu({children}: { children: React.ReactNode }) {
  return (
    <div className="absolute start-1/2 end-1/2">
      <div className="hidden sm:flex space-x-2 items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export function NavigationBarMenuLink({href, children}: {
  href: string,
  children: React.ReactNode
}) {
  return (
    <Button plain={true} size="small" href={href}>
      {children}
    </Button>
  )
}

export function NavigationBarActionLink({href, children}: {
  href?: string,
  children: React.ReactNode
}) {
  return (
    <div className="h-full absolute end-0 hidden sm:flex items-center">
      <Button size="small" href={href}>
        {children}
      </Button>
    </div>
  )
}

//endregion

//region Drawer

export function NavigationBarDrawerTriggerButton({open, onClick}: { open: boolean, onClick: () => void }) {
  return (
    <button className="h-full sm:hidden absolute end-0" onClick={onClick}>
      <div className="grid grid-cols-1 grid-rows-1 text-neutral-950">
        <CloseIcon
          className={
            clsx(
              "size-6 transition-all ease-in-out duration-500",
              open ? "opacity-100 rotate-0" : "opacity-0 rotate-45"
            )
          }
          style={{ gridRow: 1, gridColumn: 1 }}
        />
        <MenuIcon
          className={
            clsx(
              "size-6 transition-all ease-in-out duration-500",
              open ? "opacity-0 rotate-45" : "opacity-100 rotate-0"
            )
          }
          style={{ gridRow: 1, gridColumn: 1 }}
        />
      </div>
    </button>
  )
}

export function NavigationBarDrawer({children, open}: { children: React.ReactNode, open: boolean }) {
  return (
    <div className="fixed sm:hidden w-full mt-14 z-[5] pointer-events-none">
      <nav className={clsx(
        open ? "translate-y-0" : "-translate-y-72",
        "flex flex-col transition-transform duration-300 ease-in-out pointer-events-auto bg-slate-50 p-4 gap-y-2"
      )}>
        {children}
      </nav>
    </div>
  )
}

export function NavigationBarDrawerLink({href, onClick, children}: {
  href: string,
  onClick: () => void,
  children: React.ReactNode
}) {
  return (
    <Button
      plain={true}
      size="large"
      href={href}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

//endregion