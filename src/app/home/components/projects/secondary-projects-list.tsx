import React from 'react';
import {clsx} from "clsx";
import {Link} from "@/components/ui/link";
import {karla} from "@/app/fonts";
import {LucideLink2} from "lucide-react";
import {Badge} from "@/components/ui/badge";

//region Entry

export function SecondaryProjectsList({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <ul className={clsx(className, "flex flex-col sm:flex-row gap-4")}>
      {children}
    </ul>
  );
}

//endregion

//region List item

export function SecondaryProjectListItem({children}: { children: React.ReactNode }) {
  return (
    <div className="bg-stone-50 p-8 rounded-lg border border-stone-950/10">
      {children}
    </div>
  )
}

//endregion

//region Components

export function SecondaryProjectHeader({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center">
      {children}
    </div>
  )
}

export function SecondaryProjectTitle({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(karla.className, "flex-grow text-sm font-bold text-stone-900")}>
      {children}
    </h1>
  )
}

export function SecondaryProjectDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-stone-700 mt-3 mb-8">
      {children}
    </p>
  )
}

export function SecondaryProjectLink({href}: { href: string }) {
  return (
    <Link
      href={href}
      className="grid size-8 bg-stone-200/35 active:bg-stone-200/75 place-items-center rounded-lg"
      rel="noreferrer"
      target="_blank"
    >
      <LucideLink2 className="size-4 stroke-stone-900" />
    </Link>
  )
}

export function SecondaryProjectTechnologiesList({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-3">
      {children}
    </div>
  )
}

export function SecondaryProjectTechnologyListItem({color, children}: { color: string, children: React.ReactNode }) {
  return (
    // @ts-ignore
    <Badge color={color}>
      {children}
    </Badge>
  )
}

//endregion