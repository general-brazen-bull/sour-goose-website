"use client";

import { useEffect, useState } from "react";
import DesktopSalsaVerde from "./DesktopSalsa";
import MobileSalsaVerde from "./MobileSalsa";

export default function SalsaVerdePage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Avoid hydration mismatch
  if (isMobile === null) return null;

  return isMobile ? <MobileSalsaVerde /> : <DesktopSalsaVerde />;
}
