"use client";

import { useState, useEffect } from "react";
import { Instagram, ExternalLink } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import GoosePeek from "@/components/GoosePeek";
import StaggeredMenu from "@/components/StaggeredMenu";
import Link from "next/link";
import DecryptedText from "@/components/DecryptedText";
import ScrollReveal from "@/components/ScrollReveal";
import Beams from "@/components/Beams";
import { motion } from "framer-motion";
import MarqueeSection from "../../components/MarqueeSection";
import ElectricBorder from "@/components/ElectricBorder";

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

export default function SalsaPage() {
  const [decryptDone, setDecryptDone] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    if (!decryptDone) return;
    const t1 = setTimeout(() => setShowText(true), 150);
    const t2 = setTimeout(() => setShowCTA(true), 350);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [decryptDone]);

  return (
    <main className="relative min-h-screen w-full text-white overflow-hidden bg-black">

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-[99999] flex items-center justify-between px-6 pt-4">
        <Link href="/" className="relative z-[200000]">
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
          colors={["#8FC81C", "#FF0000"]}
          accentColor="#FFFF00"
          disableLogo
          className="font-bebas text-lg tracking-wide hover:text-lightning-yellow transition"
        />
      </div>

      <GoosePeek />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden">

        {/* BEAMS — HERO ONLY */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Beams
            beamWidth={2.5}
            beamHeight={15}
            beamNumber={12}
            lightColor="#8FC81C"
            speed={2}
            noiseIntensity={3}
            scale={0.25}
            rotation={315}
          />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 pt-32 pb-10 px-20">
          <div className="grid grid-cols-2 gap-8 items-center">

            {/* LEFT */}
            <div className="flex flex-col items-start pb-32 pl-72 w-[50rem]">

              {/* SOUR GOOSE */}
              <DecryptedText
                text="SOUR GOOSE"
                speed={120}
                maxIterations={14}
                sequential
                revealDirection="start"
                animateOn="view"
                onFinish={() => {}}
                className="font-bebas text-white tracking-wide text-[clamp(5rem,6vw,8rem)] leading-none mb-4"
                encryptedClassName="font-bebas text-white tracking-wide text-[clamp(5rem,6vw,8rem)] leading-none mb-4"
              />

              {/* SALSA VERDE — HOVER GLOW ONLY */}
              <div className="group mb-10 pb-10">
                <DecryptedText
                  text="SALSA VERDE"
                  speed={120}
                  maxIterations={14}
                  sequential
                  revealDirection="start"
                  animateOn="view"
                  onFinish={() => setTimeout(() => setDecryptDone(true), 0)}
                  className="
                    font-bebas
                    text-[#8FC81C]
                    tracking-wide
                    text-[clamp(4.5rem,10vw,9.5rem)]
                    leading-none
                    whitespace-nowrap
                    transition-all duration-300
                    group-hover:drop-shadow-[0_0_40px_rgba(143,200,28,0.9)]
                    group-hover:scale-[1.015]
                  "
                  encryptedClassName="
                    font-bebas
                    text-[#8FC81C]
                    tracking-wide
                    text-[clamp(4.5rem,10vw,9.5rem)]
                    leading-none
                    whitespace-nowrap
                  "
                />
              </div>

              {/* SUBTEXT */}
              <p
                className={`
                  font-bebas text-[#FFFF00] tracking-wide text-5xl leading-tight max-w-xl mb-10
                  transition-opacity duration-700
                  ${showText ? "opacity-100" : "opacity-0"}
                `}
              >
                TART. JUICY. A STRAIGHT PUNCH OF SALSA VERDE CHAOS.
              </p>

              {/* CTA */}
              <div
                className={`
                  transition-all duration-700 mt-20
                  ${showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
              >
                  <a
  href="https://deepbluedistilleries.ca/product-tag/sour-goose/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-[10000] pointer-events-auto"
>
                  <button
                    className="
                      bg-[#FFFF00] text-black font-bebas text-3xl px-14 py-4 tracking-wide
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:scale-[1.03]
                      hover:shadow-[0_0_35px_rgba(255,255,0,0.65)]
                      active:scale-[0.98]
                    "
                  >
                    BUY NOW
                  </button>
                </a>
              </div>
            </div>

            {/* RIGHT — BOTTLE */}
            <motion.div
              initial={{ x: 300, opacity: 0, scale: 0.98 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 2.2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.05 }}
              className="relative flex justify-center items-center -translate-y-12"
            >
              <img
                src="/salsa-bottle.webp"
                alt="Sour Goose Salsa Verde"
                className="
                  h-[90vh]
                  max-h-[1000px]
                  object-contain
                  pb-20
                  transition-transform duration-300
                  drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]
                "
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* HERO → CONTENT SEAM */}
      <div className="relative z-20 pt-28">
        <div className="marquee-wrap marquee-tight salsa-marquee">
          <MarqueeSection text="The new goose in town • Zesty • Sour • Unapologetic • " />
        </div>
      </div>

      {/* ================= CONTENT BACKGROUND ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-[#0e1406] to-black" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{ backgroundImage: "url('/noise.png')" }}
        />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -z-10">
          <div className="w-[1200px] h-[1200px] bg-[#8FC81C]/10 blur-[260px]" />
        </div>

        {/* FLAVOUR DESCRIPTION */}
        <section className="w-full py-24 px-6">
          <div className="max-w-4xl mx-auto text-center text-gray-200 text-lg md:text-xl leading-relaxed space-y-10">
            <ScrollReveal baseOpacity={0} baseRotation={0} enableBlur blurStrength={20}>
              Sour Goose Salsa Verde is the bold green twist that brings pure vibrancy
              to the glass. It opens with a bright, tangy hit and a subtle green-pepper lift.
            </ScrollReveal>

            <ScrollReveal baseOpacity={0} baseRotation={0} enableBlur blurStrength={20}>
              Energetic, expressive, and unapologetically fresh — it’s built for cocktails
              that want attitude.
            </ScrollReveal>
          </div>
        </section>

        {/* TASTING NOTES */}
        <section className="w-full py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <ElectricBorder
              color="#8FC81C"
              speed={1.2}
              chaos={0.6}
              thickness={2}
              style={{ borderRadius: 20 }}
            >
              <div className="bg-black/70 backdrop-blur-md rounded-[18px] px-10 py-14">
                <h2 className="font-bebas text-5xl md:text-6xl text-[#8FC81C] tracking-wide mb-12 text-center">
                  TASTING NOTES
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-gray-200">
                  {[
                    ["AROMA", "Zesty green brightness with a hint of fresh pepper"],
                    ["PALATE", "Tangy and bold with just enough spice to stay lively"],
                    ["MID-PALATE", "A soft green-apple note adds balance and lift"],
                    ["FINISH", "Bright, crisp, and expressively smooth with a gentle kick"],
                    ["MIXABILITY", "Ideal for margaritas, highballs, Caesars, and creative cocktails"],
                  ].map(([label, text]) => (
                    <div key={label} className="flex flex-col md:flex-row md:justify-between gap-2">
                      <span className="font-bebas text-[#8FC81C] text-xl md:text-2xl tracking-wide">
                        {label}
                      </span>
                      <span className="md:text-right max-w-xl">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ElectricBorder>
          </div>
        </section>
      </div>

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
    </main>
  );
}
