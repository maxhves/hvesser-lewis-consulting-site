import React from 'react'

export default function ArrowRightLongIcon({className}: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="m22 12-4-4v3H3v2h15v3l4-4z" />
    </svg>
  )
}