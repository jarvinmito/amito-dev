import type { Metadata } from "next";
import { GOOGLE_ANALYTICS_ID } from "@/app/lib/constants/externals";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Amito — Jan Arvin Mito",
  description:
    "Jan Arvin Mito — senior web product engineer, builder of Singilin, and practical partner for durable web software.",
};

export default function AmitoSegmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
    </>
  );
}
