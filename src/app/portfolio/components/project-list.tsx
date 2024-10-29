import React from 'react'

export default function ProjectList({children}: { children: React.ReactNode }) {
  return (
    <ol className="mt-16 space-y-8">
      {children}
    </ol>
  )
}