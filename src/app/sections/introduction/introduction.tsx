import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import HeroImage from '@/app/components/hero_image/hero_image';

function Introduction() {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row h-full space-y-12 space-x-0 md:space-y-0 md:space-x-24 items-center">
        {/* Introduction text */}
        <div className="w-9/12 md:w-2/3 items-center md:items-start text-center md:text-start text-cutty-sark dark:text-aths-special space-y-1">
          <p className="text-sm">Hi, I&apos;m Maximilian 👋</p>
          <p className="text-4xl font-bold text-tiber dark:text-old-lace">I LOVE TO BUILD THINGS</p>
          <p className="text-sm">
            I am an experienced Senior Software Engineer, currently working at <span className="text-orange-roughy font-medium">Vipps</span>, specializing in native Android development, creating simplicity in peoples&apos; financial lives.
          </p>
        </div>

        {/* Promotion image */}
        <HeroImage/>
      </div>
    </SectionWrapper>
  );
}

export default Introduction;