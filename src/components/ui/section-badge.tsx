import React from 'react'
import {clsx} from "clsx";

//region Main Component

export default function SectionBadge({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <div className={clsx(className, "py-1 px-2 rounded-full bg-blue-100 w-fit")}>
      <p className="text-xs font-medium text-blue-700">
        {children}
      </p>
    </div>
  )
}

//endregion