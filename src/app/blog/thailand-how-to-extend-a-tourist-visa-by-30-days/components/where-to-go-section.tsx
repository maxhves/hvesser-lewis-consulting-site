import React from 'react'
import ArticleSection, {
  ArticleSectionBody,
  ArticleSectionBodyLink,
  ArticleSectionHeading
} from "@/app/blog/thailand-how-to-extend-a-tourist-visa-by-30-days/components/common/ArticleSection";

//region Entry

export default function WhereToGoSection({children}: { children: React.ReactNode }) {
  return (
    <ArticleSection>{children}</ArticleSection>
  )
}

//endregion

//region Text

export function WhereToGoHeading({children}: { children: React.ReactNode }) {
  return (
    <ArticleSectionHeading>{children}</ArticleSectionHeading>
  )
}

export function WhereToGoBody({children}: { children: React.ReactNode }) {
  return (
    <ArticleSectionBody>{children}</ArticleSectionBody>
  )
}

//endregion

//region Link

export function WhereToGoLink({href, children}: { href: string, children: React.ReactNode }) {
  return (
    <ArticleSectionBodyLink href={href}>{children}</ArticleSectionBodyLink>
  )
}

//endregion