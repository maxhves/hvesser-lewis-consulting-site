import React from 'react';
import Image from 'next/image';

function Networks() {
  return (
    <div className="bg-aths-special flex justify-center px-5 lg:px-0">
      <div className="w-full lg:w-8/12 max-w-5xl pb-10 lg:pb-20 pt-2 lg:pt-4 space-y-6">
        <div className="flex justify-center lg:justify-start">
          <p className="text-cutty-sark font-medium">Take a look at my other networks</p>
        </div>
        <div className="w-full flex flex-row space-x-6 justify-center lg:justify-start">
          <a href="https://github.com/maxhvesser" target="_blank" rel="noopener noreferrer">
            <Image
              className="h-8 w-8"
              src="network_images/icon_github.svg"
              alt="Github"
              width={0}
              height={0}
            />
          </a>
          <a href="https://leetcode.com/hvesser" target="_blank" rel="noopener noreferrer">
            <Image
              className="h-8 w-8"
              src="network_images/icon_leetcode.svg"
              alt="Github"
              width={0}
              height={0}
            />
          </a>
          <a href="https://instagram.com/hvesse" target="_blank" rel="noopener noreferrer">
            <Image
              className="h-8 w-8"
              src="network_images/icon_instagram.svg"
              alt="Github"
              width={0}
              height={0}
            />
          </a>
          <a href="https://linkedin.com/in/maaximilian" target="_blank" rel="noopener noreferrer">
            <Image
              className="h-8 w-8"
              src="network_images/icon_linkedin.svg"
              alt="Github"
              width={0}
              height={0}
            />
          </a>
        </div>
      </div>
    </div>
);
}

export default Networks;