import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeading, SectionSubheading} from "@/components/ui/header";
import SectionBadge from "@/components/ui/section-badge";
import {ExternalLink, Link} from "@/components/ui/link";
import {ExternalLinkIcon} from "lucide-react";
import {clsx} from "clsx";
import {outfit} from "@/app/fonts";
import {PrimaryButton} from "@/components/ui/button-new";
import HomeNavLink from "@/app/home/data/navigation/home-nav-link";

//region Model

const recentProjects = [
  {
    title: "Temperature Check",
    description: "This front-end web application helps users determine whether their current body temperature might be considered a fever.\n\nDesigned with a clean and minimal aesthetic, the website ensures users can easily input their temperature and receive a quick, clear result.",
    href: "https://www.temperature-check.com",
    imageSource: "temperature-check.png"
  },
  {
    title: "Crime Connoisseur",
    description: "A podcast discovery platform and player designed to showcase lesser-known true crime podcasts, helping them reach a broader audience.\n\nThe website features a dark, sleek aesthetic and a fully custom podcast client that is both responsive and highly performant.",
    href: "https://www.crimeconnoisseur.com",
    imageSource: "crime-connoisseur.png"
  },
  {
    title: "Visa Match",
    description: "An intuitive website providing informational guides to those considering to pursue experience working abroad.\n\nUsers are informed about what visa options are potentially available to them with each guide providing an overview of the requirements, alongside positive and negative considerations.",
    href: "https://www.visamatch.co",
    imageSource: "visa-match.png"
  }
]

//endregion

//region Entry

export default function ProjectsSection() {
  return (
    <section id={HomeNavLink.Portfolio.id} className="bg-slate-50 scroll-mt-14">
      <ContentContainer className="py-16">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>
            Portfolio
          </SectionBadge>
          <SectionHeading className="mt-4">
            Projects I’ve Worked On Recently
          </SectionHeading>
          <SectionSubheading className="mt-8">
            Take a look at some of the recent projects I’ve been working on, and for a deeper technical dive, explore my
            open-source contributions on <ExternalLink href="https://www.github.com/maxhves">Github</ExternalLink>.
          </SectionSubheading>
          <RecentProjectsList>
            {recentProjects.map(project => (
              <RecentProjectCard key={project.title}>
                <div className="flex gap-x-8">
                  <div className="space-y-4">
                    <RecentProjectCardHeading>
                      {project.title}
                    </RecentProjectCardHeading>
                    <RecentProjectCardDescription>
                      {project.description}
                    </RecentProjectCardDescription>
                    <RecentProjectCardLink href={project.href} />
                  </div>
                  <div className="hidden sm:block">
                    <RecentProjectCardImage imageSource={project.imageSource} />
                  </div>
                </div>
              </RecentProjectCard>
            ))}
          </RecentProjectsList>
          <SeeMoreProjectsButton>
            See More Projects
          </SeeMoreProjectsButton>
        </div>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Recent Projects List

function RecentProjectsList({children}: { children: React.ReactNode }) {
  return (
    <ol className="w-full mt-16 space-y-8" role="list">
      {children}
    </ol>
  )
}

function RecentProjectCard({children}: { children: React.ReactNode }) {
  return (
    <li>
      <div className="p-8 rounded-3xl bg-white text-start">
        {children}
      </div>
    </li>
  )
}

function RecentProjectCardHeading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "text-blue-950 font-medium text-lg")}>
      {children}
    </h1>
  )
}

function RecentProjectCardDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="text-slate-700 text-base font-normal">
      {children}
    </p>
  )
}

function RecentProjectCardLink({href}: { href: string }) {
  return (
    <Link className="flex items-center gap-x-2 text-blue-600" href={href} rel="noreferrer" target="_blank">
      <span className="text-base font-normal">
        Visit the website
      </span>
      <ExternalLinkIcon className="size-4" />
    </Link>
  )
}

function RecentProjectCardImage({imageSource}: { imageSource: string }) {
  return (
    <div className="h-full w-44 bg-slate-200/35 rounded-lg"></div>
  )
}

//endregion

//region All Projects Button

function SeeMoreProjectsButton({children}: { children: React.ReactNode }) {
  return (
    <PrimaryButton className="mt-8" href="/portfolio">
      {children}
    </PrimaryButton>
  )
}

//endregion