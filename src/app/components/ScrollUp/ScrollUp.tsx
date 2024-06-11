"use client";
import { GUTTERS, GUTTERS_SMALL, PADDING } from "@/app/lib/constants";
import {
  Affix,
  Button,
  Transition,
  em,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react";

const ScrollUp = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const theme = useMantineTheme();
  const isOnBigScreen = useMediaQuery(
    `(min-width: ${em(theme.breakpoints.md)})`
  );
  return (
    <Affix
      position={{
        bottom: isOnBigScreen ? GUTTERS : GUTTERS_SMALL,
        left: isOnBigScreen ? GUTTERS : GUTTERS_SMALL,
      }}
    >
      <Transition transition="slide-up" mounted={scroll.y > 600}>
        {(transitionStyle) => (
          <Button
            color="black"
            size="md"
            radius="xl"
            pl={11}
            h={48}
            style={transitionStyle}
            onClick={() => scrollTo({ y: 0 })}
            leftSection={
              <IconArrowUp style={{ width: rem(24), height: rem(24) }} />
            }
          >
            Scroll up
          </Button>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollUp;
