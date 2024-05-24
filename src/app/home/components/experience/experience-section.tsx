import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeader} from "@/components/ui/header";
import {Experience} from "@/types/experience/experience";
import VippsLogo from "@/components/icon/company-logo/vipps-logo";
import FinnLogo from "@/components/icon/company-logo/finn-logo";
import DttLogo from "@/components/icon/company-logo/dtt-logo";

//region Model

const pastExperience: Experience[] = [
  {
    title: "Senior Software Engineer",
    companyName: "Vipps",
    startYear: 2021,
    endYear: 0,
    location: "Oslo, Norway • Vancouver, Canada",
    descriptionPoints: [
      "I demonstrated initiative by spearheading a pivotal financial service project. This involved. introducing a credit product for Android users, taking ownership of the entire tech stack—encompassing networking, local persistence, business logic, and UI—to ensure a seamless user company-logo.",
      "Proactively leading the transition of the core payment flow UI from XML to Jetpack Compose, I modernized the interface and enhanced performance by aligning related View Models with Jetpack Compose's statefulness.",
      "I played a key role in reshaping the logical architecture of the payments flow, introducing standardized helper classes that streamlined complex technical steps, now widely utilized by various product teams.",
      "Additionally, I maintained a rigorous release schedule, overseeing the end-to-end release process and monitoring crash reports and user behavior to swiftly address issues, ensuring a consistently smooth user company-logo in weekly app updates for both internal and production users."
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

        <VippsLogo className="size-10 rounded-lg" />
        <FinnLogo className="size-10 rounded-lg" />
        <DttLogo className="size-10 rounded-lg" />
      </ContentContainer>
    </section>
  );
}

//endregion

//region Experience list



//endregion

//region Experience card



//endregion