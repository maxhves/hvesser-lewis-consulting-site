import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import SectionHeader from '@/app/components/section_header/section_header';
import ProjectFeatureCard from '@/app/components/project_card/project_feature_card/project_feature_card';
import ProjectCard from '@/app/components/project_card/project_card';

function Projects() {
  return (
    <SectionWrapper
      id="section-projects"
      type="secondary"
    >
      <div className="flex flex-col">
        {/* Heading */}
        <SectionHeader
          number={3}
          heading="Some things I've built"
        />

        {/* Top project feature card */}
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
          promoImageUrl="/project_images/promo_swapx.png"
        />

        {/* Other noteworthy projects */}
        <p className="text-cutty-sark dark:text-aths-special font-medium mt-16 mb-10">Other noteworthy projects</p>
        <div className="flex flex-col md:flex-row space-y-4 space-x-0 md:space-x-4 md:space-y-0">
          {/* Project one */}
          <ProjectCard
            className="w-full md:w-1/3"
            name="Project one"
            description="This is a description of project one, it might say something good, or it might say something not so good."
            url="https://hvesserlewis.com"
            tags={["Android", "Kotlin"]}
          />

          {/* Project two */}
          <ProjectCard
            className="w-full md:w-1/3"
            name="Project two"
            description="This is a description of project two, it might say something good, or it might say something not so good."
            url="https://hvesserlewis.com"
            tags={["Android", "Kotlin"]}
          />

          {/* Project three */}
          <ProjectCard
            className="w-full md:w-1/3"
            name="Project three"
            description="This is a description of project three, it might say something good, or it might say something not so good."
            url="https://hvesserlewis.com"
            tags={["Android", "Kotlin"]}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Projects;