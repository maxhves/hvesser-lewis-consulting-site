import React from 'react';
import {clsx} from "clsx";
import {Link} from "@/components/ui/link";
import {Button} from "@/components/ui/button";
import {MenuIcon, XIcon} from "lucide-react";
import {karla} from "@/app/fonts";

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
    <nav className="w-full h-14 fixed top-0 z-10 bg-stone-100">
      <div className="h-full flex flex-col mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 justify-center">
        <div className="flex flex-row items-center justify-between">
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
    >{children}</Link>
  )
}

export function NavigationBarHomeLinkLabel({children}: { children: React.ReactNode }) {
  return (
    <p className={clsx(karla.className, "text-stone-950 text-lg font-bold")}>{children}</p>
  )
}

//endregion

//region Menu

export function NavigationBarMenu({children}: { children: React.ReactNode }) {
  return (
    <div className="hidden sm:flex flex-row space-x-2 items-center">
      {children}
    </div>
  )
}

export function NavigationBarMenuLink({href, children}: {
  href: string,
  children: React.ReactNode
}) {
  return (
    <Button
      plain={true}
      href={href}
      className={clsx(karla.className, "text-stone-800 font-normal text-base")}
    >
      {children}
    </Button>
  )
}

//endregion

//region Drawer

export function NavigationBarDrawerTriggerButton({open, onClick}: { open: boolean, onClick: () => void }) {
  return (
    <button className="sm:hidden" onClick={onClick}>
      <XIcon className={clsx(
        "absolute size-6 text-stone-950 transition-all duration-300",
        open ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )} />
      <MenuIcon className={clsx(
        "size-6 text-stone-950 transition-all duration-300",
        open ? "scale-0 opacity-0" : "scale-100 opacity-100"
      )} />
    </button>
  )
}

export function NavigationBarDrawer({children, open}: { children: React.ReactNode, open: boolean }) {
  return (
    <div className="fixed sm:hidden w-full mt-14 z-[5] pointer-events-none">
      <nav className={clsx(
        open ? "translate-y-0" : "-translate-y-72",
        "flex flex-col transition-transform duration-300 ease-in-out pointer-events-auto bg-stone-100 border-b border-stone-950/10 py-4 gap-y-2"
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
      href={href}
      onClick={onClick}
      className={clsx(karla.className, "mx-4 text-stone-800 font-normal text-base")}
    >
      {children}
    </Button>
  )
}

//endregion