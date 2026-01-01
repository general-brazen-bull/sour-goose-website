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
  },
];

const navSocialItems = [
  { label: "Instagram", link: "https://instagram.com/drinksourgoose" },
  { label: "TikTok", link: "https://www.tiktok.com/@drinksourgoose" },
  { label: "Deep Blue Distillery", link: "https://deepbluedistilleries.ca" },
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
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden">

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-[99999] flex items-center justify-between px-6 pt-4">
        <Link href="/" className="relative z-[200000]">
          <img src="/Sour Goose Logo.webp" alt="Sour Goose" className="h-9 sm:h-10 w-auto" />
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
          className="font-bebas text-lg tracking-wide"
        />
      </div>

      <GoosePeek />

        {/* ================= MOBILE HERO ================= */}
<section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center text-center px-6 pt-28">

{/* BACKGROUND BEAMS */}
<div className="absolute inset-0 z-0 pointer-events-none opacity-70">
  <Beams
    beamWidth={2}
    beamHeight={14}
    beamNumber={10}
    lightColor="#8FC81C"
    speed={1.6}
    noiseIntensity={2}
    scale={0.28}
    rotation={315}
  />
</div>

{/* CONTENT */}
<div className="relative z-20 w-full max-w-md flex flex-col items-center">

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

 {/* SALSA VERDE — LAYOUT LOCKED */}
<div
  className="
    w-full
    flex
    justify-center
    mb-6
    whitespace-nowrap
  "
  style={{ minHeight: "6.5rem" }} // 👈 reserve final height
>
  <DecryptedText
    text="SALSA VERDE"
    speed={120}
    maxIterations={14}
    sequential
    revealDirection="start"
    animateOn="view"
    onFinish={() => setDecryptDone(true)}
    className="
      font-bebas
      text-[#8FC81C]
      tracking-wide
      text-[clamp(5rem,11vw,6.5rem)]
      leading-none
      whitespace-nowrap
    "
    encryptedClassName="
      font-bebas
      text-[#8FC81C]
      tracking-wide
      text-[clamp(5rem,11vw,6.5rem)]
      leading-none
      whitespace-nowrap
    "
  />
</div>


  {/* BOTTLE (IN FLOW, BUT OVERLAPPING) */}
  <motion.img
  src="/salsa-bottle.webp"
  alt="Sour Goose Salsa Verde"
  initial={{ x: 160, rotate: -45, opacity: 0 }}
  animate={{ x: 0, rotate: -45, opacity: 1 }}
  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
  className="
    w-[125vw]
    max-w-none
    z-10
    -mt-44        /* 👈 pulls bottle up */
    -mb-4         /* 👈 removes dead space below */
    pointer-events-none
    drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)]
  "
  style={{ marginRight: "-50%" }}
/>

  {/* SUBTEXT (NOW BELOW BOTTLE) */}
  <p className="font-bebas text-[#FFFF00] tracking-wide text-[clamp(2.2rem,4.5vw,2rem)] leading-tight -mt-32 mb-8 max-w-sm">
    TART. JUICY. A STRAIGHT PUNCH OF RASPBERRY CHAOS.
  </p>

  {/* CTA */}
  <a
  href="https://deepbluedistilleries.ca/product-tag/sour-goose/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex justify-center mb-40 pointer-events-auto relative z-30"
>
  <button
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
    "
  >
    BUY NOW
  </button>
</a>
</div>
</section>


      {/* MARQUEE SEAM */}
      <div className="relative z-20 pt-16">
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
        <section className="w-full py-20 px-6">
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
        <section className="w-full py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <ElectricBorder
              color="#8FC81C"
              speed={1.2}
              chaos={0.6}
              thickness={2}
              style={{ borderRadius: 20 }}
            >
              <div className="bg-black/70 backdrop-blur-md rounded-[18px] px-8 py-12">
                <h2 className="font-bebas text-5xl text-[#8FC81C] tracking-wide mb-10 text-center">
                  TASTING NOTES
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-gray-200">
                  {[
                    ["AROMA", "Zesty green brightness with a hint of fresh pepper"],
                    ["PALATE", "Tangy and bold with just enough spice"],
                    ["MID-PALATE", "Soft green-apple lift"],
                    ["FINISH", "Bright, crisp, expressive"],
                    ["MIXABILITY", "Perfect for margaritas, Caesars, highballs"],
                  ].map(([label, text]) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <span className="font-bebas text-[#8FC81C] text-2xl tracking-wide">
                        {label}
                      </span>
                      <span className="sm:text-right max-w-xl">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ElectricBorder>
          </div>
        </section>
      </div>

        {/* FOOTER */}
<footer className="bg-black py-8 border-t border-sour-red relative z-10">
  <div className="max-w-md mx-auto px-6 text-center space-y-4">

    {/* ROW 1 — Socials */}
    <div className="flex justify-center items-center gap-6">
      <a
        href="https://instagram.com/drinksourgoose"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-lightning-yellow hover:text-white transition-colors"
      >
        <Instagram size={18} />
        <span className="font-bebas-ui text-lg tracking-wide">
          @DRINKSOURGOOSE
        </span>
      </a>

      <a
        href="https://www.tiktok.com/@drinksourgoose"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-lightning-yellow hover:text-white transition-colors"
      >
        <TikTokIcon className="w-[18px] h-[18px]" />
        <span className="font-bebas-ui text-lg tracking-wide">
          @DRINKSOURGOOSE
        </span>
      </a>
    </div>

    {/* ROW 2 — Distillery Link */}
    <div>
      <a
        href="https://deepbluedistilleries.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-lightning-yellow hover:text-white transition-colors"
      >
        <ExternalLink size={16} />
        <span className="font-bebas-ui text-lg tracking-wide">
          DEEPBLUEDISTILLERIES.CA
        </span>
      </a>
    </div>

    {/* Legal */}
    <div className="text-[14px] text-gray-400 leading-snug">
      Proudly crafted in British Columbia. Drink responsibly. Must be 19+.
    </div>

  </div>
</footer>
    </main>
  );
}
