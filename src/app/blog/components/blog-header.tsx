import React from 'react'

//region Entry

export default function BlogHeader({children}: { children: React.ReactNode }) {
  return (
    <div className="pt-8 sm:pt-24 pb-16 space-y-4">
      {children}
    </div>
  )
}

//endregion