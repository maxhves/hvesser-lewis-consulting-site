import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import Image from "next/image";
import heroImage from "../../../../../public/images/introduction/introduction-hero-image.webp"

//region Main Component

export default function IntroductionSection() {
  return (
    <section className="relative h-96 bg-neutral-50">
      <ContentContainer className="absolute h-full items-center bg-black/25">
        <div className="flex flex-col">
          <Heading>
            I take your ideas and turn them to exceptional user experiences
          </Heading>
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
  );
}

//endregion

//region Text

function Heading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "text-neutral-50 font-medium text-3xl sm:text-5xl")}>
      {children}
    </h1>
  )
}

function Description({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-8 max-w-xs sm:max-w-md text-base font-medium text-neutral-50">
      {children}
    </p>
  )
}

//endregion