import { Metadata, ResolvingMetadata } from "next";
import ReactMarkdown from "react-markdown";
import TaxCalculator from "./components/TaxCalculator";
import { getPostData } from "@/app/lib/blogpost";
import { BlogProps } from "@/app/(amito)/(v2)/blog/[post]/page";
import { TypographyStylesProvider } from "@mantine/core";

export async function generateMetadata(
  { params, searchParams }: BlogProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const postData = await getPostData("tax-calculator");
  return {
    title: postData.title,
    openGraph: {
      title: postData.title,
      description: postData.teaser_description,
    },
  };
}

export default async function TaxCalculatorPage({ params }: BlogProps) {
  const postData = await getPostData("tax-calculator");
  return (
    <TaxCalculator>
      <TypographyStylesProvider>
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </TypographyStylesProvider>
    </TaxCalculator>
  );
}
