import Link from "next/link";
import {
  Button,
  Container,
  Stack,
  Text,
  Title,
  TypographyStylesProvider,
  rem,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowLeft, IconArrowUp } from "@tabler/icons-react";
import ReactMarkdown from "react-markdown";
import { getPostData } from "@/app/lib/blogpost";
import { GUTTERS, GUTTERS_SMALL, PADDING, ROUTES } from "@/app/lib/constants";
import ScrollUp from "@/app/components/ScrollUp/ScrollUp";

export default async function BlogPost({ params }: any) {
  const postData = await getPostData(params.post);

  return (
    <TypographyStylesProvider>
      <Container size="sm" mx={0} px={0} pb={GUTTERS}>
        <Stack gap={GUTTERS_SMALL} align="flex-start" pb={GUTTERS}>
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
          <Title lh={1.18}>{postData.title}</Title>
          <Text>{postData.publish_date}</Text>

          <ReactMarkdown>{postData.content}</ReactMarkdown>
          {/* <div dangerouslySetInnerHTML={{ __html: postData.content }} /> */}
        </Stack>
      </Container>
      <ScrollUp />
    </TypographyStylesProvider>
  );
}
