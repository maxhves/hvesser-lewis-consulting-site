import Introduction from "@/app/sections/introduction/introduction";
import About from '@/app/sections/about/about';
import Experience from '@/app/sections/experience/experience';
import ResumeAd from '@/app/sections/resume_ad/resume_ad';

export default function Home() {
  return (
    <main>
      <Introduction/>
      <About/>
      <Experience/>
      <ResumeAd/>
    </main>
  )
}
