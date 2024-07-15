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
          My expertise
        </SectionSubheader>

        <ExpertiseList className="mt-4">
          <ExpertiseCard>
            <ExpertiseCardHeader>
              <ExpertiseCardIcon className="bg-pink-400/25">
                <LayoutGridIcon className="size-6 stroke-pink-400"/>
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
              <ExpertiseCardIcon className="bg-green-300/25">
                <GlobeIcon className="size-6 stroke-green-300"/>
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
              <ExpertiseCardIcon className="bg-yellow-200/25">
                <PencilRulerIcon className="size-6 stroke-yellow-200"/>
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
    <p className="mt-4 text-sm text-neutral-400 whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion