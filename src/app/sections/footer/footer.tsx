import React from 'react';

function Footer() {
  return (
    <div className="flex justify-center bg-old-lace dark:bg-tiber">
      <div className="w-full md:w-8/12 p-5 flex justify-center items-center space-x-8">
        {/* Copyright text */}
        <p className="text-tiber dark:text-old-lace text-xs">
          Created with ❤️️ by MHL
        </p>

        {/* Separator */}
        <div className="h-6 w-[1.5px] bg-aths-special dark:bg-pewter"/>
      </div>
    </div>
  );
}

export default Footer;