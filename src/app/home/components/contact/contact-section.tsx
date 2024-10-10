import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeading, SectionSubheading} from "@/components/ui/header";
import {AccentButton} from "@/components/ui/button-new";
import {MoveRightIcon} from "lucide-react";

//region Entry

export default function ContactSection() {
  return (
    <section className="bg-blue-600 scroll-mt-14">
      <ContentContainer className="py-16">
        <div className="flex flex-col items-center text-center">
          <SectionHeading className="text-slate-50">
            Get In Touch
          </SectionHeading>
          <SectionSubheading className="mt-8 px-8 text-white/75">
            Discover how I can help elevate your business and expand your digital presence with a fully customized,
            results-driven solution tailored to your needs. Reach out today to request a detailed quote and explore the
            possibilities.
          </SectionSubheading>
          <ContactButton>
            Contact <MoveRightIcon />
          </ContactButton>
        </div>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Contact Button

function ContactButton({children}: { children: React.ReactNode }) {
  return (
    <AccentButton className="mt-8 flex gap-x-2" href="/contact">
      {children}
    </AccentButton>
  )
}

//endregion