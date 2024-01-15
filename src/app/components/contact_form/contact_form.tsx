'use client';
import React, {useEffect, useState} from 'react';
import ContactService from '@/app/data/services/contact_service/ContactService';
import {EmailJSResponseStatus} from "@emailjs/browser";

function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fromName, setFromName] = useState('');
  const [message, setMessage] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [showInputErrors, setShowInputErrors] = useState(false);

  useEffect(() => {
    setShowInputErrors(false);
  }, [fromName, message, contactEmail]);

  function submitContactForm() {
    setShowInputErrors(true);

    if (fromName && message && contactEmail) {
      ContactService.sendContactForm(fromName, message, contactEmail)
        .then((_: EmailJSResponseStatus) => {
          setFromName('');
          setMessage('');
          setContactEmail('');
          setShowInputErrors(false);
          setFormSubmitted(true);
        }, (error: EmailJSResponseStatus) => {
          // For now, log the error, and don't update the form as sent.
          console.log(error);
        });
    }
  }

  return (
    <form className="w-full md:w-1/2 space-y-4 text-cutty-sark dark:text-aths-special">
      {/* Inputs */}
      <div className="space-y-2">
        {/* Name input */}
        <input
          name="from_name"
          className={`w-full h-16 bg-old-lace dark:bg-tiber ${!fromName && showInputErrors ? "border-punch border-opacity-50 focus:border-opacity-75" : "border-daintree border-opacity-10 focus:border-opacity-25 dark:border-old-lace dark:border-opacity-10 focus:dark:border-opacity-40"} border-2 rounded-xl p-4 focus:outline-none`}
          placeholder="Your name"
          value={fromName}
          onChange={(event) => setFromName(event.target.value)}
        />

        {/* Email input */}
        <input
          name="contact_email"
          className={`w-full h-16 bg-old-lace dark:bg-tiber ${!contactEmail && showInputErrors ? "border-punch border-opacity-50 focus:border-opacity-75" : "border-daintree border-opacity-10 focus:border-opacity-25 dark:border-old-lace dark:border-opacity-10 focus:dark:border-opacity-40"} border-2 rounded-xl p-4 focus:outline-none`}
          placeholder="Your email address"
          value={contactEmail}
          onChange={(event) => setContactEmail(event.target.value)}
        />

        {/* Message input */}
        <textarea
          name="message"
          className={`w-full h-48 bg-old-lace dark:bg-tiber ${!message && showInputErrors ? "border-punch border-opacity-50 focus:border-opacity-75" : "border-daintree border-opacity-10 focus:border-opacity-25 dark:border-old-lace dark:border-opacity-10 focus:dark:border-opacity-40"} border-2 rounded-xl p-4 focus:outline-none`}
          placeholder="Your message"
          value={message}
          maxLength={250}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-jungle-green py-4 px-6 rounded-xl text-old-lace dark:text-daintree w-full md:w-fit hover:shadow-md transition-all hover:bg-opacity-90 dark:hover:bg-opacity-90"
          onClick={submitContactForm}
        >
          {formSubmitted ? 'Message sent!' : 'Get in touch'}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;