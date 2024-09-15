"use client";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export interface IHackedText {
  text: string;
  autoPlay?: boolean;
  anaglyphOff?: boolean;
  className?: string;
}

const HackedText = ({
  text,
  autoPlay = true,
  anaglyphOff = false,
  className = "",
}: IHackedText) => {
  const hackText = useRef(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let interval: any = null;
  const handleHackText = (target: any) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      target.innerText = target.innerText
        .split("")
        .map((letter: string, index: number) => {
          if (index < iteration) {
            return target.dataset.value[index];
          }

          return letter.trim().length
            ? letters[Math.floor(Math.random() * letters.length)]
            : " ";
        })
        .join("");

      if (iteration >= target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  // Initial load animate it if set to auto
  useEffect(() => {
    if (autoPlay) {
      handleHackText(hackText.current);
    }
  }, []);

  return (
    <span
      ref={hackText}
      className={twMerge(!anaglyphOff ? "anaglyph" : "", className)}
      data-value={text}
      onMouseOver={(e) => handleHackText(e.target)}
    >
      {text}
    </span>
  );
};

export default HackedText;
