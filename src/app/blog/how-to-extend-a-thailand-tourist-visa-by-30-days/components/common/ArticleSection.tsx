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

export function ArticleSectionBodyLink({href, children}: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="underline font-medium" rel="noreferrer" target="_blank">
      {children}
    </a>
  )
}

//endregion

//region Action list

export function ArticleSectionActionList({children}: { children: React.ReactNode }) {
  return (
    <ol role="list" className="mt-8 space-y-8">
      {children}
    </ol>
  )
}

export function ArticleSectionActionListItem({children}: { children: React.ReactNode }) {
  return (
    <li className="text-base font-normal leading-7 text-stone-600">
      <div className="flex gap-x-3">
        {children}
      </div>
    </li>
  )
}

//endregion