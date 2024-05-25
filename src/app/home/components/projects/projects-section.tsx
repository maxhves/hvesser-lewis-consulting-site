import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import {SectionHeader, SectionSubheader} from "@/components/ui/header";
import {PrimaryProject, SecondaryProject} from "@/types/project/project";

//region Model

const primaryProjects: PrimaryProject[] = [
  {
    title: "Temperature Check",
    description: "Temperature reading interpretation whereby users are able to enter their body temperature reading and understand if it is normal, or considered a fever. Measurement settings are available for accurate interpretation.",
    link: "https://www.temperature-check.com",
    technologyTags: ["Typescript", "ReactJS", "NextJS", "TailwindCSS"],
    imageSource: "/images/projects/temperature-check.png"
  },
  {
    title: "Crime Connoisseur",
    description: "A true-crime podcast player and discovery platform. This site allows users to easily find, listen to and rate podcasts/episodes in the true-crime category, whilst highlighting new and updated podcasts.",
    link: "https://www.crimeconnoisseur.com",
    technologyTags: ["Typescript", "ReactJS", "NextJS", "TailwindCSS", "Supabase"],
    imageSource: "/images/projects/crime-connoisseur.png"
  },
  {
    title: "Visa Match",
    description: "Informational guides to working abroad, informing users about what visa options are potentially available to them.Each guide provides an overview of the requirements, alongside positive and negative points.",
    link: "https://www.visamatch.co",
    technologyTags: ["Typescript", "ReactJS", "NextJS", "TailwindCSS", "Supabase"],
    imageSource: "/images/projects/visa-match.png"
  }
]

const secondaryProjects: SecondaryProject[] = [
  {
    title: "Swap",
    description: "A native mobile currency converter helping users to convert between the most popular global currencies.",
    link: "https://github.com/maxhves?tab=repositories&q=swap",
    technologyTags: ["Android", "iOS", "Kotlin", "Swift"]
  },
  {
    title: "Showroom",
    description: "An image gallery library built for Android, used for creating an immersive image showcase.",
    link: "https://github.com/maxhves/showroom",
    technologyTags: ["Android", "Kotlin"]
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

        <div className="mt-16">
          Primary projects go here...
        </div>

        <SectionSubheader className="mt-16">
          See also
        </SectionSubheader>
        <div className="mt-4">
          Secondary projects go here...
        </div>
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