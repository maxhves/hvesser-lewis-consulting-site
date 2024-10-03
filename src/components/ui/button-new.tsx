import React from "react";
import {Link} from "@/components/ui/link";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";

//region Primary

export function PrimaryButton({className, href, onClick, children}: {
  className?: string,
  href?: string,
  onClick?: () => void,
  children: React.ReactNode
}) {
  function InnerButton() {
    return (
      <button
        type="button"
        className={clsx(outfit.className, className, "rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-slate-50 hover:bg-blue-500")}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

  return href !== undefined ? (
    <Link href={href}>
      <InnerButton />
    </Link>
  ) : (
    <InnerButton />
  )
}

//endregion

//region Plain

export function PlainButton({className, children, href, onClick}: {
  className?: string,
  children: React.ReactNode,
  href: string,
  onClick?: () => void,
}) {
  return (
    <Link href={href}>
      <button
        type="button"
        className={clsx(outfit.className, className, "w-full rounded-md bg-transparent px-3 py-2 text-sm font-normal text-slate-700 hover:bg-slate-950/5")}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  )
}

//endregion