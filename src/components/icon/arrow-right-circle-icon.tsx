import React from 'react'

export default function ArrowRightCircleIcon({className}: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8Zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12Z"
        fill="currentColor"
      />
      <path
        d="m12.17 11-1.58-1.59L12 8l4 4-4 4-1.41-1.41L12.17 13H8v-2h4.17Z"
        fill="currentColor"
      />
    </svg>
  )
}