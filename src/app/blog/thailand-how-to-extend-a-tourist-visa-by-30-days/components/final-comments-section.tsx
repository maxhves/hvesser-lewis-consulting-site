import React from 'react'
import ArticleSection, {
  ArticleSectionBody,
  ArticleSectionBodyLink,
  ArticleSectionHeading,
} from '@/app/blog/thailand-how-to-extend-a-tourist-visa-by-30-days/components/common/article-section'

//region Entry

export default function FinalCommentsSection({ children }: { children: React.ReactNode }) {
  return <ArticleSection>{children}</ArticleSection>
}

//endregion

//region Text

export function FinalCommentsHeading({ children }: { children: React.ReactNode }) {
  return <ArticleSectionHeading>{children}</ArticleSectionHeading>
}

export function FinalCommentsBody({ children }: { children: React.ReactNode }) {
  return <ArticleSectionBody>{children}</ArticleSectionBody>
}

//endregion

//region Link

export function FinalCommentsLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <ArticleSectionBodyLink href={href}>{children}</ArticleSectionBodyLink>
}

//endregion
