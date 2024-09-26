//region Entry

import ContentContainer from "@/components/ui/content-container";
import Header, {Heading, Subheading} from "@/app/blog/components/header";

export default function Blog() {
  return (
    <main className="flex-grow">
      <ContentContainer className="py-32">
        <Header>
          <Heading>
            The Blog
          </Heading>
          <Subheading>
            A place where I share interesting and noteworthy self-written articles
          </Subheading>
        </Header>
      </ContentContainer>
    </main>
  )
}

//endregion