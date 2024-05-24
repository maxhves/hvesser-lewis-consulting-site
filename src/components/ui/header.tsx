import React from 'react';
import {clsx} from "clsx";

//region Section

export function SectionHeader({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <h2 className={clsx(className, "text-xl font-medium text-neutral-50")}>
      {children}
    </h2>
  )
}

export function SectionSubheader({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <h3 className={clsx(className, "text-sm text-neutral-50 font-medium")}>
      {children}
    </h3>
  )
}

//endregion