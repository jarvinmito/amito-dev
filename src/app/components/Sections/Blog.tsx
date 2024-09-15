"use client";
import Link from "next/link";
import {
  Anchor,
  Container,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  rem,
} from "@mantine/core";
import { GUTTERS, GUTTERS_SMALL, ROUTES } from "@/app/lib/constants";
import { IconNews } from "@tabler/icons-react";
import BrandTitle from "@/app/components/Branding/BrandTitle";
import ScrollUp from "@/app/components/ScrollUp/ScrollUp";
import HackedText from "@/components/Branding/Cyberpunk/HackedText";

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

const BlogSection = () => {
  const blogList: IBlog[] = [
    {
      title: "Level up your sari-sari store",
      description:
        "Featuring the launch of my latest work, a micro app for store owners, Mitotwee. Manage inventory and monitor sales using the app, goodbye to manual pen and paper listing.",
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
    <div className="container max-w-3xl mx-auto py-12">
      <Stack justify="center" gap={GUTTERS_SMALL}>
        <h2 className="uppercase">
          <HackedText text="Blog" />
        </h2>
        <Stack>
          <Timeline bulletSize={48} lineWidth={1} color="black">
            {blogList.map((blog, blogIndex) => (
              <Timeline.Item
                key={`blog-${blogIndex}`}
                bullet={
                  <ThemeIcon
                    size={40}
                    variant="light"
                    radius="xl"
                    color="white"
                  >
                    <IconNews style={{ width: rem(24), height: rem(24) }} />
                  </ThemeIcon>
                }
              >
                <Stack gap="xs" pb="xl">
                  <Anchor
                    component={Link}
                    href={`${ROUTES.LANDING.BLOG}/${blog.filename}`}
                    c="white"
                  >
                    <Text size="lg" lh={1}>
                      {blog.title}
                    </Text>
                  </Anchor>
                  <Stack>
                    <Text className="text-gray-400">{blog.publish_date}</Text>
                    <Text className="text-gray-500">{blog.description}</Text>
                  </Stack>
                </Stack>
              </Timeline.Item>
            ))}
          </Timeline>
        </Stack>
      </Stack>
      <ScrollUp />
    </div>
  );
};

export default BlogSection;
