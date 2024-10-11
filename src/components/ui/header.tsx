import React from 'react';
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";

//region Section

export function SectionHeading({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <h2 className={clsx(className, outfit.className, "text-3xl font-semibold text-neutral-950")}>
      {children}
    </h2>
  )
}

export function SectionSubheading({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <h3 className={clsx(className, "text-base font-normal text-neutral-700")}>
      {children}
    </h3>
  )
}

//endregion