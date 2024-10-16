import React, {forwardRef} from 'react'
import {Input as HeadlessInput, type InputProps as HeadlessInputProps} from '@headlessui/react'
import {clsx} from "clsx";

//region Regular

export const Input = forwardRef<HTMLInputElement, & HeadlessInputProps>(
  function Input({ className, ...props }, ref) {
    return (
      <span data-slot="control" className={clsx(className)}>
        <HeadlessInput
          className="block w-full border-0 bg-white px-3.5 py-2 text-neutral-900 placeholder:text-neutral-400 ring-1 ring-inset ring-neutral-300 focus:ring-2 focus:ring-inset focus:ring-neutral-400 sm:text-sm sm:leading-6 focus:outline-none"
          ref={ref}
          {...props}
        />
      </span>
    )
  }
)

//endregion