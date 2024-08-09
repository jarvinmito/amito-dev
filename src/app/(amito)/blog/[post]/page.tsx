import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import {
  Button,
  Container,
  Stack,
  Text,
  TypographyStylesProvider,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import ReactMarkdown from "react-markdown";
import { getPostData } from "@/app/lib/blogpost";
import { GUTTERS, GUTTERS_SMALL, PADDING, ROUTES } from "@/app/lib/constants";
import ScrollUp from "@/app/components/ScrollUp/ScrollUp";
import BrandTitle from "@/app/components/Branding/BrandTitle";

type Props = {
  params: { post: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const postData = await getPostData(params.post);
  return {
    title: postData.title,
    openGraph: {
      title: postData.title,
      description: postData.teaser_description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const postData = await getPostData(params.post);

  return (
    <TypographyStylesProvider>
      <Container size="sm" mx={0} px={0} pb={GUTTERS}>
        <Stack
          gap={GUTTERS_SMALL}
          align="flex-start"
          pb={GUTTERS}
          component="article"
        >
          <Button
            component={Link}
            href={ROUTES.LANDING.BLOG}
            variant="transparent"
            leftSection={
              <IconArrowLeft style={{ height: rem(36), width: rem(36) }} />
            }
          >
            <Text>Back to blogs</Text>
          </Button>
          <BrandTitle>{postData.title}</BrandTitle>
          <Text>{postData.publish_date}</Text>

          <ReactMarkdown>{postData.content}</ReactMarkdown>
        </Stack>
      </Container>
      <ScrollUp />
    </TypographyStylesProvider>
  );
}
