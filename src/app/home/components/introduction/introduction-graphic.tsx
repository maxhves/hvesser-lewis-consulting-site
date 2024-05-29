import React from 'react';
import {clsx} from "clsx";
import Image from "next/image";
import './styles.css';

//region Resources
import profileImageSource from '@/../public/images/introduction/mhl_portrait.jpg'

//endregion

//region Entry

export default function IntroductionGraphic({className}: { className?: string }) {
  return (
    <div className={clsx(className, "size-full")}>
      <div className="max-w-80 md:max-w-full grid">
        <TopLeftShape />
        <BottomLeftShape />
        <TopRightShape />
        <BottomRightShape />

        <IntroductionProfileImage>
          <IntroductionProfileImageSource />
        </IntroductionProfileImage>
      </div>
    </div>
  );
}

//endregion

//region Profile image

function IntroductionProfileImage({children}: { children: React.ReactNode }) {
  return (
    <div className="col-start-1 row-start-1 flex items-center justify-center z-[2]">
      <div className="m-8 aspect-video flex justify-center">
        {children}
      </div>
    </div>
  )
}

function IntroductionProfileImageSource() {
  return (
    <Image
      className="size-full object-cover rounded-2xl"
      src={profileImageSource}
      alt="MHL Profile Image"
      placeholder="blur"
      width={240}
      height={128}
    />
  )
}

//endregion

//region Shapes

function TopLeftShape() {
  return (
    <div className="col-start-1 row-start-1 mt-2 ms-4 shapeAnimation longAnimDuration">
      <div className="size-4 bg-yellow-200 rounded-full" />
    </div>
  )
}

function BottomLeftShape() {
  return (
    <div className="col-start-1 row-start-1 flex items-end mb-14 ms-1 shapeAnimation shortAnimDuration">
      <div className="bg-green-300 size-20 rounded-2xl" />
    </div>
  )
}

function TopRightShape() {
  return (
    <div className="col-start-1 row-start-1 flex justify-end shapeAnimation mediumAnimDuration">
      <div className="bg-pink-400 size-24 rounded-2xl" />
    </div>
  )
}

function BottomRightShape() {
  return (
    <div className="col-start-1 row-start-1 flex items-end justify-end me-4 mb-6 shapeAnimation regularAnimDuration">
      <div className="bg-orange-200 size-14 rounded-2xl" />
    </div>
  )
}

//endregion