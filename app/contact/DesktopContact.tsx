"use client"

import { useState } from "react"
import GoosePeek from "@/components/GoosePeek"
import DecryptedText from "@/components/DecryptedText"
import SpotlightCard from "@/components/SpotlightCard"
import LiquidEther from "@/components/LiquidEther"
import "@/components/LiquidEther.css"
import ElectricBorder from '@/components/ElectricBorder'
import StaggeredMenu from "@/components/StaggeredMenu";



import { Mail, Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TikTokIcon } from "@/components/icons/TikTokIcon"

const navMenuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },

  { label: "Raspberry", ariaLabel: "Raspberry flavour", link: "/raspberry" },

  { label: "Salsa Verde", ariaLabel: "Salsa Verde flavour", link: "/salsa-verde" },
  {
    label: "Cocktails",
    ariaLabel: "View cocktail recipes",
    link: "/cocktails",
  },
  

  { label: "Contact", ariaLabel: "Contact us", link: "/contact" },

  {
    label: "Shop Now",
    ariaLabel: "Shop Sour Goose",
    link: "https://deepbluedistilleries.ca/product-tag/sour-goose/",
    external: true, // 👈 ADD THIS
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
const navSocialItems = [
  { label: "Instagram", link: "https://instagram.com/drinksourgoose" },
  { label: "TikTok", link: "https://www.tiktok.com/@drinksourgoose" },
  { label: "Deep Blue Distilleries", link: "https://deepbluedistilleries.ca" },
];

export default function ContactPage() {
  const [decryptDone, setDecryptDone] = useState(false)
  
  return (
    <div className="relative min-h-screen text-white overflow-visible">
      {/* Liquid Ether Background – put this FIRST so it truly sits behind everything */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <LiquidEther
          colors={["#FF0000", "#FF0000", "#8FC81C"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

  {/* HEADER BAR (Sour Goose Logo + Menu Button) */}
<div className="fixed top-0 left-0 w-full z-[99999] flex items-center justify-between px-6 pt-4">

{/* LEFT — CLICKABLE LOGO */}
<Link
  href="/"
  className="select-none relative z-[200000] pointer-events-auto"
>
  <img
    src="/Sour Goose Logo.webp"
    alt="Sour Goose"
    className="h-10 w-auto"
  />
</Link>

{/* RIGHT — Menu Button */}
<StaggeredMenu
  position="right"
  items={navMenuItems}
  socialItems={navSocialItems}
  displaySocials={true}
  displayItemNumbering={true}
  menuButtonColor="#ffffff"
  openMenuButtonColor="#000000"   // close turns black
  changeMenuColorOnOpen={true}
  colors={["#FF0000", "#8FC81C"]}
  accentColor="#FFFF00"
  disableLogo={true}              // prevent internal menu logo
  onMenuOpen={() => console.log("Menu opened")}
  onMenuClose={() => console.log("Menu closed")}
  className="font-bebas text-lg tracking-wide hover:text-lightning-yellow transition"
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
    revealDirection="start"
    animateOn="view"
    className="
      font-bebas-ui
      text-[clamp(3.5rem,10vw,6.5rem)]
      text-lightning-yellow
      lightning-text
      tracking-wide
    "
    encryptedClassName="
      font-bebas-ui
      text-[clamp(3.5rem,10vw,6.5rem)]
      text-lightning-yellow
    "
    onFinish={() => setDecryptDone(true)}
  />

  <div className="mt-8 max-w-2xl space-y-2">
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
      Got a question? Want to stock us? Or just feeling a little sour?
    </p>
    <p className="text-sour-red font-bebas-ui text-xl tracking-wide">
      Drop us a line — we don’t bite (but our liqueur might).
    </p>
  </div>
</section>


      {/* BUSINESS INQUIRIES SECTION */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 mb-32">
      <div className="bg-sour-red/30 p-10 rounded-3xl border border-sour-red shadow-xl">
          <h3 className="font-bebas-ui text-4xl md:text-5xl text-white tracking-wide mb-6">
            BUSINESS INQUIRIES
          </h3>

          <div className="grid md:grid-cols-2 gap-10 text-black font-avenir text-lg leading-relaxed">
            <div>
              <h4 className="font-bebas-ui text-2xl text-white tracking-wide mb-4">
                WHOLESALE & DISTRIBUTION
              </h4>
              <p className="text-white/90">
                Interested in carrying Sour Goose? We work with retailers, bars, and restaurants who want something bold and different.
              </p>
            </div>

            <div>
              <h4 className="font-bebas-ui text-2xl text-white tracking-wide mb-4">
                EVENTS & PARTNERSHIPS
              </h4>
              <p className="text-white/90">
                Looking to feature Sour Goose at your event or collaborate on something exciting? Let's make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="mt-24 mb-24 h-px w-32 mx-auto bg-sour-red/60" />

      {/* SPOTLIGHT CARDS */}
      <section className="
  relative z-10
  mt-32
  px-6
  max-w-6xl
  mx-auto
  grid
  md:grid-cols-2
  gap-16
">
        {/* Email */}
        <SpotlightCard
          spotlightColor="rgba(255,0,0,0.5)"
          backgroundColor="rgba(255,255,255,0.07)"
          borderColor="rgba(255,255,255,0.1)"
          className="group p-12 rounded-3xl flex flex-col items-center"
        >
          <Mail className="w-16 h-16 text-lightning-yellow mb-8 transition-colors duration-200 group-hover:text-black" />

          <h3 className="font-bebas-ui text-4xl md:text-5xl text-lightning-yellow tracking-wide mb-4">
            EMAIL US
          </h3>

          <p className="text-white font-avenir text-base sm:text-lg max-w-md mx-auto text-center">
            For inquiries, wholesale opportunities, or distillery visits — we’re always here.
          </p>

          <a href="mailto:info@sourgoose.ca">
            <Button className="mt-10 bg-sour-red hover:bg-red-700 text-white font-bebas-ui text-xl px-8 py-3 tracking-wide">
              INFO@SOURGOOSE.CA
            </Button>
          </a>
        </SpotlightCard>

        {/* Follow */}
        <SpotlightCard
          spotlightColor="rgba(143,200,28,0.5)"
          backgroundColor="rgba(255,255,255,0.07)"
          borderColor="rgba(255,255,255,0.1)"
          className="group p-12 rounded-3xl flex flex-col items-center"
        >
          <Instagram className="w-16 h-16 text-lightning-yellow mb-8 transition-colors duration-200 group-hover:text-black" />

          <h3 className="font-bebas-ui text-4xl md:text-5xl text-lightning-yellow tracking-wide mb-4">
            FOLLOW THE GOOSE
          </h3>

          <p className="text-white font-avenir text-base sm:text-lg max-w-md mx-auto text-center">
            Stay updated with news, drops, cocktails, flavour experiments — and Goose attitude.
          </p>

          <a href="https://instagram.com/drinksourgoose" target="_blank">
            <Button className="mt-10 bg-sour-red hover:bg-red-700 text-white font-bebas-ui text-xl px-8 py-3 tracking-wide">
              @DRINKSOURGOOSE
            </Button>
          </a>
        </SpotlightCard>
      </section>

      {/* DISTILLERY SITE */}
      <section className="relative z-10 text-center mt-40 mb-32 px-6">
      <div className="bg-black/60 p-10 rounded-3xl border border-gray-700 max-w-3xl mx-auto">
          <ExternalLink className="w-14 h-14 text-lightning-yellow mx-auto mb-4" />

          <h3 className="font-bebas-ui text-3xl md:text-4xl text-white tracking-wide mb-2">
            VISIT OUR DISTILLERY SITE
          </h3>

          <a
            href="https://deepbluedistilleries.ca"
            target="_blank"
            className="font-bebas-ui text-2xl md:text-3xl text-lightning-yellow hover:text-white tracking-wide hover-lightning"
          >
            DEEPBLUEDISTILLERIES.CA
          </a>
        </div>
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
