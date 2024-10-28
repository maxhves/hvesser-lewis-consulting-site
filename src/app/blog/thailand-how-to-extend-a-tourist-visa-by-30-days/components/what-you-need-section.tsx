import React from 'react'
import ArticleSection, {
  ArticleSectionActionList,
  ArticleSectionActionListItem,
  ArticleSectionBody,
  ArticleSectionHeading
} from "@/app/blog/thailand-how-to-extend-a-tourist-visa-by-30-days/components/common/article-section";
import CheckCircleIcon from "@/components/icon/check-circle-icon";

//region Entry

export default function WhatYouNeedSection({children}: { children: React.ReactNode }) {
  return (
    <ArticleSection>{children}</ArticleSection>
  )
}

//endregion

//region Text

export function WhatYouNeedHeading({children}: { children: React.ReactNode }) {
  return (
    <ArticleSectionHeading>{children}</ArticleSectionHeading>
  )
}

export function WhatYouNeedBody({children}: { children: React.ReactNode }) {
  return (
    <ArticleSectionBody className="mt-8">{children}</ArticleSectionBody>
  )
}

//endregion

//region Checklist

export function WhatYouNeedChecklist({children}: { children: React.ReactNode }) {
  return (
    <ArticleSectionActionList>{children}</ArticleSectionActionList>
  )
}

export function WhatYouNeedChecklistItem({children}: { children: React.ReactNode }) {
  return (
    <ArticleSectionActionListItem>
      <CheckCircleIcon className="mt-0.5 size-5 flex-none text-emerald-600" />
      {children}
    </ArticleSectionActionListItem>
  )
}

//endregion