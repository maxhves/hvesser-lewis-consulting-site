import React from 'react'
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import {Link} from "@/components/ui/link";

//region Entry

export default function ArticleCard({children}: { children: React.ReactNode }) {
  return (
    <li className="space-y-3 p-8 rounded-lg border border-stone-950/10">
      {children}
    </li>
  )
}

//endregion

//region BlogHeader

export function ArticleCardHeader({children}: { children: React.ReactNode}) {
  return (
    <div className="flex items-center gap-x-4">
      {children}
    </div>
  )
}

//endregion

//region Body

export function ArticleCardBody({children, href}: { children: React.ReactNode, href: string }) {
  return (
    <article>
      <Link className="space-y-5 group relative" href={href}>
        {children}
      </Link>
    </article>
  )
}

//endregion

//region Texts

export function ArticleCardDate({children}: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-stone-500">
      {children}
    </p>
  )
}

export function ArticleCardTitle({children}: { children: React.ReactNode }) {
  return (
    <h3 className={clsx(outfit.className, "text-lg font-semibold leading-6 text-stone-900 group-hover:text-stone-600")}>
      {children}
    </h3>
  )
}

export function ArticleCardPreviewText({children}: { children: React.ReactNode }) {
  return (
    <p className="line-clamp-3 text-sm leading-6 text-stone-600">
      {children}
    </p>
  )
}

//endregion

//region Pill

export function ArticleCardCategoryPill({children}: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-stone-600 font-medium px-3 py-1.5 bg-stone-200/75 rounded-full">
      {children}
    </p>
  )
}

//endregion