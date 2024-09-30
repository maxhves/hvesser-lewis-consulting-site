import ContentContainer from "@/components/ui/content-container";
import IntroductionSection, {
  IntroductionBody,
  IntroductionHeading,
  IntroductionPreface,
  IntroductionPreTitle
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/introduction-section";
import WhatYouNeedSection, {
  WhatYouNeedBody,
  WhatYouNeedChecklist,
  WhatYouNeedChecklistItem,
  WhatYouNeedHeading
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/what-you-need-section";
import WhereToGoSection, {
  WhereToGoBody,
  WhereToGoHeading,
  WhereToGoLink
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/where-to-go-section";
import WhatToExpectSection, {
  WhatToExpectBody,
  WhatToExpectHeading,
  WhatToExpectStep,
  WhatToExpectSteps
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/what-to-expect-section";
import FinalCommentsSection, {
  FinalCommentsBody,
  FinalCommentsHeading,
  FinalCommentsLink
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/final-comments-section";

//region Model

const itemsNeeded = [
  {
    label: "Passport.",
    description: "Make sure to bring your passport or the travel document you used when you first entered Thailand."
  },
  {
    label: "1,900 THB.",
    description: "There’s a fee of 1,900 Thai Baht for the extension, which must be paid in cash—no other payment methods are accepted. I personally brought 2,000 THB and received 100 THB back in change."
  },
  {
    label: "Your photograph.",
    description: "You’ll need a physical photo of yourself (digital won’t work), similar to the one used in your passport. The required size is 4 cm x 6 cm. You can get one at a local photography store, or there may be a service near the immigration office. I chose a local store, paid 100 THB for four photos, and waited about 30 minutes."
  },
  {
    label: "Passport photocopies.",
    description: "You’ll need two photocopies: one of the photo/personal details page in your passport and one of the page with your entry stamp. Like with your photo, you can get these at a local shop or near the immigration office. I went to a local store, and the two copies cost me 100 THB."
  },
  {
    label: "Application form.",
    description: "You’ll fill out the application form in person at the immigration office. It’s made up of three parts (three separate documents). Be prepared to provide your address in Thailand, phone number (Thai if you have one), your date and port of arrival, and basic personal details—though I imagine most of this won’t require much preparation. I also recommend bringing your own pen, just in case."
  }
]

const processSteps = [
  {
    label: "Queue card.",
    description: "The first step is to present your application form along with all the required documents to an immigration assistant, who will be easy to spot at a desk. They’ll do a quick pre-check of your paperwork to make sure everything is filled out correctly. If everything looks good, you’ll be handed a queue card—a numbered card to hold your place in line."
  },
  {
    label: "Document check.",
    description: "Once you’ve got your queue card, head to the area where they’re calling out the numbers. When yours is called, go to the assigned desk and hand over your application form and documents. The immigration assistant will review your paperwork, ask you to pay the 1,900 THB fee, and take your picture with the webcam at their desk. You’ll also need to hand over your passport, which you won’t get back until the final step, but do make sure to keep your queue card."
  },
  {
    label: "Visa processing.",
    description: "After completing the document check, head to the waiting area. The wait time will depend on how many people are ahead of you in the queue. While you’re waiting, the immigration department will process your details and paperwork to prepare your visa extension."
  },
  {
    label: "Passport return.",
    description: "When your number is called again, you’ll be given back your passport along with a physical document confirming your extension and payment. Inside your passport, you’ll find an update to your original arrival stamp with a new date—usually 30 days beyond the end of your initial stay."
  }
]

//endregion

//region Entry

export default function HowToExtendAThailandTouristVisaBy30Days() {
  return (
    <main className="flex-grow">
      <ContentContainer className="py-16 sm:py-32">
        <article>
          <IntroductionSection>
            <IntroductionPreTitle>
              A guide on
            </IntroductionPreTitle>
            <IntroductionHeading>
              How To Extend A Thailand Tourist Visa By 30 Days
            </IntroductionHeading>
            <IntroductionPreface>
              If, like me, you’ve recently taken advantage of Thailand’s 60-day visa exemption or 60-day Visa on
              Arrival, you might now be wondering how to extend your stay by an additional 30 days. If so, you’ve come
              to the right place.
            </IntroductionPreface>
            <IntroductionBody>
              I’d like to start by noting that immigration offices may vary slightly depending on their location and
              specific procedures. So, where it’s relevant, the information I’m sharing here is based on my personal
              experience of extending my 60-day visa exemption in Bangkok.
            </IntroductionBody>
          </IntroductionSection>

          <WhatYouNeedSection>
            <WhatYouNeedHeading>
              What you need
            </WhatYouNeedHeading>
            <WhatYouNeedChecklist>
              {itemsNeeded.map((item => (
                <WhatYouNeedChecklistItem key={item.label}>
                  <span>
                    <strong className="font-semibold text-stone-900">{item.label}</strong> {item.description}
                  </span>
                </WhatYouNeedChecklistItem>
              )))}
            </WhatYouNeedChecklist>
            <WhatYouNeedBody>
              Once you’ve got everything ready, you can approach the immigration assistants at your chosen office.
            </WhatYouNeedBody>
          </WhatYouNeedSection>

          <WhereToGoSection>
            <WhereToGoHeading>
              Where to go
            </WhereToGoHeading>
            <WhereToGoBody>
              <span>
                Some online sources suggest you can visit any immigration office in Thailand, which sounds convenient.
                However, I’m not convinced this is always the case. While at the immigration office myself, I overheard
                a couple who were trying to extend their visa but were turned away because they had arrived in a
                different province and planned to stay there for their entire trip. Based on this, I recommend
                visiting the immigration office in the province where you plan to stay if you’re in a similar situation.
                {"\n"}{"\n"}
                Once you know the province where you want to extend your visa, you can locate your local immigration
                office, also known as the Immigration Bureau. There are several locations, which can make it a bit
                confusing, but for Bangkok, I recommend visiting the immigration office at{' '}
                <WhereToGoLink href="https://maps.app.goo.gl/dqNeEgV4n6CV31sH7">IT Square</WhereToGoLink>
                , listed on Google Maps as “Immigration Office - Short-term VISA”.
                {"\n"}{"\n"}
                For other provinces, I suggest searching “Immigration Bureau” on Google Maps and checking the reviews.
                The reviews will give you an idea of whether others have successfully extended their visas at that
                location.
              </span>
            </WhereToGoBody>
          </WhereToGoSection>

          <WhatToExpectSection>
            <WhatToExpectHeading>
              What to expect
            </WhatToExpectHeading>
            <WhatToExpectBody>
              At the immigration office I visited, the process was split into four steps. I’ll go over these steps and
              provide a small commentary for clarity. I cannot promise that each immigration office across the entirety
              of Thailand is the same, but I imagine the process to be fairly similar.
            </WhatToExpectBody>
            <WhatToExpectSteps>
              {processSteps.map(step => (
                <WhatToExpectStep key={step.label}>
                  <span>
                    <strong className="font-semibold text-stone-900">{step.label}</strong> {step.description}
                  </span>
                </WhatToExpectStep>
              ))}
            </WhatToExpectSteps>
            <WhatToExpectBody>
              Congratulations! You’re done now, no further action is needed, go ahead and enjoy the rest of your stay.
            </WhatToExpectBody>
          </WhatToExpectSection>

          <FinalCommentsSection>
            <FinalCommentsHeading>
              Final comments
            </FinalCommentsHeading>
            <FinalCommentsBody>
              With this article, I hope to have clarified what to do and what to expect when extending a short-term
              tourist visa. While I was in Thailand trying to find this information myself, I found it a bit confusing.
              My aim is to make things easier for others by sharing my experience.
              {'\n'}{'\n'}
              If you think something’s missing or have suggestions for improving this article, please reach out to me
              at <FinalCommentsLink href="mailto:max@hvesserlewis.com">max@hvesserlewis.com</FinalCommentsLink>—I’d be
              glad to hear from you.
            </FinalCommentsBody>
          </FinalCommentsSection>
        </article>
      </ContentContainer>
    </main>
  )
}

//endregion