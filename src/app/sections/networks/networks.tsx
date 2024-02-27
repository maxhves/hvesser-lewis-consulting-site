import React from 'react';
import XIcon from "@/app/components/icon/x-icon";
import LinkedinIcon from "@/app/components/icon/linkedin-icon";
import LeetcodeIcon from "@/app/components/icon/leetcode-icon";
import GithubIcon from "@/app/components/icon/github-icon";

function Networks() {
  return (
    <div className="bg-aths-special dark:bg-daintree flex justify-center px-5 md:px-0">
      <div className="w-full md:w-8/12 max-w-5xl pb-10 md:pb-20 pt-2 md:pt-4 space-y-6">
        {/* Heading */}
        <div className="flex justify-center md:justify-start">
          <p className="text-tiber dark:text-old-lace font-medium">Take a look at my other networks</p>
        </div>

        {/* Network links */}
        <div className="w-full flex flex-row space-x-6 justify-center md:justify-start">
          <a href="https://github.com/maxhvesser" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="fill-cutty-sark dark:fill-aths-special" />
          </a>
          <a href="https://leetcode.com/hvesser" target="_blank" rel="noopener noreferrer">
            <LeetcodeIcon className="fill-cutty-sark dark:fill-aths-special" />
          </a>
          <a href="https://linkedin.com/in/maaximilian" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="fill-cutty-sark dark:fill-aths-special" />
          </a>
          <a href="https://twitter.com/maxhvesser" target="_blank" rel="noopener noreferrer">
            <XIcon className="fill-cutty-sark dark:fill-aths-special" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Networks;