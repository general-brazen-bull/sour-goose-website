"use client";
import dynamic from "next/dynamic"

import { useEffect, useState } from "react";
import Link from "next/link";
import { Instagram, ExternalLink } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import StaggeredMenu from "@/app/animations/StaggeredMenu";
import DecryptedText from "@/app/animations/DecryptedText";
import ScrollReveal from "@/app/animations/ScrollReveal";
import Beams from "@/app/animations/Beams";
import { motion } from "framer-motion";
import MarqueeSection from "@/app/animations/MarqueeSection";
const ElectricBorder = dynamic(
  () => import("@/app/animations/ElectricBorder"),
  { ssr: false }
)
import GoosePeek from "@/app/animations/GoosePeek";

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
];

export default function CurasourPage() {
  const [decryptDone, setDecryptDone] = useState(false);

  useEffect(() => {
    // No-op, but keeps your decryptDone pattern if you need it later
  }, [decryptDone]);

  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* ✅ NAVBAR (same structure as mobile home) */}
      <header className="fixed top-0 left-0 right-0 z-[100000] bg-black/35 backdrop-blur-md border-b border-red-700/70">
        <div className="max-w-6xl mx-auto px-4 h-[64px] flex items-center justify-between pointer-events-none">
          {/* Clickable logo */}
          <Link
            href="/"
            aria-label="Go to home"
            className="cursor-pointer pointer-events-auto relative z-[200000]"
          >
            <img src="/sour-goose-logo.webp" alt="Sour Goose" className="h-8 w-auto" />
          </Link>

          {/* Menu button remains clickable */}
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
              className="font-bebas text-lg tracking-wide"
            />
          </div>
        </div>
      </header>

      {/* ✅ GoosePeek MUST NEVER intercept clicks */}
      <div className="pointer-events-none">
        <GoosePeek />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen w-full bg-black flex flex-col items-center text-center px-6 pt-28">
        {/* BACKGROUND BEAMS (never clickable) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-90">
          <Beams
            beamWidth={2}
            beamHeight={14}
            beamNumber={10}
            lightColor="#0087ce"
            speed={1.6}
            noiseIntensity={2}
            scale={0.28}
            rotation={315}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-30 w-full max-w-md flex flex-col items-center pointer-events-auto">
          {/* HEADLINE */}
          <DecryptedText
            text="SOUR GOOSE"
            speed={120}
            maxIterations={14}
            sequential
            revealDirection="start"
            animateOn="view"
            onFinish={() => setDecryptDone(true)}
            className="font-bebas text-white tracking-wide text-[clamp(4.2rem,9vw,4.2rem)] leading-none mb-2"
            encryptedClassName="font-bebas text-white tracking-wide text-[clamp(4.2rem,9vw,4.2rem)] leading-none mb-2"
          />

          <DecryptedText
            text="CURASOUR"
            speed={120}
            maxIterations={14}
            sequential
            revealDirection="start"
            animateOn="view"
            onFinish={() => {}}
            className="font-bebas text-[#0087ce] tracking-wide text-[clamp(5rem,11vw,6rem)] leading-none mb-6"
            encryptedClassName="font-bebas text-[#0087ce] tracking-wide text-[clamp(5rem,11vw,6rem)] leading-none mb-6"
          />

          {/* BOTTLE */}
          <motion.img
            src="/curasourbottle.png"
            alt="Sour Goose Curasour"
            initial={{ x: 160, rotate: -45, opacity: 0 }}
            animate={{ x: 0, rotate: -45, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="
              w-[120vw]
              max-w-none
              z-10
              -mt-36
              -mb-4
              pointer-events-none
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)]
            "
            style={{ marginRight: "-50%" }}
          />

          {/* SUBTEXT */}
          <p className="font-bebas text-[#FFFF00] tracking-wide text-[clamp(2.2rem,4.5vw,2rem)] leading-tight -mt-28 mb-8 max-w-sm">
          ZESTY. ELECTRIC. A BLAST OF BLUE CITRUS BITE.          </p>

          {/* ✅ BUY NOW (REAL LINK, NO JS) */}
          <a
            href="https://deepbluedistilleries.ca/product-tag/sour-goose/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center mb-40 relative z-[999999] pointer-events-auto"
          >
            <span
              className="
                w-[50vw]
                bg-[#FFFF00]
                text-black
                font-bebas
                text-2xl
                py-4
                tracking-wide
                transition-all duration-300
                active:scale-[0.97]
                shadow-[0_0_25px_rgba(255,255,0,0.6)]
                text-center
                cursor-pointer
                pointer-events-auto
                select-none
              "
            >
              BUY NOW
            </span>
          </a>
        </div>
      </section>

      {/* MARQUEE SEAM */}
      <div className="relative z-20 pt-16">
        <div className="marquee-wrap marquee-tight curasour-marquee">
          <MarqueeSection text="The New Curacao In Town • Bright • A Shockwave of Blue Orange• " />
        </div>
      </div>

      {/* CONTENT BACKGROUND */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-[#120000] to-black" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "url('/noise.png')" }}
        />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -z-10 pointer-events-none">
          <div className="w-[1200px] h-[1200px]  bg-[#0087ce]/25 blur-[260px]" />
        </div>

        {/* FLAVOUR DESCRIPTION */}
        <section className="w-full py-20 px-6">
          <div className="max-w-4xl mx-auto text-center text-gray-200 text-lg md:text-xl leading-relaxed space-y-10">
            <ScrollReveal baseOpacity={0} baseRotation={0} enableBlur blurStrength={20}>
            Curasour delivers the classic blue curaçao-style profile with balanced sweetness and vibrant citrus clarity.
            It brings eye-catching colour and reliable orange-forward flavour to any cocktail, making it an easy staple behind the bar.            </ScrollReveal>

            <ScrollReveal baseOpacity={0} baseRotation={0} enableBlur blurStrength={20}>
            Whether you’re building tropical drinks or adding a citrus accent to a classic,
            Curasour keeps it bright, smooth, and easy to mix.            </ScrollReveal>
          </div>
        </section>

        {/* TASTING NOTES */}
        <section className="w-full py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <ElectricBorder
              color="#0087ce"
              speed={1.2}
              chaos={0.6}
              thickness={2}
              style={{ borderRadius: 20 }}
            >
              <div className="bg-black/70 backdrop-blur-md rounded-[18px] px-8 py-12">
                <h2 className="font-bebas text-5xl text-[#0087ce] tracking-wide mb-10 text-center">
                  TASTING NOTES
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-gray-200">
                  {[
                    ["AROMA", " Bright orange zest with a subtle sweet citrus lift "],
                    ["PALATE", "Sweet orange peel layered with smooth, candied citrus character"],
                    ["FINISH", "Clean, lightly zesty, and refreshing"],
                    ["MIXABILITY", "Perfect in margaritas, tropical cocktails, highballs, and any drink that needs bold blue citrus flavour"],
                  ].map(([label, text]) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <span className="font-bebas text-[#0087ce] text-2xl tracking-wide">{label}</span>
                      <span className="sm:text-right max-w-xl">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ElectricBorder>
          </div>
        </section>
      </div>

    {/* FOOTER — MATCHES OTHER MOBILE PAGES */}
    <footer className="bg-black py-10 border-t border-sour-red relative z-10">
        <div className="max-w-md mx-auto px-6 text-center space-y-6">

          {/* SOCIALS — ONE ROW */}
          <div className="flex justify-center items-center gap-8">
            <a
              href="https://instagram.com/drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white relative z-[10000] pointer-events-auto"
            >
              <Instagram size={18} />
              <span className="font-bebas-ui text-lg">@DRINKSOURGOOSE</span>
            </a>

            <a
              href="https://www.tiktok.com/@drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white relative z-[10000] pointer-events-auto"
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
            className="inline-flex items-center gap-2 text-lightning-yellow hover:text-white relative z-[10000] pointer-events-auto"
          >
            <ExternalLink size={16} />
            <span className="font-bebas-ui text-lg">
              DEEPBLUEDISTILLERIES.CA
            </span>
          </a>

          <div className="text-sm text-gray-400">
            Proudly crafted in British Columbia. Drink responsibly. Must be 19+. <br /> <br />
            @ Copyright 2026 - All Rights Reserved. Design by Brazen Bull Creative
          </div>
        </div>
      </footer>
    </main>
  );
}
