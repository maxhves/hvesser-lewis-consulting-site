import React from 'react'
import ContentContainer from "@/components/ui/content-container";
import {Button} from "@/components/ui/button";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import ArrowLeftLongIcon from "@/components/icon/arrow-left-long-icon";

//region Main Component

export default function NotFound() {
  return (
    <main className="flex-grow">
      <ContentContainer className="h-full items-center justify-center">
        <div className="w-full text-center">
          <StatusLabel>404</StatusLabel>
          <TitleLabel>This page does not exist</TitleLabel>
          <DescriptionLabel>Sorry, the page you’re looking for couldn’t be found.</DescriptionLabel>
          <GoBackHomeButton>Back to Home</GoBackHomeButton>
        </div>
      </ContentContainer>
    </main>
  )
}

//endregion

//region Text Components

function StatusLabel({children}: { children: React.ReactNode }) {
  return (
    <span className="text-base font-semibold text-emerald-600 tracking-tight">
      {children}
    </span>
  )
}

function TitleLabel({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "mt-1 text-3xl font-semibold text-neutral-900")}>
      {children}
    </h1>
  )
}

function DescriptionLabel({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-base leading-7 text-neutral-600">
      {children}
    </p>
  )
}

//endregion

//region Button Components

function GoBackHomeButton({children}: { children: React.ReactNode }) {
  return (
    <Button className="mt-8" accent={true} href="/">
      <ArrowLeftLongIcon />
      {children}
    </Button>
  )
}

//endregion