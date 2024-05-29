import React from 'react';

//region Implementation

export default function LinkedinLogo({className}: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 8c1.5913 0 3.1174.63214 4.2426 1.75736C21.3679 10.8826 22 12.4087 22 14v7h-4v-7c0-.5304-.2107-1.0391-.5858-1.4142A1.99997 1.99997 0 0 0 14 14v7h-4v-7c0-1.5913.6321-3.1174 1.7574-4.24264A5.99987 5.99987 0 0 1 16 8ZM6 9H2v12h4V9ZM4 6c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2Z"
      />
    </svg>
  )
}

//endregion
