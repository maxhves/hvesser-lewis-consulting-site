import React from 'react'
import ContentContainer from '@/components/ui/content-container'
import { Button } from '@/components/ui/button'
import { clsx } from 'clsx'
import { dmSans } from '@/app/fonts/fonts'

//region Entry

export default function ContactSection() {
  return (
    <section className="scroll-mt-14 bg-emerald-500">
      <ContentContainer className="py-14">
        <Body>
          <PromoText>
            Discover how I can help elevate your digital presence with a results-driven solution tailored to your needs
          </PromoText>
          <ContactButton>Contact Me</ContactButton>
        </Body>
      </ContentContainer>
    </section>
  )
}

//endregion

//region Container

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:gap-16 sm:text-start">{children}</div>
  )
}

//endregion

//region Text

function PromoText({ children }: { children: React.ReactNode }) {
  return <h1 className={clsx(dmSans.className, 'flex-1 text-2xl font-medium text-neutral-50')}>{children}</h1>
}

//endregion

//region Contact Button

function ContactButton({ children }: { children: React.ReactNode }) {
  return <Button href="/contact">{children}</Button>
}

//endregion
