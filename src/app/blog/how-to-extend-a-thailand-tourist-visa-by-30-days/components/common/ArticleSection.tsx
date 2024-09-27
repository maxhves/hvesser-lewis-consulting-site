import React from 'react'
import {clsx} from "clsx";
import {karla} from "@/app/fonts";

//region Section

export default function ArticleSection({children}: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  )
}

//endregion

//region Title

export function ArticleSectionHeading({children}: { children: React.ReactNode }) {
  return (
    <h2 className={clsx(karla.className, "mt-16 text-2xl font-bold tracking-tight text-stone-900")}>
      {children}
    </h2>
  )
}

//endregion

//region Body

export function ArticleSectionBody({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-8 text-base font-normal leading-7 text-stone-700 whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion

//region Action list



//endregion