import React from 'react';
import SectionWrapper from '@/app/components/sectionwrapper/SectionWrapper';

function Introduction() {
  return (
    <SectionWrapper>
      <div className="w-full lg:w-10/12 bg-yellow-500 flex flex-col items-center text-center lg:items-start lg:text-start">
        <p className="text-2xl">Hi, I&apos;m Maximilian</p>
        <p className="text-4xl">I love finding solutions</p>
        <p className="text-2xl">
          I am an experienced Software Engineer and Android Developer, currently working at
          <span className="text-orange-600"> Vipps</span> creating simplicity in peoples&apos; financial lives.
        </p>
      </div>
    </SectionWrapper>
  );
}

export default Introduction;