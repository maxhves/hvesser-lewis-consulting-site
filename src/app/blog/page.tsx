import ContentContainer from "@/components/ui/content-container";
import BlogHeader from "@/app/blog/components/blog-header";
import ArticleList from "@/app/blog/components/article-list";
import ArticleCard, {
  ArticleCardBody,
  ArticleCardDate,
  ArticleCardHeader, ArticleCardText,
  ArticleCardTitle, ArticleImage
} from "@/app/blog/components/article-card";
import {PageDescription, PageHeading} from "@/components/ui/header";

import bangkokStreetImage from "../../../public/images/blog/bangkok-street.webp"

//region Entry

export default function Blog() {
  return (
    <main className="flex-grow">
      <BlogHeader>
        <PageHeading className="text-white">
          Beyond Code: Hvesser-Lewis Insights
        </PageHeading>
      </BlogHeader>
      <ContentContainer>
        <PageDescription className="mt-8">
          Join me in exploring a range of self-written articles covering diverse topics, from technology to travel. I
          delve into subjects that reflect both my personal passions and professional interests.
        </PageDescription>

        <ArticleList>
          <ArticleCard>
            <ArticleImage image={bangkokStreetImage} />
            <ArticleCardText>
              <ArticleCardHeader>
                <ArticleCardTitle href="/blog/thailand-how-to-extend-a-tourist-visa-by-30-days">
                  Thailand: How to Extend a Tourist Visa by 30 Days
                </ArticleCardTitle>
                <ArticleCardDate>
                  September 26, 2024
                </ArticleCardDate>
              </ArticleCardHeader>
              <ArticleCardBody>
                A straightforward guide for travelers on a tourist visa, detailing how to extend it by 30 days,
                along with helpful tips and key things to watch out for.
              </ArticleCardBody>
            </ArticleCardText>
          </ArticleCard>
        </ArticleList>
      </ContentContainer>
    </main>
  )
}

//endregion