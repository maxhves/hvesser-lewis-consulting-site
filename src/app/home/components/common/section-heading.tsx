import { ReactNode } from 'react'

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full items-center justify-center border-y border-stone-200 px-6">
      <h2 className="max-w-xl border-x py-6 text-center text-3xl font-medium text-stone-700 md:border-stone-200 md:text-4xl">
        {children}
      </h2>
    </div>
  )
}
