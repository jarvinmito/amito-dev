"use client";

import {
  useMantineColorScheme,
  ActionIcon,
  rem,
  Affix,
  useMantineTheme,
  em,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { PADDING } from "@/app/lib/constants";

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isOnBigScreen = useMediaQuery(
    `(min-width: ${em(theme.breakpoints.md)})`
  );
  const position = isOnBigScreen
    ? { bottom: PADDING.sm, left: PADDING.sm }
    : { bottom: PADDING.base, left: PADDING.base };

  return (
    <Affix position={position}>
      <ActionIcon
        variant="transparent"
        c="var(--mantine-color-text)"
        size="lg"
        radius="xl"
        onClick={() =>
          setColorScheme(colorScheme === "light" ? "dark" : "light")
        }
      >
        {colorScheme === "light" ? (
          <IconMoon style={{ width: rem(28), height: rem(28) }} />
        ) : (
          <IconSun style={{ width: rem(28), height: rem(28) }} />
        )}
      </ActionIcon>
    </Affix>
  );
}
