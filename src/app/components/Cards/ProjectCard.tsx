import NextImage from "next/image";
import { Card, Image, Stack, Text, Title } from "@mantine/core";
import { IPortfolio } from "@/app/lib/constants/projects";

export interface IProjectCard extends IPortfolio {
  onClick?: () => void;
}

const ProjectCard = ({ onClick, ...props }: IProjectCard) => {
  return (
    <Card
      shadow="md"
      padding="lg"
      h="100%"
      style={{ cursor: "pointer" }}
      onClick={() => onClick?.()}
    >
      <Card.Section>
        <Image
          component={NextImage}
          src={props.image}
          alt={props.imageAlt || "Thumbnail"}
          priority
          placeholder="blur"
        />
      </Card.Section>
      <Stack pt="lg">
        <Title size="h3">{props.title}</Title>
        <Text>{props.description}</Text>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
