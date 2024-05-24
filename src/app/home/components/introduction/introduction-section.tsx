import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import IntroductionGraphic from "@/app/home/components/introduction/introduction-graphic";

//region Entry

export default function IntroductionSection() {
  return (
    <section className="bg-lavender-900">
      <ContentContainer className="py-16">
        <div className="flex flex-col md:flex-row items-center gap-x-0 md:gap-x-20 gap-y-16 md:gap-y-0">
          <IntroductionText>
            <IntroductionTextHeading>
              Hi, I&apos;m Maximilian.
            </IntroductionTextHeading>

            <IntroductionTextTagLine>
              <mark className="bg-lavender-200">I love to build things</mark>
            </IntroductionTextTagLine>

            <IntroductionTextDescription>
              I am an experienced Senior Software Engineer, currently working at Vipps, specializing in native
              Android development, creating simplicity in peoples&apos; financial lives.
            </IntroductionTextDescription>
          </IntroductionText>

          <IntroductionImage>
            <IntroductionGraphic />
          </IntroductionImage>
        </div>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Text

function IntroductionText({children}: { children: React.ReactNode }) {
  return (
    <div className="flex-1 space-y-2">
      {children}
    </div>
  )
}

function IntroductionTextHeading({children}: { children: React.ReactNode }) {
  return (
    <div className="text-neutral-300 text-sm">
      {children}
    </div>
  )
}

function IntroductionTextTagLine({children}: { children: React.ReactNode }) {
  return (
    <div className="w-fit text-3xl text-neutral-50 sm:text-nowrap">
      {children}
    </div>
  )
}

function IntroductionTextDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="text-neutral-300 text-sm">
      {children}
    </p>
  )
}

//endregion

//region Image

function IntroductionImage({children}: { children: React.ReactNode }) {
  return (
    <div className="flex-1 h-52">
      {children}
    </div>
  )
}

//endregion