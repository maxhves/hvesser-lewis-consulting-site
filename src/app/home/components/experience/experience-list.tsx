import React from 'react';
import {clsx} from "clsx";
import {Button} from "@headlessui/react";
import {LucideChevronsUpDown} from "lucide-react";

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
    <div className="flex flex-col bg-stone-50 rounded-lg p-8 gap-y-8 border border-stone-950/10">
      {children}
    </div>
  )
}

export function ExperienceItemHeader({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <div className={clsx(className, "gap-x-8")}>
      {children}
    </div>
  )
}

export function ExperienceItemHeaderImage({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

export function ExperienceItemExpandCollapseButton() {
  return (
    <Button
      className="grid size-10 bg-stone-200/35 active:bg-stone-200/75 rounded-lg place-items-center"
    >
      <LucideChevronsUpDown className="stroke-stone-900" />
    </Button>
  )
}

export function ExperienceItemHeaderText({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-grow gap-y-0.5">
      {children}
    </div>
  )
}

export function ExperienceItemHeaderTextRow({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <div className={clsx(className, "flex flex-row justify-between")}>
      {children}
    </div>
  )
}

export function ExperienceItemCompanyNameText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-stone-900 font-semibold text-sm">
      {children}
    </div>
  )
}

export function ExperienceItemTitleText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-stone-900 font-normal text-sm">
      {children}
    </div>
  )
}

export function ExperienceItemDatesText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-normal text-stone-500">
      {children}
    </div>
  )
}

export function ExperienceItemLocationText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-normal text-stone-500">
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
    <ul className="list-disc ps-3 space-y-2">
      {children}
    </ul>
  )
}

export function ExperienceItemDescriptionListItem({children}: { children: React.ReactNode }) {
  return (
    <li className="text-xs/4 text-stone-700">
      {children}
    </li>
  )
}

//endregion