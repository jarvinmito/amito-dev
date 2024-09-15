"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import MenuIcon from "@/app/components/Branding/MenuIcon";
import Drawer from "@/app/components/Drawer";
import Footer from "@/app/components/Sections/Footer";
import Header from "@/app/components/Sections/Header";
import { useParallaxContext } from "@/app/lib/context/parallax.context";

export default function V2Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const { visorRef, fvisorRef } = useParallaxContext();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header>
        <MenuIcon active={drawerOpen} onToggle={handleToggle} />
      </Header>
      <div className="pt-20">{children}</div>
      <Footer />
      <Drawer open={drawerOpen} />
      {/* HUD EFFECT */}
      <div
        ref={visorRef}
        aria-hidden
        className="hud-top w-full h-[4.75rem] fixed -top-1 left-1/2 z-10 -translate-x-1/2 border-b border-violet-400 bg-black/60 isolate backdrop-blur-sm"
        style={{
          borderRadius: "0 0 100% 100%/48px",
          boxShadow: "0 2px 36px -32px #a78bfa",
        }}
      ></div>
      <div
        ref={fvisorRef}
        aria-hidden
        className="hud-bottom w-full h-9 fixed -bottom-1 left-1/2 z-10 -translate-x-1/2 border-t border-violet-400 bg-black/60 isolate backdrop-blur-sm"
        style={{
          borderRadius: "100%/32px 100% 0 0",
          boxShadow: "0 -2px 36px -16px #a78bfa",
        }}
      ></div>
    </>
  );
}
