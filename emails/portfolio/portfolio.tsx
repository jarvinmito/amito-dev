import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

const PortfolioProjects = () => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <title>Portfolio Projects</title>
        </Head>
        <Body className="font-sans">
          <Container className="text-center">
            <Heading>Portfolio Projects</Heading>
            <Text>Everything here is my portfolio projects</Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default PortfolioProjects;
