"use client";
import { Container, Stack } from "@mantine/core";
import BrandTitle from "@/components/Branding/BrandTitle";
import ScrollUp from "@/components/ScrollUp/ScrollUp";
import { GUTTERS } from "@/app/lib/constants";

const WorksSection = () => {
  return (
    <Container size="sm" mx={0} px={0} pb={GUTTERS}>
      <Stack gap="xl">
        <BrandTitle text="Coming soon..." />
      </Stack>
      <ScrollUp />
    </Container>
  );
};

export default WorksSection;
