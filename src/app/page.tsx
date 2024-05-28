"use client";

import Logo from "@/components/brand/logo/logo";
import { ROUTES } from "@/constants/routes";
import {
  ActionIcon,
  Affix,
  Anchor,
  Center,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  Transition,
  rem,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

import GoogleLogo from "@/public/google-logo.svg";
import LinkedInLogo from "@/public/linkedin-logo.svg";
import Image from "next/image";

const GUTTERS = 60;

export default function Home() {
  const { height } = useViewportSize();
  const heightConstraints = height - GUTTERS * 2;
  const path = usePathname();

  const links = [
    { name: "Amito", href: ROUTES.LANDING.HOME },
    { name: "Blog", href: ROUTES.LANDING.BLOG },
    { name: "Experience", href: ROUTES.LANDING.EXP },
    { name: "Hire me", href: ROUTES.LANDING.HIRE },
  ];

  return (
    <main>
      <Center mih="100vh" w="100%" p={GUTTERS} color="gray.8">
        <Group gap={GUTTERS} flex={1} justify="space-between">
          {/* LEFT SIDE */}
          <Stack
            justify="space-between"
            gap={GUTTERS}
            maw={300}
            mih={heightConstraints}
          >
            <Logo />
            <Stack>
              <Title order={1} fw={300} size="h2">
                <Flex gap={9}>
                  I'm{" "}
                  <Text fw={700} inherit>
                    Arvin
                  </Text>
                </Flex>
              </Title>
              <Title order={2} size="h1">
                <Text
                  inherit
                  variant="gradient"
                  gradient={{ from: "blue.8", to: "lime.4", deg: 90 }}
                  tt="uppercase"
                  lh={rem(54)}
                >
                  Frontend
                </Text>
                <Text
                  inherit
                  variant="gradient"
                  gradient={{ from: "lime.4", to: "blue.8", deg: 90 }}
                  tt="uppercase"
                  lh={rem(54)}
                >
                  Developer
                </Text>
              </Title>
              <Text size="md" fw={300}>
                Based in Olongapo City Zambales, Philippines 2200
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text size="md" fw={300}>
                Jan Arvin Mito
              </Text>
              <Text size="md" fw={300}>
                mito.jan.arvin@gmail.com
              </Text>
              <Text size="md" fw={300}>
                +63 956 764 2749
              </Text>
            </Stack>
          </Stack>
          {/* RIGHT SIDE */}
          <Affix position={{ bottom: GUTTERS, right: GUTTERS }}>
            <Transition transition="slide-left" mounted={true}>
              {(transitionStyle) => (
                <Stack
                  mih="100vh"
                  style={transitionStyle}
                  justify="space-between"
                  align="flex-end"
                  gap={GUTTERS * 2}
                >
                  <Stack
                    justify="flex-end"
                    align="flex-end"
                    flex={1}
                    gap={GUTTERS / 2}
                  >
                    {/* EXTRA */}
                    <Divider orientation="vertical" flex={1} ml="100%" />
                    {/* SOCMEDS */}
                    <Stack mr="-14">
                      <ActionIcon variant="transparent">
                        <Image src={LinkedInLogo} alt="LinkedIn Profile" />
                      </ActionIcon>
                      <ActionIcon variant="transparent">
                        <Image src={GoogleLogo} alt="Google" />
                      </ActionIcon>
                    </Stack>
                  </Stack>
                  {/* ANCHORS */}
                  <Stack justify="flex-end" align="flex-end" gap={0}>
                    {links.map((link, linkIndex) => (
                      <Anchor
                        key={`link-${linkIndex}`}
                        component={Link}
                        href={link.href}
                        size="md"
                        tt="uppercase"
                        underline="never"
                        unstyled
                        fw={path === link.href ? 700 : 300}
                        c={path === link.href ? "gray.8" : "dark.3"}
                      >
                        {link.name}
                      </Anchor>
                    ))}
                  </Stack>
                </Stack>
              )}
            </Transition>
          </Affix>
        </Group>
      </Center>
    </main>
  );
}
