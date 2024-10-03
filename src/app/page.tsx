import AboutSection from "@/app/home/components/about/about-section";
import IntroductionSection from "@/app/home/components/introduction/introduction-section";
import ExperienceSection from "@/app/home/components/experience/experience-section";
import ProjectsSection from "@/app/home/components/projects/projects-section";
import ContactSection from "@/app/home/components/contact/contact-section";
import {Divider} from "@/components/ui/divider";

//region Entry

export default function Home() {
  return (
    <main className="flex-grow">
      <IntroductionSection />
      <Divider soft={true} />
      <AboutSection />
      <Divider soft={true} />
      <ExperienceSection />
      <Divider soft={true} />
      <ProjectsSection />
      <Divider soft={true} />
      <ContactSection />
    </main>
  )
}

//endregion
