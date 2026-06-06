"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { notifications } from "@mantine/notifications";
import AmitoLogo from "@/public/amito-brand.svg";

interface IPWAData {
  deferredPrompt: any;
  handleInstallation: () => void;
}

const PWAContext = createContext({} as IPWAData);

export function PWAContextProvider({ children }: any) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  const handleInstallation = useCallback(async () => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        notifications.show({
          title: "Track my spending",
          message: "Go to your apps and find Track my spending",
          icon: <Image src={AmitoLogo} alt="Amito" width={36} />,
          color: "transparent",
          autoClose: 6000,
        });
        setDeferredPrompt(null);
      }
    }
  }, [deferredPrompt]);

  // Clear the timer when unmounted
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      setDeferredPrompt(e);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", () => {});
    };
  }, []);

  return (
    <PWAContext.Provider
      value={{
        deferredPrompt,
        handleInstallation,
      }}
    >
      {children}
    </PWAContext.Provider>
  );
}

export const usePWAContext = () => ({
  ...useContext(PWAContext),
});
