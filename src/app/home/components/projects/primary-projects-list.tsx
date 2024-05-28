import React from 'react';
import {clsx} from "clsx";
import {Button} from "@/components/ui/button";

//region Entry

export function PrimaryProjectsList({className, children}: { className?: string, children: React.ReactNode}) {
  return (
    <ul className={clsx(className, "space-y-8")}>
      {children}
    </ul>
  );
}

//endregion

//region List item

export function PrimaryProjectListItem({children}: { children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      {children}
    </div>
  )
}

//endregion

//region Container

export function PrimaryProjectFooter({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
      {children}
    </div>
  )
}

//endregion

//region Components

export function PrimaryProjectTitle({children}: { children: React.ReactNode }) {
  return (
    <h1 className="text-neutral-50 text-base/5 font-medium">
      {children}
    </h1>
  )
}

export function PrimaryProjectImage({imageSource}: { imageSource: string }) {
  return (
    <div className="w-full h-24 bg-lavender-400/5 rounded-lg">
      {/* TODO: Create project image resources */}
      {/*<Image*/}
      {/*  src={imageSource}*/}
      {/*  alt="Project preview"*/}
      {/*  width={816}*/}
      {/*  height={128}*/}
      {/*/>*/}
      {/* TODO: Create project image resources */}
    </div>
  )
}

export function PrimaryProjectDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-neutral-400">
      {children}
    </p>
  )
}

export function PrimaryProjectTechnologiesList({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-4">
      {children}
    </div>
  )
}

export function PrimaryProjectTechnologyListItem({children}: { children: React.ReactNode }) {
  return (
    <label className="text-neutral-50 text-xs font-medium">
      {children}
    </label>
  )
}

export function PrimaryProjectVisitButton({href, children}: { href: string, children: React.ReactNode }) {
  return (
    <Button outline={true} href={href} rel="noreferrer" target="_blank">
      {children}
    </Button>
  )
}

//endregion