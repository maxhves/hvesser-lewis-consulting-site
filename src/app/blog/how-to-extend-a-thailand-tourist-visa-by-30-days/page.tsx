import ContentContainer from "@/components/ui/content-container";
import IntroductionSection
  , {
  IntroductionBody,
  IntroductionPreface,
  IntroductionPreTitle,
  IntroductionTitle
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/introduction-section";

//region Entry

export default function HowToExtendAThailandTouristVisaBy30Days() {
  return (
    <main className="flex-grow">
      <ContentContainer className="py-32">
        <article>
          <IntroductionSection>
            <IntroductionPreTitle>
              A guide on
            </IntroductionPreTitle>
            <IntroductionTitle>
              How to extend a Thailand tourist visa by 30 days
            </IntroductionTitle>
            <IntroductionPreface>
              If, like me, you&apos;ve recently taken advantage of Thailand&apos;s 60-day visa exemption or 60-day Visa
              on Arrival, you might now be wondering how to extend your stay by an additional 30 days. Official
              information on the process can seem a bit scarce and confusing, so I’ve put together this guide to clarify
              how you can extend your visa, based on my own recent experience.
            </IntroductionPreface>
            <IntroductionBody>
              I&apos;d like to start by noting that immigration offices may vary slightly depending on their location
              and specific procedures. So, where it&apos;s relevant, the information I&apos;m sharing here is based on
              my personal experience of extending my 60-day visa exemption in Bangkok.
            </IntroductionBody>
          </IntroductionSection>
        </article>
      </ContentContainer>
    </main>
  )
}

//endregion