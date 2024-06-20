import { Box, Button, Card, SimpleGrid, Stack, Text } from "@mantine/core";
import OfferingsSection from "@/app/components/Sections/Services/Offerings";
import { formatNumber } from "@/app/lib/utils/formatters";
import Link from "next/link";
import { CURRENCIES } from "@/app/lib/constants";

const ConvertUISection = () => {
  const usdRate = 50;
  const pricing = [
    {
      title: "Basic",
      price: 349,
      numberOfPages: 1,
      daysToDeliver: 5,
      href: "https://forms.gle/qRsY5ekJpZAYBb47A",
    },
    {
      title: "Standard",
      price: 449,
      numberOfPages: 2,
      daysToDeliver: 7,
      selected: true,
      href: "https://forms.gle/Zfo3HZVzFGVeMCBZ7",
    },
    {
      title: "Premium",
      price: 599,
      numberOfPages: 3,
      daysToDeliver: 10,
      href: "https://forms.gle/NyXi7wFKQJt4HL5n7",
    },
  ];

  return (
    <Stack gap="xl">
      <Text>
        Do you have a beautifully crafted UI design in Figma, Adobe XD, or
        Photoshop? I'll turn it into a high-performance, responsive NextJS
        website that captivates your audience.
      </Text>
      <Stack gap="xs">
        <Text size="lg">Pricing</Text>
        <SimpleGrid cols={{ base: 1, xs: 3 }}>
          {pricing.map((price, priceIndex) => (
            <Card
              key={`pricing-${priceIndex}`}
              withBorder
              radius="xl"
              style={{
                border: price.selected ? "6px solid black" : "1px solid black ",
              }}
            >
              <Stack p={price.selected ? 6 : 6 + 5} gap="xl">
                <Box>
                  <Text
                    tt="uppercase"
                    fw={700}
                    variant="gradient"
                    gradient={{ from: "black", to: "white" }}
                  >
                    {price.title}
                  </Text>
                  <Text size="lg" lh={1}>
                    {formatNumber(
                      price.price * usdRate,
                      0,
                      false,
                      CURRENCIES.PHP
                    )}
                  </Text>
                </Box>
                <Box>
                  <Text size="sm">
                    <Text fw={700} component="span">
                      {price.numberOfPages}
                    </Text>{" "}
                    page
                    {price.numberOfPages > 1 ? "s" : null} development
                  </Text>
                  <Text size="sm">
                    <Text fw={700} component="span">
                      {price.daysToDeliver}
                    </Text>{" "}
                    days delivery
                  </Text>
                </Box>
                <Button
                  component={Link}
                  href={price.href}
                  target="_blank"
                  color="black"
                  radius="xl"
                  size="md"
                  variant={price.selected ? "filled" : "light"}
                >
                  Inquire
                </Button>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
      <OfferingsSection />
      <Text>Let's Bring Your Designs to Life!</Text>
    </Stack>
  );
};

export default ConvertUISection;
