import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import SectionHeader from '@/app/components/section_header/section_header';
import ProjectFeatureCard from '@/app/components/project_feature_card/project_feature_card';

function Projects() {
  return (
    <SectionWrapper
      id="section-projects"
      type="secondary"
    >
      <div>
        <SectionHeader
          number={3}
          heading="Some things I've built"
        />

        <ProjectFeatureCard
          name="Swap"
          description={
            <>
              A simple currency converter allowing users to convert between the most popular global currencies, that I
              made as a good showcase project.
              <br/><br/>
              This is an open source, native mobile application, which can be found on <a href="https://github.com/maxhvesser" target="_blank" rel="noopener noreferrer" className="text-curious-blue font-medium underline">Github</a> for both <a href="https://github.com/maxhvesser/swapx-android" target="_blank" rel="noopener noreferrer" className="text-curious-blue font-medium underline">Android</a> and <a href="https://github.com/maxhvesser/swap-ios" target="_blank" rel="noopener noreferrer" className="text-curious-blue font-medium underline">iOS</a> platforms.
            </>
          }
          tags={["Kotlin", "Android", "Swift", "iOS"]}
        />
      </div>
    </SectionWrapper>
  );
}

export default Projects;