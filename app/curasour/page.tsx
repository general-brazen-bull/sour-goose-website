"use client";

import { useEffect, useState } from "react";
import DesktopCurasour from "./components/DesktopCurasour";
import MobileCurasour from "./components/MobileCurasour";

export default function CurasourPage() {
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

  return isMobile ? <MobileCurasour /> : <DesktopCurasour />;
}
