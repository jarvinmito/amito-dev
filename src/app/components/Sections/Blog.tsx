"use client";
import Link from "next/link";
import {
  Anchor,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  rem,
} from "@mantine/core";
import { GUTTERS_SMALL } from "@/app/lib/constants";
import { IconNews } from "@tabler/icons-react";
import ScrollUp from "@/app/components/ScrollUp/ScrollUp";
import HackedText from "@/components/Branding/Cyberpunk/HackedText";

export interface IBlog {
  title: string;
  description: string;
  image?: string;
  publish_date: string;
  filename: string;
}

export interface BlogSectionProps {
  posts: IBlog[];
  /** e.g. `/v1/blog` or `/blog` */
  blogPathPrefix: string;
}

const BlogSection = ({ posts, blogPathPrefix }: BlogSectionProps) => {
  return (
    <div className="container max-w-3xl mx-auto py-12">
      <Stack justify="center" gap={GUTTERS_SMALL}>
        <h2 className="uppercase">
          <HackedText text="Blog" />
        </h2>
        <Stack>
          <Timeline bulletSize={48} lineWidth={1} color="black">
            {posts.map((blog, blogIndex) => (
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
                    href={`${blogPathPrefix}/${blog.filename}`}
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
