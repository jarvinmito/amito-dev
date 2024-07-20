"use client";
import {
  Anchor,
  Box,
  Container,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  Title,
  rem,
} from "@mantine/core";
import BrandTitle from "@/components/Branding/BrandTitle";
import ScrollUp from "@/components/ScrollUp/ScrollUp";
import { GUTTERS } from "@/app/lib/constants";
import Link from "next/link";
import { IconBuilding, IconBuildingArch } from "@tabler/icons-react";

const ExperiencesSection = () => {
  const exp = [
    {
      title: "VTVL",
      titleProps: {
        variant: "gradient",
        gradient: { from: "#1b369a", to: "#f9623b" },
      },
      href: "https://vtvl.io",
      role: "Frontend Developer -- Full time",
      date: "Sep 2022 - Dec 2023 · 1 yr 4 mos",
      location: "Singapore, Singapore · Remote",
      description: [
        "Our purpose is to help Web3 investors in their token management by automating token vesting and distribution.",
        "Collaborated closely with design and development teams to deliver all front-end elements of the marketing website.",
        "My role focused on creating a compelling UI and enhancing the web app's overall user experience.",
        "Improved development efficiency by automating our repository workflows.",
      ],
    },
    {
      title: "Mable",
      titleProps: {
        variant: "gradient",
        gradient: { from: "#f56b0c", to: "#f58e47" },
      },
      href: "https://mable.com.au",
      role: "Frontend Developer -- Full time",
      date: "Dec 2021 - Sep 2022 · 10 mos",
      location: "Sydney, New South Wales, Australia · Remote",
      description: [
        "Off-shore Frontend Engineer responsible for Mable's Web and Mobile application tailored for Support worker industry in Australia.",
        "Looking after all features and providing responsive and highly accessible user interface.",
      ],
    },
    {
      title: "Yondu, Inc.",
      titleProps: {
        variant: "gradient",
        gradient: { from: "#7e1baa", to: "#3f0e55" },
      },
      href: "https://www.yondu.com/",
      role: "Solutions Architect -- Full time",
      date: "Jan 2020 - Jun 2021 · 1 yr 6 mos",
      location: "BGC Taguig, Philippines · On-site",
      description: [
        "Trained and Certified Solutions Architect (AWS SolArch Associate).",
        "Solutions Architect for an OTT (over-the-top) Platform offering video streaming service to Philippine market.",
      ],
    },
    {
      title: "Yondu, Inc.",
      titleProps: {
        variant: "gradient",
        gradient: { from: "#7e1baa", to: "#3f0e55" },
      },
      href: "https://www.yondu.com/",
      role: "Frontend Development Lead -- Full time",
      date: "Feb 2017 - Dec 2019 · 2 yrs 11 mos",
      location: "BGC Taguig, Philippines · On-site",
      description: [
        "Lead the front-end development aspect for delivering WiFi Captive Portal Platform that serves multiple businesses offering wifi captive portals in their establishments.",
        "My best work and solution for white-label and custom captive portals using configuration-based theming which make development, testing and deployment of captive portals swift and requires less effort than the previous process.",
      ],
    },
    {
      title: "Yondu, Inc.",
      titleProps: {
        variant: "gradient",
        gradient: { from: "#7e1baa", to: "#3f0e55" },
      },
      href: "https://www.yondu.com/",
      role: "UXD Team Capability Lead -- Full time",
      date: "Oct 2016 - Feb 2017 · 5 mos",
      location: "BGC Taguig, Philippines · On-site",
      description: [
        "Acted as an officer-in-charge as a User Experience Design Team Capability Lead to serve our ongoing projects.",
        "Review Technical Pre-sales estimates on their proposals.",
        "Monitor team utilization to ensure resources are always productive.",
        "Responsible for other front-end development tasks",
      ],
    },
    {
      title: "Yondu, Inc.",
      titleProps: {
        variant: "gradient",
        gradient: { from: "#7e1baa", to: "#3f0e55" },
      },
      href: "https://www.yondu.com/",
      role: "UX/UI Designer / Frontend Developer -- Full time",
      date: "Oct 2015 - Oct 2016 · 1 yr 1 mo",
      location: "BGC Taguig, Philippines · On-site",
      description: [
        "Cross-functional role with a purpose to deliver on the agreed timeline.",
        "Created wireframes, mockups or storyboard for different projects.",
        "Convert mockups into a working responsive design code.",
      ],
    },
    {
      title: "Betica Tech",
      titleProps: {
        variant: "gradient",
        gradient: { from: "#39921E", to: "#4cb02e" },
      },
      href: "https://www.betica.com/",
      role: "Frontend Developer -- Full time",
      date: "May 2015 - Aug 2015 · 4 mos",
      location: "BGC Taguig, Philippines · On-site",
      description: [
        "Javascript developer contributing to the creation of a single page web application for an online gaming platform in UK.",
        "I am responsible in delivering rich experience to user interface as well as its functionality.",
      ],
    },
    {
      title: "Victa Software Solutions",
      titleProps: {
        variant: "gradient",
        gradient: { from: "black", to: "red" },
      },
      role: "Web Developer / Graphic Designer -- Full time",
      date: "Aug 2013 - Mar 2015 · 1 yr 8 mos",
      location: "Philippines · On-site",
      description: [
        "Creation of concepts for proposal to Japanese client in web development.",
        "Analysis and Research on Web Projects for usability of Japanese employees.",
        "Implementation of Agile Development methodology.",
        "Provide prototypes for proposed project.",
        "Supervise web development team.",
        "Graphic Design + Coding for front-end and back-end projects.",
      ],
    },
    {
      title: "Infinite Motivation",
      titleProps: {
        variant: "gradient",
        gradient: { from: "black", to: "white" },
      },
      role: "Web Developer / Graphic Designer -- Full time",
      date: "Jun 2010 - Jul 2013 · 3 yrs 2 mos",
      location: "Philippines · On-site",
      description: [
        "Serving local personalities in the Philippines to deliver their personal website",
        "Convert UI to responsive front-end code.",
        "Create custom content management features.",
        "Provide graphic design services.",
      ],
    },
    {
      title: "COMTEQ Computer & Business College",
      titleProps: {
        variant: "gradient",
        gradient: { from: "blue", to: "red" },
      },
      role: "Web Development Instructor -- Part time",
      date: "Jun 2011 - May 2012 · 11 mos",
      location: "Philippines · On-site",
      description: [
        "Teaching early days web development:",
        "HTML, CSS, Javascript, PHP, Graphic Design with Adobe Photoshop",
        "Doing event graphic designs to support school",
      ],
    },
    {
      title: "John Graphic Image Advertising",
      titleProps: {
        variant: "gradient",
        gradient: { from: "red", to: "black" },
      },
      role: "Graphic Designer -- Full time",
      date: "Jan 2008 - Jun 2010 · 2 yrs 6 mos",
      location: "Philippines · On-site",
      description: [
        "Generation of concept and art from scratch to finish.",
        "Development of designs for different types of print mediums.",
      ],
    },
  ];
  return (
    <Container size="sm" mx={0} px={0} pb={GUTTERS}>
      <Stack gap="xl">
        <BrandTitle text="Experiences" />
        <Timeline bulletSize={48} lineWidth={1} color="black">
          {exp.map((xp, xpIndex) => (
            <Timeline.Item
              title={
                <Title order={2} lh={1} pt={5}>
                  <Text
                    component={Link}
                    size="lg"
                    lh={1}
                    fw={700}
                    {...xp.titleProps}
                    href={xp.href || "#"}
                    target="_blank"
                  >
                    {xp.title}
                  </Text>
                </Title>
              }
              bullet={
                <ThemeIcon size={40} variant="light" radius="xl" color="white">
                  <IconBuilding style={{ width: rem(24), height: rem(24) }} />
                </ThemeIcon>
              }
              key={`exp-item-${xpIndex}`}
            >
              <Stack my="lg" gap="lg">
                <Box>
                  <Text>{xp.role}</Text>
                  <Text c="dimmed" size="sm">
                    {xp.date}
                  </Text>
                  <Text c="dimmed" size="sm">
                    {xp.location}
                  </Text>
                </Box>
                <Stack gap="xs" pb="xl">
                  {xp.description.map((desc, descIndex) => (
                    <Text key={`description-${descIndex}-${xpIndex}`}>
                      {desc}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
      <ScrollUp />
    </Container>
  );
};

export default ExperiencesSection;
