import React from 'react';
import {clsx} from "clsx";

//region Implementation

export default function ContentContainer({className, style, children}: {
  className?: string,
  style?: React.CSSProperties,
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, "w-full flex justify-center px-4 sm:px-8")} style={style}>
      <div className="flex flex-col w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
}

//endregion