"use client";
import React, {useEffect, useState} from 'react';
import {Field, Fieldset} from "@/components/ui/fieldset";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {clsx} from "clsx";
import ContactService from "@/app/data/services/contact_service/ContactService";
import {EmailJSResponseStatus} from "@emailjs/browser";

//region Entry

export default function ContactForm({className}: { className?: string }) {
  const [name, setName] = useState<string>("")
  const [emailAddress, setEmailAddress] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true)

  useEffect(() => {
    setSubmitDisabled(name.trim() === "" || emailAddress.trim() === "" || message.trim() === "")
  }, [name, emailAddress, message])

  function handleGetInTouchClicked() {
    ContactService.sendContactForm(name, message, emailAddress)
      .then((_: EmailJSResponseStatus) => {
        clearFieldset()
      }, (error: EmailJSResponseStatus) => console.log(error))
  }

  function clearFieldset() {
    setName("")
    setEmailAddress("")
    setMessage("")
  }

  return (
    <form className={clsx(className)}>
      <Fieldset className="max-w-xl flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <NameField value={name} onValueChanged={setName} />
          <EmailAddressField value={emailAddress} onValueChanged={setEmailAddress} />
          <MessageField value={message} onValueChanged={setMessage} />
        </div>

        <Button
          color="dark/white"
          disabled={submitDisabled}
          onClick={handleGetInTouchClicked}
        >
          Get in touch
        </Button>
      </Fieldset>
    </form>
  );
}

//endregion

//region Components

function NameField({value, onValueChanged}: { value: string, onValueChanged: (value: string) => void }) {
  return (
    <Field>
      <Input
        name="name"
        placeholder="Name"
        value={value}
        onChange={(e) => onValueChanged(e.target.value)}
      />
    </Field>
  )
}

function EmailAddressField({value, onValueChanged}: { value: string, onValueChanged: (value: string) => void }) {
  return (
    <Field>
      <Input
        name="email_address"
        placeholder="Email address"
        value={value}
        onChange={(e) => onValueChanged(e.target.value)}
      />
    </Field>
  )
}

function MessageField({value, onValueChanged}: { value: string, onValueChanged: (value: string) => void }) {
  return (
    <Field>
      <Textarea
        name="message"
        placeholder="Message"
        rows={6}
        value={value}
        onChange={(e) => onValueChanged(e.target.value)}
      />
    </Field>
  )
}

//endregion