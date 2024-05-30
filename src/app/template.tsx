"use client";

import { PADDING, ROUTES } from "@/constants";
import { Box, Stack } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { ref, height } = useElementSize();
  const [viewProp, setViewProp] = useState({});
  const path = usePathname();

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
    if (!height) setViewProp({ visibleFrom: "md" });
    else setViewProp({ visibleFrom: "base" });
  }, [height]);
  return (
    <Stack
      pr={PADDING}
      {...viewProp}
      style={{
        position: "relative",
        zIndex: 2,
        background:
          path === ROUTES.LANDING.HOME
            ? "transparent"
            : "var(--mantine-color-body)",
      }}
    >
      {path !== ROUTES.LANDING.HOME ? (
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
      ) : null}
      <Box ref={ref}>{children}</Box>
    </Stack>
  );
}
