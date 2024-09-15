/**
 * This is a context for keeping the records of header, footer and main content
 * Currently adds parallax effect on mouse movement within the window for the main content only
 */

"use client";
import { useMediaQuery } from "@mantine/hooks";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";

type ParallaxContextData = {
  headerRef: any;
  footerRef: any;
  contentRef: any;
  visorRef: any;
  fvisorRef: any;
};

const ParallaxContext = createContext({} as ParallaxContextData);

export function ParallaxContextProvider({ children }: any) {
  const headerRef = useRef<any>(null);
  const footerRef = useRef<any>(null);
  const contentRef = useRef<any>(null);
  const visorRef = useRef<any>(null);
  const fvisorRef = useRef<any>(null);

  const isLargeScreen = useMediaQuery("(min-width: 768px)", true, {
    getInitialValueInEffect: false,
  });

  const applyBoxShadow = (
    x: number,
    xWidth: number,
    y100: number,
    element: any,
    reversed?: boolean
  ) => {
    const x100 = xWidth / 2;
    const firstSplit = element.style.boxShadow.split(")");
    const secondSplit = firstSplit[1].split(" ");
    const removeXY = secondSplit.slice(3).join(" ");
    const computedY =
      x > x100 ? ((xWidth - x) / x100) * y100 : (x / x100) * y100;
    const newShadow = `${firstSplit[0]}) ${(x - x100) / 30}px ${
      reversed ? "-" : ""
    }${computedY}px ${removeXY}`;

    element.style.boxShadow = newShadow;
  };

  const parallax = useCallback((event: any) => {
    const x = window.innerWidth - event.pageX;
    const y = window.innerHeight - event.pageY;
    // if (headerRef.current) {
    //   const hdist = 720;
    //   headerRef.current.style.transform = `translate3d(${x / hdist}px, ${
    //     y / hdist
    //   }px, 0)`;
    // }

    // if (footerRef.current) {
    //   const fdist = 480;
    //   footerRef.current.style.transform = `translate3d(${x / fdist}px, ${
    //     y / fdist
    //   }px, 0)`;
    // }

    if (visorRef.current) {
      applyBoxShadow(event.pageX, window.innerWidth, 16, visorRef.current);
    }

    if (fvisorRef.current) {
      applyBoxShadow(
        event.pageX,
        window.innerWidth,
        6,
        fvisorRef.current,
        true
      );
    }

    if (contentRef.current) {
      const cdist = 180;
      contentRef.current.style.transform = `translate3d(${x / cdist}px, ${
        y / cdist
      }px, 0)`;
    }
  }, []);

  useEffect(() => {
    // Only Add when in desktop view
    if (isLargeScreen) {
      //add eventlistener to window
      window.addEventListener("mousemove", parallax);
    }

    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("mousemove", parallax);
    };
  }, []);

  const values = useMemo(
    () => ({
      headerRef,
      footerRef,
      contentRef,
      visorRef,
      fvisorRef,
    }),
    [headerRef, footerRef, contentRef, visorRef, fvisorRef]
  );

  return (
    <ParallaxContext.Provider value={values}>
      {children}
    </ParallaxContext.Provider>
  );
}

export default ParallaxContext;

export const useParallaxContext = () => ({
  ...useContext(ParallaxContext),
});
