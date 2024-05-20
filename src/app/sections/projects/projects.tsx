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
              A currency converter allowing users to convert between the most popular global currencies, featuring an
              intuitive and easy to use UX.
              <br/><br/>
              This is an open source, native mobile application, which can be found on <a href="https://github.com/maxhves" target="_blank" rel="noopener noreferrer" className="text-curious-blue font-medium underline">Github</a> for both <a href="https://github.com/maxhves/swapx-android" target="_blank" rel="noopener noreferrer" className="text-curious-blue font-medium underline">Android</a> and <a href="https://github.com/maxhves/swap-ios" target="_blank" rel="noopener noreferrer" className="text-curious-blue font-medium underline">iOS</a> platforms.
            </>
          }
          tags={["Kotlin", "Android", "Swift", "iOS"]}
          promoImageUrl="/project_images/promo_swapx.png"
        />

        {/* Other noteworthy projects */}
        <p className="text-tiber dark:text-old-lace font-medium mt-16 mb-10">Other noteworthy projects</p>
        <div className="flex flex-col md:flex-row space-y-4 space-x-0 md:space-x-4 md:space-y-0">
          {/* Project one */}
          <ProjectCard
            className="w-full md:w-1/2"
            name="Showroom"
            description="An image gallery library built for Android, featuring a single view component with minimal configuration and setup."
            url="https://github.com/maxhves/showroom"
            tags={["Android", "Kotlin"]}
          />

          {/* Project two */}
          <ProjectCard
            className="w-full md:w-1/2"
            name="MHL Site"
            description="This website, my personal portfolio to give some information about myself and the projects that I have been working on."
            url="https://github.com/maxhves/mhl-site"
            tags={["ReactJS", "NextJS"]}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Projects;