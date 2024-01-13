'use client';
import React, {useState} from 'react';
import ContactService from '@/app/data/services/contact_service/ContactService';

function ContactForm() {
  function testSendForm() {
    ContactService.sendContactForm({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <div className="w-full md:w-1/2 space-y-4 text-cutty-sark dark:text-aths-special">
      {/* Inputs */}
      <div className="space-y-2">
        {/* Name input */}
        <input
          className="w-full h-16 bg-old-lace dark:bg-tiber border-daintree dark:border-old-lace border-opacity-10 focus:border-opacity-25 dark:border-opacity-10 focus:dark:border-opacity-40 border-2 rounded-xl p-4 focus:outline-none"
          placeholder="Your name"
        />

        {/* Email input */}
        <input
          className="w-full h-16 bg-old-lace dark:bg-tiber border-daintree dark:border-old-lace border-opacity-10 focus:border-opacity-25 dark:border-opacity-10 focus:dark:border-opacity-40 border-2 rounded-xl p-4 focus:outline-none"
          placeholder="Your email address"
        />

        {/* Message input */}
        <textarea
          className="w-full h-48 bg-old-lace dark:bg-tiber border-daintree dark:border-old-lace border-opacity-10 focus:border-opacity-25 dark:border-opacity-10 focus:dark:border-opacity-40 border-2 rounded-xl p-4 focus:outline-none"
          placeholder="Your message"
          maxLength={250}
        />
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-jungle-green py-4 px-6 rounded-xl text-old-lace dark:text-daintree w-full md:w-fit hover:shadow-md transition-all hover:bg-opacity-90 dark:hover:bg-opacity-90"
        >
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default ContactForm;