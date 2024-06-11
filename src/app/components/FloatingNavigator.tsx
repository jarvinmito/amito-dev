"use client";

import {
  Affix,
  Box,
  Divider,
  Stack,
  Transition,
  em,
  useMantineTheme,
} from "@mantine/core";
import Socials from "@/app/components/Socials";
import Navigator from "@/app/components/Navigator";
import { GUTTERS, PADDING } from "@/app/lib/constants";
import { useMediaQuery } from "@mantine/hooks";

const FloatingNavigator = () => {
  const theme = useMantineTheme();
  const isOnBigScreen = useMediaQuery(
    `(min-width: ${em(theme.breakpoints.md)})`
  );
  const position = isOnBigScreen
    ? { bottom: PADDING.sm, right: PADDING.sm }
    : { bottom: PADDING.base, right: PADDING.base };
  return (
    <Affix position={position}>
      <Transition transition="slide-left" mounted={true}>
        {(transitionStyle) => (
          <Stack
            h={"100vh"}
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
              {/* <Box mr="-14">
                <ColorSchemeToggle />
              </Box> */}
              {/* EXTRA */}
              <Divider orientation="vertical" flex={1} ml="100%" />
              {/* SOCMEDS */}
              <Stack mr="-17">
                <Socials />
              </Stack>
            </Stack>
            {/* ANCHORS */}
            <Navigator />
          </Stack>
        )}
      </Transition>
    </Affix>
  );
};

export default FloatingNavigator;
