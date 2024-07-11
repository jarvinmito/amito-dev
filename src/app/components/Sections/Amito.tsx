"use client";

import { Flex, Stack, Text, Title, rem } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import TechStackSimple from "../TechStackSimple";

const AmitoSection = () => (
  <>
    <Stack>
      <Title order={1} fw={300} size="h2" data-aos="fade-in">
        <Flex gap={9}>
          I'm{" "}
          <Text fw={700} inherit>
            Arvin
          </Text>
        </Flex>
      </Title>
      <Title order={2} size="h1">
        <Text
          inherit
          variant="gradient"
          gradient={{ from: "white", to: "black" }}
          tt="uppercase"
          lh={rem(54)}
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <TypeAnimation
            sequence={[
              "Landing Pages",
              1200,
              "Email Templates",
              1200,
              "Ship micro SaaS",
              1200,
              "Frontend Developer",
            ]}
            speed={30}
            cursor={true}
            preRenderFirstString
          />
        </Text>
        {/* <Text
    inherit
    variant="gradient"
    gradient={{ from: "lime.4", to: "blue.8", deg: 90 }}
    tt="uppercase"
    lh={rem(54)}
  >
    
  </Text> */}
      </Title>
      <Text size="md" fw={300} data-aos="fade-in" data-aos-delay="200">
        {/* Based in Olongapo City Zambales, Philippines 2200 */}
        Based in Philippines
      </Text>
      <TechStackSimple />
    </Stack>
    <Stack gap={0}>
      <Text size="md" fw={300} data-aos="fade-in" data-aos-delay="300">
        Jan Arvin Mito
      </Text>
      <Text size="md" fw={300} data-aos="fade-in" data-aos-delay="400">
        mito.jan.arvin@gmail.com
      </Text>
      <Text size="md" fw={300} data-aos="fade-in" data-aos-delay="500">
        +63 956 764 2749
      </Text>
    </Stack>
  </>
);

export default AmitoSection;
