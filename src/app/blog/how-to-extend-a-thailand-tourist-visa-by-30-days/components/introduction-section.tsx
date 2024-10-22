import React from 'react'
import {clsx} from "clsx";
import {karla} from "@/app/fonts";
import ArticleSection, {
  ArticleSectionBody
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/common/ArticleSection";

//region Entry

export default function IntroductionSection({children}: { children: React.ReactNode }) {
  return (
    <ArticleSection>{children}</ArticleSection>
  )
}

//endregion

//region Texts

export function IntroductionPreTitle({children}: { children: React.ReactNode }) {
  return (
    <p className={clsx(karla.className, "font-semibold text-base leading-7 text-orange-600")}>
      {children}
    </p>
  )
}

export function IntroductionHeading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(karla.className, "mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl")}>
      {children}
    </h1>
  )
}

export function IntroductionPreface({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-6 text-lg leading-7 text-stone-700">
      {children}
    </p>
  )
}

export function IntroductionBody({children}: { children: React.ReactNode }) {
  return (
    <ArticleSectionBody>
      {children}
    </ArticleSectionBody>
  )
}

//endregion