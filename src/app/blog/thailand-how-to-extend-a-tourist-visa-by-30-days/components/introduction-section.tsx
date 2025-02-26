import React from 'react'
import { clsx } from 'clsx'
import { outfit } from '@/app/fonts'
import ArticleSection, {
  ArticleSectionBody,
} from '@/app/blog/thailand-how-to-extend-a-tourist-visa-by-30-days/components/common/article-section'

//region Entry

export default function IntroductionSection({ children }: { children: React.ReactNode }) {
  return <ArticleSection>{children}</ArticleSection>
}

//endregion

//region Texts

export function IntroductionHeading({ children }: { children: React.ReactNode }) {
  return <h1 className={clsx(outfit.className, 'text-3xl font-medium text-neutral-950 sm:text-5xl')}>{children}</h1>
}

export function IntroductionDate({ children }: { children: React.ReactNode }) {
  return <p className="mt-8 text-sm font-semibold uppercase text-neutral-700 sm:mt-16">{children}</p>
}

export function IntroductionBody({ children }: { children: React.ReactNode }) {
  return <ArticleSectionBody>{children}</ArticleSectionBody>
}

//endregion
