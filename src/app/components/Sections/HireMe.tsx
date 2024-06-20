"use client";

import { GUTTERS } from "@/app/lib/constants";
import BrandTitle from "@/components/Branding/BrandTitle";
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  Title,
  rem,
} from "@mantine/core";
import { IconDevices, IconSend } from "@tabler/icons-react";
import Link from "next/link";
import ScrollUp from "@/components/ScrollUp/ScrollUp";
import ConvertUISection from "@/components/Sections/Services/ConvertUI";
import MitotweeSection from "./Services/Mitotwee";

const HireMeSection = () => {
  const services = [
    {
      title: "Software for sari-sari store owners",
      description: <MitotweeSection />,
    },
    {
      title: "Convert UI to NextJS website",
      description: <ConvertUISection />,
    },
    {
      title: "Custom development",
      description: (
        <Stack align="flex-start">
          <Text>Hire me as a frontend developer on your team.</Text>
          <Button
            component={Link}
            href="https://forms.gle/Lvb8oRA3r9RzmFvR9"
            target="_blank"
            color="black"
            radius="xl"
            size="md"
            variant="light"
            h={48}
            rightSection={<IconSend />}
          >
            Send me a message
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Container size="sm" mx={0} px={0} pb={GUTTERS}>
      <Stack gap="xl">
        <BrandTitle text="Products & Services" />
        <Text>
          I offer{" "}
          <Text component="span" fw={700}>
            Micro-apps (Software as a Service)
          </Text>{" "}
          and{" "}
          <Text component="span" fw={700}>
            Web development services
          </Text>
          . Let me know if you have any questions, or just hit the{" "}
          <Text component="span" fw={700}>
            Inquire
          </Text>{" "}
          button.
        </Text>
        <Timeline bulletSize={48} lineWidth={1} color="black">
          {services.map((service, serviceIndex) => (
            <Timeline.Item
              title={
                <Title order={2} lh={1} pt={5} pb="lg">
                  <Text
                    size="lg"
                    lh={1}
                    fw={700}
                    variant="gradient"
                    gradient={{ from: "black", to: "white" }}
                  >
                    {service.title}
                  </Text>
                </Title>
              }
              bullet={
                <ThemeIcon size={40} variant="light" radius="xl" color="white">
                  <IconDevices style={{ width: rem(24), height: rem(24) }} />
                </ThemeIcon>
              }
              key={`exp-item-${serviceIndex}`}
            >
              {service.description}
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
      <ScrollUp />
    </Container>
  );
};

export default HireMeSection;
