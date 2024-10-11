import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import Image from "next/image";
import heroImage from "../../../../../public/images/introduction/introduction-hero-image.png"

//region Main Component

export default function IntroductionSection() {
  return (
    <section className="bg-slate-50">
      <ContentContainer className="flex flex-col pt-24 items-center">
        <div className="flex flex-col items-center">
          <Heading>
            <span>
              I take your ideas and turn them to <strong className="font-medium text-slate-500">exceptional</strong> user experiences
            </span>
          </Heading>
          <Description>
            Fully realized innovative, and well-designed digital solutions, ready to help you lead in your industry
          </Description>
        </div>
      </ContentContainer>
      <Image
        className="mt-16 h-28 sm:h-56 object-cover"
        src={heroImage}
        alt="Introduction hero image"
        placeholder="blur"
      />
    </section>
  );
}

//endregion

//region Text

function Heading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "text-blue-950 text-center font-medium text-3xl sm:text-5xl")}>
      {children}
    </h1>
  )
}

function Description({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-8 max-w-xs sm:max-w-md text-center text-base font-normal text-slate-700">
      {children}
    </p>
  )
}

//endregion