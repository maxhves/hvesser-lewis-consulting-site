import { ContentContainerNew } from '@/components/ui/content-container'
import { clsx } from 'clsx'
import { dmSans } from '@/app/fonts/fonts'

export default function Introduction() {
  return (
    <section>
      <ContentContainerNew className="gap-4 py-10 md:gap-8 md:py-16">
        <NameTitle />
        <PersonalDescription />
      </ContentContainerNew>
    </section>
  )
}

//region Title

function NameTitle() {
  return (
    <h1 className={clsx(dmSans.className, 'whitespace-pre-wrap text-5xl font-medium text-stone-700 md:text-8xl')}>
      Maximilian{'\n'}Hvesser-Lewis
    </h1>
  )
}

//endregion

//region Description

function PersonalDescription() {
  return (
    <p className="text-lg text-stone-500 md:text-2xl">
      I love helping businesses build a stronger digital presence. With over eight years of full-stack development
      experience, I bring both technical skills and a hands-on, proactive approach to every project. I’m passionate
      about creating solutions that make a real impact.
    </p>
  )
}

//endregion