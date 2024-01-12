import React from 'react';

type SectionType = 'primary' | 'secondary';

function SectionWrapper(
  {id, children, type = 'primary'}: { id?: string, children: React.ReactNode, type?: SectionType }
) {
  let background: string = type === 'primary' ? "bg-old-lace dark:bg-tiber" : "bg-aths-special dark:bg-daintree"

  return (
    <div id={id} className={`flex justify-center ${background} scroll-mt-16`}>
      <div className="w-full md:w-8/12 max-w-5xl py-10 md:py-20 px-5 md:px-0">
        {children}
      </div>
    </div>
  );
}

export default SectionWrapper;