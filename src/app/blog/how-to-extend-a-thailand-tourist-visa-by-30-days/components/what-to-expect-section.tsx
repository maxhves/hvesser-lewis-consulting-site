import React from 'react'
import {clsx} from "clsx";
import {karla} from "@/app/fonts";
import {CircleArrowRight} from "lucide-react";

//region Entry

export default function WhatToExpectSection({children}: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  )
}

//endregion

//region Text

export function WhatToExpectTitle({children}: { children: React.ReactNode }) {
  return (
    <h2 className={clsx(karla.className, "mt-16 text-2xl font-bold tracking-tight text-stone-900")}>
      {children}
    </h2>
  )
}

export function WhatToExpectBody({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-8 text-base font-normal leading-7 text-stone-700">
      {children}
    </p>
  )
}

//endregion

//region Steps

export function WhatToExpectSteps({children}: { children: React.ReactNode }) {
  return (
    <ol role="list" className="mt-8 space-y-8">
      {children}
    </ol>
  )
}

export function WhatToExpectStep({children}: { children: React.ReactNode }) {
  return (
    <li className="text-base font-normal leading-7 text-stone-600">
      <div className="flex gap-x-3">
        <CircleArrowRight className="mt-1 size-5 flex-none text-orange-600" />
        {children}
      </div>
    </li>
  )
}

//endregion