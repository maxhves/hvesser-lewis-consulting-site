import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import HomeNavLink from "@/app/home/data/navigation/home-nav-link";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import Image from "next/image";
import profileImage from "../../../../../public/images/about/mhl-portrait.jpg"

//region Entry

export default function AboutSection() {
  return (
    <section id={HomeNavLink.About.id} className="bg-slate-100 scroll-mt-14">
      <ContentContainer className="py-16">
          <AboutCard>
            <AboutBody>
              <AboutHeading>
                Hi, I’m Maximilian
              </AboutHeading>
              <AboutDescription>
                I’m dedicated to helping businesses strengthen and enhance their digital presence. With over seven
                years of experience in software development, I bring a wide array of full-stack technical skills to the
                table.
                {"\n"}{"\n"}
                I pair my strong communication skills with a proactive approach to play a key role in shaping every
                project I work on. My passion for development drives me to consistently deliver solutions that achieve
                tangible, measurable results.
              </AboutDescription>
            </AboutBody>
            <AboutImageBox>
              <ProfileImage />
            </AboutImageBox>
          </AboutCard>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Container

function AboutCard({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row">
      {children}
    </div>
  )
}

function AboutBody({children}: { children: React.ReactNode }) {
  return (
    <div className="p-8 space-y-6 bg-neutral-200/50">
      {children}
    </div>
  )
}

function AboutImageBox({children}: { children: React.ReactNode }) {
  return (
    <div className="h-44 sm:h-full w-full sm:w-48 flex-none border-t-8 border-emerald-600 bg-neutral-200/25">
      {children}
    </div>
  )
}

//endregion

//region Text

function AboutHeading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "font-medium text-2xl text-neutral-950")}>
      {children}
    </h1>
  )
}

function AboutDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="text-neutral-700 text-base font-normal whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion

//region Image

function ProfileImage() {
  return (
    <Image
      className="object-cover size-full"
      src={profileImage}
      alt="Maximilian Hvesser-Lewis profile image"
      placeholder="blur"
    />
  )
}

//endregion