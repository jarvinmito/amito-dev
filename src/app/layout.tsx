// import { MantineProvider } from "@mantine/core";
// import theme from "@/theme";
import { GOOGLE_ANALYTICS_ID } from "./lib/constants";
import { GoogleAnalytics } from "@next/third-parties/google";

import "@/app/globals.css";
import { MantineProvider } from "@mantine/core";
import theme from "@/theme";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";

import GoogleAdSense from "./components/External/GoogleAdSense";
import { GOOGLE_ADSENSE_ID } from "./lib/utils/constants";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* <MantineProvider theme={theme} defaultColorScheme="dark"> */}
      <body className="bg-white dark:bg-black text-black dark:text-white font-space">
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <main>{children}</main>
        </MantineProvider>
        <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
        <GoogleAdSense pId={GOOGLE_ADSENSE_ID} />
      </body>
      {/* </MantineProvider> */}
    </html>
  );
}
