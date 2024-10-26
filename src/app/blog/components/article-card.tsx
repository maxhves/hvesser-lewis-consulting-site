import React from 'react'
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import {Link} from "@/components/ui/link";
import Image, {StaticImageData} from "next/image";

//region Entry

export default function ArticleCard({children}: { children: React.ReactNode }) {
  return (
    <li className="flex flex-col sm:flex-row gap-8">
      {children}
    </li>
  )
}

//endregion

//region Container

export function ArticleCardText({children}: { children: React.ReactNode }) {
  return (
    <div className="flex-1 space-y-2">
      {children}
    </div>
  )
}

export function ArticleCardHeader({children}: { children: React.ReactNode}) {
  return (
    <div className="space-y-1">
      {children}
    </div>
  )
}

//endregion

//region Text

export function ArticleCardTitle({children, href}: { children: React.ReactNode, href: string }) {
  return (
    <h3 className={clsx(outfit.className, "group text-lg font-semibold leading-6 text-neutral-950")}>
      <Link className="group-hover:text-emerald-600" href={href}>
        {children}
      </Link>
    </h3>
  )
}

export function ArticleCardDate({children}: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-neutral-700">
      {children}
    </p>
  )
}

export function ArticleCardBody({children}: { children: React.ReactNode }) {
  return (
    <p className="pb-8 text-sm font-normal text-neutral-700">
      {children}
    </p>
  )
}

//endregion

//region Image

export function ArticleImage({image}: { image: StaticImageData }) {
  return (
    <div className="w-full sm:w-1/4 h-44 sm:h-auto bg-neutral-200">
      <Image
        className="size-full object-cover object-center"
        src={image}
        alt="Article Image"
        placeholder="blur"
      />
    </div>
  )
}

//endregion