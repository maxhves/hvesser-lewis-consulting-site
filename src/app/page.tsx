import Projects from '@/app/sections/projects/projects';
import Contact from '@/app/sections/contact/contact';
import Networks from "@/app/sections/networks/networks";
import AboutSection from "@/app/home/components/about/about-section";
import IntroductionSection from "@/app/home/components/introduction/introduction-section";
import ExperienceSection from "@/app/home/components/experience/experience-section";
import DownloadCvBanner from "@/app/home/components/cv-banner/download-cv-banner";
import ProjectsSection from "@/app/home/components/projects/projects-section";

//region Entry

export default function Home() {
  return (
    <main className="flex-grow">
      <IntroductionSection />
      <AboutSection />
      <ExperienceSection />
      <DownloadCvBanner />
      <ProjectsSection />

      {/* TODO: Remove legacy components */}
      <Projects/>
      <Contact/>
      <Networks/>
      {/* TODO: Remove legacy components */}
    </main>
  )
}

//endregion
