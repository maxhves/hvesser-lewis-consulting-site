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
          I have been working as a Software Engineer full time for 7 years, and throughout that time I have amassed a
          diverse set of knowledge along with some very keen problem solving skills.
          {"\n"}{"\n"}
          Predominantly my experience has been with developing native mobile applications, more specifically, Android
          applications, though my personal projects and endeavors have given me thorough knowledge over the whole
          stack, including some very keen design skills.
          {"\n"}{"\n"}
          I love working with meaning projects and seeing the impact that my work has on the users/customers that I
          have worked with.
          {"\n"}{"\n"}
          Outside of development, I love to keep fit, and I am a very keen traveller. To date, I have visited just over
          twenty countries, and I have lived in four different countries, spanning two continents.
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