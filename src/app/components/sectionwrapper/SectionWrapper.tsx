import React from 'react';

type SectionType = 'primary' | 'secondary';

function SectionWrapper(
  {children, type = 'primary'}: { children: React.ReactNode, type?: SectionType }
) {
  let background: string = type === 'primary' ? "bg-old-lace" : "bg-aths-special"

  return (
    <div className={`flex justify-center ${background}`}>
      <div className="w-full lg:w-8/12 py-10 lg:py-20 px-5">
        {children}
      </div>
    </div>
  );
}

export default SectionWrapper;