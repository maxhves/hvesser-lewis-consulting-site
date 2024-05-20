import Introduction from "@/app/sections/introduction/introduction";
import About from '@/app/sections/about/about';
import Experience from '@/app/sections/experience/experience';
import Projects from '@/app/sections/projects/projects';
import ResumeAd from '@/app/sections/resume_ad/resume_ad';
import Contact from '@/app/sections/contact/contact';
import Networks from '@/app/sections/networks/networks';
import Footer from '@/app/sections/footer/footer';
import Navbar from "@/app/components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Introduction/>
      <About/>
      <Experience/>
      <Projects/>
      <ResumeAd/>
      <Contact/>
      {/* TODO: Update with currently available networks */}
      {/* <Networks/> */}
      {/* TODO: Update with currently available networks */}
      <Footer/>
    </main>
  )
}
