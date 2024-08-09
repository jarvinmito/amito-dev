import { MantineProvider } from "@mantine/core";
import theme from "@/theme";
import { GOOGLE_ANALYTICS_ID } from "./lib/constants";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MantineProvider theme={theme} defaultColorScheme="light">
        <body>
          <main>{children}</main>
          <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
        </body>
      </MantineProvider>
    </html>
  );
}
