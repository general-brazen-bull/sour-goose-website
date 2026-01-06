"use client"

import GoosePeek from "@/components/GoosePeek"
import DecryptedText from "@/components/DecryptedText"
import SpotlightCard from "@/components/SpotlightCard"
import StaggeredMenu from "@/components/StaggeredMenu"
import Aurora from "@/components/Aurora"

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
]

const navSocialItems = [
  { label: "Instagram", link: "https://instagram.com/drinksourgoose" },
  { label: "TikTok", link: "https://www.tiktok.com/@drinksourgoose" },
  { label: "Deep Blue Distilleries", link: "https://deepbluedistilleries.ca" },
]

export default function MobileContact() {
  return (
    <div className="relative text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-[100000] bg-black/35 backdrop-blur-md border-b border-red-700/70">
        <div className="max-w-6xl mx-auto px-4 h-[64px] flex items-center justify-between pointer-events-none">

          <Link
            href="/"
            aria-label="Go to home"
            className="cursor-pointer pointer-events-auto relative z-[200000]"
          >
            <img
              src="/Sour Goose Logo.webp"
              alt="Sour Goose"
              className="h-8 w-auto"
            />
          </Link>

          <div className="pointer-events-auto">
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
            />
          </div>

        </div>
      </header>

      <GoosePeek />

      {/* ===================== */}
      {/* AURORA WRAPPER START */}
      {/* ===================== */}
      <div className="relative overflow-hidden">

        {/* AURORA BACKGROUND */}
        <div className="absolute left-0 right-0 -top-48 h-[140%] -z-20 pointer-events-none">
          <Aurora
            colorStops={["#FF0000", "#8FC81C", "#FFFF00"]}
            blend={0.4}
            amplitude={0.25}
            speed={0.9}
          />
        </div>

        {/* HERO */}
        <section
          className="
            relative z-10
            min-h-[68vh]
            flex flex-col
            items-center
            justify-center
            text-center
            px-6
            pt-32
          "
        >
          {/* GHOST TEXT — defines height */}
  <h1
    aria-hidden
    className="
      font-bebas-ui
      text-[clamp(5rem,11vw,5rem)]
      leading-[0.92]
      tracking-[0.08em]
      text-lightning-yellow
      opacity-0
      pointer-events-none
      text-center
    "
  >
    LET&apos;S TALK GOOSE
  </h1>

  {/* ANIMATED TEXT — overlays ghost */}
  <div className="absolute inset-0 flex items-center justify-center">
    <DecryptedText
      text="LET'S TALK GOOSE"
      speed={80}
      maxIterations={12}
      sequential
      revealDirection="start"
      animateOn="view"
      onFinish={() => {}}
      className="
        font-bebas-ui
        text-[clamp(5rem,11vw,5rem)]
        leading-[0.92]
        tracking-[0.08em]
        text-lightning-yellow
        lightning-text
        text-center
      "
      encryptedClassName="
        font-bebas-ui
        text-[clamp(5rem,11vw,5rem)]
        leading-[0.92]
        tracking-[0.08em]
        text-lightning-yellow
        text-center
      "
    />
  </div>

          <div className="mt-6 max-w-md space-y-3">
            <p className="text-xl text-gray-300 leading-relaxed">
              Got a question? Want to stock us? Or just feeling a little sour?
            </p>
            <p className="text-sour-red font-bebas-ui text-xl tracking-wide">
              Drop us a line — we don’t bite (but our liqueur might).
            </p>
          </div>
        </section>

        {/* BUSINESS INQUIRIES */}
        <section
          className="
            relative z-10
            px-6
            mt-16
            mb-20
            text-center
          "
        >
          <div className="bg-sour-red/30 p-8 rounded-3xl border border-sour-red shadow-xl">
            <h3 className="font-bebas-ui text-4xl text-white tracking-wide mb-8">
              BUSINESS INQUIRIES
            </h3>

            <div className="space-y-10 text-lg leading-relaxed">
              <div>
                <h4 className="font-bebas-ui text-2xl tracking-wide mb-3">
                  WHOLESALE & DISTRIBUTION
                </h4>
                <p className="text-white/90">
                  Interested in carrying Sour Goose? We work with retailers, bars,
                  and restaurants who want something bold and different.
                </p>
              </div>

              <div>
                <h4 className="font-bebas-ui text-2xl tracking-wide mb-3">
                  EVENTS & PARTNERSHIPS
                </h4>
                <p className="text-white/90">
                  Looking to feature Sour Goose at your event or collaborate on
                  something exciting? Let’s make it happen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AURORA FADE OUT */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black pointer-events-none -z-10" />
      </div>
      {/* =================== */}
      {/* AURORA WRAPPER END */}
      {/* =================== */}

      {/* DIVIDER */}
      <div className="h-px w-24 mx-auto bg-sour-red/60 mb-20" />

      {/* CONTACT CARDS */}
      <section className="relative z-10 px-6 space-y-16">
        <SpotlightCard
          spotlightColor="rgba(255,0,0,0.5)"
          backgroundColor="rgba(255,255,255,0.07)"
          borderColor="rgba(255,255,255,0.1)"
          className="p-8 rounded-3xl flex flex-col items-center"
        >
          <Mail className="w-14 h-14 text-lightning-yellow mb-6" />
          <h3 className="font-bebas-ui text-4xl text-lightning-yellow mb-3">
            EMAIL US
          </h3>
          <p className="text-white text-lg text-center max-w-xs">
            For inquiries, wholesale opportunities, or distillery visits — we’re always here.
          </p>
          <a href="mailto:info@sourgoose.ca">
            <Button className="mt-8 bg-sour-red hover:bg-red-700 font-bebas-ui text-xl px-10 py-4">
              INFO@SOURGOOSE.CA
            </Button>
          </a>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor="rgba(143,200,28,0.5)"
          backgroundColor="rgba(255,255,255,0.07)"
          borderColor="rgba(255,255,255,0.1)"
          className="p-8 rounded-3xl flex flex-col items-center"
        >
          <Instagram className="w-14 h-14 text-lightning-yellow mb-6" />
          <h3 className="font-bebas-ui text-4xl text-lightning-yellow mb-3">
            FOLLOW THE GOOSE
          </h3>
          <p className="text-white text-lg text-center max-w-xs">
            Stay updated with news, drops, cocktails, flavour experiments — and Goose attitude.
          </p>
          <a
            href="https://instagram.com/drinksourgoose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-8 bg-sour-red hover:bg-red-700 font-bebas-ui text-xl px-10 py-4">
              @DRINKSOURGOOSE
            </Button>
          </a>
        </SpotlightCard>
      </section>

      {/* DISTILLERY */}
      <section className="relative z-10 text-center mt-28 mb-24 px-6">
        <div className="bg-black/60 p-8 rounded-3xl border border-gray-700 max-w-md mx-auto">
          <ExternalLink className="w-12 h-12 text-lightning-yellow mx-auto mb-4" />
          <h3 className="font-bebas-ui text-3xl mb-2">
            VISIT OUR DISTILLERY SITE
          </h3>
          <a
            href="https://deepbluedistilleries.ca"
            target="_blank"
            className="font-bebas-ui text-2xl text-lightning-yellow hover:text-white"
          >
            DEEPBLUEDISTILLERIES.CA
          </a>
        </div>
      </section>

     {/* FOOTER — MATCHES OTHER MOBILE PAGES */}
     <footer className="bg-black py-10 border-t border-sour-red relative z-10">
        <div className="max-w-md mx-auto px-6 text-center space-y-6">

          {/* SOCIALS — ONE ROW */}
          <div className="flex justify-center items-center gap-8">
            <a
              href="https://instagram.com/drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white"
            >
              <Instagram size={18} />
              <span className="font-bebas-ui text-lg">@DRINKSOURGOOSE</span>
            </a>

            <a
              href="https://www.tiktok.com/@drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white"
            >
              <TikTokIcon className="w-[18px] h-[18px]" />
              <span className="font-bebas-ui text-lg">@DRINKSOURGOOSE</span>
            </a>
          </div>

          {/* DISTILLERY */}
          <a
            href="https://deepbluedistilleries.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lightning-yellow hover:text-white"
          >
            <ExternalLink size={16} />
            <span className="font-bebas-ui text-lg">
              DEEPBLUEDISTILLERIES.CA
            </span>
          </a>

          <div className="text-sm text-gray-400">
            Proudly crafted in British Columbia. Drink responsibly. Must be 19+.
          </div>
        </div>
      </footer>
    </div>
  )
}
