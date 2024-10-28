import React from 'react'
import ContentContainer from "@/components/ui/content-container";

import sculptureSkyImage from "../../../../public/images/blog/sculpture-sky.webp"
import Image from "next/image";

//region Entry

export default function BlogHeader({children}: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 h-44 bg-neutral-200">
      <Image
        className="h-full object-cover object-center"
        src={sculptureSkyImage}
        alt="Blog header image"
        placeholder="blur"
        priority={true}
        style={{ gridRow: 1, gridColumn: 1 }}
      />
      <ContentContainer
        className="flex items-center"
        style={{ gridRow: 1, gridColumn: 1}}
      >
        {children}
      </ContentContainer>
    </div>
  )
}

//endregion