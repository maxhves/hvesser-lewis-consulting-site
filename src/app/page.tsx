import Introduction from '@/app/home/components/introduction/introduction'
import { Expertise } from '@/app/home/components/expertise/expertise'
import Projects from '@/app/home/components/projects/projects'
import CurrentLocationCard from '@/app/home/components/location/current-location-card'
import { ContentContainerNew } from '@/components/ui/content-container'

export default function Home() {
  return (
    <main className="flex-grow">
      <Introduction />
      <ContentContainerNew>
        <CurrentLocationCard />
      </ContentContainerNew>
      <Expertise />
      <Projects />
      {/*<AboutSection />*/}
      {/*<ServicesSection />*/}
      {/*<PortfolioSection />*/}
    </main>
  )
}
