import React from 'react'

export default function TechnologyList({children}: { children: React.ReactNode }) {
  return (
    <ul className="flex flex-wrap mt-8 gap-4">
      {children}
    </ul>
  )
}

export function TechnologyItem({children}: { children: React.ReactNode }) {
  return (
    <li>
      <p className="text-sm font-semibold text-neutral-400/75 uppercase">
        {children}
      </p>
    </li>
  )
}