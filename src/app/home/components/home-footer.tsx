import React from 'react';
import {clsx} from "clsx";
import {karla} from "@/app/fonts";

//region Entry

export default function HomeFooter() {
  return (
    <footer className="flex min-h-14 w-full bg-stone-100 justify-center items-center">
      <p className={clsx(karla.className, "font-normal text-xs text-stone-500 text-center")}>
        Created by <strong className="font-bold">Maximilian Hvesser-Lewis</strong>
      </p>
    </footer>
  );
}

//endregion