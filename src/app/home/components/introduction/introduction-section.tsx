import React from 'react';
import ContentContainer from "@/components/ui/content-container";

//region Entry

export default function IntroductionSection() {
  return (
    <section className="bg-lavender-900">
      <ContentContainer className="py-16">
        <div className="flex flex-row">
          <IntroductionText>
            <IntroductionTextHeading>
              Hi, I&apos;m Maximilian.
            </IntroductionTextHeading>

            <IntroductionTextTagLine>
              I love to build things
            </IntroductionTextTagLine>

            <IntroductionTextDescription>
              I am an experienced Senior Software Engineer, currently working at Vipps, specializing in native
              Android development, creating simplicity in peoples&apos; financial lives.
            </IntroductionTextDescription>
          </IntroductionText>

          <IntroductionImage>
            Hehe
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
    <div className="w-fit text-3xl text-neutral-50 bg-lavender-300 text-nowrap">
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
    <div className="flex-1 bg-red-500">
      {children}
    </div>
  )
}

//endregion