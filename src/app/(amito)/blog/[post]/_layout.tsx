import type { Metadata } from "next";
import {
  ActionIcon,
  Box,
  Center,
  MantineProvider,
  SimpleGrid,
  Stack,
  rem,
} from "@mantine/core";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import theme from "@/app/theme";
import FloatingNavigator from "@/app/components/FloatingNavigator";
import { GUTTERS, GUTTERS_SMALL, PADDING, ROUTES } from "@/app/lib/constants";
import Logo from "@/app/components/Logo";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amito blogs",
  description:
    "Amito's documents whether it be blog, studies, endeavors, anything.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MantineProvider theme={theme}>
        <body>
          <main>
            <Center mih="100vh" w="100%" p={PADDING} color="gray.8">
              <SimpleGrid
                spacing={PADDING}
                verticalSpacing={PADDING}
                flex={1}
                style={{ position: "relative" }}
              >
                <Stack
                  justify="space-between"
                  align="flex-start"
                  gap={GUTTERS}
                  maw={{ base: 350, xs: 450, sm: 600 }}
                  style={{ position: "sticky", top: GUTTERS_SMALL, zIndex: 1 }}
                >
                  <div
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    style={{ zIndex: 99, isolation: "isolate" }}
                  >
                    <Logo />
                  </div>
                </Stack>
                <ActionIcon
                  pos="fixed"
                  ml={-54}
                  top={172}
                  component={Link}
                  href={ROUTES.LANDING.BLOG}
                  variant="transparent"
                  c="gray"
                  size={48}
                >
                  <IconArrowLeft style={{ height: rem(36), width: rem(36) }} />
                </ActionIcon>
                <Box pr={{ base: GUTTERS, md: GUTTERS * 3 }}>{children}</Box>
              </SimpleGrid>
            </Center>
            <FloatingNavigator />
          </main>
        </body>
      </MantineProvider>
    </html>
  );
}
