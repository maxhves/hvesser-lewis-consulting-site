import React from 'react';
import Image from 'next/image';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';

function ResumeAd() {
  return (
    <SectionWrapper>
      <div className="bg-aths-special p-6 w-full flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 rounded-3xl border-daintree border-2 border-opacity-5">
        <Image
          className="h-20 w-20"
          src="ad_images/waving_hand.svg"
          alt="Waving hand"
          width={0}
          height={0}
        />
        <div className="flex flex-col text-cutty-sark space-y-2">
          <p className="font-medium">Hey, you! Want to know more?</p>
          <p className="font-light">
            Maybe you’re a prospective collaborator, or just a curious passer-by but if you’re interested in learning
            more about my past professional experience and education, go ahead and download a
            complete copy of <span className="underline text-curious-blue cursor-pointer">my resume</span>.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ResumeAd;