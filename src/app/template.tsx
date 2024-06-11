"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import {
  ActionIcon,
  Box,
  SimpleGrid,
  Stack,
  em,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useElementSize, useMediaQuery } from "@mantine/hooks";
import { IconArrowLeft } from "@tabler/icons-react";
import {
  GUTTERS,
  GUTTERS_SMALL,
  MIN_HEIGHT,
  PADDING,
  ROUTES,
} from "@/app/lib/constants";
import Logo from "@/app/components/Logo";
import AmitoSection from "@/app/components/Sections/Amito";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { ref, height } = useElementSize();
  const [viewProp, setViewProp] = useState({});

  // Route checks
  const path = usePathname();
  const { post } = useParams();
  const isRootRoute = !post;
  const isHomePage = path === ROUTES.LANDING.HOME;

  const theme = useMantineTheme();
  const isOnBigScreen = useMediaQuery(
    `(min-width: ${em(theme.breakpoints.md)})`
  );

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      offset: 30,
      anchorPlacement: "center-center",
      once: true,
      duration: 300,
    });
    console.log("INITIALIZE AOS");
  }, []);

  useEffect(() => {
    if (!height && isHomePage) setViewProp({ visibleFrom: "md" });
    else setViewProp({ visibleFrom: "base" });
  }, [height]);

  return (
    <SimpleGrid
      cols={isHomePage ? { base: 1, md: 2 } : 1}
      spacing={PADDING}
      verticalSpacing={PADDING}
      flex={1}
      style={{ position: "relative" }}
    >
      {/* LEFT SIDE */}
      <Stack
        justify="space-between"
        align="flex-start"
        gap={GUTTERS}
        h={isHomePage ? MIN_HEIGHT : "auto"}
        maw={{ base: 350, xs: 450, sm: 600 }}
        pb={isHomePage ? 0 : PADDING}
        style={{
          position: isOnBigScreen ? "sticky" : "static",
          top: GUTTERS_SMALL,
          zIndex: 1,
        }}
      >
        <div
          data-aos="fade-in"
          data-aos-duration="1200"
          style={{ zIndex: 99, isolation: "isolate" }}
        >
          <Logo />
        </div>
        {isHomePage && <AmitoSection />}
      </Stack>
      <Stack
        pr={PADDING}
        {...viewProp}
        style={{
          position: "relative",
          zIndex: 2,
          background: isHomePage ? "transparent" : "var(--mantine-color-body)",
        }}
      >
        {/* {!isHomePage ? (
          <Box
            style={{
              position: "absolute",
              top: -64,
              height: 64,
              width: "100%",
              background:
                "linear-gradient(180deg, rgba(253,253,253,0) 0%, var(--mantine-color-body) 90%)",
            }}
          />
        ) : null} */}
        <Box ref={ref}>{children}</Box>
      </Stack>
    </SimpleGrid>
  );
}
