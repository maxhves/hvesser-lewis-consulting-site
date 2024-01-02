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