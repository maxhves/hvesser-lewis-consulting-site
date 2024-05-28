import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeader, SectionSubheader} from "@/components/ui/header";
import {Link} from "@/components/ui/link";
import {GithubIcon} from "lucide-react";
import GithubLogo from "@/components/icon/social-network-logo/github-logo";
import LinkedinLogo from "@/components/icon/social-network-logo/linkedin-logo";
import TwitterLogo from "@/components/icon/social-network-logo/twitter-logo";
import InstagramLogo from "@/components/icon/social-network-logo/instagram-logo";

//region Entry

export default function ContactSection() {
  return (
    <section className="bg-lavender-900">
      <ContentContainer className="py-16">
        <SectionHeader>
          Contact Me
        </SectionHeader>

        <ContactDescription>
          I am always looking to make new connections and I am always open to hearing about interesting projects.
          Feel free to reach out via the contact form, or email me directly at <Link href="mailto:max@hvesserlewis.com" className="underline">max@hvesserlewis.com</Link>.
        </ContactDescription>

        {/* Contact form */}


        <ContactSocialNetworks>
          <SectionSubheader>
            My social networks
          </SectionSubheader>

          <ContactSocialNetworksList>
            <Link href="https://www.github.com/maxhves" rel="noreferrer" target="_blank">
              <GithubLogo className="size-8 text-neutral-400" />
            </Link>

            <Link href="https://www.linkedin.com/in/maxhves" rel="noreferrer" target="_blank">
              <LinkedinLogo className="size-8 text-neutral-400" />
            </Link>

            <Link href="https://www.twitter.com/maxhves" rel="noreferrer" target="_blank">
              <TwitterLogo className="size-8 text-neutral-400" />
            </Link>

            <Link href="https://www.instagram.com/maxhves" rel="noreferrer" target="_blank">
              <InstagramLogo className="size-8 text-neutral-400" />
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
    <p className="mt-4 text-sm text-neutral-400 whitespace-pre-wrap">
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