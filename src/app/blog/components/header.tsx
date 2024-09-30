import React from 'react'
import {clsx} from "clsx";
import {karla} from "@/app/fonts";

//region Entry

export default function Header({children}: { children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      {children}
    </div>
  )
}

//endregion

//region Texts

export function Heading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(karla.className, "text-3xl sm:text-4xl font-bold tracking-tight text-stone-900")}>
      {children}
    </h1>
  )
}

export function Subheading({children}: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg leading-8 text-stone-600">
      {children}
    </h3>
  )
}

//endregion