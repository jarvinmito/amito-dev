"use client";
import Link from "next/link";
import {
  Anchor,
  Container,
  List,
  Stack,
  ThemeIcon,
  Title,
  rem,
} from "@mantine/core";
import { GUTTERS_SMALL, ROUTES } from "@/app/lib/constants";
import { IconArticle } from "@tabler/icons-react";
import BrandTitle from "../Branding/BrandTitle";

export interface IBlog {
  title: string;
  description: string;
  image?: string;
  publish_date: string;
  filename: string;
}
export interface IMarkdownData {
  data?: any;
  title: string;
  publish_date?: string;
  content: string;
  teaser_description?: string;
  teaser_image?: string;
}

export default function Blog() {
  const blogList: IBlog[] = [
    {
      title: "Level up your sari-sari store",
      description: "Mitotwee: Your Sari-Sari Store's Digital Upgrade",
      publish_date: "June 10, 2024",
      filename: "mitotwee-launch",
    },
    {
      title:
        "PSA to all sari-sari store owners: Stop torturing yourself with math!",
      description:
        "Listen, we get it. You're the backbone of the neighborhood, the supplier of midnight snacks, and the keeper of the cold Coke. But does that mean you should be stuck doing inventory like it's 1999? 👵🧮",
      publish_date: "May 31, 2024",
      filename: "to-all-sari-sari-store-owners",
    },
  ];

  return (
    <Container size="sm" px={0} mx={0}>
      <Stack justify="center" gap={GUTTERS_SMALL}>
        <BrandTitle>Latest news</BrandTitle>
        <Stack>
          <List spacing="xl">
            {blogList.map((blog, blogIndex) => (
              <List.Item
                key={`blog-${blogIndex}`}
                icon={
                  <ThemeIcon size={48} variant="subtle" radius="xl">
                    <IconArticle style={{ width: rem(32), height: rem(32) }} />
                  </ThemeIcon>
                }
              >
                <Anchor
                  component={Link}
                  href={`${ROUTES.LANDING.BLOG}/${blog.filename}`}
                >
                  <Title order={2}>{blog.title}</Title>
                </Anchor>
              </List.Item>
            ))}
          </List>
        </Stack>
      </Stack>
    </Container>
  );
}
