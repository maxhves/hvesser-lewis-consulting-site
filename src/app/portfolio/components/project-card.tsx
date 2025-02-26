import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { clsx } from 'clsx'
import { outfit } from '@/app/fonts'
import ArrowRightLongIcon from '@/components/icon/arrow-right-long-icon'
import { Link } from '@/components/ui/link'

export default function ProjectCard({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <div className="flex flex-col sm:flex-row">{children}</div>
    </li>
  )
}

//region Container

export function ProjectCardContent({ children }: { children: React.ReactNode }) {
  return <div className="w-full p-8 sm:w-2/3">{children}</div>
}

//endregion

//region Image

export function ProjectCardImage({ image }: { image: StaticImageData }) {
  return (
    <div className="h-44 w-full bg-neutral-200 sm:h-auto sm:w-1/3">
      <Image
        className="size-full object-cover object-top sm:object-left"
        src={image}
        alt="Project image"
        placeholder="blur"
      />
    </div>
  )
}

//endregion

//region Text

export function ProjectCardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className={clsx(outfit.className, 'text-lg font-medium text-neutral-950')}>{children}</h2>
}

export function ProjectCardBody({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 whitespace-pre-wrap text-base font-normal text-neutral-700">{children}</p>
}

//endregion

//region Link

export function ProjectCardLink({ href }: { href: string }) {
  return (
    <Link className="group mt-8 flex w-fit items-center gap-x-2" href={href} rel="noreferrer" target="_blank">
      <ArrowRightLongIcon className="size-6 text-emerald-600" />
      <span className="text-sm font-semibold uppercase text-neutral-950 group-hover:text-emerald-600">
        Visit the website
      </span>
    </Link>
  )
}

//endregion
