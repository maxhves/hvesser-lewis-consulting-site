import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeader} from "@/components/ui/header";
import {Experience} from "@/types/experience/experience";
import {clsx} from "clsx";
import VippsLogo from "@/components/icon/company-logo/vipps-logo";
import FinnLogo from "@/components/icon/company-logo/finn-logo";
import DttLogo from "@/components/icon/company-logo/dtt-logo";

//region Model

const pastExperience: Experience[] = [
  {
    title: "Senior Software Engineer",
    companyName: "Vipps",
    startYear: "2021",
    endYear: "Present",
    location: "Oslo, Norway • Vancouver, Canada",
    descriptionItems: [
      "I demonstrated initiative by spearheading a pivotal financial service project. This involved. introducing a credit product for Android users, taking ownership of the entire tech stack—encompassing networking, local persistence, business logic, and UI—to ensure a seamless user company-logo.",
      "Proactively leading the transition of the core payment flow UI from XML to Jetpack Compose, I modernized the interface and enhanced performance by aligning related View Models with Jetpack Compose's statefulness.",
      "I played a key role in reshaping the logical architecture of the payments flow, introducing standardized helper classes that streamlined complex technical steps, now widely utilized by various product teams.",
      "Additionally, I maintained a rigorous release schedule, overseeing the end-to-end release process and monitoring crash reports and user behavior to swiftly address issues, ensuring a consistently smooth user company-logo in weekly app updates for both internal and production users."
    ]
  },
  {
    title: "Senior Android Developer",
    companyName: "FINN.no",
    startYear: "2019",
    endYear: "2021",
    location: "Oslo, Norway",
    descriptionItems: [
      "I played a pivotal role in conceptualizing and developing an open-source gallery image library, integrated into the production app and available on my Github. This library boasts a modern and user-friendly gallery format with enhanced usability functions and captivating animations, elevating the overall immersive experience for users.",
      "Additionally, I led a project to incorporate a notification system into the app, creating a new feature module covering networking, push notification handling, local persistence, business logic, and UI. This overhaul significantly improved the app's communication and notification capabilities, contributing to a more engaging user experience.",
      "Furthermore, I spearheaded the design and implementation of key app components, modernizing the app's appearance and streamlining user interactions, ultimately enhancing user satisfaction and engagement."
    ]
  },
  {
    title: "Lead Software Engineer",
    companyName: "DTT",
    startYear: "2017",
    endYear: "2019",
    location: "Amsterdam, The Netherlands",
    descriptionItems: [
      "I gained valuable experience in team management and honed my skills in overseeing the development of high-quality and cost-effective Android applications from inception to delivery. This leadership role allowed me to guide and mentor a team of developers, fostering collaboration and ensuring the successful execution of projects.",
      "I developed a much deeper understanding of Android application architecture. I delved into the intricacies of proper modularization, effectively dividing projects into distinct layers: UI, Domain, and Data. Additionally, I mastered the art of managing project dependencies, optimizing code organization, and improving the overall maintainability and scalability of our applications.",
      "I sharpened my client-facing skills by developing the ability to provide clients with precise and effective project quotes. I adopted a meticulous approach, creating comprehensive reports based on app requirements and design. These reports enabled clients to receive accurate estimates regarding project duration and cost."
    ]
  }
]

//endregion

//region Entry

export default function ExperienceSection() {
  return (
    <section className="bg-lavender-900">
      <ContentContainer className="py-16">
        <SectionHeader>
          Professional Experience
        </SectionHeader>

        <ExperienceList className="mt-10">
          {pastExperience.map((experience: Experience) => (
            <ExperienceCard key={experience.title + experience.companyName}>
              <ExperienceCardHeader>
                <ExperienceCardHeaderImage>
                  <CompanyLogoForCompanyName companyName={experience.companyName} />
                </ExperienceCardHeaderImage>
                <ExperienceCardHeaderText>
                  <ExperienceCardHeaderTextRow>
                    <ExperienceCardTitleText>
                      {experience.title}
                    </ExperienceCardTitleText>
                    <ExperienceCardDatesText>
                      {experience.startYear}-{experience.endYear}
                    </ExperienceCardDatesText>
                  </ExperienceCardHeaderTextRow>
                  <ExperienceCardHeaderTextRow>
                    <ExperienceCardCompanyNameText>
                      {experience.companyName}
                    </ExperienceCardCompanyNameText>
                    <ExperienceCardLocationText>
                      {experience.location}
                    </ExperienceCardLocationText>
                  </ExperienceCardHeaderTextRow>
                </ExperienceCardHeaderText>
              </ExperienceCardHeader>

              <ExperienceCardContent>
                <ExperienceCardDescriptionList>
                  {experience.descriptionItems.map((item: string) =>
                    <ExperienceCardDescriptionListItem key={item}>
                      {item}
                    </ExperienceCardDescriptionListItem>
                  )}
                </ExperienceCardDescriptionList>
              </ExperienceCardContent>
            </ExperienceCard>
          ))}
        </ExperienceList>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Experience list

function ExperienceList({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <ul className={clsx(className, "space-y-4")}>
      {children}
    </ul>
  )
}

//endregion

//region Experience card

function ExperienceCard({children}: { children: React.ReactNode }) {
  return (
    <div className="bg-lavender-950/50 rounded-lg divide-y divide-neutral-50/5">
      {children}
    </div>
  )
}

function ExperienceCardHeader({children}: { children: React.ReactNode }) {
  return (
    <div className="flex p-8 space-x-8 items-center">
      {children}
    </div>
  )
}

function ExperienceCardHeaderImage({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

function ExperienceCardHeaderText({children}: { children: React.ReactNode }) {
  return (
    <div className="flex-grow">
      {children}
    </div>
  )
}

function ExperienceCardHeaderTextRow({children}: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center space-y-1">
      {children}
    </div>
  )
}

function ExperienceCardTitleText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-neutral-50 font-bold text-sm">
      {children}
    </div>
  )
}

function ExperienceCardCompanyNameText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-neutral-50 font-medium text-sm">
      {children}
    </div>
  )
}

function ExperienceCardDatesText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-sm text-neutral-400">
      {children}
    </div>
  )
}

function ExperienceCardLocationText({children}: { children: React.ReactNode }) {
  return (
    <div className="text-sm text-neutral-400">
      {children}
    </div>
  )
}

function ExperienceCardContent({children}: { children: React.ReactNode }) {
  return (
    <div className="p-8">
      {children}
    </div>
  )
}

function ExperienceCardDescriptionList({children}: { children: React.ReactNode }) {
  return (
    <ul className="list-disc ps-4 space-y-5">
      {children}
    </ul>
  )
}

function ExperienceCardDescriptionListItem({children}: { children: React.ReactNode }) {
  return (
    <li className="text-xs/5 text-neutral-200">
      {children}
    </li>
  )
}

//endregion

//region Helper

function CompanyLogoForCompanyName({companyName}: { companyName: string }) {
  switch (companyName) {
    case 'Vipps':
      return <VippsLogo className="size-10 rounded-lg" />
    case 'FINN.no':
      return <FinnLogo className="size-10 rounded-lg" />
    case 'DTT':
      return <DttLogo className="size-10 rounded-lg" />
  }
}

//endregion