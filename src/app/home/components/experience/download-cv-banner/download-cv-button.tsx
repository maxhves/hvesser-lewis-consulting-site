import React from 'react';
import {LucideDownload} from "lucide-react";
import {clsx} from "clsx";

//region Constants

const cvDownloadPath: string =  '/files/cv/maxhves_cv.pdf'

//endregion

//region Entry

export default function DownloadCvButton() {
  return (
    <div className="w-full">
      <DesktopDownloadButton className="hidden sm:flex" />
      <MobileDownloadButton className="flex sm:hidden" />
    </div>
  );
}

//endregion

//region Desktop

function DesktopDownloadButton({className}: { className?: string }) {
  return (
    <div className={className}>
      <a
        className="bg-stone-300/35 active:bg-stone-300/75 p-2 rounded-lg"
        href={cvDownloadPath}
        rel="noreferrer"
        target="_blank"
      >
        <LucideDownload className="stroke-stone-900"/>
      </a>
    </div>
  )
}

//endregion

//region Mobile

function MobileDownloadButton({className}: { className?: string }) {
  return (
    <div className={clsx(className)}>
      <a
        className="flex flex-row w-full space-x-3 bg-stone-300/35 active:bg-stone-300/75 justify-center rounded-b-lg py-4"
        href={cvDownloadPath}
        rel="noreferrer"
        target="_blank"
      >
        <p className="text-base font-medium text-stone-900">
          Download
        </p>
        <LucideDownload className="stroke-stone-900" />
      </a>
    </div>
  )
}

//endregion