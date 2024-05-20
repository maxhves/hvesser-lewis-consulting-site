import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';

function ResumeAd() {
  return (
    <SectionWrapper>
      <div className="w-full rounded-3xl bg-[url('/ad_images/image_cv_on_desk.webp')] bg-cover bg-center bg-no-repeat">
        {/* Gradient background overlay */}
        <div className="bg-gradient-to-r from-daintree rounded-3xl p-16">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Alert */}
            <div className="flex flex-row space-x-4">
              {/* Marker */}
              <div className="w-2 bg-amethyst rounded-full"/>

              {/* Text */}
              <div className="flex flex-col space-y-1">
                <p className="text-old-lace font-medium text-2xl">CHECKOUT MY RESUME</p>
                <p className="text-old-lace">To see all of my past work and education, take a look at my resume</p>
              </div>
            </div>

            {/* Button */}
            <a
              href={'/resume/MHL_CV_170124.pdf'}
              rel="noreferrer"
              target="_blank"
              className="w-full md:w-fit shrink-0"
            >
              <button type="button" className="w-full bg-amethyst py-4 px-8 rounded-xl hover:shadow-md transition-all">
                <div className="flex flex-row justify-center items-center space-x-2">
                  <svg className="h-6 w-6 fill-old-lace" viewBox="0 -960 960 960">
                    <path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"/>
                  </svg>
                  <p className="text-old-lace font-medium">Download PDF</p>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ResumeAd;