"use client";

import Link from "next/link";
import {
  Anchor,
  Box,
  Burger,
  Center,
  Modal,
  Stack,
  em,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { ROUTES } from "@/app/lib/constants";
import { usePathname } from "next/navigation";

const NAV_GAP = 10;

const Navigator = () => {
  // Get theme
  const theme = useMantineTheme();
  // Toggle for the burger icon
  const [opened, { toggle, open, close }] = useDisclosure();

  // Path checker for the active link based on current route
  const path = usePathname();
  const links = [
    { name: "Amito", href: ROUTES.LANDING.HOME },
    { name: "Blog", href: ROUTES.LANDING.BLOG },
    { name: "Experience", href: ROUTES.LANDING.EXP },
    { name: "Services", href: ROUTES.LANDING.SERVICES },
    { name: "Works", href: ROUTES.LANDING.WORKS },
  ];

  // Check if the current view is on MEDIUM+ screen size
  const isOnBigScreen = useMediaQuery(
    `(min-width: ${em(theme.breakpoints.md)})`
  );

  type linkSize = "default" | "large";

  const renderLinkItems = (size: linkSize = "default") =>
    links.map((link, linkIndex) => (
      <div
        key={`link-${linkIndex}`}
        data-aos="fade-up"
        data-aos-delay={50 * (1 + linkIndex)}
      >
        <Anchor
          unstyled
          component={Link}
          href={link.href}
          size={size === "large" ? rem(36) : "md"}
          tt="uppercase"
          underline="never"
          fw={path === link.href ? 700 : 300}
          fz={size === "large" ? rem(36) : "md"}
          c={path === link.href ? "gray.8" : "dark.3"}
          onClick={close}
        >
          {link.name}
        </Anchor>
      </div>
    ));

  return (
    <Stack justify="flex-end" align="flex-end" gap={NAV_GAP} component="nav">
      {opened || isOnBigScreen ? (
        <>{renderLinkItems()}</>
      ) : (
        <Box h={27 * links.length + NAV_GAP * (links.length - 1)} />
      )}
      <Burger
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
        mr="-14"
        hiddenFrom="md"
      />
      <Modal opened={opened && !isOnBigScreen} fullScreen onClose={close}>
        <Center style={{ height: "calc(100vh - 92px)" }}>
          <Stack align="center" justify="center">
            {renderLinkItems("large")}
          </Stack>
        </Center>
      </Modal>
    </Stack>
  );
};

export default Navigator;
