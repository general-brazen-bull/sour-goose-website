"use client"

import { useState } from "react"
import GoosePeek from "@/components/GoosePeek"
import DecryptedText from "@/components/DecryptedText"
import SpotlightCard from "@/components/SpotlightCard"
import LiquidEther from "@/components/LiquidEther"
import "@/components/LiquidEther.css"
import StaggeredMenu from "@/components/StaggeredMenu"

import { Mail, Instagram, MapPin, Clock, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TikTokIcon } from "@/components/icons/TikTokIcon"
import { ExternalLink } from "lucide-react"

/* ---------------- BUSINESS STATUS (INLINE) ---------------- */
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
  { label: "Salsa Verde", ariaLabel: "Salsa Verde flavour page", link: "/salsa-verde" },
  { label: "Cocktails", ariaLabel: "View cocktail recipes", link: "/cocktails" },
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

/* ---------------- PAGE ---------------- */
export default function ContactPage() {
  const [decryptDone, setDecryptDone] = useState(false)

  return (
    <div className="relative min-h-screen text-white overflow-visible">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <LiquidEther
          colors={["#FF0000", "#FF0000", "#8FC81C"]}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>

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
          text="LET'S TALK GOOSE"
          speed={80}
          maxIterations={12}
          sequential
          animateOn="view"
          className="font-bebas-ui text-[clamp(3.5rem,10vw,6.5rem)] text-lightning-yellow lightning-text tracking-wide"
          encryptedClassName="font-bebas-ui text-[clamp(3.5rem,10vw,6.5rem)] text-lightning-yellow"
          onFinish={() => setDecryptDone(true)}
        />

        <div className="mt-8 max-w-2xl space-y-2">
          <p className="text-lg md:text-xl text-gray-300">
            Got a question? Want to stock us? Or just feeling a little sour?
          </p>
          <p className="text-sour-red font-bebas-ui text-xl tracking-wide">
            Drop us a line — we don’t bite (but our liqueur might).
          </p>
        </div>
      </section>

      {/* VISIT OUR DISTILLERY */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mt-32 mb-40 grid md:grid-cols-2 gap-16 items-stretch">
        {/* INFO */}
        <div className="bg-black/60 border border-sour-red/40 rounded-3xl p-10 min-h-[400px] flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-bebas-ui text-4xl text-lightning-yellow tracking-wide">
              VISIT OUR DISTILLERY
            </h3>

            <p className="text-gray-300">
              Sour Goose is proudly produced at Deep Blue Distilleries in Richmond, BC.
            </p>

            <div className="pt-2 space-y-3 text-gray-200">
              <p className="flex gap-3 items-start">
                <MapPin className="text-lightning-yellow mt-1" />
                <span>
                  5800 Cedarbridge Way #130<br />
                  Richmond, BC V6X 2A7
                </span>
              </p>

              <p className="flex gap-3 items-start">
                <Clock className="text-lightning-yellow mt-1" />
                <span>
                  Mon–Fri: 9:30AM – 4:30PM<br />
                  Sat & Sun: Closed
                </span>
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <p>
                Phone:{" "}
                <a href="tel:+16047675075" className="text-lightning-yellow hover:underline">
                  +1 (604) 767-5075
                </a>
              </p>

              <p>
                Email:{" "}
                <a href="mailto:info@sourgoose.ca" className="text-lightning-yellow hover:underline">
                  info@sourgoose.ca
                </a>
              </p>

              <div className="pt-4 pb-4"><BusinessStatus /></div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=5800+Cedarbridge+Way+%23130,+Richmond,+BC+V6X+2A7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 uppercase tracking-wide border border-lightning-yellow text-lightning-yellow px-6 py-3 hover:bg-sour-red hover:text-white transition w-fit"
          >
            Get Directions
          </a>
        </div>

        {/* MAP */}
        <div className="bg-black/60 border border-sour-red/40 rounded-3xl overflow-hidden min-h-[400px]">
          <iframe
            src="https://www.google.com/maps?q=5800+Cedarbridge+Way+%23130,+Richmond,+BC&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Deep Blue Distilleries Map"
          />
        </div>
      </section>

      {/* EMAIL + FOLLOW */}
      <section className="relative z-10 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <SpotlightCard className="group p-12 rounded-3xl flex flex-col items-center">
          <Mail className="w-16 h-16 mb-8 text-lightning-yellow transition-colors group-hover:text-sour-red" />
          <h3 className="font-bebas-ui text-4xl text-lightning-yellow mb-4">EMAIL US</h3>
          <Button className="mt-6 bg-sour-red text-white font-bebas-ui text-xl px-8 py-3">
            INFO@SOURGOOSE.CA
          </Button>
        </SpotlightCard>

        <SpotlightCard className="group p-12 rounded-3xl flex flex-col items-center">
          <Instagram className="w-16 h-16 mb-8 text-lightning-yellow transition-colors group-hover:text-sour-red" />
          <h3 className="font-bebas-ui text-4xl text-lightning-yellow mb-4">
            FOLLOW THE GOOSE
          </h3>
          <Button className="mt-6 bg-sour-red text-white font-bebas-ui text-xl px-8 py-3">
            @DRINKSOURGOOSE
          </Button>
        </SpotlightCard>
      </section>

      {/* BUSINESS ENQUIRIES */}
      <section className="relative z-10 px-6 max-w-4xl mx-auto mt-32 mb-40">
        <SpotlightCard className="group p-14 rounded-3xl flex flex-col items-center text-center">
          <Store className="w-16 h-16 mb-8 text-lightning-yellow transition-colors group-hover:text-sour-red" />

          <h3 className="font-bebas-ui text-4xl md:text-5xl text-lightning-yellow tracking-wide mb-6">
            BUSINESS ENQUIRIES
          </h3>

          <p className="text-white/90 font-avenir text-lg max-w-2xl">
            Wholesale, distribution, events, partnerships, or stocking Sour Goose —
            let’s talk.
          </p>

          <a href="mailto:orders@deepbluedistilleries.ca">
            <Button className="mt-10 bg-sour-red hover:bg-red-700 text-white font-bebas-ui text-xl px-10 py-4 tracking-wide">
              ORDERS@DEEPBLUEDISTILLERIES.CA
            </Button>
          </a>
        </SpotlightCard>
      </section>
      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-sour-red relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            <a
              href="https://instagram.com/drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning relative z-[10000] pointer-events-auto"
            >
              <Instagram size={22} />
              <span className="font-bebas-ui text-lg tracking-wide">@DRINKSOURGOOSE</span>
            </a>

            <a
              href="https://www.tiktok.com/@drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning relative z-[10000] pointer-events-auto"
            >
              <TikTokIcon className="w-[22px] h-[22px]" />
              <span className="font-bebas-ui text-lg tracking-wide">@DRINKSOURGOOSE</span>
            </a>

            <a
              href="https://deepbluedistilleries.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning relative z-[10000] pointer-events-auto"
            >
              <ExternalLink size={22} />
              <span className="font-bebas-ui text-lg tracking-wide">DEEPBLUEDISTILLERIES.CA</span>
            </a>
          </div>

          <div className="text-sm text-gray-400">
            Proudly crafted in British Columbia. Drink responsibly. Must be 19+. <br /> <br />
            @ Copyright 2026 - All Rights Reserved. Design by Brazen Bull Creative
          </div>
        </div>
      </footer>
    </div>
  )
}
