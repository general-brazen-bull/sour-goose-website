"use client";

import { useEffect, useState } from "react";
import DesktopHome from "./components/DesktopHome";
import MobileHome from "./components/MobileHome";

export default function HomePageRouter() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // While screen-size loads → avoid hydration mismatch
  if (isMobile === null) return <div className="w-full h-screen bg-black" />;

  return isMobile ? <MobileHome /> : <DesktopHome/>;
}
