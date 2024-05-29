"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      offset: 30,
      anchorPlacement: "center-center",
      once: true,
      duration: 300,
    });
    console.log("INITIALIZE AOS");
  }, []);
  return children;
}
