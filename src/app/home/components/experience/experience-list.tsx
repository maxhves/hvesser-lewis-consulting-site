import React from 'react';
import {clsx} from "clsx";

//region Entry

export default function ExperienceList({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <ol className={clsx(className, "space-y-4")}>
      {children}
    </ol>
  );
}

//endregion