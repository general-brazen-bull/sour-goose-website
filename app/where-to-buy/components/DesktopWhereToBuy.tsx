"use client"

import { useState } from "react"
import GoosePeek from "@/app/animations/GoosePeek"
import DecryptedText from "@/app/animations/DecryptedText"
import StaggeredMenu from "@/app/animations/StaggeredMenu"
import SpotlightCard from "@/app/animations/SpotlightCard"
const FloatingLines = dynamic(
  () => import("@/app/animations/FloatingLines"),
  { ssr: false }
)
import { Store, ExternalLink, ShoppingCart, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TikTokIcon } from "@/components/icons/TikTokIcon"
import { Instagram } from "lucide-react"
import dynamic from "next/dynamic"

/* ---------------- BUSINESS STATUS ---------------- */
function BusinessStatus() {
  const now = new Date()
  const day = now.getDay()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const time = hours + minutes / 60

  const isWeekday = day >= 1 && day <= 5
  const isOpen = isWeekday && time >= 9.5 && time <= 16.5

  return (
    <span className={isOpen ? "text-green-500 text-lg" : "text-red-500 text-lg"}>
      {isOpen ? "We’re open now!" : "We’re currently closed."}
    </span>
  )
}

/* ---------------- NAV ---------------- */
const navMenuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Raspberry", ariaLabel: "Raspberry flavour page", link: "/raspberry" },
  { label: "Green Apple", ariaLabel: "Green Apple flavour page", link: "/green-apple" },
  { label: "Salsa Verde", ariaLabel: "Salsa Verde flavour page", link: "/salsa-verde" },
  { label: "Curasour", ariaLabel: "Curasour flavour page", link: "/curasour" },
  { label: "Cocktails", ariaLabel: "View cocktail recipes", link: "/cocktails" },
  { label: "Where to Buy", ariaLabel: "Find where to buy Sour Goose", link: "/where-to-buy" },
  { label: "Contact", ariaLabel: "Contact Sour Goose", link: "/contact" },
  {
    label: "Shop Now",
    ariaLabel: "Shop Sour Goose online",
    link: "https://deepbluedistilleries.ca/product-tag/sour-goose/",
    external: true,
    target: "_blank",
  },
]

const navSocialItems = [
  { label: "Instagram", link: "https://instagram.com/drinksourgoose" },
  { label: "TikTok", link: "https://www.tiktok.com/@drinksourgoose" },
  { label: "Deep Blue Distilleries", link: "https://deepbluedistilleries.ca" },
]

export default function DesktopWhereToBuy() {
  const [decryptDone, setDecryptDone] = useState(false)

  return (
    <div className="relative min-h-screen text-white overflow-visible">

      {/* FLOATING LINES BACKGROUND */}
      <div className="fixed inset-0 -z-20">
        <FloatingLines
          enabledWaves={["middle", "bottom"]}
          linesGradient={["#8FC81C", "#FF0000"]}
          lineCount={[8, 12, 16]}
          lineDistance={[10, 8, 6]}
          bendRadius={4}
          bendStrength={-0.4}
          interactive
          parallax
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 -z-10 bg-black/70 pointer-events-none" />

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-[99999] flex items-center justify-between px-6 pt-4">
        <Link href="/" className="relative z-[200000] pointer-events-auto">
          <img src="/Sour Goose Logo.webp" alt="Sour Goose" className="h-10 w-auto" />
        </Link>

        <StaggeredMenu
          position="right"
          items={navMenuItems}
          socialItems={navSocialItems}
          displaySocials
          displayItemNumbering
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen
          colors={["#FF0000", "#8FC81C"]}
          accentColor="#FFFF00"
          disableLogo
          className="font-bebas text-lg tracking-wide"
        />
      </div>

      <GoosePeek />

      {/* HERO */}
      <section className="relative z-10 min-h-[55vh] flex flex-col items-center justify-center text-center px-6">
        <DecryptedText
          text="WHERE TO BUY"
          speed={80}
          maxIterations={12}
          sequential
          animateOn="view"
          className="font-bebas-ui text-[clamp(3.5rem,10vw,6.5rem)] text-lightning-yellow lightning-text tracking-wide"
          encryptedClassName="font-bebas-ui text-[clamp(3.5rem,10vw,6.5rem)] text-lightning-yellow"
          onFinish={() => setTimeout(() => setDecryptDone(true), 0)}
        />

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Find Sour Goose near you — online, in stores, or directly from the distillery.
        </p>
      </section>

      {/* 2x2 CARD GRID */}
      <section className="relative z-10 px-6 max-w-6xl mx-auto mt-16 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* FIND IN STORES */}
          <SpotlightCard className="group p-14 rounded-3xl flex flex-col items-center text-center">
            <Store className="w-16 h-16 mb-8 text-lightning-yellow group-hover:text-sour-red transition-colors" />

            <h3 className="font-bebas-ui text-4xl text-lightning-yellow mb-6">
              FIND IT IN STORES
            </h3>

            <p className="text-white font-avenir text-lg max-w-xl">
              Sour Goose is available at select private liquor stores across BC.
            </p>

            <a
              href="https://deepbluedistilleries.ca/where-to-buy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-10 bg-sour-red text-white font-bebas-ui text-xl px-10 py-4">
                FIND A STORE NEAR YOU
              </Button>
            </a>
          </SpotlightCard>

          {/* SHOP ONLINE */}
          <SpotlightCard className="group p-14 rounded-3xl flex flex-col items-center text-center">
            <ShoppingCart className="w-16 h-16 mb-8 text-lightning-yellow group-hover:text-sour-red transition-colors" />

            <h3 className="font-bebas-ui text-4xl text-lightning-yellow mb-6">
              SHOP ONLINE
            </h3>

            <p className="text-white font-avenir text-lg max-w-xl">
              Order Sour Goose directly through our official online retailer.
            </p>

            <a
              href="https://deepbluedistilleries.ca/product-tag/sour-goose/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-10 bg-sour-red text-white font-bebas-ui text-xl px-10 py-4">
                SHOP NOW
              </Button>
            </a>
          </SpotlightCard>

          {/* VISIT DISTILLERY */}
          <SpotlightCard className="group p-14 rounded-3xl flex flex-col items-center text-center">
            <MapPin className="w-16 h-16 mb-8 text-lightning-yellow group-hover:text-sour-red transition-colors" />

            <h3 className="font-bebas-ui text-4xl text-lightning-yellow mb-6">
              VISIT THE DISTILLERY
            </h3>

            <p className="text-white font-avenir text-lg max-w-xl">
              5800 Cedarbridge Way #130, Richmond, BC
            </p>

            <div className="mt-4">
              <BusinessStatus />
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=5800+Cedarbridge+Way+%23130,+Richmond,+BC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-10 bg-sour-red text-white font-bebas-ui text-xl px-10 py-4">
                GET DIRECTIONS
              </Button>
            </a>
          </SpotlightCard>

          {/* REQUEST IT */}
          <SpotlightCard className="group p-14 rounded-3xl flex flex-col items-center text-center">
            <Mail className="w-16 h-16 mb-8 text-lightning-yellow group-hover:text-sour-red transition-colors" />

            <h3 className="font-bebas-ui text-4xl text-lightning-yellow mb-6">
              DON’T SEE IT?
            </h3>

            <p className="text-white font-avenir text-lg max-w-xl">
              Ask your local liquor store to stock Sour Goose by Deep Blue Distilleries.
            </p>

            <a href="mailto:orders@deepbluedistilleries.ca">
              <Button className="mt-10 bg-sour-red text-white font-bebas-ui text-xl px-10 py-4">
                REQUEST SOUR GOOSE
              </Button>
            </a>
          </SpotlightCard>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-sour-red relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-8">

          <div className="flex flex-wrap justify-center items-center gap-6">

            <a
              href="https://instagram.com/drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white"
            >
              <Instagram size={22} />
              <span className="font-bebas-ui text-lg">@DRINKSOURGOOSE</span>
            </a>

            <a
              href="https://www.tiktok.com/@drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white"
            >
              <TikTokIcon className="w-[22px] h-[22px]" />
              <span className="font-bebas-ui text-lg">@DRINKSOURGOOSE</span>
            </a>

            <a
              href="https://deepbluedistilleries.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white"
            >
              <ExternalLink size={22} />
              <span className="font-bebas-ui text-lg">
                DEEPBLUEDISTILLERIES.CA
              </span>
            </a>

          </div>

          <div className="text-sm text-gray-400">
            Proudly crafted in British Columbia. Drink responsibly. Must be 19+.
            <br /><br />
            © 2026 Brazen Bull Creative
          </div>

        </div>
      </footer>
    </div>
  )
}