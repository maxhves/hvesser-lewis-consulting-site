import React from 'react';

type SectionType = 'primary' | 'secondary';

function SectionWrapper(
  {id, children, type = 'primary'}: { id?: string, children: React.ReactNode, type?: SectionType }
) {
  let background: string = type === 'primary' ? "bg-old-lace" : "bg-aths-special"

  return (
    <div id={id} className={`flex justify-center ${background}`}>
      <div className="w-full lg:w-8/12 max-w-5xl py-10 lg:py-20 px-5 lg:px-0">
        {children}
      </div>
    </div>
  );
}

export default SectionWrapper;