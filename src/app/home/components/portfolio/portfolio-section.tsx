import React from 'react'
import ContentContainer from '@/components/ui/content-container'
import { PageDescription, PageHeading } from '@/components/ui/header'
import SectionBadge from '@/components/ui/section-badge'
import { ExternalLink, Link } from '@/components/ui/link'
import { clsx } from 'clsx'
import { dmSans } from '@/app/fonts/fonts'
import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'
import ArrowRightLongIcon from '@/components/icon/arrow-right-long-icon'

import temperatureCheckPreview from '../../../../../public/images/portfolio/temperature-check-preview.webp'
import crimeConnoisseurPreview from '../../../../../public/images/portfolio/crime-connoisseur-preview.webp'
import visaMatchPreview from '../../../../../public/images/portfolio/visa-match-preview.webp'

//region Model

const recentProjects = [
  {
    title: 'Temperature Check',
    description:
      'This front-end web application helps users determine whether their current body temperature might be considered a fever.\n\nDesigned with a clean and minimal aesthetic, the website ensures users can easily input their temperature and receive a quick, clear result.',
    href: 'https://www.temperature-check.com',
    image: temperatureCheckPreview,
  },
  {
    title: 'Crime Connoisseur',
    description:
      'A podcast discovery platform and player designed to showcase lesser-known true crime podcasts, helping them reach a broader audience.\n\nThe website features a dark, sleek aesthetic and a fully custom podcast client that is both responsive and highly performant.',
    href: 'https://www.crimeconnoisseur.com',
    image: crimeConnoisseurPreview,
  },
  {
    title: 'Visa Match',
    description:
      'An intuitive website providing informational guides to those considering to pursue experience working abroad.\n\nUsers are informed about what visa options are potentially available to them with each guide providing an overview of the requirements, alongside positive and negative considerations.',
    href: 'https://www.visamatch.co',
    image: visaMatchPreview,
  },
]

//endregion

//region Entry

export default function PortfolioSection() {
  return (
    <section id="projects" className="scroll-mt-14 bg-neutral-50">
      <ContentContainer className="py-16">
        <SectionBadge>Portfolio</SectionBadge>
        <PageHeading className="mt-1">Projects I’ve Worked On Recently</PageHeading>
        <PageDescription className="mt-4">
          Take a look at some of the recent projects I’ve been working on, and for a deeper technical dive, explore my
          open-source contributions on <ExternalLink href="https://www.github.com/maxhves">Github</ExternalLink>.
        </PageDescription>
        <RecentProjectsList>
          {recentProjects.map((project) => (
            <ProjectCard key={project.title}>
              <ProjectCardBody>
                <ProjectCardHeading>{project.title}</ProjectCardHeading>
                <ProjectCardDescription>{project.description}</ProjectCardDescription>
                <ProjectCardLink href={project.href} />
              </ProjectCardBody>
              <ProjectCardImageBox>
                <ProjectCardImage image={project.image} />
              </ProjectCardImageBox>
            </ProjectCard>
          ))}
        </RecentProjectsList>
        <SeeMoreProjectsButton>See More Projects</SeeMoreProjectsButton>
      </ContentContainer>
    </section>
  )
}

//endregion

//region Recent Projects List

function RecentProjectsList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mt-16 w-full space-y-8" role="list">
      {children}
    </ol>
  )
}

function ProjectCard({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex">
      <div className="flex flex-col sm:flex-row">{children}</div>
    </li>
  )
}

function ProjectCardBody({ children }: { children: React.ReactNode }) {
  return <div className="bg-neutral-200/50 p-8">{children}</div>
}

function ProjectCardImageBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-44 w-full flex-none border-t-8 border-emerald-600 bg-neutral-200 sm:h-full sm:w-48">
      {children}
    </div>
  )
}

function ProjectCardImage({ image }: { image: StaticImageData }) {
  return (
    <Image
      className="size-full bg-neutral-200 object-cover object-center"
      src={image}
      alt="Project promotional image"
      placeholder="blur"
      loading="lazy"
    />
  )
}

function ProjectCardHeading({ children }: { children: React.ReactNode }) {
  return <h1 className={clsx(dmSans.className, 'text-lg font-medium text-neutral-950')}>{children}</h1>
}

function ProjectCardDescription({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 whitespace-pre-wrap text-base font-normal text-neutral-700">{children}</p>
}

function ProjectCardLink({ href }: { href: string }) {
  return (
    <Link className="group mt-8 flex w-fit items-center gap-x-2" href={href} rel="noreferrer" target="_blank">
      <ArrowRightLongIcon className="size-6 text-emerald-600" />
      <span className="text-sm font-semibold uppercase text-neutral-950 group-hover:text-emerald-600">
        Visit the website
      </span>
    </Link>
  )
}

//endregion

//region All Projects Button

function SeeMoreProjectsButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-16 flex w-full justify-center">
      <Button href="/portfolio">{children}</Button>
    </div>
  )
}

//endregion
