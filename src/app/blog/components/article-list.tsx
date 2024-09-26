import React from 'react'

//region Entry

export default function ArticleList({children}: { children: React.ReactNode }) {
  return(
    <ol className="space-y-16 mt-10 sm:mt-16">
      {children}
    </ol>
  )
}

//endregion