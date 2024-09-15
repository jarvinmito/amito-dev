"use client";

import { GUTTERS } from "@/app/lib/constants";
import BrandTitle from "@/app/components/Branding/BrandTitle";
import {
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
import ScrollUp from "@/app/components/ScrollUp/ScrollUp";
import ConvertUISection from "@/app/components/Sections/Services/ConvertUI";
import MitotweeSection from "./Services/Mitotwee";
import EmailServiceSection from "./Services/EmailService";
import HackedText from "@/components/Branding/Cyberpunk/HackedText";
import Button from "@/components/Branding/Cyberpunk/Button";

const HireMeSection = () => {
  const services = [
    // {
    //   title: "Email template design & development",
    //   description: <EmailServiceSection />,
    // },
    {
      title: "Software for sari-sari store owners",
      description: <MitotweeSection />,
    },
    // {
    //   title: "Convert UI to NextJS website",
    //   description: <ConvertUISection />,
    // },
    {
      title: "Custom development",
      description: (
        <Stack align="flex-start">
          <Text>Hire me as a frontend developer on your team.</Text>
          <Button>Connect</Button>
        </Stack>
      ),
    },
  ];

  return (
    <div className="container max-w-3xl mx-auto py-12">
      <Stack gap="xl">
        <h2 className="uppercase">
          <HackedText text="Products & Services" />
        </h2>
        <Text>
          I offer{" "}
          <Text component="span" fw={700}>
            Custom development
          </Text>
          {" from "}
          <Text component="span" fw={700}>
            Landing Pages
          </Text>
          {", "}
          <Text component="span" fw={700}>
            Email Templates
          </Text>
          {", "}
          <Text component="span" fw={700}>
            Micro-SaaS (Software as a Service)
          </Text>{" "}
          and standard{" "}
          <Text component="span" fw={700}>
            Software or Web development
          </Text>{" "}
          service.
        </Text>
        <Text>
          Let me know if you have any questions, send my a message or just hit
          the{" "}
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
                  <p className="anaglyph">{service.title}</p>
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
    </div>
  );
};

export default HireMeSection;
