import React from 'react'
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";

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
    <h2 className={clsx(outfit.className, "mt-10 text-base font-semibold text-neutral-950")}>
      {children}
    </h2>
  )
}

//endregion

//region Body

export function ArticleSectionBody({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <p className={clsx(className, "mt-4 text-base font-normal text-neutral-700 whitespace-pre-wrap")}>
      {children}
    </p>
  )
}

export function ArticleSectionBodyLink({href, children}: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="text-emerald-600 hover:text-emerald-800" rel="noreferrer" target="_blank">
      {children}
    </a>
  )
}

//endregion

//region Action list

export function ArticleSectionActionList({children}: { children: React.ReactNode }) {
  return (
    <ol role="list" className="mt-8 space-y-6">
      {children}
    </ol>
  )
}

export function ArticleSectionActionListItem({children}: { children: React.ReactNode }) {
  return (
    <li className="text-base font-normal text-neutral-700">
      <div className="flex gap-x-3">
        {children}
      </div>
    </li>
  )
}

//endregion