"use client"

import GoosePeek from "@/app/animations/GoosePeek"
import DecryptedText from "@/app/animations/DecryptedText"
import StaggeredMenu from "@/app/animations/StaggeredMenu"
import SpotlightCard from "@/app/animations/SpotlightCard"
import FloatingLines from "@/app/animations/FloatingLines"

import { Store, ExternalLink, ShoppingCart, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TikTokIcon } from "@/components/icons/TikTokIcon"
import { Instagram } from "lucide-react"

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
    <span className={isOpen ? "text-green-500 text-sm" : "text-red-500 text-sm"}>
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

export default function MobileWhereToBuy() {
  return (
    <div className="relative isolate min-h-screen text-white overflow-visible">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <FloatingLines
          enabledWaves={["middle", "bottom"]}
          linesGradient={["#8FC81C", "#FF0000"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={3}
          bendStrength={-0.25}
          interactive={false}
          parallax={false}
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-black/50 pointer-events-none" />

      {/* GoosePeek (kept, but page-safe) */}
      <div className="display:none pointer-events-none">
        <GoosePeek active={false}/>
      </div>

      {/* HEADER
          CRITICAL FIX:
          - wrapper is pointer-events-none so it can NEVER block the page
          - logo + menu are pointer-events-auto so they still work
      */}
     <header className="fixed top-0 left-0 right-0 z-[100000] bg-black/35 backdrop-blur-md border-b border-red-700/70 pointer-events-none">
  <div className="max-w-6xl mx-auto px-4 h-[64px] flex items-center justify-between">
    <Link href="/" className="pointer-events-auto relative z-[200000]">
      <img src="/Sour Goose Logo.webp" alt="Sour Goose" className="h-8 w-auto" />
    </Link>
    <div className="pointer-events-auto">
          <StaggeredMenu
            position="right"
            items={navMenuItems}
            socialItems={navSocialItems}
            displaySocials
            menuButtonColor="#ffffff"
            openMenuButtonColor="#000000"
            changeMenuColorOnOpen
            colors={["#FF0000", "#8FC81C"]}
            accentColor="#FFFF00"
            disableLogo
            className="font-bebas text-lg"
          />
           </div>
  </div>
</header>

      {/* HERO */}
      <section className="relative z-10 min-h-[45vh] flex flex-col items-center justify-center text-center px-5">
        <DecryptedText
          text="WHERE TO BUY"
          speed={80}
          maxIterations={10}
          sequential
          animateOn="view"
          onFinish={() => {}}
          className="font-bebas-ui text-[clamp(2.8rem,12vw,4.5rem)] text-lightning-yellow lightning-text tracking-wide"
          encryptedClassName="font-bebas-ui text-[clamp(2.8rem,12vw,4.5rem)] text-lightning-yellow"
        />

        <p className="mt-4 text-base text-gray-300 max-w-sm">
          Find Sour Goose near you — online, in stores, or at the distillery.
        </p>
      </section>

      {/* STACKED CARDS (DESKTOP STYLE) */}
      <section className="pointer-events-auto relative z-10 px-5 space-y-8 mb-28">
        {/* FIND IN STORES */}
        <SpotlightCard className="group p-8 rounded-3xl flex flex-col items-center text-center pointer-events-auto">
          <Store className="w-12 h-12 mb-4 text-lightning-yellow transition-colors group-hover:text-sour-red" />

          <h3 className="font-bebas-ui text-3xl text-lightning-yellow mb-3">
            FIND IT IN STORES
          </h3>

          <p className="text-gray-300 text-base mb-6">
            Available at select private liquor stores across BC.
          </p>

          <a
            href="https://deepbluedistilleries.ca/where-to-buy/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-sour-red text-white font-bebas-ui text-xl py-4">
              FIND A STORE NEAR YOU
            </Button>
          </a>
        </SpotlightCard>

        {/* SHOP ONLINE */}
        <SpotlightCard className="group p-8 rounded-3xl flex flex-col items-center text-center pointer-events-auto">
          <ShoppingCart className="w-12 h-12 mb-4 text-lightning-yellow transition-colors group-hover:text-sour-red" />

          <h3 className="font-bebas-ui text-3xl text-lightning-yellow mb-3">
            SHOP ONLINE
          </h3>

          <p className="text-gray-300 text-base mb-6">
            Order Sour Goose directly through our official online retailer.
          </p>

          <a
            href="https://deepbluedistilleries.ca/product-tag/sour-goose/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-sour-red text-white font-bebas-ui text-xl py-4">
              SHOP NOW
            </Button>
          </a>
        </SpotlightCard>

        {/* VISIT DISTILLERY */}
        <SpotlightCard className="group p-8 rounded-3xl flex flex-col items-center text-center pointer-events-auto">
          <MapPin className="w-12 h-12 mb-4 text-lightning-yellow transition-colors group-hover:text-sour-red" />

          <h3 className="font-bebas-ui text-3xl text-lightning-yellow mb-3">
            VISIT THE DISTILLERY
          </h3>

          <p className="text-gray-300 text-base">
            5800 Cedarbridge Way #130
            <br />
            Richmond, BC
          </p>

          <div className="mt-3 mb-6">
            <BusinessStatus />
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=5800+Cedarbridge+Way+%23130,+Richmond,+BC"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-sour-red text-white font-bebas-ui text-xl py-4">
              GET DIRECTIONS
            </Button>
          </a>
        </SpotlightCard>

        {/* REQUEST IT */}
        <SpotlightCard className="group p-8 rounded-3xl flex flex-col items-center text-center pointer-events-auto">
          <Mail className="w-12 h-12 mb-4 text-lightning-yellow transition-colors group-hover:text-sour-red" />

          <h3 className="font-bebas-ui text-3xl text-lightning-yellow mb-3">
            DON’T SEE IT?
          </h3>

          <p className="text-gray-300 text-base mb-6">
            Ask your local liquor store to stock Sour Goose.
          </p>

          <a href="mailto:orders@deepbluedistilleries.ca" className="w-full pointer-events-auto">
            <Button className="w-full bg-sour-red text-white font-bebas-ui text-xl py-4">
              REQUEST SOUR GOOSE
            </Button>
          </a>
        </SpotlightCard>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 border-t border-sour-red relative z-10">
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/drinksourgoose" target="_blank" rel="noopener noreferrer">
              <Instagram size={22} className="text-lightning-yellow" />
            </a>
            <a href="https://www.tiktok.com/@drinksourgoose" target="_blank" rel="noopener noreferrer">
              <TikTokIcon className="w-[22px] h-[22px] text-lightning-yellow" />
            </a>
            <a href="https://deepbluedistilleries.ca" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={22} className="text-lightning-yellow" />
            </a>
          </div>

          <div className="text-xs text-gray-400 px-6">
            Proudly crafted in British Columbia. Drink responsibly. Must be 19+.
            <br /><br />
            © 2026 Brazen Bull Creative
          </div>
        </div>
      </footer>
    </div>
  )
}