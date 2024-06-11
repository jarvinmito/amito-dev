import { Text, Title } from "@mantine/core";
import { ReactNode } from "react";

const BrandTitle = ({
  text,
  children,
}: {
  text?: string;
  children?: ReactNode;
}) => (
  <Title>
    <Text
      size="xl"
      fw={700}
      variant="gradient"
      gradient={{ from: "white", to: "black" }}
      component="span"
      lh={1.18}
    >
      {text || children}
    </Text>
  </Title>
);

export default BrandTitle;
