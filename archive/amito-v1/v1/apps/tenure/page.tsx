"use client";

import { useEffect, useState } from "react";
import { formatDuration, intervalToDuration } from "date-fns";
import { Container, Select, SimpleGrid, Stack, Text } from "@mantine/core";
import BrandTitle from "@/components/Branding/BrandTitle";

export default function TenurePage() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentYear = new Date().getFullYear();
  const years: string[] = Array.from({ length: 31 }, (_, i) =>
    (currentYear - i).toString()
  );

  const [startMonth, setStartMonth] = useState<string | null>(null);
  const [startYear, setStartYear] = useState<string | null>(null);
  const [endMonth, setEndMonth] = useState<string | null>(null);
  const [endYear, setEndYear] = useState<string | null>(null);
  const [tenure, setTenure] = useState<string | undefined>();

  useEffect(() => {
    try {
      // Compute years
      if (startMonth && startYear && endMonth && endYear) {
        const startMonthIndex = months.findIndex((m) => m === startMonth);
        const endMonthIndex = months.findIndex((m) => m === endMonth);

        const tenureDuration = intervalToDuration({
          start: new Date(+startYear, startMonthIndex),
          end: new Date(+endYear, endMonthIndex),
        });
        const tenureFormatted = formatDuration(tenureDuration, {
          format: ["years", "months"],
        });

        setTenure(tenureFormatted);
      } else throw "Incomplete dates";
    } catch (error) {
      console.log("Error", error);
      setTenure(undefined);
    }
  }, [startMonth, startYear, endMonth, endYear]);

  return (
    <Container mx="auto">
      <BrandTitle text="Tenure Calculator" />
      <Text>How long have you been serving your company?</Text>

      <SimpleGrid cols={2} mt="xl">
        <Stack>
          <Text>Start Date</Text>
          <SimpleGrid cols={2}>
            <Select
              placeholder="Pick month"
              data={months}
              size="md"
              radius="lg"
              value={startMonth}
              onChange={setStartMonth}
            />
            <Select
              placeholder="Pick year"
              data={years}
              size="md"
              radius="lg"
              value={startYear}
              onChange={setStartYear}
            />
          </SimpleGrid>
        </Stack>
        <Stack>
          <Text>End Date</Text>
          <SimpleGrid cols={2}>
            <Select
              placeholder="Pick month"
              data={months}
              size="md"
              radius="lg"
              value={endMonth}
              onChange={setEndMonth}
            />
            <Select
              placeholder="Pick year"
              data={years}
              size="md"
              radius="lg"
              value={endYear}
              onChange={setEndYear}
            />
          </SimpleGrid>
        </Stack>
      </SimpleGrid>
      {tenure ? (
        <Text size="xl" ta="center" mt="xl">
          {tenure}
        </Text>
      ) : null}
    </Container>
  );
}
