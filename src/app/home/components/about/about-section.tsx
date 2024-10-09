import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import HomeNavLink from "@/app/home/data/navigation/home-nav-link";
import SectionBadge from "@/components/ui/section-badge";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import Image from "next/image";
import profileImage from "../../../../../public/images/introduction/mhl_portrait.jpg"

//region Entry

export default function AboutSection() {
  return (
    <section id={HomeNavLink.About.id} className="bg-slate-100 scroll-mt-14">
      <ContentContainer className="py-16">
        <div className="flex flex-col items-center">
          <SectionBadge>
            About
          </SectionBadge>

          <div className="w-full flex flex-row mt-4 gap-x-16">
            <div className="space-y-6">
              <AboutHeading>
                Hi, I’m Maximilian
              </AboutHeading>
              <AboutBody>
                I’m dedicated to helping businesses strengthen and enhance their digital presence. With over seven
                years of experience in software development, I bring a wide array of full-stack technical skills to the
                table.
                {"\n"}{"\n"}
                I pair my strong communication skills with a proactive approach to play a key role in shaping every
                project I work on. My passion for development drives me to consistently deliver solutions that achieve
                tangible, measurable results.
              </AboutBody>
            </div>
            <ProfileImage />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Text

function AboutHeading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "font-medium text-2xl text-blue-950")}>
      {children}
    </h1>
  )
}

function AboutBody({children}: { children: React.ReactNode }) {
  return (
    <p className="text-slate-700 text-base font-normal whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion

//region Image

function ProfileImage() {
  return (
    <Image
      className="block rounded-2xl h-auto max-w-56 flex-none object-center"
      src={profileImage}
      alt="Maximilian Hvesser-Lewis profile image"
      width={196}
      height={248}
      placeholder="blur"
    />
  )
}

//endregion