import React from 'react';
import {clsx} from "clsx";
import {Button} from "@/components/ui/button";
import {karla} from "@/app/fonts";
import {Badge} from "@/components/ui/badge";
import {Link} from "@/components/ui/link";
import {LucideLink2} from "lucide-react";

//region Entry

export function PrimaryProjectsList({className, children}: { className?: string, children: React.ReactNode}) {
  return (
    <ul className={clsx(className, "space-y-8")}>
      {children}
    </ul>
  );
}

//endregion

//region List item

export function PrimaryProjectListItem({children}: { children: React.ReactNode }) {
  return (
    <div className="bg-stone-100 p-8 rounded-lg">
      {children}
    </div>
  )
}

//endregion

//region Container

export function PrimaryProjectHeader({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center mb-3">
      {children}
    </div>
  )
}

export function PrimaryProjectFooter({children}: { children: React.ReactNode }) {
  return (
    <div className="mt-8">
      {children}
    </div>
  )
}

//endregion

//region Components

export function PrimaryProjectTitle({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(karla.className, "flex-grow text-stone-900 text-sm font-bold")}>
      {children}
    </h1>
  )
}

export function PrimaryProjectDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="text-xs/5 text-stone-700">
      {children}
    </p>
  )
}

export function PrimaryProjectTechnologiesList({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-3">
      {children}
    </div>
  )
}

export function PrimaryProjectTechnologyListItem({color, children}: { color: string, children: React.ReactNode }) {
  return (
    // @ts-ignore
    <Badge color={color}>
      {children}
    </Badge>
  )
}

export function PrimaryProjectVisitButton({href, children}: { href: string, children: React.ReactNode }) {
  return (
    <Button outline={true} href={href} rel="noreferrer" target="_blank">
      {children}
    </Button>
  )
}

export function PrimaryProjectLink({href}: { href: string }) {
  return (
    <Link
      href={href}
      className="grid size-10 bg-stone-200/35 active:bg-stone-200/75 place-items-center rounded-lg"
      rel="noreferrer"
      target="_blank"
    >
      <LucideLink2 className="size-6 stroke-stone-900" />
    </Link>
  )
}

//endregion