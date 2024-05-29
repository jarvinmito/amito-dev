"use client";

import Link from "next/link";
import { Anchor, Box, Burger, Stack, em, useMantineTheme } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { ROUTES } from "@/constants";
import { usePathname } from "next/navigation";

const Navigator = () => {
  // Get theme
  const theme = useMantineTheme();
  // Toggle for the burger icon
  const [opened, { toggle }] = useDisclosure();

  // Path checker for the active link based on current route
  const path = usePathname();
  const links = [
    { name: "Amito", href: ROUTES.LANDING.HOME },
    { name: "Blog", href: ROUTES.LANDING.BLOG },
    { name: "Experience", href: ROUTES.LANDING.EXP },
    { name: "Hire me", href: ROUTES.LANDING.HIRE },
  ];

  // Check if the current view is on MEDIUM+ screen size
  const isOnBigScreen = useMediaQuery(
    `(min-width: ${em(theme.breakpoints.md)})`
  );

  return (
    <Stack justify="flex-end" align="flex-end" gap={3}>
      {opened || isOnBigScreen ? (
        <>
          {links.map((link, linkIndex) => (
            <div
              key={`link-${linkIndex}`}
              data-aos="fade-up"
              data-aos-delay={50 * (1 + linkIndex)}
            >
              <Anchor
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
            </div>
          ))}
        </>
      ) : (
        <Box h={27 * links.length + 3 * (links.length - 1)} />
      )}
      <Burger
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
        mr="-14"
        hiddenFrom="md"
      />
    </Stack>
  );
};

export default Navigator;
