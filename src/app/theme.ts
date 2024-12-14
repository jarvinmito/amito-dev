import { createTheme, rem } from "@mantine/core";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

const theme = createTheme({
  breakpoints: {
    xs: "40em",
    sm: "48em",
    md: "64em",
    lg: "80em",
    xl: "96em",
  },
  black: "#131319",
  white: "#fefefe",
  primaryColor: "lime",
  fontFamily: spaceGrotesk.style.fontFamily || "Space Grotesk, sans-serif",
  headings: {
    fontFamily: spaceGrotesk.style.fontFamily || "Space Grotesk, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: rem(54) },
      h2: { fontSize: rem(36) },
    },
  },
  fontSizes: {
    md: rem(18),
    lg: rem(36),
    xl: rem(54),
  },
  lineHeights: {
    md: rem(32),
    lg: rem(64),
    xl: rem(96),
  },
});

export default theme;
