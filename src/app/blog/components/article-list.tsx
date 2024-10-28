import React from 'react'

//region Entry

export default function ArticleList({children}: { children: React.ReactNode }) {
  return(
    <ol className="mt-16 space-y-16">
      {children}
    </ol>
  )
}

//endregion