import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import PastEmploymentCard from '@/app/sections/experience/components/past_employment_card/past_employment_card';
import SectionHeader from '@/app/components/section_header/section_header';

function Experience() {
  return (
    <SectionWrapper id="section-experience">
      <div>
        {/* Heading */}
        <SectionHeader
          number={2}
          heading="Experience"
        />

        {/* Past work experience */}
        <ul className="divide-y divide-solid divide-aths-special dark:divide-daintree">
          {/* Vipps */}
          <li className="pb-12">
            <PastEmploymentCard
              jobTitle="Senior Software Engineer"
              company="Vipps"
              startYear="2021"
              endYear="Present"
              location="Oslo, Norway • Vancouver, Canada"
              imageSource="/experience_images/logo_vipps.png"
              body={[
                "Lead the development of an entirely new credit financial product for Android users, leading to increased company revenue.",
                "Transitioned the core payment flow UI from XML to Jetpack Compose. This directly decreased the user drop-off rate when paying, and increased user engagement.",
                "Abstracted and streamlined core payment services into standardized modules, leading to increased efficiency across multiple domain teams, allowing for quick integration with the payment flow.",
              ]}
            />
          </li>

          {/* FINN */}
          <li className="py-12">
            <PastEmploymentCard
              jobTitle="Senior Android Engineer"
              company="FINN.no"
              startYear="2019"
              endYear="2021"
              location="Oslo, Norway"
              imageSource="/experience_images/logo_finn.png"
              body={[
                "Developed an open-source image gallery that increased the companies’ developer presence in the community as well providing users with a new immersive image-experience.",
                "Lead the development of a notification system for Android users. The new outreach system drastically improved user engagement and directly increased the communication power with customers.",
              ]}
            />
          </li>

          {/* DTT */}
          <li className="pt-12">
            <PastEmploymentCard
              jobTitle="Lead Android Engineer"
              company="DTT"
              startYear="2017"
              endYear="2019"
              location="Amsterdam, The Netherlands"
              imageSource="/experience_images/logo_dtt.png"
              body={[
                "Managed the development of high-quality and cost-effective native Android applications, successfully converting prospective customers into sales.",
                "Mentored a team of developers, driving collaboration, where I significantly increased productivity.",
                "Carried out high-level processes, such as, app releasing, dependency management and code optimization, leading to increased scalability and maintainability of projects.",
              ]}
            />
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}

export default Experience;