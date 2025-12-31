"use client"

import { useEffect, useState } from "react"
import DesktopContact from "./DesktopContact"
import MobileContact from "./MobileContact"

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isMobile ? <MobileContact /> : <DesktopContact />
}
