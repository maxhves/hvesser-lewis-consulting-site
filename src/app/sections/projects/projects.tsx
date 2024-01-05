import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import SectionHeader from '@/app/components/section_header/section_header';

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
      </div>
    </SectionWrapper>
  );
}

export default Projects;