import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeader} from "@/components/ui/header";
import {Experience} from "@/types/experience/experience";
import VippsLogo from "@/components/icon/company-logo/vipps-logo";
import FinnLogo from "@/components/icon/company-logo/finn-logo";
import DttLogo from "@/components/icon/company-logo/dtt-logo";
import {
  ExperienceItemCompanyNameText,
  ExperienceItemContent,
  ExperienceItemDatesText,
  ExperienceItemDescriptionList,
  ExperienceItemDescriptionListItem,
  ExperienceItemHeader,
  ExperienceItemHeaderImage,
  ExperienceItemHeaderText,
  ExperienceItemHeaderTextRow,
  ExperienceItemLocationText,
  ExperienceItemTitleText,
  ExperienceList,
  ExperienceListItem
} from "@/app/home/components/experience/experience-list";
import {EXPERIENCE_NAV_SECTION} from "@/app/home/data/navigation/home-navigation-section";

//region Model

const pastExperience: Experience[] = [
  {
    title: "Senior Software Engineer",
    companyName: "Vipps MobilePay",
    startYear: "Jun 2021",
    endYear: "Present",
    location: "Oslo, Norway - Vancouver, Canada",
    descriptionItems: [
      "Led a financial service project, developing a credit product for Android users and managing the entire tech stack.",
      "Transitioned the core payment flow UI from XML to Jetpack Compose, modernizing and boosting performance.",
      "Improved the payments flow architecture by creating standardized helper classes.",
      "Maintained a rigorous release schedule, handling the end-to-end release process, monitoring crash reports, and addressing issues."
    ]
  },
  {
    title: "Senior Android Developer",
    companyName: "FINN.no",
    startYear: "Jun 2019",
    endYear: "May 2021",
    location: "Oslo, Norway",
    descriptionItems: [
      "Developed and open-source image gallery library, integrated into the production app and available on my Github.",
      "Led a project to add a notifications system to the app. Created a new feature module for networking, push notifications, local persistence, business logic and UI.",
      "Designed and implemented key app components, modernizing the app's appearance and increasing user engagement and ratings."
    ]
  },
  {
    title: "Lead Android Developer",
    companyName: "DTT",
    startYear: "Aug 2017",
    endYear: "May 2019",
    location: "Amsterdam, the Netherlands",
    descriptionItems: [
      "Guided and mentored a team of developers, overseeing the development of high-quality, cost-effective Android applications from inception to delivery.",
      "Architected Android applications for clients.",
      "Created precise project quotes and reports based on app requirements and design, meeting project duration and cost demands."
    ]
  },
  {
    title: "Software Engineer",
    companyName: "DTT",
    startYear: "Aug 2016",
    endYear: "Jul 2017",
    location: "Amsterdam, the Netherlands",
    descriptionItems: [
      "Developed native Android and iOS apps for clients as a consultant.",
      "Developed new features for existing applications and conducted assessments of code quality in establish codebases.",
      "Showcased my expertise in native mobile development with the use of networking, database storage and persistence, push notifications, interface design, background services, concurrency management, and connectivity."
    ]
  }
]

//endregion

//region Entry

export default function ExperienceSection() {
  return (
    <section id={EXPERIENCE_NAV_SECTION.id} className="bg-lavender-900 scroll-mt-14">
      <ContentContainer className="py-16">
        <SectionHeader>
          Professional Experience
        </SectionHeader>

        <ExperienceList className="mt-10">
          {pastExperience.map((experience: Experience) => (
            <ExperienceListItem key={experience.title + experience.companyName}>
              <ExperienceItemHeader>
                <ExperienceItemHeaderText>
                  <ExperienceItemHeaderTextRow>
                    <ExperienceItemCompanyNameText>
                      {experience.companyName}
                    </ExperienceItemCompanyNameText>
                    <ExperienceItemTitleText>
                      {experience.title}
                    </ExperienceItemTitleText>
                  </ExperienceItemHeaderTextRow>
                  <ExperienceItemHeaderTextRow>
                    <ExperienceItemDatesText>
                      {experience.startYear}-{experience.endYear}
                    </ExperienceItemDatesText>
                    <ExperienceItemLocationText>
                      {experience.location}
                    </ExperienceItemLocationText>
                  </ExperienceItemHeaderTextRow>
                </ExperienceItemHeaderText>

                <ExperienceItemHeaderImage>
                  <CompanyLogoForCompanyName companyName={experience.companyName} />
                </ExperienceItemHeaderImage>
              </ExperienceItemHeader>

              <ExperienceItemContent>
                <ExperienceItemDescriptionList>
                  {experience.descriptionItems.map((item: string) =>
                    <ExperienceItemDescriptionListItem key={item}>
                      {item}
                    </ExperienceItemDescriptionListItem>
                  )}
                </ExperienceItemDescriptionList>
              </ExperienceItemContent>
            </ExperienceListItem>
          ))}
        </ExperienceList>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Helper

function CompanyLogoForCompanyName({companyName}: { companyName: string }) {
  switch (companyName) {
    case 'Vipps MobilePay':
      return <VippsLogo className="size-10 rounded-lg" />
    case 'FINN.no':
      return <FinnLogo className="size-10 rounded-lg" />
    case 'DTT':
      return <DttLogo className="size-10 rounded-lg" />
  }
}

//endregion