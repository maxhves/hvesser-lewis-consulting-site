import React from 'react'
import {clsx} from "clsx";
import {karla} from "@/app/fonts";

//region Entry

export default function WhereToGoSection({children}: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  )
}

//endregion

//region Text

export function WhereToGoTitle({children}: { children: React.ReactNode }) {
  return (
    <h2 className={clsx(karla.className, "mt-16 text-2xl font-bold tracking-tight text-stone-900")}>
      {children}
    </h2>
  )
}

export function WhereToGoBody({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-8 text-base font-normal leading-7 text-stone-700 whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion

//region Link

export function WhereToGoLink({href, children}: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="underline font-medium" rel="noreferrer" target="_blank">
      {children}
    </a>
  )
}

//endregion