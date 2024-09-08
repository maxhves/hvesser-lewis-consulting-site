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
    "NextJS, TailwindCSS, ReactJS, SvelteKit",
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
          As a Software Engineer with over seven years of experience, I have honed a diverse set of technical skills
          across the full stack. My expertise covers native and hybrid mobile app development, backend and frontend web
          applications, as well as full integration with APIs and databases.
          {"\n"}{"\n"}
          I have a strong passion for solving complex technical challenges, utilizing my deep knowledge of Data
          Structures and Algorithms, alongside proficiency in various programming languages, frameworks, and tools.
          This foundation has enabled me to tackle intricate problems and deliver effective solutions.
          {"\n"}{"\n"}
          I thrive in collaborative environments, leveraging my excellent communication skills and professionalism to
          take a proactive role in shaping projects. My passion for development drives me to consistently deliver
          solutions that yield measurable results.
          {"\n"}{"\n"}
          Currently, I focus on turning clients’ ideas into digital solutions through my Web Development Agency, Hval.
          Alongside client work, I also dedicate time to building my own ideas, further fueling my enthusiasm for
          development.
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
    <p className="mt-4 text-sm text-stone-700 font-normal whitespace-pre-line">
      {children}
    </p>
  )
}

//endregion