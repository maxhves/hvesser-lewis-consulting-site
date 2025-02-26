import ContentContainer from '@/components/ui/content-container'
import ImageBanner from '@/components/ui/image-banner'
import { PageDescription } from '@/components/ui/header'
import { InternalTextLink } from '@/components/ui/link'

import abstractWavesImage from '../../../public/images/portfolio/abstract-waves.webp'
import temperatureCheckShowcase from '../../../public/images/portfolio/temperature-check-showcase.webp'
import swapShowcase from '../../../public/images/portfolio/swapx-showcase.webp'
import crimeConnoisseurShowcase from '../../../public/images/portfolio/crime-connoisseur-showcase.webp'
import visaMatchShowcase from '../../../public/images/portfolio/visa-match-showcase.webp'
import ProjectList from '@/app/portfolio/components/project-list'
import ProjectCard, {
  ProjectCardBody,
  ProjectCardContent,
  ProjectCardImage,
  ProjectCardLink,
  ProjectCardTitle,
} from '@/app/portfolio/components/project-card'
import TechnologyList, { TechnologyItem } from '@/app/portfolio/components/technology-list'

//region Model

const projects = [
  {
    title: 'Temperature Check',
    body: 'The objective of this project was to design and develop a comprehensive full-stack application tailored for an initial healthcare solution.\n\nThe platform enables users to input their body temperature readings and receive real-time insights on whether the data suggests the presence of a fever.',
    technologies: ['SvelteKit', 'TailwindCSS', 'Supabase', 'Typescript'],
    href: 'https://www.temperature-check.com',
    image: temperatureCheckShowcase,
  },
  {
    title: 'Swap Currency Converter',
    body: 'This project offers users a convenient way to convert between popular international currencies.\n\nThe Android application was developed as an open-source project to demonstrate clean architecture and design principles in Android development.',
    technologies: ['Android', 'Kotlin', 'Retrofit', 'Room', 'Coroutines', 'Compose'],
    href: 'https://github.com/maxhves/swapx-android',
    image: swapShowcase,
  },
  {
    title: 'Crime Connoisseur',
    body: 'The goal of this project was to build a full-stack application that serves as a discovery platform for podcasts in the True Crime genre.\n\nIt allows users to explore a wide range of podcasts and features an integrated episode player, enabling seamless playback of episodes directly through the platform.',
    technologies: ['React', 'NextJS', 'TailwindCSS', 'Supabase', 'TypeScript'],
    href: 'https://www.crimeconnoisseur.com',
    image: crimeConnoisseurShowcase,
  },
  {
    title: 'Visa Match',
    body: 'VisaMatch is a comprehensive platform designed to provide detailed information on Working Holiday and working abroad visas.\n\nIt offers in-depth guides and resources to help users explore potential pathways for international work opportunities.',
    technologies: ['React', 'NextJS', 'TailwindCSS', 'TypeScript'],
    href: 'https://www.visamatch.co',
    image: visaMatchShowcase,
  },
]

//endregion

export default function Portfolio() {
  return (
    <main className="flex-grow">
      <ImageBanner image={abstractWavesImage}>Project Portfolio</ImageBanner>
      <ContentContainer>
        <PageDescription className="mt-8">
          Explore my recent projects to see examples of my work and approach. If you’re interested in building a new
          project or improving on an existing one, feel free to{' '}
          <InternalTextLink href="/contact">contact me</InternalTextLink>—I’d love to hear more about your vision and
          discuss how I can help you and your business.
        </PageDescription>

        <ProjectList>
          {projects.map((project) => (
            <ProjectCard key={project.title}>
              <ProjectCardImage image={project.image} />
              <ProjectCardContent>
                <ProjectCardTitle>{project.title}</ProjectCardTitle>
                <ProjectCardBody>{project.body}</ProjectCardBody>
                <TechnologyList>
                  {project.technologies.map((technology) => (
                    <TechnologyItem key={technology}>{technology}</TechnologyItem>
                  ))}
                </TechnologyList>
                <ProjectCardLink href={project.href} />
              </ProjectCardContent>
            </ProjectCard>
          ))}
        </ProjectList>
      </ContentContainer>
    </main>
  )
}
