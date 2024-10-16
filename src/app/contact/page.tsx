import React from 'react'
import ContentContainer from "@/components/ui/content-container";
import {Input} from "@/components/ui/input-new";
import {Textarea} from "@/components/ui/textarea-new";
import {BaseButton} from "@/components/ui/button-new";
import {SectionHeading, SectionSubheading} from "@/components/ui/header";
import Link from "next/link";

//region Entry

export default function Contact() {
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
        <Input
          className="mt-16"
          placeholder="Name"
        />
        <Input
          className="mt-4"
          placeholder="Email address"
        />
        <Textarea
          className="mt-4"
          placeholder="Message"
          rows={6}
        />
        <BaseButton className="mt-8">
          Submit
        </BaseButton>
      </ContentContainer>
    </main>
  )
}

//endregion