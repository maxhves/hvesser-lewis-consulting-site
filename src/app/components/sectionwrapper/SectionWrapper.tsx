import React from 'react';

function SectionWrapper({children}: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-9/12 py-10 lg:py-20 px-5">
        {children}
      </div>
    </div>
  );
}

export default SectionWrapper;