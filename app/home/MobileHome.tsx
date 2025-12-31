"use client";

import { useState, useEffect, useRef } from "react";

import AgeGate from "../components/AgeGate";
import { Button } from "../../components/ui/button";
import { Instagram, ExternalLink, ChevronUp } from "lucide-react";
import { TikTokIcon } from "../../components/icons/TikTokIcon";
import Link from "next/link";

import LiquidEther from "../../components/LiquidEther";
import "../../components/LiquidEther.css";

import DecryptedText from "../../components/DecryptedText";
import GoosePeek from "../../components/GoosePeek";
import SpotlightCard from "../../components/SpotlightCard";
import FuzzyText from "../../components/FuzzyText";
import ScrollReveal from "../../components/ScrollReveal";
import StaggeredMenu from "../../components/StaggeredMenu";
import MarqueeSection from "../../components/MarqueeSection";
import BackToTop from "../../components/BackToTop";
import LightPillar from '@/components/LightPillar';
import TikTokEmbed from "@/components/TikTokEmbed";



import { gsap } from "gsap";

export default function MobileHome() {
  /* ========================= STATE ========================= */
  const [isVerified, setIsVerified] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // HERO animation sequence
  const [startDecrypt, setStartDecrypt] = useState(false);
  const [decryptDone, setDecryptDone] = useState(false);
  const [showGoose, setShowGoose] = useState(false);

  const [showSubtext, setShowSubtext] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const [showHash, setShowHash] = useState(false);
  const [showGoosePeek, setShowGoosePeek] = useState(false);

  // Subtext content
  const typewriterText =
    "The bold, vibrant liqueur made for people who want flavour with real expression.";

  const typewriterIndexRef = useRef(0);

  // GSAP Refs
  const flashRef = useRef<HTMLDivElement | null>(null);
  const heroTlRef = useRef<gsap.core.Timeline | null>(null);

  /* ========================= EFFECTS ========================= */

  /** AGE GATE */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const verified = sessionStorage.getItem("age-verified");
    if (verified) {
      setIsVerified(true);
      setShowContent(true);
    }
  }, []);

  /** POSITION FLASH BANG *BEFORE* DECRYPT STARTS */
  useEffect(() => {
    if (!showContent) return;

    if (flashRef.current) {
      gsap.set(flashRef.current, {
        y: "32vh", // consistent center-start for ALL mobile sizes
      });
    }

    // Allow decrypt to begin AFTER it is positioned correctly
    setStartDecrypt(true);
  }, [showContent]);

  /** FLASH BANG → SLIDE UP → SOUR/GOOSE → SUBTEXT */
  useEffect(() => {
    if (!decryptDone) return;

    // kill old timeline
    if (heroTlRef.current) heroTlRef.current.kill();

    const tl = gsap.timeline();
    heroTlRef.current = tl;

    // FLASH BANG slides upward into final position
    tl.to(flashRef.current, {
      duration: 0.9,
      y: "8vh", // FINAL position
      ease: "power3.inOut",
    });

    // SOUR / GOOSE appear
    tl.add(() => setShowGoose(true));

    // Start typewriter
    tl.add(() => setShowSubtext(true), "+=0.1");

    return () => {
      tl.kill();
    };
  }, [decryptDone]);

  /** TYPEWRITER EFFECT */
  useEffect(() => {
    if (!showSubtext) return;

    typewriterIndexRef.current = 0;
    setTypedText("");

    const interval = setInterval(() => {
      const i = typewriterIndexRef.current;
      setTypedText(typewriterText.slice(0, i));
      typewriterIndexRef.current += 1;

      if (i > typewriterText.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [showSubtext]);

  /** HASHTAG + GOOSEPEEK AFTER EVERYTHING IS FINISHED */
  useEffect(() => {
    if (!typingDone) return;

    const hashTimeout = setTimeout(() => setShowHash(true), 100);
    const gooseTimeout = setTimeout(() => setShowGoosePeek(true), 2200);

    return () => {
      clearTimeout(hashTimeout);
      clearTimeout(gooseTimeout);
    };
  }, [typingDone]);

  /* ========================= HANDLERS ========================= */

/* ========================= HANDLERS ========================= */

const handleVerification = () => {
  sessionStorage.setItem("age-verified", "true");
  setIsVerified(true);
  setTimeout(() => setShowContent(true), 400);
};

const scrollToTop = () => {
  const el = document.getElementById("page-top");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  // fallback
  (document.scrollingElement || document.documentElement).scrollTo({
    top: 0,
    behavior: "smooth",
  });
};




  /* ========================= EARLY RETURN ========================= */

  if (!isVerified) return <AgeGate onVerified={handleVerification} />;

  /* ========================= NAV DATA ========================= */

  const navMenuItems = [
    { label: "Home", ariaLabel: "Go to home", link: "/" },
    { label: "Raspberry", ariaLabel: "Raspberry flavour", link: "/raspberry" },
    { label: "Salsa Verde", ariaLabel: "Salsa Verde flavour", link: "/salsa-verde" },
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

  /* ========================= RENDER ========================= */

  return (
    <div
      className={`min-h-screen transition-opacity duration-700 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-[100000] bg-black/35 backdrop-blur-md border-b border-red-700/70">
        <div className="max-w-6xl mx-auto px-4 h-[64px] flex items-center justify-between pointer-events-none">
          {/* Clickable logo */}
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
            />
          </div>
        </div>
      </header>

   {/* ====================== HERO SECTION (MOBILE HOME) ====================== */}
<div id="page-top" />

<section className="relative w-full min-h-screen flex flex-col items-center px-4 text-center overflow-hidden">
  {/* LIGHT PILLAR BACKGROUND (HERO ONLY) */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <LightPillar
      topColor="#8FC81C"
      bottomColor="#FF0000"
      intensity={1.4}
      rotationSpeed={0.7}
      glowAmount={0.003}
      pillarWidth={3.0}
      pillarHeight={0.4}
      noiseIntensity={0.8}
      pillarRotation={45}
      interactive={false}
      mixBlendMode="normal"
    />
  </div>

  {/* READABILITY OVERLAY */}
  <div className="absolute inset-0 z-[1] bg-black/35" />

  {/* CONTENT */}
  <div className="relative z-10 w-full pt-28 pb-10 flex flex-col items-center">
    {/* FLASH BANG PRESENTS */}
    <div
      ref={flashRef}
      className="w-full max-w-[90%] mx-auto px-6 mb-10 flex justify-center"
    >
      <DecryptedText
        text="FLASH BANG PRESENTS"
        speed={70}
        maxIterations={12}
        sequential
        revealDirection="start"
        animateOn={startDecrypt ? "view" : "manual"}
        onFinish={() => setTimeout(() => setDecryptDone(true), 0)}
        className="
          font-bebas text-white w-full text-center
          whitespace-nowrap tracking-wide
          text-[clamp(2.4rem,7vw,4rem)]
        "
        encryptedClassName="
          font-bebas text-white w-full text-center
          whitespace-nowrap tracking-wide
          text-[clamp(2.4rem,7vw,4rem)]
        "
      />
    </div>

    {/* SOUR / GOOSE */}
    <div
      className={`mt-6 transition-all duration-700 ${
        showGoose ? "opacity-100 scale-100" : "opacity-0 scale-[0.96]"
      }`}
    >
      <div className="font-bebas leading-[0.85] flex flex-col items-center">
        <FuzzyText
          baseIntensity={0.15}
          hoverIntensity={0.3}
          enableHover={false}
          fontSize="clamp(6rem,70vw,11rem)"
          color="#ffff00"
        >
          SOUR
        </FuzzyText>

        <FuzzyText
          baseIntensity={0.25}
          hoverIntensity={0.3}
          enableHover={false}
          fontSize="clamp(6rem,70vw,20rem)"
          color="#ffff00"
        >
          GOOSE
        </FuzzyText>
      </div>
    </div>

    {/* SUBTEXT */}
    <div className="mt-6 px-4 flex items-center justify-center text-center w-full">
      {/* fixed height to prevent layout jump */}
      <div className="h-[7.5rem] flex items-center justify-center w-full">
        {showSubtext && (
          <p
            className="text-white font-avenir leading-relaxed mx-auto max-w-[34rem] pt-3 pb-3 px-4"
            style={{
              fontSize: "clamp(1.3rem,4.2vw,2.15rem)",
              lineHeight: "1.2",
            }}
          >
            {typedText}
          </p>
        )}
      </div>
    </div>

    {/* HASHTAG */}
    <div
      className={`
        mt-10 transition-all duration-700
        ${showHash ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
      `}
    >
      <h2
        className="
          font-bebas
          text-[clamp(2.4rem,7vw,4rem)]
          text-lightning-yellow
          lightning-text
          tracking-wide
          -translate-y-7
        "
      >
        #GOOSEGOTJUICE
      </h2>
    </div>
  </div>
</section>


<div className="relative z-30 marquee-wrap marquee-tight pt-20">
  <MarqueeSection
    text="Flavours that will blow your mind • Sweet? • Tart? • Zesty? • We've got it all •"
  />
</div>



      {/* COPY BLOCK */}
      <div className="text-center max-w-md mx-auto px-6 pt-10 pb-4 text-gray-200 text-lg leading-relaxed">
        <ScrollReveal baseOpacity={0} enableBlur blurStrength={20} baseRotation={0}>
          Built around a signature bright tang, every Sour Goose release brings its own
          personality — from punchy and playful to zesty with a little heat — while
          staying true to the brand’s unmistakable energy.
        </ScrollReveal>

        <div className="h-6" />

        <ScrollReveal baseOpacity={0} enableBlur blurStrength={20} baseRotation={0}>
          It’s crafted for drinkers who want something that stands out, shakes things up,
          and brings a hit of excitement to every pour. Sour Goose is about being daring,
          being vibrant, and being unmistakably yourself.
        </ScrollReveal>
      </div>

      <div className="marquee-wrap marquee-middle">
      <MarqueeSection text="Goose with an attitude • Big taste • Big attitude • No apologies • "
  direction="right"
/>
</div>

<div className="mt-20 mb-20 pt-20 px-4 flex justify-center text-center md:mt-24 md:mb-16 leading-[1]
">
<DecryptedText
  text="HOW DO YOU GOOSE?"
  speed={100}
  sequential
  maxIterations={12}
  revealDirection="start"
  animateOn="view"   // ✅ THIS IS THE FIX
  onFinish={() => {}}
  className="
    font-bebas text-lightning-yellow lightning-text
    text-[clamp(6rem,8vw,4.8rem)]
    md:text-7xl
  "
  encryptedClassName="
    font-bebas text-lightning-yellow
    text-[clamp(4rem,8vw,4.8rem)]
    md:text-7xl
  "
/>
</div>

      {/* FLAVOUR CARDS */}
      <section className="px-6 grid gap-16 max-w-md mx-auto mb-24">
        {/* RASPBERRY CARD */}
        <SpotlightCard
          spotlightColor="rgba(255,0,0,0.25)"
          backgroundColor="rgba(255,255,255,0.9)"
          borderColor="3px solid rgba(255,0,0,0.5)"
          className="p-10 rounded-3xl flex flex-col items-center text-center no-hover"
        >
          <img src="/bottle.webp" className="w-64 mx-auto mb-6" alt="Sour Goose Raspberry" />

          <h3 className="font-bebas text-[clamp(3.2rem,8vw,3.8rem)] text-[#FF0000] tracking-wide">
            RASPBERRY
          </h3>

          <p className="text-black mt-3 font-avenir font-medium mx-auto max-w-xs text-[clamp(1.4rem,3.6vw,1.45rem)] leading-snug">
            A bold raspberry liqueur with a sharp, tart twist.
          </p>

          <Link href="/raspberry">
            <Button className="mt-8 bg-[#FF0000] hover:bg-red-700 text-2xl font-bebas px-10 py-4">
              LEARN MORE
            </Button>
          </Link>
        </SpotlightCard>

        {/* SALSA VERDE CARD */}
        <SpotlightCard
          spotlightColor="rgba(143,200,28,0.25)"
          backgroundColor="rgba(255,255,255,0.9)"
          borderColor="3px solid rgba(143,200,28,0.5)"
          className="p-10 rounded-3xl flex flex-col items-center text-center no-hover"
        >
          <img src="/salsa-bottle.webp" className="w-64 mx-auto mb-6" alt="Sour Goose Salsa Verde" />

          <h3 className="font-bebas text-[clamp(3.2rem,8vw,3.8rem)] text-[#8FC81C] tracking-wide">
            SALSA VERDE
          </h3>

          <p className="text-black mt-3 font-avenir font-medium mx-auto max-w-xs text-[clamp(1.4rem,3.6vw,1.45rem)] leading-snug">
            Tangy, zesty, spicy, unlike anything else.
          </p>

          <Link href="/salsa-verde">
            <Button className="mt-8 bg-[#8FC81C] hover:bg-green-600 text-2xl font-bebas px-10 py-4">
              LEARN MORE
            </Button>
          </Link>
        </SpotlightCard>
      </section>

{/* TIKTOK FEED */}
<section className="mt-20 px-4">
<div className="mt-20 pt-20 mb-20 px-4 flex justify-center text-center md:mt-24 md:mb-16 leading-[1]
">
<DecryptedText
  text="GOOSE IN THE WILD"
  speed={100}
  sequential
  maxIterations={12}
  revealDirection="start"
  animateOn="view"   // ✅ THIS IS THE FIX
  onFinish={() => {}}
  className="
    font-bebas text-lightning-yellow lightning-text
    text-[clamp(6rem,8vw,4.8rem)]
    md:text-7xl
  "
  encryptedClassName="
    font-bebas text-lightning-yellow
    text-[clamp(4rem,8vw,4.8rem)]
    md:text-7xl
  "
/>
</div>

  <TikTokEmbed url="https://www.tiktok.com/@drinksourgoose/video/7582766069870300434" />
</section>

      <div className="marquee-wrap marquee-bottom">
  <MarqueeSection text="Distilled & Bottled in British Columbia" />
</div>

<div className="mt-20 flex justify-center relative z-[999999] pointer-events-auto">
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      scrollToTop();
    }}
    aria-label="Back to top"
    className="
      h-16 w-16 rounded-full
      border-[3px] border-lightning-yellow
      text-lightning-yellow bg-transparent
      flex items-center justify-center
      animate-bounce
      hover:scale-110 active:scale-95
      transition-transform
      shadow-[0_0_18px_rgba(255,255,0,0.45)]
      touch-manipulation
    "
    style={{ WebkitTapHighlightColor: "transparent" }}
  >
    <ChevronUp size={40} strokeWidth={2} />
  </button>
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
    </div>
  );
}
