"use client"

import { useEffect, useState } from "react"
import DesktopWhereToBuy from "./components/DesktopWhereToBuy"
import MobileWhereToBuy from "./components/MobileWhereToBuy"

export default function WhereToBuyPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isMobile ? <MobileWhereToBuy /> : <DesktopWhereToBuy />
}
