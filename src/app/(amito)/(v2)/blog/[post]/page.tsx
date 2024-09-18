import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import {
  Anchor,
  Button,
  Container,
  Group,
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
import HackedText from "@/app/components/Branding/Cyberpunk/HackedText";

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
      <section className="container min-h-screen max-w-3xl mx-auto flex flex-col justify-start gap-8 py-10 px-5 xl:px-0">
        <Stack
          gap={GUTTERS_SMALL}
          align="flex-start"
          pb={GUTTERS}
          component="article"
        >
          <Anchor
            component={Link}
            href={ROUTES.LANDING.BLOG}
            variant="transparent"
            c="gray.6"
          >
            <Group>
              <IconArrowLeft style={{ height: rem(28), width: rem(28) }} />
              <Text>
                <HackedText text="Back to blog" anaglyphOff />
              </Text>
            </Group>
          </Anchor>
          <div>
            <h2 className="anaglyph">{postData.title}</h2>
            <Text c="gray.5">{postData.publish_date}</Text>
          </div>

          <ReactMarkdown>{postData.content}</ReactMarkdown>
        </Stack>
      </section>
      <ScrollUp />
    </TypographyStylesProvider>
  );
}
