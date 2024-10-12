import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeading, SectionSubheading} from "@/components/ui/header";
import SectionBadge from "@/components/ui/section-badge";
import {ExternalLink, Link} from "@/components/ui/link";
import {ExternalLinkIcon, MoveRightIcon} from "lucide-react";
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
    <section id={HomeNavLink.Portfolio.id} className="bg-neutral-50 scroll-mt-14">
      <ContentContainer className="py-16">
        <SectionBadge>
          Portfolio
        </SectionBadge>
        <SectionHeading className="mt-1">
          Projects I’ve Worked On Recently
        </SectionHeading>
        <SectionSubheading className="mt-4">
          Take a look at some of the recent projects I’ve been working on, and for a deeper technical dive, explore my
          open-source contributions on <ExternalLink href="https://www.github.com/maxhves">Github</ExternalLink>.
        </SectionSubheading>
        <RecentProjectsList>
          {recentProjects.map(project => (
            <ProjectCard key={project.title}>
              <ProjectCardBody>
                <ProjectCardHeading>
                  {project.title}
                </ProjectCardHeading>
                <ProjectCardDescription>
                  {project.description}
                </ProjectCardDescription>
                <ProjectCardLink href={project.href} />
              </ProjectCardBody>
              <ProjectCardImageBox>
                <ProjectCardImage />
              </ProjectCardImageBox>
            </ProjectCard>
          ))}
        </RecentProjectsList>
        <SeeMoreProjectsButton>
          See More Projects
        </SeeMoreProjectsButton>
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

function ProjectCard({children}: { children: React.ReactNode }) {
  return (
    <li className="flex">
      <div className="flex flex-col sm:flex-row">
        {children}
      </div>
    </li>
  )
}

function ProjectCardBody({children}: { children: React.ReactNode }) {
  return (
    <div className="p-8 bg-neutral-200/50">
      {children}
    </div>
  )
}

function ProjectCardImageBox({children}: { children: React.ReactNode }) {
  return (
    <div className="h-44 sm:h-full w-full sm:w-48 flex-none border-t-8 border-emerald-600 bg-neutral-200">
      {children}
    </div>
  )
}

function ProjectCardImage() {
  return (
    <div className="size-full">{/* TODO: Add Image here */}</div>
  )
}

function ProjectCardHeading({children}: { children: React.ReactNode }) {
  return (
    <h1 className={clsx(outfit.className, "text-neutral-950 font-medium text-lg")}>
      {children}
    </h1>
  )
}

function ProjectCardDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-neutral-700 text-base font-normal whitespace-pre-wrap">
      {children}
    </p>
  )
}

function ProjectCardLink({href}: { href: string }) {
  return (
    <Link className="mt-8 group flex items-center gap-x-2" href={href} rel="noreferrer" target="_blank">
      <MoveRightIcon className="size-6 text-emerald-600" />
      <span className="text-base font-semibold uppercase text-slate-950 group-hover:text-emerald-600">
        Visit the website
      </span>
    </Link>
  )
}

//endregion

//region All Projects Button

function SeeMoreProjectsButton({children}: { children: React.ReactNode }) {
  return (
    <div className="w-full flex mt-16 justify-center">
      <PrimaryButton href="/portfolio">
        {children}
      </PrimaryButton>
    </div>
  )
}

//endregion