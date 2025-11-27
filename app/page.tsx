"use client"

import { useState, useEffect } from "react"
import AgeGate from "./components/AgeGate"
import Navigation from "./components/Navigation"
import { Button } from "@/components/ui/button"
import { Instagram, ExternalLink } from "lucide-react"
import { TikTokIcon } from "@/components/icons/TikTokIcon"
import Link from "next/link"

export default function HomePage() {
  const [isVerified, setIsVerified] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const verified = sessionStorage.getItem("age-verified")
    if (verified) {
      setIsVerified(true)
      setShowContent(true)
    }
  }, [])

  const handleVerification = () => {
    sessionStorage.setItem("age-verified", "true")
    setIsVerified(true)
    setTimeout(() => setShowContent(true), 500)
  }

  if (!isVerified) {
    return <AgeGate onVerified={handleVerification} />
  }

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center lightning-bg pt-24">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">

            {/* Text Block */}
            
            <div className="space-y-8 w-full md:w-1/2 flex flex-col items-center md:items-start ml-[0px] sm:ml-[0px] md:ml-[80px] xl-custom:ml-[130px]">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bebas pt-5 sm:pt-28 md:pt-32 text-lightning-yellow lightning-text">
                FLASH BANG presents SOUR GOOSE
              </div>

              <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-lightning-yellow lightning-text leading-tight">
                IT'S TART, <br className="hidden sm:block" />
                IT'S JUICY, <br className="hidden sm:block" />
                IT'S HERE.
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-sour-white font-avenir">
                A BOLD <span className="text-sour-red hover:italic transition-all duration-200">RASPBERRY</span> LIQUEUR
                <br />
                WITH A SHARP TWIST.
              </h2>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
  href="https://deepbluedistilleries.ca/product/sour-goose-750ml/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-sour-red hover:bg-red-700 font-bebas text-lg sm:text-xl md:text-2xl px-6 sm:px-8 py-3 sm:py-4 hover-lightning">
    SHOP NOW
  </Button>
</a>

<a
  href="https://deepbluedistilleries.ca/distillery-tours/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="border-white text-white hover:bg-white hover:text-black font-bebas text-lg sm:text-xl md:text-2xl px-6 sm:px-8 py-3 sm:py-4 hover-lightning bg-transparent"
  >
    VISIT US
  </Button>
</a>
               
              </div>

              <div className="text-4xl sm:text-5xl md:text-6xl font-bebas pt-20 sm:pt-28 md:pt-32 text-lightning-yellow lightning-text">
                #GooseGotJuice
              </div>
             
            </div>

            {/* Bottle Image */}
            <div className="w-[200px] sm:w-[250px] md:w-[260px] lg:w-[290px] xl:w-[300px] mx-auto">
              <img
                src="/bottle.webp"
                alt="Sour Goose Raspberry Liqueur Bottle"
                className="w-full h-auto hover-lightning"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-sour-red">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">

            {/* Instagram */}
            <a
              href="https://instagram.com/drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning"
            >
              <Instagram size={22} />
              <span className="font-bebas text-base sm:text-lg lg:text-xl">@DRINKSOURGOOSE</span>
            </a>

            {/* TikTok */}
            <a
  href="https://www.tiktok.com/@drinksourgoose"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning"
>
  <TikTokIcon className="w-[22px] h-[22px] text-lightning-yellow transition-colors duration-200 group-hover:text-white" />
  <span className="font-bebas text-base sm:text-lg lg:text-xl">@DRINKSOURGOOSE</span>
</a>

            {/* Website */}
            <a
              href="https://deepbluedistilleries.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning"
            >
              <ExternalLink size={22} />
              <span className="font-bebas text-base sm:text-lg lg:text-xl">DEEPBLUEDISTILLERIES.CA</span>
            </a>
          </div>

          {/* Disclaimer */}
          <div className="text-sm sm:text-base text-gray-400">
            Proudly crafted in British Columbia. Drink responsibly. Must be 19+.
          </div>
        </div>
      </footer>
    </div>
  )
}
