import React from 'react'
import ArticleSection
  , {
  ArticleSectionHeading
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/common/ArticleSection";

//region Entry

export default function FinalCommentsSection({children}: { children: React.ReactNode }) {
  return (
    <ArticleSection>{children}</ArticleSection>
  )
}

//endregion

//region Text

export function FinalCommentsHeading({children}: { children: React.ReactNode }) {
  return (
    <ArticleSectionHeading>{children}</ArticleSectionHeading>
  )
}

export function FinalCommentsBody({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-8 text-base font-normal leading-7 text-stone-700 whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion

//region Link

export function FinalCommentsLink({href, children}: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="underline font-medium" rel="noreferrer" target="_blank">
      {children}
    </a>
  )
}

//endregion