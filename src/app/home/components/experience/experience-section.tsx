import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeading} from "@/components/ui/header";
import VippsLogo from "@/components/icon/company-logo/vipps-logo";
import FinnLogo from "@/components/icon/company-logo/finn-logo";
import DttLogo from "@/components/icon/company-logo/dtt-logo";
import ExperienceList from "@/app/home/components/experience/experience-list";
import {Divider} from "@/components/ui/divider";
import {
  DownloadCvBanner,
  DownloadCvBannerBody,
  DownloadCvBannerDescription,
  DownloadCvBannerFooter,
  DownloadCvBannerTitle
} from "@/app/home/components/experience/download-cv-banner/download-cv-banner";
import DownloadCvButton from "@/app/home/components/experience/download-cv-banner/download-cv-button";
import HvalLogo from "@/components/icon/company-logo/hval-logo";
import ExperienceCard, {
  ExperienceDescription,
  ExperienceDescriptionList,
  ExperienceDescriptionListItem
} from "@/app/home/components/experience/experience-card";

//region Entry

export default function ExperienceSection() {
  return (
    <section className="bg-stone-100 scroll-mt-14">
      <ContentContainer className="py-16">
        <SectionHeading>
          Work Experience
        </SectionHeading>

        <ExperienceList className="mt-4">

          {/* Hval */}
          <ExperienceCard
            logo={<CompanyLogoForCompanyName companyName="Hval" />}
            companyName="Hval"
            role="Owner & Full Stack Developer"
            startDate="Jan 2024"
            endDate="Present"
            location="Bangkok, Thailand"
            locationShorthand="Thailand"
            initiallyShowDescription={true}
          >
            <ExperienceDescription>
              <a href="https://hval.dev" className="font-semibold underline underline-offset-2" target="_blank" rel="noreferrer">Hval</a> is a
              Web Development Agency that I started to allow me to provide my technical expertise to clients in the
              form of development services. This opportunity also enables me to work on and launch a number of personal
              projects that I feel passionate about.
              <br /><br />
              In this company I function as a full stack developer where I take control over building all aspects of a
              project, from database design, API integration and backend development to user interaction and frontend
              user experience.
              <br /><br />
              Furthermore in this role, I am responsible for attracting new customers along and securing them as
              clients by composing proposals and sales documentation.
            </ExperienceDescription>
          </ExperienceCard>

          {/* Vipps MobilePay */}
          <ExperienceCard
            logo={<CompanyLogoForCompanyName companyName="Vipps MobilePay" />}
            companyName="Vipps MobilePay"
            role="Senior Software Engineer"
            startDate="Jun 2021"
            endDate="Dec 2024"
            location="Oslo, Norway & Vancouver, Canada"
            locationShorthand="Norway • Canada"
            initiallyShowDescription={true}
          >
            <ExperienceDescriptionList>
              <ExperienceDescriptionListItem>
                Led a financial service project, developing a credit product for Android users and managing the entire
                tech stack.
              </ExperienceDescriptionListItem>
              <ExperienceDescriptionListItem>
                Transitioned the core payment flow UI from XML to Jetpack Compose, modernizing and boosting performance.
              </ExperienceDescriptionListItem>
              <ExperienceDescriptionListItem>
                Improved the payments flow architecture by creating standardized helper classes.
              </ExperienceDescriptionListItem>
              <ExperienceDescriptionListItem>
                Maintained a rigorous release schedule, handling the end-to-end release process, monitoring crash
                reports, and addressing issues.
              </ExperienceDescriptionListItem>
            </ExperienceDescriptionList>
          </ExperienceCard>

          {/* FINN.no */}
          <ExperienceCard
            logo={<CompanyLogoForCompanyName companyName="FINN.no" />}
            companyName="FINN.no"
            role="Senior Android Developer"
            startDate="Jun 2019"
            endDate="May 2021"
            location="Oslo, Norway"
            locationShorthand="Norway"
            initiallyShowDescription={false}
          >
            <ExperienceDescriptionList>
              <ExperienceDescriptionListItem>
                Developed and open-source image gallery library, integrated into the production app and available on my
                Github.
              </ExperienceDescriptionListItem>
              <ExperienceDescriptionListItem>
                Led a project to add a notifications system to the app. Created a new feature module for networking,
                push notifications, local persistence, business logic and UI.
              </ExperienceDescriptionListItem>
              <ExperienceDescriptionListItem>
                Designed and implemented key app components, modernizing the app&apos;s appearance and increasing user
                engagement and ratings.
              </ExperienceDescriptionListItem>
            </ExperienceDescriptionList>
          </ExperienceCard>

          {/* DTT */}
          <ExperienceCard
            logo={<CompanyLogoForCompanyName companyName="DTT" />}
            companyName="DTT"
            role="Lead Android Developer"
            startDate="Aug 2017"
            endDate="May 2019"
            location="Amsterdam, The Netherlands"
            locationShorthand="The Netherlands"
            initiallyShowDescription={false}
          >
            <ExperienceDescriptionList>
              <ExperienceDescriptionListItem>
                Guided and mentored a team of developers, overseeing the development of high-quality, cost-effective
                Android applications from inception to delivery.
              </ExperienceDescriptionListItem>
              <ExperienceDescriptionListItem>
                Architected Android applications for clients.
              </ExperienceDescriptionListItem>
              <ExperienceDescriptionListItem>
                Created precise project quotes and reports based on app requirements and design, meeting project
                duration and cost demands.
              </ExperienceDescriptionListItem>
            </ExperienceDescriptionList>
          </ExperienceCard>
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
      return <HvalLogo className="flex-none size-10 rounded-full ring-1 ring-stone-950/10 p-1" />
    case 'Vipps MobilePay':
      return <VippsLogo className="flex-none size-10 rounded-full" />
    case 'FINN.no':
      return <FinnLogo className="flex-none size-10 rounded-full" />
    case 'DTT':
      return <DttLogo className="flex-none size-10 rounded-full" />
  }
}

//endregion