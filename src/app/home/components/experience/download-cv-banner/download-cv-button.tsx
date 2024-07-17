import React from 'react';
import {Button} from "@headlessui/react";
import {LucideDownload} from "lucide-react";
import {clsx} from "clsx";

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
      <Button className="bg-stone-300/35 active:bg-stone-300/75 p-2 rounded-lg">
        <LucideDownload className="stroke-stone-900"/>
      </Button>
    </div>
  )
}

//endregion

//region Mobile

function MobileDownloadButton({className}: { className?: string }) {
  return (
    <div className={clsx(className)}>
      <Button className="flex flex-row w-full space-x-3 bg-stone-300/35 active:bg-stone-300/75 justify-center rounded-b-lg py-4">
        <p className="text-base font-medium text-stone-900">
          Download
        </p>
        <LucideDownload className="stroke-stone-900" />
      </Button>
    </div>
  )
}

//endregion