import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amito",
  description:
    "Jan Arvin Mito - Front End Developer and Designer, Amito Software Development Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
