import React from 'react'
import ContentContainer from '@/components/ui/content-container'
import { clsx } from 'clsx'
import { dmSans } from '@/app/fonts/fonts'
import Image from 'next/image'
import heroImage from '../../../../../public/images/introduction/introduction-hero-image.webp'

//region Main Component

export default function IntroductionSection() {
  return (
    <section className="relative h-96 bg-neutral-50">
      <ContentContainer className="absolute h-full items-center bg-black/25">
        <div className="flex flex-col">
          <Heading>I take your ideas and turn them to exceptional user experiences</Heading>
          <Description>
            Fully realized innovative, and well-designed digital solutions, ready to help you lead in your industry
          </Description>
        </div>
      </ContentContainer>
      <Image
        className="h-96 object-cover"
        src={heroImage}
        alt="Introduction hero image"
        placeholder="blur"
        priority={true}
      />
    </section>
  )
}

//endregion

//region Text

function Heading({ children }: { children: React.ReactNode }) {
  return <h1 className={clsx(dmSans.className, 'text-3xl font-medium text-neutral-50 sm:text-5xl')}>{children}</h1>
}

function Description({ children }: { children: React.ReactNode }) {
  return <p className="mt-8 max-w-xs text-base font-medium text-neutral-50 sm:max-w-md">{children}</p>
}

//endregion
