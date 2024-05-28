import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeader, SectionSubheader} from "@/components/ui/header";
import {Project} from "@/types/project/project";
import {
  PrimaryProjectDescription, PrimaryProjectFooter, PrimaryProjectImage,
  PrimaryProjectListItem,
  PrimaryProjectsList, PrimaryProjectTechnologiesList, PrimaryProjectTechnologyListItem,
  PrimaryProjectTitle, PrimaryProjectVisitButton
} from "@/app/home/components/projects/primary-projects-list";
import {
  SecondaryProjectDescription, SecondaryProjectLink,
  SecondaryProjectListItem,
  SecondaryProjectsList, SecondaryProjectTechnologiesList, SecondaryProjectTechnologyListItem,
  SecondaryProjectTitle
} from "@/app/home/components/projects/secondary-projects-list";

//region Model

const primaryProjects: Project[] = [
  {
    title: "Temperature Check",
    description: "Temperature reading interpretation whereby users are able to enter their body temperature reading and understand if it is normal, or considered a fever. Measurement settings are available for accurate interpretation.",
    href: "https://www.temperature-check.com",
    technologies: ["Typescript", "ReactJS", "NextJS", "TailwindCSS"],
    imageSource: "/images/projects/temperature-check.png"
  },
  {
    title: "Crime Connoisseur",
    description: "A true-crime podcast player and discovery platform. This site allows users to easily find, listen to and rate podcasts/episodes in the true-crime category, whilst highlighting new and updated podcasts.",
    href: "https://www.crimeconnoisseur.com",
    technologies: ["Typescript", "ReactJS", "NextJS", "TailwindCSS", "Supabase"],
    imageSource: "/images/projects/crime-connoisseur.png"
  },
  {
    title: "Visa Match",
    description: "Informational guides to working abroad, informing users about what visa options are potentially available to them.Each guide provides an overview of the requirements, alongside positive and negative points.",
    href: "https://www.visamatch.co",
    technologies: ["Typescript", "ReactJS", "NextJS", "TailwindCSS", "Supabase"],
    imageSource: "/images/projects/visa-match.png"
  }
]

const secondaryProjects: Project[] = [
  {
    title: "Swap",
    description: "A native mobile currency converter helping users to convert between the most popular global currencies.",
    href: "https://github.com/maxhves?tab=repositories&q=swap",
    technologies: ["Android", "iOS", "Kotlin", "Swift"]
  },
  {
    title: "Showroom",
    description: "An image gallery library built for Android, used for creating an immersive image showcase.",
    href: "https://github.com/maxhves/showroom",
    technologies: ["Android", "Kotlin"]
  }
]

//endregion

//region Entry

export default function ProjectsSection() {
  return (
    <section className="bg-lavender-950">
      <ContentContainer className="py-16">
        <SectionHeader>
          Side Projects
        </SectionHeader>

        <ProjectsDescription>
          I am constantly working to improve myself and learn new things. Pursuing and developing my own ideas gives me
          the motivation to learn in an efficient and focused way.
          {`\n\n`}
          Through my own projects, I have gained a great deal of experience and knowledge over a range of different
          topics and technology stacks, take a look below at some of these projects.
        </ProjectsDescription>

        <PrimaryProjectsList className="mt-16">
          {primaryProjects.map((project: Project) => (
            <PrimaryProjectListItem key={project.title}>
              <PrimaryProjectTitle>
                {project.title}
              </PrimaryProjectTitle>
              {project.imageSource && (
                <PrimaryProjectImage imageSource={project.imageSource} />
              )}
              <PrimaryProjectDescription>
                {project.description}
              </PrimaryProjectDescription>
              <PrimaryProjectFooter>
                <PrimaryProjectTechnologiesList>
                  {project.technologies.map((technology: string) => (
                    <PrimaryProjectTechnologyListItem key={technology}>
                      {technology}
                    </PrimaryProjectTechnologyListItem>
                  ))}
                </PrimaryProjectTechnologiesList>
                <PrimaryProjectVisitButton href={project.href}>
                  Visit
                </PrimaryProjectVisitButton>
              </PrimaryProjectFooter>
            </PrimaryProjectListItem>
          ))}
        </PrimaryProjectsList>

        <SectionSubheader className="mt-16">
          See also
        </SectionSubheader>

        <SecondaryProjectsList className="mt-4">
          {secondaryProjects.map((project: Project) => (
            <SecondaryProjectListItem key={project.title}>
              <SecondaryProjectTitle>
                {project.title}
              </SecondaryProjectTitle>
              <SecondaryProjectDescription>
                {project.description}
              </SecondaryProjectDescription>
              <SecondaryProjectLink href={project.href}>
                See project on Github
              </SecondaryProjectLink>
              <SecondaryProjectTechnologiesList>
                {project.technologies.map((technology: string) => (
                  <SecondaryProjectTechnologyListItem key={technology}>
                    {technology}
                  </SecondaryProjectTechnologyListItem>
                ))}
              </SecondaryProjectTechnologiesList>
            </SecondaryProjectListItem>
          ))}
        </SecondaryProjectsList>
      </ContentContainer>
    </section>
  );
}

//endregion

//region Description

function ProjectsDescription({children}: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-sm text-neutral-400 whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion