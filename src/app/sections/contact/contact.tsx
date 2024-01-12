import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import SectionHeader from '@/app/components/section_header/section_header';

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
            I am always on the lookout to connect, and take part in interesting projects, so feel free to fill out
            the contact form.
          </p>
          <p className="text-cutty-sark dark:text-aths-special font-medium mt-8">
            Email me directly
          </p>
          <p className="text-curious-blue font-light underline mt-4">
            max@hvesserlewis.com
          </p>
        </div>

        {/* Contact form */}
        <div className="w-full md:w-1/2 space-y-2 text-cutty-sark dark:text-aths-special">
          <input
            className="w-full h-16 bg-old-lace dark:bg-tiber border-daintree dark:border-old-lace border-opacity-10 focus:border-opacity-25 dark:border-opacity-10 focus:dark:border-opacity-40 border-2 rounded-xl p-4 focus:outline-none"
            placeholder="Your name"
          />
          <input
            className="w-full h-16 bg-old-lace dark:bg-tiber border-daintree dark:border-old-lace border-opacity-10 focus:border-opacity-25 dark:border-opacity-10 focus:dark:border-opacity-40 border-2 rounded-xl p-4 focus:outline-none"
            placeholder="Your email address"
          />
          <textarea
            className="w-full h-48 bg-old-lace dark:bg-tiber border-daintree dark:border-old-lace border-opacity-10 focus:border-opacity-25 dark:border-opacity-10 focus:dark:border-opacity-40 border-2 rounded-xl p-4 focus:outline-none"
            placeholder="Your message"
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-jungle-green py-4 px-6 rounded-xl text-old-lace dark:text-daintree active:bg-tiber w-full md:w-fit border-daintree dark:border-old-lace border-opacity-10 dark:border-opacity-10 border-2"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;