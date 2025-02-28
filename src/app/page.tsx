import Introduction from '@/app/home/components/introduction/introduction'
import { Expertise } from '@/app/home/components/expertise/expertise'
import Projects from '@/app/home/components/projects/projects'

export default function Home() {
  return (
    <main className="flex-grow">
      <Introduction />
      <Expertise />
      <Projects />
      {/*<AboutSection />*/}
      {/*<ServicesSection />*/}
      {/*<PortfolioSection />*/}
    </main>
  )
}
