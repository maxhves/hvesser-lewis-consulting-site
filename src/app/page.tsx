import AboutSection from "@/app/home/components/about/about-section";
import IntroductionSection from "@/app/home/components/introduction/introduction-section";
import ProjectsSection from "@/app/home/components/projects/projects-section";
import ContactSection from "@/app/home/components/contact/contact-section";
import {Divider} from "@/components/ui/divider";
import ServicesSection from "@/app/home/components/services/services-section";

//region Entry

export default function Home() {
  return (
    <main className="flex-grow">
      <IntroductionSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <ContactSection />
    </main>
  )
}

//endregion
