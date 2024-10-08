import React from 'react'
import {clsx} from "clsx";

//region Main Component

export function Body({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <p className={clsx(className, "text-base font-normal text-slate-700")}>
      {children}
    </p>
  )
}

//endregion