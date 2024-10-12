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
        className={clsx(outfit.className, className, "rounded-sm bg-emerald-600 px-3 py-2 text-sm font-semibold text-neutral-50 hover:bg-emerald-500 items-center")}
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

//region Accent

export function AccentButton({className, href, onClick, children}: {
  className?: string,
  href?: string,
  onClick?: () => void,
  children: React.ReactNode
}) {
  function InnerButton() {
    return (
      <button
        type="button"
        className={clsx(outfit.className, className, "rounded-sm bg-neutral-50 px-3 py-2 text-sm font-semibold text-emerald-600 hover:bg-neutral-200 items-center")}
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
        className={clsx(outfit.className, className, "w-full rounded-sm bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-950/5")}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  )
}

//endregion