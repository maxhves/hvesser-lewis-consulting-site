import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeading, SectionSubheading} from "@/components/ui/header";
import {Link} from "@/components/ui/link";
import GithubLogo from "@/components/icon/social-network-logo/github-logo";
import LinkedinLogo from "@/components/icon/social-network-logo/linkedin-logo";
import TwitterLogo from "@/components/icon/social-network-logo/twitter-logo";
import InstagramLogo from "@/components/icon/social-network-logo/instagram-logo";
import ContactForm from "@/app/home/components/contact/contact-form";

//region Entry

export default function ContactSection() {
  return (
    <section className="bg-stone-100 scroll-mt-14">
      <ContentContainer className="py-16">
        <SectionHeading>
          Contact Me
        </SectionHeading>

        <ContactDescription>
          I am seeking new projects to get involved with and am available for a variety of consulting services. Feel
          free to reach out through the contact form or email me directly at <Link href="mailto:max@hvesserlewis.com" className="underline font-medium">max@hvesserlewis.com</Link>.
        </ContactDescription>

        <ContactForm className="mt-10" />

        <ContactSocialNetworks>
          <SectionSubheading>
            My social networks
          </SectionSubheading>

          <ContactSocialNetworksList>
            <Link href="https://www.github.com/maxhves" rel="noreferrer" target="_blank">
              <GithubLogo className="size-8 text-stone-700" />
            </Link>

            <Link href="https://www.linkedin.com/in/maxhves" rel="noreferrer" target="_blank">
              <LinkedinLogo className="size-8 text-stone-700" />
            </Link>

            <Link href="https://www.twitter.com/maxhves" rel="noreferrer" target="_blank">
              <TwitterLogo className="size-8 text-stone-700" />
            </Link>

            <Link href="https://www.instagram.com/maxhves" rel="noreferrer" target="_blank">
              <InstagramLogo className="size-8 text-stone-700" />
            </Link>
          </ContactSocialNetworksList>
        </ContactSocialNetworks>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Description

function ContactDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-sm font-normal text-stone-700 whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion

//region Social networks

function ContactSocialNetworks({children}: { children: React.ReactNode }) {
  return (
    <div className="mt-16 space-y-4">
      {children}
    </div>
  )
}

function ContactSocialNetworksList({children}: { children: React.ReactNode }) {
  return (
    <div className="flex space-x-8">
      {children}
    </div>
  )
}

//endregion