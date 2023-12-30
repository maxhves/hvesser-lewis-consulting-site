import Navbar from '@/app/components/navbar/navbar';
import Introduction from "@/app/sections/introduction/introduction";
import About from '@/app/sections/about/about';
import Experience from '@/app/sections/experience/experience';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Introduction/>
      <About/>
      <Experience/>
    </main>
  )
}
