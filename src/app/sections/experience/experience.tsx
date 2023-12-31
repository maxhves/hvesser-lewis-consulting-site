import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import PastEmploymentCard from '@/app/sections/experience/components/past_employment_card/past_employment_card';

function Experience() {
  return (
    <SectionWrapper>
      <div>
        {/* Heading */}
        <p className="font-medium text-cutty-sark text-2xl">
          <span className="text-jungle-green">02.</span> Experience
        </p>

        {/* Past work experience */}
        <ul className="divide-y divide-solid divide-aths-special">
          {/* Vipps */}
          <li className="py-12">
            <PastEmploymentCard
              jobTitle="Senior Android Developer"
              company="Vipps"
              startYear="2021"
              endYear="Present"
              location="Oslo, Norway - Vancouver, Canada"
              body={""}
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
              body={""}
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
              body={""}
            />
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}

export default Experience;