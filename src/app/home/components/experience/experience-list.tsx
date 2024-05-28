import React from 'react';
import {clsx} from "clsx";

//region Entry

export function ExperienceList({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <ul className={clsx(className, "space-y-4")}>
      {children}
    </ul>
  );
}

//endregion

//region Experience card

export function ExperienceListItem({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-lavender-950/50 rounded-lg p-8 gap-y-8">
      {children}
    </div>
  )
}

export function ExperienceItemHeader({children}: { children: React.ReactNode }) {
  return (
    <div className="flex gap-x-8 items-center">
      {children}
    </div>
  )
}

export function ExperienceItemHeaderImage({children}: { children: React.ReactNode }) {
  return (
    <div className="hidden sm:block">
      {children}
    </div>
  )
}

export function ExperienceItemHeaderText({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-grow gap-y-4 sm:gap-y-1">
      {children}
    </div>
  )
}

export function ExperienceItemHeaderTextRow({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row gap-y-1 gap-x-2">
      {children}
    </div>
  )
}

export function ExperienceItemCompanyNameText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-neutral-50 font-bold text-base">
      {children}
    </div>
  )
}

export function ExperienceItemTitleText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-neutral-400 font-bold text-base">
      {children}
    </div>
  )
}

export function ExperienceItemDatesText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-sm text-neutral-200">
      {children}
    </div>
  )
}

export function ExperienceItemLocationText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-sm text-neutral-400">
      {children}
    </div>
  )
}

export function ExperienceItemContent({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

export function ExperienceItemDescriptionList({children}: { children: React.ReactNode }) {
  return (
    <ul className="list-disc ps-4 space-y-5">
      {children}
    </ul>
  )
}

export function ExperienceItemDescriptionListItem({children}: { children: React.ReactNode }) {
  return (
    <li className="text-xs/5 text-neutral-200">
      {children}
    </li>
  )
}

//endregion