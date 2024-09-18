"use client";

import { useState } from "react";
import NextImage from "next/image";
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  Image,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ScrollUp from "@/app/components/ScrollUp/ScrollUp";

import { IconDeviceDesktop, IconDeviceMobile } from "@tabler/icons-react";
import { IPortfolio, PROJECTS } from "@/app/lib/constants/projects";
import HackedText from "@/components/Branding/Cyberpunk/HackedText";
import ProjectCard from "@/components/Cards/ProjectCard";

const WorksSection = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState<
    IPortfolio | undefined
  >();
  const [viewMode, setViewMode] = useState<"mobile" | "desktop">("desktop");

  const handleCardClick = (p: IPortfolio) => {
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
    <div className="container max-w-3xl mx-auto py-12">
      <Stack gap="xl">
        <h2 className="uppercase">
          <HackedText text="Projects" />
        </h2>
        <Text>
          All my works here are from concepts and potential freelance.
          Experience works are NDAs in nature, but I will add articles about
          them soon.
        </Text>
        <Grid columns={2} gutter={30}>
          {PROJECTS.map((p, pi) => (
            <Grid.Col key={`portfolio-${pi}`} span={{ base: 2, md: 1 }}>
              <ProjectCard {...p} onClick={() => handleCardClick(p)} />
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
    </div>
  );
};

export default WorksSection;
