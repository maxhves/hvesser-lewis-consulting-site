import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import Image from "next/image";
import {clsx} from "clsx";
import {karla} from "@/app/fonts";
import profileImageSource from '@/../public/images/introduction/mhl_portrait.jpg'

//region Entry

export default function IntroductionSection() {
  return (
    <section className="bg-stone-100">
      <ContentContainer className="py-24">
        <div className="flex flex-col items-center">
          <ProfileImageSurface>
            <ProfileImage />
          </ProfileImageSurface>

          <GreetingText>
            Hi, I&apos;m Maximilian.
          </GreetingText>

          <HeadlineText>
            Based in Bangkok, I specialize in full stack development where I turn ideas into exceptional user
            experiences.
          </HeadlineText>
        </div>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Image

function ProfileImageSurface({children}: { children: React.ReactNode }) {
  return (
    <div className="grid size-36 bg-stone-50 border border-stone-950/10 rounded-full place-items-center">
      {children}
    </div>
  )
}

function ProfileImage() {
  return (
    <Image
      className="object-cover rounded-full size-32"
      src={profileImageSource}
      alt="Maximilian Profile Image"
      width={128}
      height={128}
      placeholder="blur"
    />
  )
}

//endregion

//region Text

function GreetingText({children}: { children: React.ReactNode }) {
  return (
    <label className={clsx(karla.className, "mt-4 text-stone-700 font-normal text-sm")}>
      {children}
    </label>
  )
}

function HeadlineText({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(karla.className, "mt-2 max-w-xs sm:max-w-md text-center font-bold text-2xl")}>
      {children}
    </h1>
  )
}

//endregion