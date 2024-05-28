import React from 'react';
import {clsx} from "clsx";
import {Link} from "@/components/ui/link";

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
    <div className="bg-lavender-800/25 p-8 rounded-lg">
      {children}
    </div>
  )
}

//endregion

//region Components

export function SecondaryProjectTitle({children}: { children: React.ReactNode }) {
  return (
    <h1 className="text-sm font-medium text-neutral-50">
      {children}
    </h1>
  )
}

export function SecondaryProjectDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-neutral-400 mt-3 mb-4">
      {children}
    </p>
  )
}

export function SecondaryProjectLink({href, children}: { href: string, children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-green-300 underline"
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  )
}

export function SecondaryProjectTechnologiesList({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {children}
    </div>
  )
}

export function SecondaryProjectTechnologyListItem({children}: { children: React.ReactNode }) {
  return (
    <label className="text-neutral-50 text-xs font-medium">
      {children}
    </label>
  )
}

//endregion