import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import HeroImage from '@/app/components/hero_image/hero_image';

function Introduction() {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row h-full space-y-12 space-x-0 md:space-y-0 md:space-x-24 items-center">
        {/* Introduction text */}
        <div className="w-full md:w-2/3 items-center md:items-start text-center md:text-start text-cutty-sark dark:text-aths-special space-y-2">
          <p>Hi, I&apos;m Maximilian 👋</p>
          <p className="text-2xl font-semibold">I love finding solutions</p>
          <p>
            I am an experienced Software Engineer and Android Developer, currently working at
            <span className="text-orange-roughy font-medium"> Vipps</span> creating simplicity in peoples&apos; financial lives.
          </p>
        </div>

        {/* Promotion image */}
        <HeroImage/>
      </div>
    </SectionWrapper>
  );
}

export default Introduction;