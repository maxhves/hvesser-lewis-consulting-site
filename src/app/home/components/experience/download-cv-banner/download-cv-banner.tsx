import React from 'react';
import {clsx} from "clsx";
import {karla} from "@/app/fonts";

//region Entry

export function DownloadCvBanner({children}: { children: React.ReactNode }) {
  return (
    <div className="bg-stone-200 rounded-xl border-2 border-orange-300 flex flex-col sm:flex-row divide-x-0 divide-y sm:divide-y-0 sm:divide-x divide-stone-950/10">
      {children}
    </div>
  );
}

//endregion

//region Body

export function DownloadCvBannerBody({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-grow bg-stone-50 p-8 rounded-tl-xl rounded-tr-xl sm:rounded-tr-none rounded-bl-none sm:rounded-bl-xl space-y-2 sm:space-y-1">
      {children}
    </div>
  )
}

//endregion

//region Footer

export function DownloadCvBannerFooter({children}: { children: React.ReactNode }) {
  return (
    <div className="flex sm:p-8 items-center">
      {children}
    </div>
  )
}

//endregion

//region Title

export function DownloadCvBannerTitle({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(karla.className, "font-bold text-xl sm:text-2xl")}>
      {children}
    </h1>
  )
}

//endregion

//region Description

export function DownloadCvBannerDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-normal text-stone-500">
      {children}
    </p>
  )
}

//endregion