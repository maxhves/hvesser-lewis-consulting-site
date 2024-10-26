import ContentContainer from "@/components/ui/content-container";
import Header, {Heading, Subheading} from "@/app/blog/components/header";
import ArticleList from "@/app/blog/components/article-list";
import ArticleCard, {
  ArticleCardBody,
  ArticleCardCategoryPill,
  ArticleCardDate,
  ArticleCardHeader,
  ArticleCardPreviewText,
  ArticleCardTitle
} from "@/app/blog/components/article-card";
import {notFound} from "next/navigation";

//region Entry

export default function Blog() {
  return (
    <main className="flex-grow">
      <ContentContainer className="py-16 sm:py-32">
        <Header>
          <Heading>
            The Blog
          </Heading>
          <Subheading>
            A place where I share interesting and noteworthy self-written articles
          </Subheading>
        </Header>

        <ArticleList>
          <ArticleCard>
            <ArticleCardHeader>
              <ArticleCardDate>
                Sep 26, 2024
              </ArticleCardDate>
              <ArticleCardCategoryPill>
                Travel
              </ArticleCardCategoryPill>
            </ArticleCardHeader>
            <ArticleCardBody href="/blog/how-to-extend-a-thailand-tourist-visa-by-30-days">
              <ArticleCardTitle>
                How To Extend A Thailand Tourist Visa By 30 Days
              </ArticleCardTitle>
              <ArticleCardPreviewText>
                If, like me, you&apos;ve recently taken advantage of Thailand&apos;s 60-day visa exemption or 60-day
                Visa on Arrival, you might now be wondering how to extend your stay by an additional 30 days. If so,
                you&apos;ve come to the right place.
              </ArticleCardPreviewText>
            </ArticleCardBody>
          </ArticleCard>
        </ArticleList>
      </ContentContainer>
    </main>
  )
}

//endregion