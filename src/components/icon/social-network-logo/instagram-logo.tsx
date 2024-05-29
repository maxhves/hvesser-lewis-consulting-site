import React from 'react';

//region Implementation

export default function InstagramLogo({className}: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 2H7C4.23858 2 2 4.23858 2 7v10c0 2.7614 2.23858 5 5 5h10c2.7614 0 5-2.2386 5-5V7c0-2.76142-2.2386-5-5-5Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.9997 11.37a4.00007 4.00007 0 0 1-.4062 2.429 3.99997 3.99997 0 0 1-4.186 2.1069 3.99949 3.99949 0 0 1-2.19295-1.1207 4.00027 4.00027 0 0 1-1.12078-2.193 3.99985 3.99985 0 0 1 .37626-2.4338A3.99994 3.99994 0 0 1 12.6297 8a3.99994 3.99994 0 0 1 3.37 3.37ZM17.5 6.5h.01"
        />
    </svg>
  )
}

//endregion