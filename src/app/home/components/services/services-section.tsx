import React from 'react'
import HomeNavLink from "@/app/home/data/navigation/home-nav-link";
import ContentContainer from "@/components/ui/content-container";
import SectionBadge from "@/components/ui/section-badge";
import {SectionHeading, SectionSubheading} from "@/components/ui/header";
import {Body} from "@/components/ui/body";
import {DatabaseZapIcon, LaptopMinimalIcon, TabletSmartphoneIcon} from "lucide-react";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";

//region Model

const services = [
  {
    icon: TabletSmartphoneIcon,
    heading: "Mobile Development",
    description: "Native mobile application development for Android using Kotlin & Java, and for iOS using Swift & Objective-C."
  },
  {
    icon: LaptopMinimalIcon,
    heading: "Web Development",
    description: "Back end development with Kotlin & Java. Front end development with React using JavaScript & TypeScript."
  },
  {
    icon: DatabaseZapIcon,
    heading: "API & Database Design",
    description: "REST API design and integration. Database design and development using Postgres, MySQL, SQL & MongoDB."
  }
]

//endregion

//region Main Component

export default function ServicesSection() {
  return (
    <section id={HomeNavLink.Services.id} className="bg-slate-50 scroll-mt-14">
      <ContentContainer className="py-16">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>
            Services
          </SectionBadge>
          <SectionHeading className="pt-4">
            What I Offer
          </SectionHeading>
          <SectionSubheading className="mt-8 px-8">
            I specialize in native mobile app development, backend and frontend web applications, and integration with
            APIs and databases. Essentially covering the entire stack.
          </SectionSubheading>
          <ServicesList>
            {services.map(service => (
              <ServiceCard key={service.heading}>
                <ServiceCardIcon>
                  <service.icon className="text-slate-50" />
                </ServiceCardIcon>
                <ServiceCardHeading>
                  {service.heading}
                </ServiceCardHeading>
                <ServiceCardDescription>
                  {service.description}
                </ServiceCardDescription>
              </ServiceCard>
            ))}
          </ServicesList>
          <Body className="px-8">
            I provide a full range of consultancy services, including detailed estimations and budgeting, end-to-end
            product development for websites and mobile applications, and ongoing post-launch support. Contact me to
            discover how I can help your business.
          </Body>
        </div>
      </ContentContainer>
    </section>
  )
}

//endregion

//region Service Card

function ServicesList({children}: { children: React.ReactNode }) {
  return (
    <ol
      className="w-full flex list-none py-16 gap-x-8"
      role="list"
    >
      {children}
    </ol>
  )
}

function ServiceCard({children}: { children: React.ReactNode }) {
  return (
    <li className="flex-1">
      <div className="h-full p-8 rounded-3xl bg-white text-start">
        {children}
      </div>
    </li>
  )
}

function ServiceCardIcon({children}: { children: React.ReactNode }) {
  return (
    <div className="flex size-10 rounded-lg bg-blue-600 justify-center items-center">
      {children}
    </div>
  )
}

function ServiceCardHeading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "mt-6 text-base leading-7 text-blue-950 font-semibold")}>
      {children}
    </h1>
  )
}

function ServiceCardDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-slate-700 text-sm leading-6">
      {children}
    </p>
  )
}

//endregion