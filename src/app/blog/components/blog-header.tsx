import React from 'react'
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";

//region Entry

export default function BlogHeader({children}: { children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      {children}
    </div>
  )
}

//endregion

//region Texts

export function BlogHeading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "text-3xl font-semibold text-neutral-950")}>
      {children}
    </h1>
  )
}

export function BlogDescription({children}: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg leading-8 text-stone-600">
      {children}
    </h3>
  )
}

//endregion