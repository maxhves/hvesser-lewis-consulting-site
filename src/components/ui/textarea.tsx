import React, { forwardRef } from 'react'
import { Textarea as HeadlessTextarea, type TextareaProps as HeadlessTextareaProps } from '@headlessui/react'
import { clsx } from 'clsx'

//region Entry

export const Textarea = forwardRef<HTMLTextAreaElement, HeadlessTextareaProps>(function Textarea(
  { className, ...props },
  ref
) {
  return (
    <span data-slot="control" className={clsx(className)}>
      <HeadlessTextarea
        className="block w-full border-0 bg-white px-3.5 py-2 text-neutral-900 ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-400 sm:text-sm sm:leading-6"
        ref={ref}
        {...props}
      />
    </span>
  )
})

//endregion
