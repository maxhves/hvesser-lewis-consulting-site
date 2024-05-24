import React from 'react';
import Image from 'next/image';
import './styles.css';

function HeroImage() {
  return (
    <div className="h-40 w-60 bg-tiber bg-opacity-0">
      <div className="grid">
        {/* Background circle */}
        <div
          className="col-start-1 row-start-1 flex justify-center"
          style={{zIndex: 1}}
        >
          <div className="h-40 w-40 bg-aths-special dark:bg-daintree rounded-full"/>
        </div>

        {/* Top-Left shape */}
        <div
          className="col-start-1 row-start-1 ps-4"
          style={{zIndex: 1}}
        >
          <div className="bg-pirate-gold rounded-full h-4 w-4 longAnimDuration"/>
        </div>

        {/* Bottom-Left shape */}
        <div
          className="col-start-1 row-start-1 flex items-center"
          style={{zIndex: 1}}
        >
          <div className="bg-jungle-green h-16 w-16 rounded-2xl shortAnimDuration"/>
        </div>

        {/* Top-Right shape */}
        <div
          className="col-start-1 row-start-1 flex justify-end"
          style={{zIndex: 1}}
        >
          <div className="bg-punch h-20 w-20 rounded-2xl mediumAnimDuration"/>
        </div>

        {/* Bottom-Right shape */}
        <div
          className="col-start-1 row-start-1 flex items-end justify-end pe-2"
          style={{zIndex: 1}}
        >
          <div className="bg-amethyst h-12 w-12 rounded-2xl regularAnimDuration"/>
        </div>

        {/* Image */}
        <div
          className="col-start-1 row-start-1 flex items-center justify-center"
          style={{zIndex: 2}}
        >
          <div className="w-10/12 flex justify-center bg-granny-smith rounded-3xl">
            <Image
              className="w-full h-32 object-cover rounded-3xl"
              src="/hero_images/mhl_portrait.png"
              alt="Hero image"
              height={0}
              width={0}
              unoptimized={true}
              priority={true}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroImage;