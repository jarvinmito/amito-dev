import Image from "next/image";
import { Group, rem } from "@mantine/core";
import { TECH_STACK } from "@/app/lib/constants";

const TechStackSimple = () => (
  <Group hiddenFrom="md">
    {TECH_STACK.map((tech, techIndex) => (
      <Image
        key={`tech-stack-${techIndex}-${tech.name.split(" ").join("-")}`}
        src={tech.logo}
        alt={tech.name}
        height={24}
        style={{ maxWidth: rem(72) }}
      />
    ))}
  </Group>
);

export default TechStackSimple;
