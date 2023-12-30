import React from 'react';
import SectionWrapper from '@/app/components/sectionwrapper/SectionWrapper';

function About() {
  return(
    <SectionWrapper
      type="secondary"
    >
      <div className="space-y-4">
        <p className="font-medium text-cutty-sark text-2xl"><span className="text-jungle-green">01.</span> About me</p>
        <p className="text-cutty-sark text-md lg:text-lg">
          I have been working as a Software Engineer full time for 7 years, and throughout that time I have amassed a
          diverse set of knowledge along with some very keen problem solving skills. Predominantly my experience has
          been with developing native mobile applications, more specifically, Android applications, however I
          additionally have a good and thorough knowledge over the whole stack, including some very keen design skills.
          <br/><br/>
          I love working with meaning projects and seeing the impact that my work has on the users/customers that I have
          worked with.
          <br/><br/>
          Outside of development, I love to keep fit, and I am a very keen traveller. To date, I have visited just over
          twenty countries, and I have lived in four different countries, spanning two continents.
        </p>
      </div>
    </SectionWrapper>
  );
}

export default About;