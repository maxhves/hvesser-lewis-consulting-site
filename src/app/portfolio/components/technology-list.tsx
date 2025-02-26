import React from 'react'

export default function TechnologyList({ children }: { children: React.ReactNode }) {
  return <ul className="mt-8 flex flex-wrap gap-4">{children}</ul>
}

export function TechnologyItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <p className="text-sm font-semibold uppercase text-neutral-400/75">{children}</p>
    </li>
  )
}
