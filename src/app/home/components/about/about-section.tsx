import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeader, SectionSubheader} from "@/components/ui/header";
import {ABOUT_NAV_SECTION} from "@/app/home/data/navigation/home-navigation-section";

//region Model

const technologiesListOne: string[] = ["Kotlin", "Java", "Typescript"]
const technologiesListTwo: string[] = ["Android", "ReactJS", "NextJS"]
const technologiesListThree: string[] = ["Git", "Figma"]

//endregion

//region Entry

export default function AboutSection() {
  return (
    <section id={ABOUT_NAV_SECTION.id} className="bg-lavender-950 scroll-mt-14">
      <ContentContainer className="py-16">
        <SectionHeader>
          About Me
        </SectionHeader>

        <AboutDescription>
          I have been working as a Software Engineer full-time for seven years, during which I have developed a diverse
          set of skills and strong problem-solving abilities.
          {"\n"}{"\n"}
          My primary experience lies in developing native mobile applications, specifically for Android. However, my
          personal projects and endeavors have given me a comprehensive understanding of the entire stack, along with a
          keen eye for design.
          {"\n"}{"\n"}
          I am passionate about working on meaningful projects and witnessing the positive impact my work has on users
          and customers.
          {"\n"}{"\n"}
          Outside of development, I enjoy staying fit and am an avid traveler. I have visited over twenty countries and
          have lived in five different countries.
        </AboutDescription>

        <SectionSubheader className="mt-10">
          My proficient technologies
        </SectionSubheader>

        <AboutTechnologies>
          <AboutTechnologiesList technologies={technologiesListOne} />
          <AboutTechnologiesList technologies={technologiesListTwo} />
          <AboutTechnologiesList technologies={technologiesListThree} />
        </AboutTechnologies>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Description

function AboutDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-sm text-neutral-400 whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion

//region Technologies list

function AboutTechnologies({children}: { children: React.ReactNode}) {
  return (
    <div className="flex flex-row mt-4">
      {children}
    </div>
  )
}

function AboutTechnologiesList({technologies}: { technologies: string[] }) {
  return (
    <ul className="list-disc list-inside flex-1">
      {technologies.map((technology: string) => (
        <li key={technology} className="text-neutral-400 text-sm">
          {technology}
        </li>
      ))}
    </ul>
  )
}

//endregion