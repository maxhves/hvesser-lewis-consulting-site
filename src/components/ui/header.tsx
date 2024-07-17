import React from 'react';
import {clsx} from "clsx";
import {karla} from "@/app/fonts";

//region Section

export function SectionHeader({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <h2 className={clsx(className, karla.className, "text-xl font-bold text-stone-900")}>
      {children}
    </h2>
  )
}

export function SectionSubheader({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <h3 className={clsx(className, karla.className, "text-sm text-stone-900 font-bold")}>
      {children}
    </h3>
  )
}

//endregion