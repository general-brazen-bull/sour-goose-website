"use client";

import { useEffect, useState } from "react";
import DesktopGreenApple from "./components/DesktopGreenApple";
import MobileGreenApple from "./components/MobileGreenApple";

export default function GreenApplePage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Prevent hydration mismatch
  if (isMobile === null) return null;

  return isMobile ? <MobileGreenApple /> : <DesktopGreenApple />;
}
