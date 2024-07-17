import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeader, SectionSubheader} from "@/components/ui/header";
import {Project} from "@/types/project/project";
import {
  PrimaryProjectDescription,
  PrimaryProjectFooter,
  PrimaryProjectListItem,
  PrimaryProjectsList,
  PrimaryProjectTechnologiesList,
  PrimaryProjectTechnologyListItem,
  PrimaryProjectTitle,
  PrimaryProjectVisitButton
} from "@/app/home/components/projects/primary-projects-list";
import {
  SecondaryProjectDescription, SecondaryProjectHeader,
  SecondaryProjectLink,
  SecondaryProjectListItem,
  SecondaryProjectsList,
  SecondaryProjectTechnologiesList,
  SecondaryProjectTechnologyListItem,
  SecondaryProjectTitle
} from "@/app/home/components/projects/secondary-projects-list";
import {PROJECTS_NAV_SECTION} from "@/app/home/data/navigation/home-navigation-section";
import {Technology} from "@/types/project/technology";

//region Model

const primaryProjects: Project[] = [
  {
    title: "Temperature Check",
    description: "Temperature reading interpretation whereby users are able to enter their body temperature reading and understand if it is normal, or considered a fever. Measurement settings are available for accurate interpretation.",
    href: "https://www.temperature-check.com",
    technologies: [Technology.TYPESCRIPT, Technology.REACTJS, Technology.NEXTJS, Technology.TAILWINDCSS],
    imageSource: "/images/projects/temperature-check.png"
  },
  {
    title: "Crime Connoisseur",
    description: "A true-crime podcast player and discovery platform. This site allows users to easily find, listen to and rate podcasts/episodes in the true-crime category, whilst highlighting new and updated podcasts.",
    href: "https://www.crimeconnoisseur.com",
    technologies: [Technology.TYPESCRIPT, Technology.REACTJS, Technology.NEXTJS, Technology.TAILWINDCSS, Technology.SUPABASE],
    imageSource: "/images/projects/crime-connoisseur.png"
  },
  {
    title: "Visa Match",
    description: "Informational guides to working abroad, informing users about what visa options are potentially available to them.Each guide provides an overview of the requirements, alongside positive and negative points.",
    href: "https://www.visamatch.co",
    technologies: [Technology.TYPESCRIPT, Technology.REACTJS, Technology.NEXTJS, Technology.TAILWINDCSS, Technology.SUPABASE],
    imageSource: "/images/projects/visa-match.png"
  }
]

const secondaryProjects: Project[] = [
  {
    title: "Swap",
    description: "A native mobile currency converter helping users to convert between the most popular global currencies.",
    href: "https://github.com/maxhves?tab=repositories&q=swap",
    technologies: [Technology.ANDROID, Technology.IOS, Technology.KOTLIN, Technology.SWIFT]
  },
  {
    title: "Showroom",
    description: "An image gallery library built for Android, used for creating an immersive image showcase.",
    href: "https://github.com/maxhves/showroom",
    technologies: [Technology.ANDROID, Technology.KOTLIN]
  }
]

//endregion

//region Entry

export default function ProjectsSection() {
  return (
    <section id={PROJECTS_NAV_SECTION.id} className="bg-stone-50 scroll-mt-14">
      <ContentContainer className="py-16">
        <SectionHeader>
          Projects
        </SectionHeader>

        <ProjectsDescription>
          The projects you see listed here are just some of the ideas that I have been developing and working on during
          my self-employment. I am passionate about working on projects that personally motivate me and I am passionate
          about developing my own ideas and that is why I gave myself the opportunity to work on something that enables
          me to do exactly that.
        </ProjectsDescription>

        <PrimaryProjectsList className="mt-16">
          {primaryProjects.map((project: Project) => (
            <PrimaryProjectListItem key={project.title}>
              <PrimaryProjectTitle>
                {project.title}
              </PrimaryProjectTitle>
              {/* TODO: Setup project image resources */}
              {/*{project.imageSource && (*/}
              {/*  <PrimaryProjectImage imageSource={project.imageSource} />*/}
              {/*)}*/}
              <PrimaryProjectDescription>
                {project.description}
              </PrimaryProjectDescription>
              <PrimaryProjectFooter>
                <PrimaryProjectTechnologiesList>
                  {project.technologies.map((technology: Technology) => (
                    <PrimaryProjectTechnologyListItem key={technology.toString()}>
                      {technology.toString()}
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
          Open source
        </SectionSubheader>

        <SecondaryProjectsList className="mt-4">
          {secondaryProjects.map((project: Project) => (
            <SecondaryProjectListItem key={project.title}>
              <SecondaryProjectHeader>
                <SecondaryProjectTitle>
                  {project.title}
                </SecondaryProjectTitle>
                <SecondaryProjectLink href={project.href} />
              </SecondaryProjectHeader>

              <SecondaryProjectDescription>
                {project.description}
              </SecondaryProjectDescription>
              <SecondaryProjectTechnologiesList>
                {project.technologies.map((technology: Technology) => (
                  <SecondaryProjectTechnologyListItem
                    key={technology.toString()}
                    color={technology.color}
                  >
                    {technology.toString()}
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
    <p className="mt-4 text-sm font-normal text-stone-700 whitespace-pre-wrap">
      {children}
    </p>
  )
}

//endregion