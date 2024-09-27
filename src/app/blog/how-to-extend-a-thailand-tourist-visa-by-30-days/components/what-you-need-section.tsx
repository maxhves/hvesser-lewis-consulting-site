import React from 'react'
import {CircleCheckIcon} from "lucide-react";
import ArticleSection
  , {
  ArticleSectionHeading
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/common/ArticleSection";

//region Entry

export default function WhatYouNeedSection({children}: { children: React.ReactNode }) {
  return (
    <ArticleSection>
      {children}
    </ArticleSection>
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
    <p className="mt-8 text-base font-normal leading-7 text-stone-700">
      {children}
    </p>
  )
}

//endregion

//region Checklist

export function WhatYouNeedChecklist({children}: { children: React.ReactNode }) {
  return (
    <ol role="list" className="mt-8 space-y-8">
      {children}
    </ol>
  )
}

export function WhatYouNeedChecklistItem({children}: { children: React.ReactNode }) {
  return (
    <li className="text-base font-normal leading-7 text-stone-600">
      <div className="flex gap-x-3">
        <CircleCheckIcon className="mt-1 size-5 flex-none text-orange-600" />
        {children}
      </div>
    </li>
  )
}

//endregion