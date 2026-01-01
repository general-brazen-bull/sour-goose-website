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

export default function RaspberryPage() {
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
      <div className="fixed top-0 left-0 w-full z-[99999] flex items-center justify-between px-4 sm:px-6 pt-4">
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
          colors={["#FF0000", "#8FC81C"]}
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
    lightColor="#FF0000"
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

  <DecryptedText
    text="RASPBERRY"
    speed={120}
    maxIterations={14}
    sequential
    revealDirection="start"
    animateOn="view"
    onFinish={() => {}}
    className="font-bebas text-[#FF0000] tracking-wide text-[clamp(6.5rem,11vw,6rem)] leading-none mb-6"
    encryptedClassName="font-bebas text-[#FF0000] tracking-wide text-[clamp(6.5rem,11vw,6rem)] leading-none mb-6"
  />

  {/* BOTTLE (IN FLOW, BUT OVERLAPPING) */}
  <motion.img
  src="/bottle.webp"
  alt="Sour Goose Raspberry"
  initial={{ x: 160, rotate: -45, opacity: 0 }}
  animate={{ x: 0, rotate: -45, opacity: 1 }}
  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
  className="
    w-[120vw]
    max-w-none
    z-10
    -mt-36        /* 👈 pulls bottle up */
    -mb-4         /* 👈 removes dead space below */
    pointer-events-none
    drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)]
  "
  style={{ marginRight: "-50%" }}
/>

  {/* SUBTEXT (NOW BELOW BOTTLE) */}
  <p className="font-bebas text-[#FFFF00] tracking-wide text-[clamp(2.2rem,4.5vw,2rem)] leading-tight -mt-28 mb-8 max-w-sm">
    TART. JUICY. A STRAIGHT PUNCH OF RASPBERRY CHAOS.
  </p>

  {/* CTA */}
  <a
    href="https://deepbluedistilleries.ca/product-tag/sour-goose/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full flex justify-center mb-40"
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
        <div className="marquee-wrap marquee-tight raspberry-marquee">
          <MarqueeSection text="The new goose in town • Zesty • Sour • Unapologetic • " />
        </div>
      </div>

      {/* ================= CONTENT BACKGROUND ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-[#120000] to-black" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{ backgroundImage: "url('/noise.png')" }}
        />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -z-10">
          <div className="w-[1200px] h-[1200px] bg-red-600/10 blur-[260px]" />
        </div>

        {/* FLAVOUR DESCRIPTION */}
        <section className="w-full py-20 px-6">
          <div className="max-w-4xl mx-auto text-center text-gray-200 text-lg md:text-xl leading-relaxed space-y-10">
            <ScrollReveal baseOpacity={0} baseRotation={0} enableBlur blurStrength={20}>
              Sour Goose Raspberry is the original burst of bold, bright energy. It hits with a punchy raspberry tang — vibrant, lively, and instantly expressive.
            </ScrollReveal>

            <ScrollReveal baseOpacity={0} baseRotation={0} enableBlur blurStrength={20}>
              Juicy, sharp, and refreshingly electric, it’s built for cocktails that need personality and real fruit brightness.
            </ScrollReveal>
          </div>
        </section>

        {/* TASTING NOTES */}
        <section className="w-full py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <ElectricBorder
              color="#FF0000"
              speed={1.2}
              chaos={0.6}
              thickness={2}
              style={{ borderRadius: 20 }}
            >
              <div className="bg-black/70 backdrop-blur-md rounded-[18px] px-8 py-12">
                <h2 className="font-bebas text-5xl text-[#FF0000] tracking-wide mb-10 text-center">
                  TASTING NOTES
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-gray-200">
                  {[
                    ["AROMA", "Fresh raspberry lift with a clean tang"],
                    ["PALATE", "Bold raspberry brightness"],
                    ["FINISH", "Crisp, expressive, refreshing"],
                    ["MIXABILITY", "Perfect in sours, spritzes, and highballs"],
                  ].map(([label, text]) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <span className="font-bebas text-[#FF0000] text-2xl tracking-wide">
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
      <footer className="bg-black bg-opacity-80 py-12 border-t border-sour-red mt-24">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="flex justify-center gap-8">
            <a href="https://instagram.com/drinksourgoose" className="flex items-center gap-2 text-lightning-yellow">
              <Instagram size={22} />
              <span className="font-bebas text-lg">@DRINKSOURGOOSE</span>
            </a>

            <a href="https://www.tiktok.com/@drinksourgoose" className="flex items-center gap-2 text-lightning-yellow">
              <TikTokIcon className="w-[22px] h-[22px]" />
              <span className="font-bebas text-lg">@DRINKSOURGOOSE</span>
            </a>
          </div>

          <div className="text-sm text-gray-400">
            Proudly crafted in British Columbia. Drink responsibly. Must be 19+.
          </div>
        </div>
      </footer>
    </main>
  );
}
