"use client";

import { useEffect, useState } from "react";
import DesktopRaspberry from "./components/DesktopRaspberry";
import MobileRaspberry from "./components/MobileRaspberry";

export default function RaspberryPage() {
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

  return isMobile ? <MobileRaspberry /> : <DesktopRaspberry />;
}
