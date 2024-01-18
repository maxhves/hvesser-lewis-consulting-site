import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import SectionHeader from '@/app/components/section_header/section_header';
import ContactForm from '@/app/components/contact_form/contact_form';

function Contact() {
  return (
    <SectionWrapper
      id="section-contact"
      type="secondary"
    >
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-12 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2">
          <SectionHeader
            number={4}
            heading="Contact me"
          />

          {/* Texts */}
          <p className="text-cutty-sark dark:text-aths-special font-light">
            I am always on the lookout to connect, and take part in interesting projects, so please do reach out.
          </p>
          <p className="text-cutty-sark dark:text-aths-special font-medium mt-8">
            Email me directly
          </p>
          <p className="text-curious-blue font-light underline mt-4">
            max@hvesserlewis.com
          </p>
        </div>

        {/* Contact form */}
        <ContactForm/>
      </div>
    </SectionWrapper>
  );
}

export default Contact;