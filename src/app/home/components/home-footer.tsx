import React from 'react';
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import ContentContainer from "@/components/ui/content-container";
import {Link} from "@/components/ui/link";

//region Model

const contactLinks = [
  {
    label: "Auckland, New Zealand",
    href: ""
  },
  {
    label: "max@hvesserlewis.com",
    href: "mailto:max@hvesserlewis.com"
  },
  {
    label: "+66 615 987 642",
    href: "tel:+66-615-987-642"
  }
]

const whatIDoLinks = [
  {
    label: "About",
    href: "/#about"
  },
  {
    label: "Services",
    href: "/#services"
  },
  {
    label: "Portfolio",
    href: "/#portfolio"
  },
  {
    label: "Blog",
    href: "/blog"
  }
]

//endregion

//region Entry

export default function HomeFooter() {
  return (
    <footer className="bg-blue-900">
      <ContentContainer className="py-16">
        <div className="flex gap-x-16">
          <MotivationalQuote>
            Is today day one, or will you let it remain just one day
          </MotivationalQuote>
          <SiteLinks>
            <SiteLinksSection>
              <SiteLinksSectionHeading>
                Contact
              </SiteLinksSectionHeading>
              <SiteLinksSectionItems>
                {contactLinks.map(link => (
                  <SiteLinksSectionItem key={link.label} href={link.href}>
                    {link.label}
                  </SiteLinksSectionItem>
                ))}
              </SiteLinksSectionItems>
            </SiteLinksSection>
            <SiteLinksSection>
              <SiteLinksSectionHeading>
                What I Do
              </SiteLinksSectionHeading>
              <SiteLinksSectionItems>
                {whatIDoLinks.map(link => (
                  <SiteLinksSectionItem key={link.label} href={link.href}>
                    {link.label}
                  </SiteLinksSectionItem>
                ))}
              </SiteLinksSectionItems>
            </SiteLinksSection>
          </SiteLinks>
        </div>
        <AccentDivider />
        <Copyright>
          Copyright © 2024, Hvesser-Lewis Consulting
        </Copyright>
      </ContentContainer>
    </footer>
  );
}

//endregion

//region Text

function MotivationalQuote({children}: { children: React.ReactNode }) {
  return (
    <p className={clsx(outfit.className, "flex-1 text-slate-50 font-medium text-2xl")}>
      {children}
    </p>
  )
}

function Copyright({children}: { children: React.ReactNode }) {
  return (
    <p className="w-full text-center text-sm text-slate-50">
      {children}
    </p>
  )
}

//endregion

//region Site Links

function SiteLinks({children}: { children: React.ReactNode }) {
  return (
    <div className="flex gap-x-16">
      {children}
    </div>
  )
}

function SiteLinksSection({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

function SiteLinksSectionHeading({children}: { children: React.ReactNode }) {
  return (
    <h1 className="text-slate-50 font-semibold text-base">
      {children}
    </h1>
  )
}

function SiteLinksSectionItems({children}: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2 mt-4">
      {children}
    </ul>
  )
}

function SiteLinksSectionItem({href, children}: { href: string, children: React.ReactNode }) {
  return (
    <li className="text-slate-200 text-sm font-normal">
      <Link href={href}>
        {children}
      </Link>
    </li>
  )
}

//endregion

//region Divider

function AccentDivider() {
  return (
    <hr role="presentation" className="my-8 w-full border-t border-slate-50/10" />
  )
}

//endregion