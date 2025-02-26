import React from 'react'
import Image, { StaticImageData } from 'next/image'
import ContentContainer from '@/components/ui/content-container'
import { PageHeading } from '@/components/ui/header'

export default function ImageBanner({ image, children }: { image: StaticImageData; children: React.ReactNode }) {
  return (
    <div className="grid h-44 w-full grid-cols-1 grid-rows-1 items-center bg-neutral-200">
      <Image
        className="h-full w-full object-cover object-center"
        src={image}
        alt="Image banner"
        placeholder="blur"
        priority={true}
        style={{ gridRow: 1, gridColumn: 1 }}
      />
      <ContentContainer style={{ gridRow: 1, gridColumn: 1 }}>
        <PageHeading className="text-white">{children}</PageHeading>
      </ContentContainer>
    </div>
  )
}
