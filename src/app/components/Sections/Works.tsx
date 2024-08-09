"use client";

import { useState } from "react";
import NextImage, { StaticImageData } from "next/image";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Drawer,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import BrandTitle from "@/app/components/Branding/BrandTitle";
import ScrollUp from "@/app/components/ScrollUp/ScrollUp";
import { GUTTERS } from "@/app/lib/constants";

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

interface Portfolio {
  title: string | JSX.Element;
  description: string;
  image: string | StaticImageData;
  imageAlt?: string;
  desktop?: string | StaticImageData;
  mobile?: string | StaticImageData;
  link?: string;
}

const WorksSection = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState<
    Portfolio | undefined
  >();
  const [viewMode, setViewMode] = useState<"mobile" | "desktop">("desktop");

  const portfolio: Portfolio[] = [
    {
      title: (
        <Group align="center" justify="space-between">
          Bucket List App <IconExternalLink />
        </Group>
      ),
      description:
        "I created bucket list app. Achieving your goals should be fun.",
      image: ThumbOC,
      imageAlt: "Tackets",
      link: "/apps/bucket-list",
    },
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

  const handleCardClick = (p: Portfolio) => {
    if (p.link) {
      window.open(p.link, "_blank");
      return;
    }

    setSelectedPortfolio(p);
    open();
  };

  const handleDrawerClose = () => {
    setSelectedPortfolio(undefined);
    close();
  };

  return (
    <Container size="sm" mx={0} px={0} pb={GUTTERS}>
      <Stack gap="xl">
        <BrandTitle text="My Recent Works" />
        <Grid columns={2} gutter={30}>
          {portfolio.map((p, pi) => (
            <Grid.Col key={`portfolio-${pi}`} span={{ base: 2, md: 1 }}>
              <Card
                shadow="md"
                padding="lg"
                radius="xl"
                h="100%"
                style={{ cursor: "pointer" }}
                onClick={() => handleCardClick(p)}
              >
                <Card.Section>
                  <Image
                    component={NextImage}
                    src={p.image}
                    alt={p.imageAlt || "Thumbnail"}
                    priority
                    placeholder="blur"
                  />
                </Card.Section>
                <Stack pt="lg">
                  <Title size="h3">{p.title}</Title>
                  <Text>{p.description}</Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
      <ScrollUp />
      <Drawer
        opened={opened && Boolean(selectedPortfolio?.title)}
        position="bottom"
        size="85%"
        onClose={handleDrawerClose}
        withCloseButton={false}
      >
        {selectedPortfolio?.title ? (
          <Container mx="auto" p="lg">
            <Stack gap="xl" align="center">
              <Title fz={{ base: "h3", md: "h2" }} ta="center">
                {selectedPortfolio.title}
              </Title>
              <ActionIcon.Group mx="auto">
                <ActionIcon
                  color="black"
                  size={54}
                  pl={2}
                  radius="xl"
                  variant={viewMode === "desktop" ? "filled" : "light"}
                  onClick={() => setViewMode("desktop")}
                >
                  <IconDeviceDesktop
                    style={{ width: rem(28), height: rem(28) }}
                  />
                </ActionIcon>
                <ActionIcon
                  color="black"
                  size={54}
                  pr={2}
                  radius="xl"
                  variant={viewMode === "mobile" ? "filled" : "light"}
                  onClick={() => setViewMode("mobile")}
                >
                  <IconDeviceMobile
                    style={{ width: rem(28), height: rem(28) }}
                  />
                </ActionIcon>
              </ActionIcon.Group>
              <Box
                miw={viewMode === "desktop" ? "100%" : rem(360)}
                w="100%"
                maw={viewMode === "desktop" ? rem(1200) : rem(414)}
                style={{
                  border: "1px solid var(--mantine-color-gray-4)",
                  borderRadius: "32px",
                  overflow: "hidden",
                }}
              >
                {viewMode === "desktop" ? (
                  <Image
                    key="desktop"
                    component={NextImage}
                    src={selectedPortfolio.desktop}
                    alt={`${selectedPortfolio.title} for desktop`}
                    w="100%"
                    priority
                    placeholder="blur"
                  />
                ) : (
                  <Image
                    key="mobile"
                    component={NextImage}
                    src={selectedPortfolio.mobile}
                    alt={`${selectedPortfolio.title} for mobile`}
                    w="100%"
                    priority
                    placeholder="blur"
                  />
                )}
              </Box>
              <Button
                color="black"
                radius="xl"
                size="md"
                variant="light"
                h={48}
                onClick={handleDrawerClose}
              >
                Close
              </Button>
            </Stack>
          </Container>
        ) : null}
      </Drawer>
    </Container>
  );
};

export default WorksSection;
