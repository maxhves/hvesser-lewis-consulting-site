'use client'
import React, {useEffect, useState} from 'react'
import ContentContainer from "@/components/ui/content-container";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {SectionHeading, SectionSubheading} from "@/components/ui/header";
import Link from "next/link";
import {ContactService} from "@/app/data/services/contact_service/ContactService";
import {EmailJSResponseStatus} from "@emailjs/browser";

//region Entry

export default function Contact() {
  const [name, setName] = useState<string>("")
  const [emailAddress, setEmailAddress] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true)

  useEffect(() => {
    if (name.trim() !== "" && emailAddress.trim() !== "" && message.trim() !== "") {
      setSubmitDisabled(false)
    }
  }, [name, emailAddress, message])

  async function onFormSubmit() {
    setSubmitDisabled(true)

    ContactService.sendContactForm(name, emailAddress, message).then((_: EmailJSResponseStatus) => {
      setName("")
      setEmailAddress("")
      setMessage("")
    }, (error: EmailJSResponseStatus) => {
      console.log("An error occurred when submitting the form: ", error)
      setSubmitDisabled(false)
    })
  }

  return (
    <main className="flex-grow">
      <ContentContainer className="py-8 sm:py-24">
        <SectionHeading>
          Contact Me
        </SectionHeading>
        <SectionSubheading className="mt-4">
          Feel free to use the form below to send a message, ask a question, or get in touch with me for any reason.
          If you prefer a more direct approach, you’re welcome to reach out via email at{" "}
          <Link className="text-emerald-600 hover:text-emerald-800" href="mailto:max@hvesserlewis.com">max@hvesserlewis.com</Link>.
        </SectionSubheading>
        <form className="flex flex-col">
          <Input
            name="name"
            className="mt-16"
            type="text"
            required={true}
            placeholder="Name"
            autoComplete="off"
            value={name}
            onChange={(e => setName(e.target.value))}
          />
          <Input
            name="emailAddress"
            className="mt-4"
            type="email"
            required={true}
            placeholder="Email address"
            autoComplete="off"
            value={emailAddress}
            onChange={e => setEmailAddress(e.target.value)}
          />
          <Textarea
            name="message"
            className="mt-4"
            required={true}
            placeholder="Message"
            autoComplete="off"
            rows={6}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <Button
            className="mt-8"
            type="button"
            disabled={submitDisabled}
            onClick={onFormSubmit}
          >
            Submit
          </Button>
        </form>
      </ContentContainer>
    </main>
  )
}

//endregion