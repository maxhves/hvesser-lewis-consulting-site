import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import PastEmploymentCard from '@/app/sections/experience/components/past_employment_card/past_employment_card';
import SectionHeader from '@/app/components/section_header/section_header';

function Experience() {
  return (
    <SectionWrapper>
      <div>
        {/* Heading */}
        <SectionHeader
          number={2}
          heading="Experience"
        />

        {/* Past work experience */}
        <ul className="divide-y divide-solid divide-aths-special">
          {/* Vipps */}
          <li className="py-12">
            <PastEmploymentCard
              jobTitle="Senior Android Developer"
              company="Vipps"
              startYear="2021"
              endYear="Present"
              location="Norway • Vancouver, Canada"
              imageSource="/experience_images/logo_vipps.png"
              body={[
                "I demonstrated initiative by spearheading a pivotal financial service project. This involved introducing a credit product for Android users, taking ownership of the entire tech stack—encompassing networking, local persistence, business logic, and UI—to ensure a seamless user experience.",
                "Proactively leading the transition of the core payment flow UI from XML to Jetpack Compose, I modernized the interface and enhanced performance by aligning related View Models with Jetpack Compose's statefulness.",
                "I played a key role in reshaping the logical architecture of the payments flow, introducing standardized helper classes that streamlined complex technical steps, now widely utilized by various product teams.",
                "Additionally, I maintained a rigorous release schedule, overseeing the end-to-end release process and monitoring crash reports and user behavior to swiftly address issues, ensuring a consistently smooth user experience in weekly app updates for both internal and production users."
              ]}
            />
          </li>

          {/* FINN */}
          <li className="py-12">
            <PastEmploymentCard
              jobTitle="Senior Android Developer"
              company="FINN.no"
              startYear="2019"
              endYear="2021"
              location="Oslo, Norway"
              imageSource="/experience_images/logo_finn.png"
              body={[
                "I played a pivotal role in conceptualizing and developing an open-source gallery image library, integrated into the production app and available on my Github. This library boasts a modern and user-friendly gallery format with enhanced usability functions and captivating animations, elevating the overall immersive experience for users.",
                "Additionally, I led a project to incorporate a notification system into the app, creating a new feature module covering networking, push notification handling, local persistence, business logic, and UI. This overhaul significantly improved the app's communication and notification capabilities, contributing to a more engaging user experience.",
                "Furthermore, I spearheaded the design and implementation of key app components, modernizing the app's appearance and streamlining user interactions, ultimately enhancing user satisfaction and engagement.",
              ]}
            />
          </li>

          {/* DTT */}
          <li className="pt-12">
            <PastEmploymentCard
              jobTitle="Android Lead"
              company="DTT"
              startYear="2017"
              endYear="2019"
              location="Amsterdam, The Netherlands"
              imageSource="/experience_images/logo_dtt.png"
              body={[
                "I gained valuable experience in team management and honed my skills in overseeing the development of high-quality and cost-effective Android applications from inception to delivery. This leadership role allowed me to guide and mentor a team of developers, fostering collaboration and ensuring the successful execution of projects.",
                "I developed a much deeper understanding of Android application architecture. I delved into the intricacies of proper modularization, effectively dividing projects into distinct layers: UI, Domain, and Data. Additionally, I mastered the art of managing project dependencies, optimizing code organization, and improving the overall maintainability and scalability of our applications.",
                "I sharpened my client-facing skills by developing the ability to provide clients with precise and effective project quotes. I adopted a meticulous approach, creating comprehensive reports based on app requirements and design. These reports enabled clients to receive accurate estimates regarding project duration and cost.",
              ]}
            />
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}

export default Experience;