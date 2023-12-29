import React from 'react';

function SectionWrapper({children}: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center bg-green-600 py-20 px-5">
      {children}
    </div>
  );
}

export default SectionWrapper;