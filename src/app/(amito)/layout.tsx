import type { Metadata } from "next";
import {
  GOOGLE_ADSENSE_ID,
  GOOGLE_ANALYTICS_ID,
} from "@/app/lib/constants/externals";
import { GoogleAnalytics } from "@next/third-parties/google";
import GoogleAdSense from "@/app/components/External/GoogleAdSense";

export const metadata: Metadata = {
  title: "Amito",
  description:
    "Jan Arvin Mito — Front-end engineer focused on clear interfaces and dependable product execution.",
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
      <GoogleAdSense pId={GOOGLE_ADSENSE_ID} />
    </>
  );
}
