import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";

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
      <DevProcessStoryboard>
        <DevProcessCard className="w-1/4" />
        <DevProcessCard className="w-1/4" />
        <DevProcessCard className="w-1/2" />
      </DevProcessStoryboard>
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
    <p className="mt-8 max-w-xs sm:max-w-md text-center text-sm sm:text-base font-normal text-slate-700">
      {children}
    </p>
  )
}

//endregion

//region Development Process

function DevProcessStoryboard({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row max-w-3xl mx-auto py-16 px-4 sm:px-0 gap-x-4">
      {children}
    </div>
  )
}

function DevProcessCard({className}: { className?: string }) {
  return (
    <div className={clsx(className, "h-32 sm:h-56 rounded-2xl bg-slate-200/35")} />
  )
}

//endregion