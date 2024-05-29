import { useMantineColorScheme, ActionIcon, rem } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return colorScheme === "light" ? (
    <ActionIcon
      variant="transparent"
      c="dark.5"
      onClick={() => setColorScheme("dark")}
    >
      <IconMoon style={{ width: rem(20), height: rem(20) }} />
    </ActionIcon>
  ) : (
    <ActionIcon
      variant="transparent"
      c="gray.1"
      onClick={() => setColorScheme("light")}
    >
      <IconSun style={{ width: rem(20), height: rem(20) }} />
    </ActionIcon>
  );
}
