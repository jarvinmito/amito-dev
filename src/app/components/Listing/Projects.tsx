"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  CAROUSEL_AUTOPLAY_DELAY,
  IPortfolio,
} from "@/app/lib/constants/projects";
import ProjectCard from "@/components/Cards/ProjectCard";

const ListingProjects = ({ projects }: { projects: IPortfolio[] }) => {
  const autoplay = useRef(Autoplay({ delay: CAROUSEL_AUTOPLAY_DELAY }));
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    setActiveSlide(embla.slidesInView()[0]);
  }, [embla, setActiveSlide]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <Carousel
      slideSize={{ base: "90%", sm: "45%", lg: "30%" }}
      h={460}
      align="start"
      slideGap={20}
      controlSize={20}
      withControls={false}
      getEmblaApi={setEmbla}
      plugins={[autoplay.current]}
      loop={true}
    >
      {projects.map((project, projectIndex) => (
        <Carousel.Slide key={`project-${projectIndex}`} h={460} py={8} pl={8}>
          <div className="relative">
            <ProjectCard {...project} />
            {activeSlide === projectIndex ? (
              <div aria-hidden className="cyberbox absolute -inset-1.5"></div>
            ) : null}
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ListingProjects;
