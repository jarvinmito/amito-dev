import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { formatNumber } from "@/app/lib/utils/formatters";
import Link from "next/link";
import { CURRENCIES } from "@/app/lib/constants";

const MitotweeSection = () => {
  const pricing = [
    {
      title: "Monthly",
      billed: "monthly",
      price: 180,
      href: "https://mitotwee.com",
    },
    {
      title: "Yearly",
      billed: "yearly",
      price: 135,
      discount: 25,
      selected: true,
      href: "https://mitotwee.com",
    },
  ];

  return (
    <Stack gap="xl">
      <Text>
        Do you have a sari-sari store? Can't seem to be able to track all the
        products and sales? You manually check which products are most sold and
        which are aging?
      </Text>
      <Text>
        Introducing Mitotwee, a micro app for inventory and sales monitoring
        tailored for sari-sari store or mini stores.
      </Text>
      <Stack gap="xs">
        <h4 className="anaglyph">Pricing</h4>
        <SimpleGrid cols={{ base: 1, xs: 2 }}>
          {pricing.map((price, priceIndex) => (
            <Card
              key={`pricing-${priceIndex}`}
              withBorder
              radius="xl"
              style={{
                border: price.selected ? "6px solid black" : "1px solid black ",
                position: "relative",
              }}
            >
              <Stack p={price.selected ? 6 : 6 + 5} gap="xl">
                <Box>
                  <Group align="center" justify="space-between">
                    <Text
                      tt="uppercase"
                      fw={700}
                      variant="gradient"
                      gradient={{ from: "black", to: "white" }}
                    >
                      {price.title}
                    </Text>
                    {price.discount ? (
                      <Badge
                        size="lg"
                        color="red"
                        variant="gradient"
                        gradient={{ from: "orange", to: "yellow" }}
                      >
                        {price.discount}% discount
                      </Badge>
                    ) : null}
                  </Group>
                  <Text size="lg" lh={1}>
                    {formatNumber(
                      price.billed === "yearly"
                        ? price.price * 12
                        : price.price,
                      2,
                      false,
                      CURRENCIES.PHP
                    )}
                  </Text>
                </Box>
                <Box>
                  <Text size="sm">
                    Billed{" "}
                    <Text fw={700} component="span">
                      {price.billed}
                    </Text>
                  </Text>
                  <Text size="sm">
                    as low as{" "}
                    <Text fw={700} component="span">
                      {formatNumber(price.price / 30, 2, false, CURRENCIES.PHP)}
                    </Text>{" "}
                    / day
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
                  Visit App
                </Button>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
      <Text>
        Focus on growing your store! Visit{" "}
        <Anchor
          component={Link}
          href="https://mitotwee.com"
          target="_blank"
          fw={700}
        >
          Mitotwee
        </Anchor>{" "}
        to learn more.
      </Text>
    </Stack>
  );
};

export default MitotweeSection;
