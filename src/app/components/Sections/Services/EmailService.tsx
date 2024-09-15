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
import Listing from "../../Listing/Listing";

const EmailServiceSection = () => {
  const pricing = [
    {
      title: "Monthly",
      billed: "monthly",
      price: 300,
      href: "https://forms.gle/Lvb8oRA3r9RzmFvR9",
    },
    {
      title: "Yearly",
      billed: "yearly",
      price: 210,
      discount: 30,
      selected: true,
      href: "https://forms.gle/Lvb8oRA3r9RzmFvR9",
    },
  ];

  const emailChecklist = [
    {
      title: "Responsive email",
      description:
        "Emails that look great on any screen, even if you only provide a desktop version, and adapt to different device color modes like dark mode.",
    },
    {
      title: "Branded",
      description:
        "I can design you an email template that aligns to your brand.",
    },
  ];

  const extraChecklist = [
    {
      title: "Email Client Testing",
      description: "Ensure your email looks perfect in every inbox.",
    },
    {
      title: "Upload and Setup",
      description:
        "Get your template uploaded in your email marketing platform.",
    },
  ];

  return (
    <Stack gap="xl">
      <Text>
        Got a last-minute email campaign and no time to code your design? I can
        help!
      </Text>
      <Text>
        I'm a software developer specializing in fast, reliable email template
        coding. Give me your design (Figma, Xd, PSD, etc.) and I'll turn it into
        pixel-perfect HTML in no time.
      </Text>
      <Text fw={700}>You&apos;ll get:</Text>
      <Listing list={emailChecklist} />
      <Text fw={700}>Optional extras:</Text>
      <Listing list={extraChecklist} />
      <Stack gap="xs">
        <Text size="lg">Pricing</Text>
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
                      0,
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
                      {formatNumber(price.price / 30, 0, false, CURRENCIES.PHP)}
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
                  Inquire
                </Button>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default EmailServiceSection;
