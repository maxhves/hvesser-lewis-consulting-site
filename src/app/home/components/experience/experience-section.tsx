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
  ExperienceItemDescriptionListItem, ExperienceItemExpandCollapseButton,
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
import {Divider} from "@/components/ui/divider";
import {
  DownloadCvBanner,
  DownloadCvBannerBody, DownloadCvBannerDescription, DownloadCvBannerFooter, DownloadCvBannerTitle
} from "@/app/home/components/experience/download-cv-banner/download-cv-banner";
import DownloadCvButton from "@/app/home/components/experience/download-cv-banner/download-cv-button";
import HvalLogo from "@/components/icon/company-logo/hval-logo";

//region Model

const pastExperience: Experience[] = [
  {
    title: "Full Stack Developer",
    companyName: "Hval",
    startDate: "Jan 2024",
    endDate: "Present",
    location: "Bangkok, Thailand",
    locationShorthand: "Thailand",
    descriptionItems: [
      "I have taken the opportunity to work on projects that I am personally passionate about, gaining firsthand experience in independently managing and developing various projects from inception to production.",
      "Primarily developed web applications, enhancing my technical knowledge of front-end, back-end, and database technologies.",
      "My experience has been particularly focused on working with ReactJS, NextJS, PostgreSQL, JavaScript, and TypeScript."
    ],
  },
  {
    title: "Senior Software Engineer",
    companyName: "Vipps MobilePay",
    startDate: "Jun 2021",
    endDate: "Present",
    location: "Oslo, Norway • Vancouver, Canada",
    locationShorthand: "Norway • Canada",
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
    startDate: "Jun 2019",
    endDate: "May 2021",
    location: "Oslo, Norway",
    locationShorthand: "Norway",
    descriptionItems: [
      "Developed and open-source image gallery library, integrated into the production app and available on my Github.",
      "Led a project to add a notifications system to the app. Created a new feature module for networking, push notifications, local persistence, business logic and UI.",
      "Designed and implemented key app components, modernizing the app's appearance and increasing user engagement and ratings."
    ]
  },
  {
    title: "Lead Android Developer",
    companyName: "DTT",
    startDate: "Aug 2017",
    endDate: "May 2019",
    location: "Amsterdam, The Netherlands",
    locationShorthand: "The Netherlands",
    descriptionItems: [
      "Guided and mentored a team of developers, overseeing the development of high-quality, cost-effective Android applications from inception to delivery.",
      "Architected Android applications for clients.",
      "Created precise project quotes and reports based on app requirements and design, meeting project duration and cost demands."
    ]
  },
  {
    title: "Software Engineer",
    companyName: "DTT",
    startDate: "Aug 2016",
    endDate: "Jul 2017",
    location: "Amsterdam, The Netherlands",
    locationShorthand: "The Netherlands",
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
    <section id={EXPERIENCE_NAV_SECTION.id} className="bg-stone-100 scroll-mt-14">
      <ContentContainer className="py-16">
        <SectionHeader>
          Work Experience
        </SectionHeader>

        <ExperienceList className="mt-4">
          {pastExperience.map((experience: Experience) => (
            <ExperienceListItem key={experience.title + experience.companyName}>
              <ExperienceItemHeader className="hidden sm:flex">
                <ExperienceItemHeaderImage>
                  <CompanyLogoForCompanyName companyName={experience.companyName} />
                </ExperienceItemHeaderImage>

                <ExperienceItemHeaderText>
                  <ExperienceItemHeaderTextRow>
                    <ExperienceItemCompanyNameText>
                      {experience.companyName}
                    </ExperienceItemCompanyNameText>
                    <ExperienceItemDatesText>
                      {experience.startDate}-{experience.endDate}
                    </ExperienceItemDatesText>
                  </ExperienceItemHeaderTextRow>
                  <ExperienceItemHeaderTextRow>
                    <ExperienceItemTitleText>
                      {experience.title}
                    </ExperienceItemTitleText>
                    <ExperienceItemLocationText>
                      {experience.location}
                    </ExperienceItemLocationText>
                  </ExperienceItemHeaderTextRow>
                </ExperienceItemHeaderText>

                <ExperienceItemExpandCollapseButton />
              </ExperienceItemHeader>

              <ExperienceItemHeader className="flex sm:hidden flex-col">
                <div className="flex flex-row justify-between">
                  <ExperienceItemHeaderImage>
                    <CompanyLogoForCompanyName companyName={experience.companyName} />
                  </ExperienceItemHeaderImage>
                  <ExperienceItemExpandCollapseButton />
                </div>

                <ExperienceItemHeaderText>
                  <ExperienceItemHeaderTextRow className="mt-4">
                    <ExperienceItemCompanyNameText>
                      {experience.companyName}
                    </ExperienceItemCompanyNameText>
                  </ExperienceItemHeaderTextRow>
                  <ExperienceItemHeaderTextRow>
                    <ExperienceItemTitleText>
                      {experience.title}
                    </ExperienceItemTitleText>
                  </ExperienceItemHeaderTextRow>
                  <ExperienceItemHeaderTextRow className="mt-3">
                    <ExperienceItemLocationText>
                      {experience.locationShorthand}
                    </ExperienceItemLocationText>
                    <ExperienceItemDatesText>
                      {experience.startDate}-{experience.endDate}
                    </ExperienceItemDatesText>
                  </ExperienceItemHeaderTextRow>
                </ExperienceItemHeaderText>
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

        <Divider className="my-8" />

        <DownloadCvBanner>
          <DownloadCvBannerBody>
            <DownloadCvBannerTitle>
              Want to know more?
            </DownloadCvBannerTitle>
            <DownloadCvBannerDescription>
              Download the latest version of my CV to see my full experience and qualifications.
            </DownloadCvBannerDescription>
          </DownloadCvBannerBody>
          <DownloadCvBannerFooter>
            <DownloadCvButton />
          </DownloadCvBannerFooter>
        </DownloadCvBanner>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Helper

function CompanyLogoForCompanyName({companyName}: { companyName: string }) {
  switch (companyName) {
    case 'Hval':
      return <HvalLogo className="rounded-full" />
    case 'Vipps MobilePay':
      return <VippsLogo className="size-10 rounded-full" />
    case 'FINN.no':
      return <FinnLogo className="size-10 rounded-full" />
    case 'DTT':
      return <DttLogo className="size-10 rounded-full" />
  }
}

//endregion