"use client";
import { useCallback, useEffect, useRef } from "react";
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
  const hackText = useRef<HTMLSpanElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const handleHackText = useCallback((target: HTMLSpanElement | null) => {
    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      target.innerText = text;
      return;
    }

    let iteration = 0;
    const targetText = target.dataset.value ?? text;

    if (intervalRef.current) window.clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      target.innerText = target.innerText
        .split("")
        .map((letter: string, index: number) => {
          if (index < iteration) {
            return targetText[index];
          }

          return letter.trim().length
            ? letters[Math.floor(Math.random() * letters.length)]
            : " ";
        })
        .join("");

      if (iteration >= targetText.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  }, [text]);

  // Initial load animate it if set to auto
  useEffect(() => {
    if (autoPlay) {
      handleHackText(hackText.current);
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [autoPlay, handleHackText]);

  return (
    <span
      ref={hackText}
      className={twMerge(!anaglyphOff ? "anaglyph" : "", className)}
      data-value={text}
      onMouseOver={(e) => handleHackText(e.currentTarget)}
    >
      {text}
    </span>
  );
};

export default HackedText;
