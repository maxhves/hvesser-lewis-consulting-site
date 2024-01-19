import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import SectionHeader from '@/app/components/section_header/section_header';

function About() {
  return(
    <SectionWrapper id="section-about" type="secondary">
      {/* Heading */}
      <SectionHeader
        number={1}
        heading="About me"
      />

      <div className="space-y-6">
        {/* Main text */}
        <p className="text-cutty-sark dark:text-aths-special text-sm">
          I love to build solutions to problems and as a very observant person, I am always able to create detailed
          and intuitive solutions that truly cater to the needs of the user.
          <br/><br/>
          I have been working as a Software Engineer in a professional capacity for 8 years, and throughout that time
          I have amassed a diverse set of technical skills.

          <br/><br/>
          Predominantly my experience has been in the realm of native mobile applications, more specifically, Android
          applications, however through my own interest and personal projects, I have gained experience in creating
          solutions that span the entire full stack.
          <br/><br/>
          Seeing the impact of the work that I do is a great motivator for me, and I thoroughly enjoy receiving feedback
          from customers that help to grow and improve the product. Working with meaningful and impactful projects is
          something that I am always on the lookout for.
          <br/><br/>
          Outside of development, I love to keep fit, and I am a very keen traveller. To date, I have visited just over
          twenty countries, living in four of them.
        </p>

        {/* Technologies list */}
        <p className="font-medium text-tiber dark:text-old-lace">Technologies I&apos;m passionate about</p>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-16 text-cutty-sark dark:text-aths-special text-sm">
          {/* Languages */}
          <div>
            <ul>
              <li>&gt; Kotlin</li>
              <li>&gt; Java</li>
              <li>&gt; TypeScript</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <ul>
              <li>&gt; Android</li>
              <li>&gt; ReactJS</li>
              <li>&gt; NextJS</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <ul>
              <li>&gt; Git</li>
              <li>&gt; Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;