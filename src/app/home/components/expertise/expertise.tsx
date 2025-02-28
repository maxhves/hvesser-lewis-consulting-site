import { ContentContainerNew } from '@/components/ui/content-container'
import SectionHeading from '@/app/home/components/common/section-heading'
import CodeEditorCard, {
  FunctionName,
  Keyword,
  StringLiteral,
  Variable,
} from '@/app/home/components/expertise/components/code-editor-card'

export function Expertise() {
  return (
    <section>
      <ContentContainerNew className="pt-16">
        <SectionHeading>You&apos;ll catch me doing a combo of these things</SectionHeading>
        <div className="py-10 md:py-16">
          <div className="flex flex-col gap-5 border-y border-stone-200 md:flex-row">
            <CodeEditorCard sampleLabel="MobileDevelopment.kt">
              <MobileDevelopmentSample />
            </CodeEditorCard>
            <CodeEditorCard sampleLabel="web-development.ts">
              <WebDevelopmentSample />
            </CodeEditorCard>
          </div>
        </div>
      </ContentContainerNew>
    </section>
  )
}

//region Mobile Development Sample

function MobileDevelopmentSample() {
  return (
    <>
      <Keyword>object</Keyword> MobileDevelopment &#123;{'\n'}
      {'\t'}
      <Keyword>val</Keyword> <Variable>platforms</Variable> = <FunctionName>listOf</FunctionName>({'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>Android</StringLiteral>,{'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>iOS</StringLiteral>
      {'\n'}
      {'\t'}){'\n'}
      {'\t'}
      <Keyword>val</Keyword> <Variable>languages</Variable> = <FunctionName>listOf</FunctionName>({'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>Kotlin</StringLiteral>,{'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>Java</StringLiteral>,{'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>Swift</StringLiteral>,{'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>Objective-C</StringLiteral>,{'\n'}
      {'\t'}){'\n'}&#125;
    </>
  )
}

//endregion

//region Web Development Sample

function WebDevelopmentSample() {
  return (
    <>
      <Keyword>const</Keyword> WebDevelopment = &#123;{'\n'}
      {'\t'}
      <Variable>languages</Variable>: [{'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>TypeScript</StringLiteral>,{'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>JavaScript</StringLiteral>
      {'\n'}
      {'\t'}],{'\n'}
      {'\t'}
      <Variable>frameworks</Variable>: [{'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>React</StringLiteral>,{'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>Next.js</StringLiteral>,{'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>Express.js</StringLiteral>,{'\n'}
      {'\t'}
      {'\t'}
      <StringLiteral>SvelteKit</StringLiteral>,{'\n'}
      {'\t'}]{'\n'}&#125;
    </>
  )
}

//endregion
