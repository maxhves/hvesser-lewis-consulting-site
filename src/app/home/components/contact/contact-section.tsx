import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {AccentButton} from "@/components/ui/button-new";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";

//region Entry

export default function ContactSection() {
  return (
    <section className="bg-emerald-500 scroll-mt-14">
      <ContentContainer className="py-14">
        <Body>
          <PromoText>
            Discover how I can help elevate your digital presence with a results-driven solution tailored to your needs
          </PromoText>
          <ContactButton>
            Contact Me
          </ContactButton>
        </Body>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Container

function Body({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-8 sm:gap-16">
      {children}
    </div>
  )
}

//endregion

//region Text

function PromoText({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "flex-1 font-medium text-2xl text-neutral-50")}>
      {children}
    </h1>
  )
}

//endregion

//region Contact Button

function ContactButton({children}: { children: React.ReactNode }) {
  return (
    <AccentButton href="/contact">
      {children}
    </AccentButton>
  )
}

//endregion