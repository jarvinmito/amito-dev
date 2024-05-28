import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import theme from "@/app/theme";

export const metadata: Metadata = {
  title: "Amito",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MantineProvider theme={theme}>
        <body>{children}</body>
      </MantineProvider>
    </html>
  );
}
