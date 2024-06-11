"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  Affix,
  Center,
  Flex,
  SimpleGrid,
  Transition,
  rem,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import AutoScroll, { AutoScrollOptionsType } from "embla-carousel-auto-scroll";
import { GUTTERS } from "@/app/lib/constants";
import { ITech, TECH_STACK } from "@/app/lib/constants";

interface ITechStackCarouselProps {
  techStack: ITech[];
  reverse?: boolean;
}

const SLIDE_SIZE = 265;
const SLIDE_SPACING = 10;

const TechStackCarousel = ({
  techStack,
  reverse = false,
}: ITechStackCarouselProps) => {
  const autoscroll = useRef(
    AutoScroll({
      startDelay: 0,
      speed: 3,
      stopOnInteraction: false,
      stopOnFocusIn: false,
      stopOnMouseEnter: false,
    } as AutoScrollOptionsType)
  );
  return (
    <Carousel
      orientation="vertical"
      height="100vh"
      maw={SLIDE_SIZE}
      withControls={false}
      slideSize="10%"
      loop
      plugins={[autoscroll.current]}
      style={{
        flex: 1,
        transformOrigin: "center center",
        transform: reverse ? "rotate(180deg)" : "",
      }}
    >
      {techStack.map((tech, techIndex) => (
        <Carousel.Slide
          key={`tech-${techIndex}-${tech.name.split(" ").join("-")}`}
          p={0}
        >
          <Center
            h={SLIDE_SIZE}
            w={SLIDE_SIZE}
            style={{
              borderRadius: rem(96),
              marginTop: rem(SLIDE_SPACING / 2),
              marginBottom: rem(SLIDE_SPACING / 2),
            }}
            bg="gray.0"
            p={0}
          >
            <Image
              src={tech.logo}
              alt={tech.name}
              height={tech.size ?? 180}
              width={tech.size ?? 180}
              style={{
                transformOrigin: "center center",
                transform: reverse ? "rotate(180deg)" : "",
              }}
            />
          </Center>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

const TechStack = () => {
  const halfIndex = Math.floor(TECH_STACK.length / 2);
  const firstHalf = TECH_STACK.slice(0, halfIndex);
  const secondHalf = TECH_STACK.slice(halfIndex);

  return (
    <Affix
      visibleFrom="md"
      position={{ bottom: 0, right: GUTTERS * 3 }}
      zIndex={-1}
      opacity={0.9}
      style={{
        perspective: "50px",
        transformOrigin: "center center",
        transform: "rotateX(30deg) rotateY(-18deg) rotateZ(12deg) scale(1.18)",
      }}
    >
      <Transition transition="slide-left" mounted={true}>
        {(transitionStyle) => (
          <SimpleGrid
            cols={2}
            style={transitionStyle}
            w={SLIDE_SIZE * 2 + SLIDE_SPACING}
            spacing={SLIDE_SPACING}
            p={0}
            h="100vh"
          >
            <Flex>
              <TechStackCarousel techStack={firstHalf} />
            </Flex>
            <Flex>
              <TechStackCarousel techStack={secondHalf} reverse={true} />
            </Flex>
          </SimpleGrid>
        )}
      </Transition>
    </Affix>
  );
};

export default TechStack;
