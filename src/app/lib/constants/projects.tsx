import { StaticImageData } from "next/image";
import { Group } from "@mantine/core";

import ThumbK from "@/public/images/thumbnail-k.png";
import ThumbLanding from "@/public/images/thumbnail-landing-page-service.png";
import ThumbOC from "@/public/images/thumbnail-outcrate.png";
import ThumbMitotwee from "@/public/images/thumbnail-mitotwee.png";
import ThumbTips from "@/public/images/thumbnail-mitotwee-tips.png";
import ThumbEConsulta from "@/public/images/thumbnail-econsulta.png";

import DesktopK from "@/public/images/landing-page-k-desktop.png";
import DesktopLanding from "@/public/images/landing-page-service-desktop.png";
import DesktopEConsulta from "@/public/images/econsulta-desktop.png";

import MobileK from "@/public/images/landing-page-k-mobile.png";
import MobileLanding from "@/public/images/landing-page-service-mobile.png";
import MobileEconsulta from "@/public/images/econsulta-mobile.png";

import {
  IconDeviceDesktop,
  IconDeviceMobile,
  IconExternalLink,
} from "@tabler/icons-react";

export const CAROUSEL_AUTOPLAY_DELAY = 6000;

export interface IPortfolio {
  title: string | JSX.Element;
  description: string;
  image: string | StaticImageData;
  imageAlt?: string;
  desktop?: string | StaticImageData;
  mobile?: string | StaticImageData;
  link?: string;
}

export const PROJECTS: IPortfolio[] = [
  // {
  //   title: (
  //     <Group align="center" justify="space-between">
  //       Bucket List App <IconExternalLink />
  //     </Group>
  //   ),
  //   description:
  //     "I created bucket list app. Achieving your goals should be fun.",
  //   image: ThumbOC,
  //   imageAlt: "Tackets",
  //   link: "/apps/bucket-list",
  // },
  {
    title: "Unbranded Landing Page",
    description:
      "A landing page created for a micro SaaS app that caters online sellers selling on facebook.",
    image: ThumbK,
    imageAlt: "K - Sales management micro SaaS",
    desktop: DesktopK,
    mobile: MobileK,
  },
  {
    title: "Landing Page Service",
    description: "A landing page for a web design and development service.",
    image: ThumbLanding,
    imageAlt: "Amito Landing Page Service",
    desktop: DesktopLanding,
    mobile: MobileLanding,
  },
  {
    title: "eConsulta",
    description: "A mobile and desktop web app for online consultations.",
    image: ThumbEConsulta,
    imageAlt: "eConsulta Online Consultations",
    desktop: DesktopEConsulta,
    mobile: MobileEconsulta,
  },
  {
    title: (
      <Group align="center" justify="space-between">
        Hybrid Landing Page <IconExternalLink />
      </Group>
    ),
    description:
      "A hybrid landing page with article-first approach to provide free value information.",
    image: ThumbTips,
    imageAlt: "Mitotwee Tips",
    link: "https://mitotwee.com/tips-for-your-sari-sari-store",
  },
  {
    title: (
      <Group align="center" justify="space-between">
        Mitotwee Landing Page <IconExternalLink />
      </Group>
    ),
    description:
      "Promoting an easy to use micro SaaS app for sari-sari store owners in the Philippines.",
    image: ThumbMitotwee,
    imageAlt: "Mitotwee",
    link: "https://mitotwee.com",
  },
  {
    title: (
      <Group align="center" justify="space-between">
        Outcrate Website <IconExternalLink />
      </Group>
    ),
    description:
      "Outcrate's purpose is to serve businesses with their software development challenges.",
    image: ThumbOC,
    imageAlt: "Outcrate Website",
    link: "https://outcrate.xyz",
  },
];
