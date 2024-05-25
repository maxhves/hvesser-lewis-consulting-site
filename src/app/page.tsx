import Projects from '@/app/sections/projects/projects';
import ResumeAd from '@/app/sections/resume_ad/resume_ad';
import Contact from '@/app/sections/contact/contact';
import Networks from "@/app/sections/networks/networks";
import AboutSection from "@/app/home/components/about/about-section";
import IntroductionSection from "@/app/home/components/introduction/introduction-section";
import ExperienceSection from "@/app/home/components/experience/experience-section";

//region Entry

export default function Home() {
  return (
    <main className="flex-grow">
      <IntroductionSection />
      <AboutSection />
      <ExperienceSection />

      {/* TODO: Remove legacy components */}
      <ResumeAd/>
      <Projects/>
      <Contact/>
      <Networks/>
      {/* TODO: Remove legacy components */}
    </main>
  )
}

//endregion
