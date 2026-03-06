"use client";

import { useState, useEffect } from "react";
import { Instagram, ExternalLink } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import GoosePeek from "@/app/animations/GoosePeek";
import StaggeredMenu from "@/app/animations/StaggeredMenu";
import Link from "next/link";
import DecryptedText from "@/app/animations/DecryptedText";
import ScrollReveal from "@/app/animations/ScrollReveal";
import Beams from "@/app/animations/Beams";
import { motion } from "framer-motion";
import MarqueeSection from "@/app/animations/MarqueeSection";
import dynamic from "next/dynamic"
const ElectricBorder = dynamic(
  () => import("@/app/animations/ElectricBorder"),
  { ssr: false }
)



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

export default function GreenApplePage() {
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
<main className="relative min-h-screen w-full text-white overflow-hidden">
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
          colors={["#FF0000", "#8FC81C"]}
          accentColor="#FFFF00"
          disableLogo
          className="font-bebas text-lg tracking-wide hover:text-lightning-yellow transition"
        />
      </div>

      <GoosePeek />

    {/* HERO */}
<section className="relative min-h-screen w-full overflow-hidden">

{/* BEAMS BACKGROUND — HERO ONLY */}
<div className="absolute inset-0 z-0 pointer-events-none">
  <Beams
    beamWidth={2.5}
    beamHeight={15}
    beamNumber={12}
    lightColor="#dff200"
    speed={2}
    noiseIntensity={3}
    scale={0.25}
    rotation={315}
  />
</div>

{/* HERO CONTENT */}
<div className="relative z-10 pt-32 pb-10 px-20">
  <div className="grid grid-cols-2 gap-8 items-center h-full">

    {/* LEFT */}
    <div className="flex flex-col items-start pb-40 pl-72 w-[65rem]">
      {/* SOUR GOOSE */}
      <DecryptedText
        text="SOUR GOOSE"
        speed={120}
        maxIterations={14}
        sequential
        revealDirection="start"
        animateOn="view"
        onFinish={() => setDecryptDone(true)}
        className="font-bebas text-white tracking-wide text-[clamp(5rem,6vw,8rem)] leading-none mb-4 "
        encryptedClassName="font-bebas text-white tracking-wide text-[clamp(5rem,6vw,8rem)] leading-none mb-4"
      />

     {/* Green Apple */}
<div className="group mb-10 pb-10">
  <div
    className="
      transition-all duration-100 ease-out
      group-hover:scale-[1.02]
group-hover:drop-shadow-[0_0_120px_rgba(223,242,0,0.2)]    "
  >
    <DecryptedText
      text="GREEN APPLE"
      speed={120}
      maxIterations={14}
      sequential
      revealDirection="start"
      animateOn="view"
      onFinish={() => setTimeout(() => setDecryptDone(true), 0)}
      className="
        font-bebas
        text-[#dff200]
        tracking-wide
        text-[clamp(4.5rem,10vw,9.5rem)]
        leading-none
        transition-all duration-300
group-hover:[text-shadow:0_0_40px_rgba(223,242,0,0.9),0_0_80px_rgba(223,242,0,0.7),0_0_120px_rgba(223,242,0,0.5)]
      "
      encryptedClassName="
        font-bebas
        text-[#dff200]
        tracking-wide
        text-[clamp(4.5rem,10vw,9.5rem)]
        leading-none
      "
    />
  </div>
</div>



      {/* SUBTEXT */}
      <p
        className={`
          font-bebas text-[#ffffff] tracking-wide text-5xl leading-tight max-w-xl mb-10
          transition-opacity duration-700
          ${showText ? "opacity-100" : "opacity-0"}
        `}
      >
CRISP PUNCH UP FRONT. SMOOTH, LIGHT SWEET FINISH.      </p>

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
    bg-[#dff200] text-black font-bebas text-3xl px-14 py-4 tracking-wide
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
<div
  className="
    relative
    flex
    justify-center
    items-center
    -translate-y-12
  "
>
  <motion.img
    src="/applebottle.png"
    alt="Sour Goose Green Apple"
    initial={{ x: 300, opacity: 0, scale: 0.98 }}
    animate={{ x: 0, opacity: 1, scale: 1 }}
    transition={{
      duration: 2.2,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover={{ scale: 1.05 }}
    className="
      h-[90vh]
      max-h-[1000px]
      object-contain
      pb-20
      cursor-pointer
      drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]
    "
  />
</div>



  </div>
</div>
</section>

{/* HERO → CONTENT SEAM */}
<div className="relative z-20 pt-28">
<div className="marquee-wrap marquee-tight green-apple-marquee">
  <MarqueeSection
    text="Green Apple with an Edge • Sour Done Right • Crisp & Bright • "
  />
</div>
</div>
{/* ================= CONTENT BACKGROUND ================= */}
<div className="relative overflow-hidden">

  {/* BASE GRADIENT */}
  <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-[#120000] to-black" />

  {/* NOISE */}
  <div
    className="absolute inset-0 -z-10 opacity-[0.06]"
    style={{
      backgroundImage: "url('/noise.png')",
      backgroundRepeat: "repeat",
    }}
  />

{/* GREEN APPLE GLOW */}
<div className="absolute top-[10%] left-1/2 -translate-x-1/2 -z-10">
  <div className="w-[1200px] h-[1200px] bg-[#dff200]/20 blur-[260px]" />
</div>

      {/* ================= FLAVOUR DESCRIPTION ================= */}
      <section className="w-full py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-gray-200 text-lg md:text-xl leading-relaxed space-y-10">
          <ScrollReveal baseOpacity={0} baseRotation={0} enableBlur blurStrength={20}>
          Sour Goose Sour Apple delivers a crisp green apple punch right up front, followed by a smooth, lightly sweet finish that keeps the flavour balanced and easy to drink.
          It captures that classic sour candy intensity -sharp, juicy, and refreshing, without becoming overpowering.
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} baseRotation={0} enableBlur blurStrength={20}>
          Clean on the palate and vibrant in colour, it’s designed to stand out whether you’re pouring shots or building high-energy cocktails.
          The tartness wakes up your taste buds, while the subtle sweetness rounds it out for a smooth finish.
          </ScrollReveal>
        </div>
      </section>

   {/* ================= TASTING NOTES ================= */}
<section className="w-full py-24 px-6">
  <div className="max-w-4xl mx-auto">

    <ElectricBorder
      color="#dff200"
      speed={1.2}
      chaos={0.6}
      thickness={2}
      style={{ borderRadius: 20 }}
    >
      <div className="bg-black/70 backdrop-blur-md rounded-[18px] px-10 py-14">

        <h2 className="font-bebas text-5xl md:text-6xl text-[#dff200] tracking-wide mb-12 text-center">
          TASTING NOTES
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-gray-200">

          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <span className="font-bebas text-[#dff200] text-xl md:text-2xl tracking-wide">
              AROMA
            </span>
            <span className="md:text-right max-w-xl">
              Fresh green apple brightness with a clean tang
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <span className="font-bebas text-[#dff200] text-xl md:text-2xl tracking-wide">
              PALATE
            </span>
            <span className="md:text-right max-w-xl">
              Bold green apple brightness layered with Sour Goose’s signature vibrant edge
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <span className="font-bebas text-[#dff200] text-xl md:text-2xl tracking-wide">
              FINISH
            </span>
            <span className="md:text-right max-w-xl">
              Crisp, juicy, and refreshingly smooth
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <span className="font-bebas text-[#dff200] text-xl md:text-2xl tracking-wide">
              MIXABILITY
            </span>
            <span className="md:text-right max-w-xl">
              Perfect in sours, spritzes, highballs, and anything that needs a shot of green apple intensity
            </span>
          </div>

        </div>
      </div>
    </ElectricBorder>

  </div>
</section>
</div>


        {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-green-apple relative z-10">
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
