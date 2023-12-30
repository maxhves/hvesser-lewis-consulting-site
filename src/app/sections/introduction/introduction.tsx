import React from 'react';
import SectionWrapper from '@/app/components/sectionwrapper/SectionWrapper';

function Introduction() {
  return (
    <SectionWrapper>
      <div className="flex flex-col lg:flex-row h-full space-y-12 space-x-0 lg:space-y-0 lg:space-x-24 items-center">
        {/* Introduction text */}
        <div className="w-full lg:w-2/3 items-center lg:items-start text-center lg:text-start space-y-3">
          <p className="text-2xl text-cutty-sark">Hi, I&apos;m Max 👋</p>
          <p className="text-4xl text-cutty-sark font-semibold">I love finding solutions</p>
          <p className="text-2xl text-cutty-sark">
            I am an experienced Software Engineer and Android Developer, currently working at
            <span className="text-orange-roughy font-medium"> Vipps</span> creating simplicity in peoples&apos; financial lives.
          </p>
        </div>

        {/* Promotion image */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <div className="rounded-3xl bg-daintree flex justify-center items-center h-72 w-96">
            <p className="text-old-lace">Promo image</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Introduction;