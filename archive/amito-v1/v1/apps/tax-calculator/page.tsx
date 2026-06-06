import { Metadata, ResolvingMetadata } from "next";
import ReactMarkdown from "react-markdown";
import TaxCalculator from "./components/TaxCalculator";
import { getPostData } from "@/app/lib/blogpost";
import type { BlogPostPageProps as BlogProps } from "@/app/lib/types/blog-post";
import { TypographyStylesProvider } from "@mantine/core";

export async function generateMetadata(
  _props: BlogProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const postData = await getPostData("tax-calculator");
  return {
    title: postData.title,
    openGraph: {
      title: postData.title,
      description: postData.teaser_description,
    },
  };
}

export default async function TaxCalculatorPage(_props: BlogProps) {
  const postData = await getPostData("tax-calculator");
  return (
    <TaxCalculator>
      <TypographyStylesProvider>
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </TypographyStylesProvider>
    </TaxCalculator>
  );
}
