'use client';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import ContactService from '@/app/data/services/contact_service/ContactService';
import {EmailJSResponseStatus} from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    message: '',
    contact_email: ''
  })

  async function submitContactForm() {
    ContactService.sendContactForm(formData.from_name, formData.message, formData.contact_email)
      .then((result: EmailJSResponseStatus) => {
        console.log(result);
      }, (error: EmailJSResponseStatus) => {
        console.log(error);
      });
  }

  function handleFormChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <form className="w-full md:w-1/2 space-y-4 text-cutty-sark dark:text-aths-special">
      {/* Inputs */}
      <div className="space-y-2">
        {/* Name input */}
        <input
          name="from_name"
          className="w-full h-16 bg-old-lace dark:bg-tiber border-daintree dark:border-old-lace border-opacity-10 focus:border-opacity-25 dark:border-opacity-10 focus:dark:border-opacity-40 border-2 rounded-xl p-4 focus:outline-none"
          placeholder="Your name"
          onChange={handleFormChange}
        />

        {/* Email input */}
        <input
          name="contact_email"
          className="w-full h-16 bg-old-lace dark:bg-tiber border-daintree dark:border-old-lace border-opacity-10 focus:border-opacity-25 dark:border-opacity-10 focus:dark:border-opacity-40 border-2 rounded-xl p-4 focus:outline-none"
          placeholder="Your email address"
          onChange={handleFormChange}
        />

        {/* Message input */}
        <textarea
          name="message"
          className="w-full h-48 bg-old-lace dark:bg-tiber border-daintree dark:border-old-lace border-opacity-10 focus:border-opacity-25 dark:border-opacity-10 focus:dark:border-opacity-40 border-2 rounded-xl p-4 focus:outline-none"
          placeholder="Your message"
          maxLength={250}
          onChange={handleFormChange}
        />
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-jungle-green py-4 px-6 rounded-xl text-old-lace dark:text-daintree w-full md:w-fit hover:shadow-md transition-all hover:bg-opacity-90 dark:hover:bg-opacity-90"
          onClick={submitContactForm}
        >
          Get in touch
        </button>
      </div>
    </form>
  );
}

export default ContactForm;