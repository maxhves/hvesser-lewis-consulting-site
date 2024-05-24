import React from 'react';

//region Implementation

export default function DttLogo({className}: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#E65540"
        d="M0 0h24v24H0z"
      />
      <path
        fill="#fff"
        d="m16.75 5-3.5 4 1.5 2 4.5-3.5-2.5-2.5Zm-3.5 10 1.5-2 4.5 3.5-2.5 2.5-3.5-4ZM7.75 5l-2.5 2.5 5.5 4.5-6 4.5 3 2.5 5.5-7-5.5-7Z"
      />
    </svg>
  );
}

//endregion