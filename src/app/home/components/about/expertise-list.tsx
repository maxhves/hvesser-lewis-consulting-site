import React from 'react';
import {clsx} from "clsx";

//region Entry

export default function ExpertiseList({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <ul className={clsx(className, "flex flex-col sm:flex-row gap-4")}>
      {children}
    </ul>
  );
}

//endregion