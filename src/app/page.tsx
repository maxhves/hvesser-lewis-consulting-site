import AboutSection from "@/app/home/components/about/about-section";
import IntroductionSection from "@/app/home/components/introduction/introduction-section";
import PortfolioSection from "@/app/home/components/portfolio/portfolio-section";
import ContactSection from "@/app/home/components/contact/contact-section";
import ServicesSection from "@/app/home/components/services/services-section";

//region Entry

export default function Home() {
  return (
    <main className="flex-grow">
      <IntroductionSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
    </main>
  )
}

//endregion
