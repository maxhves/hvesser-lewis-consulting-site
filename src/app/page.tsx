import Introduction from "@/app/sections/introduction/introduction";
import About from '@/app/sections/about/about';
import Experience from '@/app/sections/experience/experience';
import Projects from '@/app/sections/projects/projects';
import ResumeAd from '@/app/sections/resume_ad/resume_ad';
import Contact from '@/app/sections/contact/contact';
import Networks from "@/app/sections/networks/networks";
import AboutSection from "@/app/home/components/about/about-section";

//region Entry

export default function Home() {
  return (
    <main className="flex-grow">
      {/* TODO: Remove legacy components */}
      {/*<Navbar/>*/}
      <Introduction/>

      <AboutSection />

      <Experience/>
      <Projects/>
      <ResumeAd/>
      <Contact/>
      <Networks/>
      {/*<Footer/>*/}
      {/* TODO: Remove legacy components */}
    </main>
  )
}

//endregion
