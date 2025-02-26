import React from 'react'
import HomeNavLink from '@/app/home/data/navigation/home-nav-link'
import ContentContainer from '@/components/ui/content-container'
import SectionBadge from '@/components/ui/section-badge'
import { PageDescription, PageHeading } from '@/components/ui/header'
import { Body } from '@/components/ui/body'
import { clsx } from 'clsx'
import { outfit } from '@/app/fonts'
import { Link } from '@/components/ui/link'
import Image, { StaticImageData } from 'next/image'

import mobileDevelopmentImage from '../../../../../public/images/services/mobile-development-service.webp'
import webDevelopmentImage from '../../../../../public/images/services/web-development-service.webp'
import apiDatabaseDesignImage from '../../../../../public/images/services/api-database-service.webp'

//region Model

const services = [
  {
    heading: 'Mobile Development',
    description:
      'Native mobile application development for Android using Kotlin & Java, and for iOS using Swift & Objective-C.',
    image: mobileDevelopmentImage,
  },
  {
    heading: 'Web Development',
    description:
      'Back end development with Kotlin & Java. Front end development with React using JavaScript & TypeScript.',
    image: webDevelopmentImage,
  },
  {
    heading: 'API & Database Design',
    description:
      'REST API design and integration. Database design and development using Postgres, MySQL, SQL & MongoDB.',
    image: apiDatabaseDesignImage,
  },
]

//endregion

//region Main Component

export default function ServicesSection() {
  return (
    <section id={HomeNavLink.Services.id} className="scroll-mt-14 bg-neutral-200/50">
      <ContentContainer className="py-16">
        <SectionBadge>Services</SectionBadge>
        <PageHeading className="mt-1">My Expertise</PageHeading>
        <PageDescription className="mt-4">
          I specialize in native mobile app development, backend and frontend web applications, and integration with
          APIs and databases. Essentially covering the entire stack.
        </PageDescription>
        <ServicesList>
          {services.map((service) => (
            <ServiceCard key={service.heading}>
              <ServiceCardImageHeader image={service.image} />
              <ServiceCardBody>
                <ServiceCardHeading>{service.heading}</ServiceCardHeading>
                <ServiceCardDescription>{service.description}</ServiceCardDescription>
              </ServiceCardBody>
            </ServiceCard>
          ))}
        </ServicesList>
        <Body>
          I provide a full range of consultancy services, including detailed estimations and budgeting, end-to-end
          product development for websites and mobile applications, and ongoing post-launch support.{' '}
          <Link className="text-emerald-600 hover:text-emerald-800" href="/contact">
            Contact me
          </Link>{' '}
          to discover how I can help your business.
        </Body>
      </ContentContainer>
    </section>
  )
}

//endregion

//region Service Card

function ServicesList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="my-16 flex h-full list-none flex-col gap-8 sm:flex-row" role="list">
      {children}
    </ol>
  )
}

function ServiceCard({ children }: { children: React.ReactNode }) {
  return <li className="flex flex-1 flex-col">{children}</li>
}

function ServiceCardImageHeader({ image }: { image: StaticImageData }) {
  return (
    <Image
      className="h-20 w-full bg-neutral-200 object-cover"
      src={image}
      alt="Service Image"
      placeholder="blur"
      loading="lazy"
    />
  )
}

function ServiceCardBody({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 bg-neutral-50 p-8">{children}</div>
}

function ServiceCardHeading({ children }: { children: React.ReactNode }) {
  return <h1 className={clsx(outfit.className, 'text-base font-medium text-emerald-600')}>{children}</h1>
}

function ServiceCardDescription({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm leading-6 text-neutral-700">{children}</p>
}

//endregion
