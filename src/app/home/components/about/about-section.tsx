import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeader, SectionSubheader} from "@/components/ui/header";
import {ABOUT_NAV_SECTION} from "@/app/home/data/navigation/home-navigation-section";
import ExpertiseList from "@/app/home/components/about/expertise-list";
import ExpertiseCard, {
  ExpertiseCardBody,
  ExpertiseCardDescriptionList,
  ExpertiseCardDescriptionListItem,
  ExpertiseCardHeader,
  ExpertiseCardIcon,
  ExpertiseCardTitle
} from "@/app/home/components/about/expertise-card";
import {GlobeIcon, LayoutGridIcon, PencilRulerIcon} from "lucide-react";

//region Model

const expertiseMobile: Expertise = {
  title: "Mobile Development",
  description: [
    "Kotlin, Java, Swift, Objective-C",
    "Compose, Room, Coroutines, Retrofit, Hilt, Glide, Material.",
    "SQLite, Supabase, Firebase."
  ]
}
const expertiseWeb: Expertise = {
  title: "Web Development",
  description: [
    "Javascript, Typescript.",
    "NextJS, TailwindCSS, ReactJS, TanStack Query",
    "Supabase, Firebase, Postgres."
  ]
}
const expertiseDesign: Expertise = {
  title: "Interface Design",
  description: [
    "LaTeX, Typst.",
    "Figma, Adobe Photoshop, Sketch."
  ]
}

//endregion

//region Entry

export default function AboutSection() {
  return (
    <section id={ABOUT_NAV_SECTION.id} className="bg-stone-50 scroll-mt-14">
      <ContentContainer className="py-16">
        <SectionHeader>
          About Me
        </SectionHeader>

        <AboutDescription>
          I have been working as a Software Engineer for seven years, during which I have developed a diverse array of
          technical skills across the full stack. My experience includes developing native mobile applications, hybrid
          mobile applications, back-end web applications, front-end web applications, and databases.
          {"\n"}{"\n"}
          I have a keen focus on solving problems, leveraging my clear understanding of Data Structures and Algorithms,
          along with my proficiency in various programming languages, frameworks, and tools. This expertise has been
          applied across numerous projects I have worked on.
          {"\n"}{"\n"}
          My most extensive experience is in developing native mobile applications for the Android platform, where I
          have held a senior role. I have proven expertise in developing with Kotlin, utilizing the latest Android
          technology stack in an enterprise setting, including Jetpack Compose, Android Architecture components, and
          Kotlin Coroutines.
          {"\n"}{"\n"}
          I have excellent communication skills and thrive in discussions, taking a proactive role in shaping the
          projects I am involved in. I am passionate about my work, and this enthusiasm drives me to produce measurable
          results and strive for the best solutions.
        </AboutDescription>

        <SectionSubheader className="mt-10">
          My expertise
        </SectionSubheader>

        <ExpertiseList className="mt-6">
          <ExpertiseCard>
            <ExpertiseCardHeader>
              <ExpertiseCardIcon>
                <LayoutGridIcon className="size-6 stroke-stone-50"/>
              </ExpertiseCardIcon>
            </ExpertiseCardHeader>
            <ExpertiseCardBody>
              <ExpertiseCardTitle>
                {expertiseMobile.title}
              </ExpertiseCardTitle>
              <ExpertiseCardDescriptionList>
                {expertiseMobile.description.map((descriptionItem: string) => (
                  <ExpertiseCardDescriptionListItem key={descriptionItem}>
                    {descriptionItem}
                  </ExpertiseCardDescriptionListItem>
                ))}
              </ExpertiseCardDescriptionList>
            </ExpertiseCardBody>
          </ExpertiseCard>

          <ExpertiseCard>
            <ExpertiseCardHeader>
              <ExpertiseCardIcon>
                <GlobeIcon className="size-6 stroke-stone-50"/>
              </ExpertiseCardIcon>
            </ExpertiseCardHeader>
            <ExpertiseCardBody>
              <ExpertiseCardTitle>
                {expertiseWeb.title}
              </ExpertiseCardTitle>
              <ExpertiseCardDescriptionList>
                {expertiseWeb.description.map((descriptionItem: string) => (
                  <ExpertiseCardDescriptionListItem key={descriptionItem}>
                    {descriptionItem}
                  </ExpertiseCardDescriptionListItem>
                ))}
              </ExpertiseCardDescriptionList>
            </ExpertiseCardBody>
          </ExpertiseCard>

          <ExpertiseCard>
            <ExpertiseCardHeader>
              <ExpertiseCardIcon>
                <PencilRulerIcon className="size-6 stroke-stone-50"/>
              </ExpertiseCardIcon>
            </ExpertiseCardHeader>
            <ExpertiseCardBody>
              <ExpertiseCardTitle>
                {expertiseDesign.title}
              </ExpertiseCardTitle>
              <ExpertiseCardDescriptionList>
                {expertiseDesign.description.map((descriptionItem: string) => (
                  <ExpertiseCardDescriptionListItem key={descriptionItem}>
                    {descriptionItem}
                  </ExpertiseCardDescriptionListItem>
                ))}
              </ExpertiseCardDescriptionList>
            </ExpertiseCardBody>
          </ExpertiseCard>
        </ExpertiseList>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Description

function AboutDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-sm text-stone-700 font-normal whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion