import React from 'react';

function XIcon({className}: { className?: string }) {
  return (
    <svg className={`w-8 h-8 ${className}`} viewBox="0 0 44 40">
      <path
        d="M34.8337 0h6.7897L26.7156 16.9742 44.1326 40H30.4647L19.7636 26.0074 7.51268 40H.72301L16.5164 21.845-.1626 0h14.0074l9.6679 12.7823L34.8337 0Zm-2.3764 36.0148h3.7639L11.8669 3.83764H7.82264L32.4573 36.0148Z"/>
    </svg>
  );
}

export default XIcon;