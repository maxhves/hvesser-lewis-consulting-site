import Introduction from '@/app/home/components/introduction/introduction'
import { Expertise } from '@/app/home/components/expertise/expertise'

export default function Home() {
  return (
    <main className="flex-grow">
      <Introduction />
      <Expertise />
      {/*<AboutSection />*/}
      {/*<ServicesSection />*/}
      {/*<PortfolioSection />*/}
    </main>
  )
}
