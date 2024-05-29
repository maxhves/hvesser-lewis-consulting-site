import React from 'react';

//region Implementation

export default function GithubLogo({className}: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.9998 22v-4a4.8002 4.8002 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8.00001 0-2-1.5-3-1.5-3-1.5-.3 1.15-.3 2.35 0 3.5a5.40308 5.40308 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 18c-4.51 2-5-2-7-2"
      />
    </svg>
  )
}

//endregion