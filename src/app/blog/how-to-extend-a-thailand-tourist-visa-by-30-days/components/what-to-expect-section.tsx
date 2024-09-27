import React from 'react'
import {CircleArrowRight} from "lucide-react";
import ArticleSection
  , {
  ArticleSectionBody,
  ArticleSectionHeading
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/common/ArticleSection";

//region Entry

export default function WhatToExpectSection({children}: { children: React.ReactNode }) {
  return (
    <ArticleSection>{children}</ArticleSection>
  )
}

//endregion

//region Text

export function WhatToExpectHeading({children}: { children: React.ReactNode }) {
  return (
    <ArticleSectionHeading>{children}</ArticleSectionHeading>
  )
}

export function WhatToExpectBody({children}: { children: React.ReactNode }) {
  return (
    <ArticleSectionBody>{children}</ArticleSectionBody>
  )
}

//endregion

//region Steps

export function WhatToExpectSteps({children}: { children: React.ReactNode }) {
  return (
    <ol role="list" className="mt-8 space-y-8">
      {children}
    </ol>
  )
}

export function WhatToExpectStep({children}: { children: React.ReactNode }) {
  return (
    <li className="text-base font-normal leading-7 text-stone-600">
      <div className="flex gap-x-3">
        <CircleArrowRight className="mt-1 size-5 flex-none text-orange-600" />
        {children}
      </div>
    </li>
  )
}

//endregion