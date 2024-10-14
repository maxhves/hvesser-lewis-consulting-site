import React from 'react'
import HomeNavLink from "@/app/home/data/navigation/home-nav-link";
import ContentContainer from "@/components/ui/content-container";
import SectionBadge from "@/components/ui/section-badge";
import {SectionHeading, SectionSubheading} from "@/components/ui/header";
import {Body} from "@/components/ui/body";
import {DatabaseZapIcon, LaptopMinimalIcon, TabletSmartphoneIcon} from "lucide-react";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import {Link} from "@/components/ui/link";
import Image, {StaticImageData} from "next/image";

import mobileDevelopmentImage from "../../../../../public/images/services/mobile-development-service.png"
import webDevelopmentImage from "../../../../../public/images/services/web-development-service.png"
import apiDatabaseDesignImage from "../../../../../public/images/services/api-database-service.png"

//region Model

const services = [
  {
    icon: TabletSmartphoneIcon,
    heading: "Mobile Development",
    description: "Native mobile application development for Android using Kotlin & Java, and for iOS using Swift & Objective-C.",
    image: mobileDevelopmentImage
  },
  {
    icon: LaptopMinimalIcon,
    heading: "Web Development",
    description: "Back end development with Kotlin & Java. Front end development with React using JavaScript & TypeScript.",
    image: webDevelopmentImage
  },
  {
    icon: DatabaseZapIcon,
    heading: "API & Database Design",
    description: "REST API design and integration. Database design and development using Postgres, MySQL, SQL & MongoDB.",
    image: apiDatabaseDesignImage
  }
]

//endregion

//region Main Component

export default function ServicesSection() {
  return (
    <section id={HomeNavLink.Services.id} className="bg-neutral-200/50 scroll-mt-14">
      <ContentContainer className="py-16">
          <SectionBadge>
            Services
          </SectionBadge>
          <SectionHeading className="mt-1">
            My Expertise
          </SectionHeading>
          <SectionSubheading className="mt-4">
            I specialize in native mobile app development, backend and frontend web applications, and integration with
            APIs and databases. Essentially covering the entire stack.
          </SectionSubheading>
          <ServicesList>
            {services.map(service => (
              <ServiceCard key={service.heading}>
                <ServiceCardImageHeader image={service.image} />
                <ServiceCardBody>
                <ServiceCardHeading>
                  {service.heading}
                </ServiceCardHeading>
                <ServiceCardDescription>
                  {service.description}
                </ServiceCardDescription>
                </ServiceCardBody>
              </ServiceCard>
            ))}
          </ServicesList>
          <Body>
            I provide a full range of consultancy services, including detailed estimations and budgeting, end-to-end
            product development for websites and mobile applications, and ongoing post-launch support.{" "}
            <Link className="text-emerald-600 hover:text-emerald-800" href="/contact">Contact me</Link> to discover how I can help your
            business.
          </Body>
      </ContentContainer>
    </section>
  )
}

//endregion

//region Service Card

function ServicesList({children}: { children: React.ReactNode }) {
  return (
    <ol
      className="h-full flex flex-col sm:flex-row list-none my-16 gap-8"
      role="list"
    >
      {children}
    </ol>
  )
}

function ServiceCard({children}: { children: React.ReactNode }) {
  return (
    <li className="flex-1 flex flex-col">
      {children}
    </li>
  )
}

function ServiceCardImageHeader({image}: { image: StaticImageData }) {
  return (
    <Image
      className="w-full h-20 bg-neutral-200 object-cover"
      src={image}
      alt="Service Image"
      placeholder="blur"
    />
  )
}

function ServiceCardBody({children}: { children: React.ReactNode }) {
  return (
    <div className="p-8 bg-neutral-50 flex-1">
      {children}
    </div>
  )
}

function ServiceCardHeading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "text-base text-emerald-600 font-medium")}>
      {children}
    </h1>
  )
}

function ServiceCardDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-neutral-700 text-sm leading-6">
      {children}
    </p>
  )
}

//endregion