"use client";

import { useState, useEffect, useRef } from "react";
import AgeGate from "../components/AgeGate";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import Link from "next/link";

import LiquidEther from "@/components/LiquidEther";
import "@/components/LiquidEther.css";

import DecryptedText from "@/components/DecryptedText";
import GoosePeek from "@/components/GoosePeek";
import SpotlightCard from "@/components/SpotlightCard";
import FlowingMenu from "@/components/FlowingMenu";
import FuzzyText from "@/components/FuzzyText";
import ElectricBorder from '@/components/ElectricBorder'
import type { MenuItemProps } from "@/components/FlowingMenu";
import StaggeredMenu from "@/components/StaggeredMenu";
import ScrollReveal from '@/components/ScrollReveal';
import DesktopTikTokGrid from "@/components/DesktopTikTokGrid";



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


const gooseMenuItems: MenuItemProps[] = [
  {
    link: "#",
    text: "FLAVOURS THAT WILL BLOW YOUR MIND",
    marquee: "Sweet? Tart? Zesty? We've got it all!",
  },
  {
    link: "#",
    text: "GOOSE WITH AN ATTITUDE",
    marquee: "Big taste. Big attitude. No apologies.",
    direction: "right",
  },
  {
    link: "#",
    text: "PROUDLY CRAFTED IN B.C.",
    marquee: "Distilled and bottled in British Columbia. Loved everywhere.",
  },
];


export default function HomePage() {
  const [isVerified, setIsVerified] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // HERO sequence animation states
  const [decryptDone, setDecryptDone] = useState(false);
  const [showGoose, setShowGoose] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showHash, setShowHash] = useState(false);

  const typewriterText =
    "The bold, vibrant liqueur made for people who want flavour with real expression.";

  /* AGE GATE LOGIC */
  useEffect(() => {
    const verified = sessionStorage.getItem("age-verified");
    if (verified) {
      setIsVerified(true);
      setShowContent(true);
    }
  }, []);

  const typewriterIndexRef = useRef(0);

  const [showEther, setShowEther] = useState(false);

  /* HERO ANIMATION SEQUENCE */
  useEffect(() => {
    if (!decryptDone) return;
  
    let intervalId: NodeJS.Timeout | null = null;
  
    const timeout1 = setTimeout(() => setShowGoose(true), 600);
  
    const timeout2 = setTimeout(() => {
      setShowSubtext(true);
      typewriterIndexRef.current = 0;
  
      intervalId = setInterval(() => {
        const i = typewriterIndexRef.current;
        setTypedText(typewriterText.slice(0, i));
        typewriterIndexRef.current++;
  
        if (!showHash && i > typewriterText.length - 3) {
          setShowHash(true);
        }
  
        if (typewriterIndexRef.current > typewriterText.length) {
          if (intervalId) clearInterval(intervalId);
        }
      }, 20);
    }, 1200);
  
    const timeout3 = setTimeout(() => setShowHash(true), 7000);
  
    // ⭐ Correct placement — BEFORE return
    const etherTimeout = setTimeout(() => setShowEther(true), 4000);
  
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(etherTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [decryptDone]);
  

  const handleVerification = () => {
    sessionStorage.setItem("age-verified", "true");
    setIsVerified(true);
    setTimeout(() => setShowContent(true), 500);
  };

  if (!isVerified) return <AgeGate onVerified={handleVerification} />;

  return (
    <div
      className={`min-h-screen transition-opacity duration-1000 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
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

      {/* BACKGROUND */}
      {showEther && (
  <div className="fixed inset-0 -z-20 pointer-events-none">
    <LiquidEther
          colors={["#FF0000", "#FF0000", "#8FC81C"]}
          mouseForce={20}
          cursorSize={100}
          resolution={0.5}
          autoIntensity={1.4}
          viscous={22}
          iterationsViscous={24}
          iterationsPoisson={24}
          autoDemo={true}
        />
       </div>
)}
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">
      {/* FLASH BANG PRESENTS — starts centered, then slides up smoothly */}
     {/* FLASH BANG PRESENTS — smooth slide-up after decrypt */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
  <div
    className={`
      transform
      transition-transform transition-opacity
      duration-[1500ms]
      ease-[cubic-bezier(0.25,1,0.5,1)]
${decryptDone ? "translate-y-[-200px] opacity-100" : "translate-y-0 opacity-100"}
    `}
  >
    <DecryptedText
      text="FLASH BANG PRESENTS"
      speed={80}
      maxIterations={12}
      sequential
      revealDirection="start"
      animateOn="view"
      onFinish={() => setTimeout(() => setDecryptDone(true), 0)}
      className="text-4xl sm:text-5xl md:text-6xl font-bebas text-white"
      encryptedClassName="text-4xl sm:text-5xl md:text-6xl font-bebas text-white"
    />
  </div>
</div>

<div className="relative z-10 max-w-5xl mx-auto text-center translate-y-20">
          {/* SOUR GOOSE — FIXED */}
          <div
            className={`transition-all duration-[800ms] ease-out ${
              showGoose
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[0.96]"
            }`}
          >
            <div className="font-bebas">
              <FuzzyText
                baseIntensity={0.15}
                hoverIntensity={0.3}
                enableHover
                fontSize="clamp(5rem, 15vw, 14rem)"
                color="#ffff00"
                fontFamily="inherit"
              >
                SOUR GOOSE
              </FuzzyText>
            </div>
          </div>

          <div className="mt-10 h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] flex items-center justify-center">
  {showSubtext && (
    <p className="text-lg sm:text-xl md:text-2xl text-white font-avenir text-center">
      <span
        className="
          inline-block
          whitespace-nowrap
          overflow-hidden
          animate-typing
        "
      >
        The bold, vibrant liqueur made for people who want flavour with real expression.
      </span>
    </p>
  )}
</div>

          {/* HASHTAG */}
          <div
            className={`relative z-10 mt-32 text-center transition-all duration-700 ${
              showHash
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-lightning-yellow lightning-text tracking-wide">
              #GOOSEGOTJUICE
            </h2>
          </div>
        </div>
      </section>

      {/* FLOWING MENU */}
      <div className="w-full mb-20">
      <FlowingMenu items={gooseMenuItems} />
      </div>

      <div className="h-10" />
  <div className="text-center max-w-3xl mx-auto px-6 py-20 text-gray-200 text-lg md:text-xl leading-relaxed">

  <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={0}
  blurStrength={20}
  rotationEnd="top 40%"
  wordAnimationEnd="top 40%"
>
  Built around a signature bright tang, every Sour Goose release brings its
  own personality — from punchy and playful to zesty with a little heat —
  while staying true to the brand’s unmistakable energy.
</ScrollReveal>


<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={0}
  blurStrength={20}
  rotationEnd="top 0%"
  wordAnimationEnd="top 0%"
>
  It’s crafted for drinkers who want something that stands out, shakes things
  up, and brings a hit of excitement to every pour. Sour Goose is about being
  daring, being vibrant, and being unmistakably yourself.
</ScrollReveal>

</div>


      <div className="h-32" />

      {/* SECTION HEADER */}
      <div className="text-center mb-20" style={{ marginTop: "70px" }}>
      <DecryptedText
          text="HOW DO YOU GOOSE?"
          speed={100}
          sequential
          maxIterations={12}
          revealDirection="start"
          animateOn="view"
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl 
                     font-bebas text-lightning-yellow lightning-text tracking-wide
                     transition-all duration-300 hover:drop-shadow-[0_0_40px_rgba(255,255,0,1)]"
          encryptedClassName="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bebas text-lightning-yellow"
          onFinish={() => {}}
        />
      </div>

      {/* FLAVOUR CARDS */}
      <section className="relative z-10 mt-40 mb-60 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-stretch">

        <SpotlightCard
          spotlightColor="rgba(255,0,0,0.5)"
          backgroundColor="rgba(255,255,255,0.07)"
          borderColor="2.5px solid rgba(255,0,0,0.35)"
          className="p-12 rounded-3xl flex flex-col items-center"
        >
          <img
            src="/bottle.webp"
            className="mx-auto w-80 sm:w-96 md:w-[26rem] mb-10"
            alt="Sour Goose Raspberry"
          />
          <h3 className="font-bebas text-6xl md:text-7xl text-[#FF0000] tracking-wide">
            RASPBERRY
          </h3>
          <p className="text-white mt-4 text-base sm:text-lg font-avenir max-w-md mx-auto">
            A bold raspberry liqueur with a sharp, tart twist.
          </p>
          <Link href="/raspberry">
            <Button className="mt-10 bg-[#FF0000] hover:bg-red-700 text-2xl font-bebas px-10 py-4">
              LEARN MORE
            </Button>
          </Link>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor="rgba(143,200,28,0.5)"
          backgroundColor="rgba(255,255,255,0.07)"
          borderColor="2.5px solid rgba(143,200,28,0.35)"
          className="p-12 rounded-3xl flex flex-col items-center"
        >
          <img
            src="/salsa-bottle.webp"
            className="mx-auto w-80 sm:w-96 md:w-[26rem] mb-10"
            alt="Sour Goose Salsa Verde"
          />
          <h3 className="font-bebas text-6xl md:text-7xl text-[#8FC81C] tracking-wide">
            SALSA VERDE
          </h3>
          <p className="text-white mt-4 text-base sm:text-lg font-avenir max-w-md mx-auto">
            Tangy, zesty, spicy, unlike anything else.
          </p>
          <Link href="/salsa-verde">
            <Button className="mt-10 bg-[#8FC81C] hover:bg-green-600 text-2xl font-bebas px-10 py-4">
              LEARN MORE
            </Button>
          </Link>
        </SpotlightCard>

      </section>

      <DesktopTikTokGrid />

      {/* FOOTER */}
      <footer className="bg-black bg-opacity-80 py-12 border-t border-sour-red mt-24 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="flex justify-center gap-10">
            <a
              href="https://instagram.com/drinksourgoose"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white"
            >
              <Instagram size={22} />
              <span className="font-bebas text-lg">@DRINKSOURGOOSE</span>
            </a>

            <a
              href="https://www.tiktok.com/@drinksourgoose"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white"
            >
              <TikTokIcon className="w-[22px] h-[22px]" />
              <span className="font-bebas text-lg">@DRINKSOURGOOSE</span>
            </a>

            <a
              href="https://deepbluedistilleries.ca"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white"
            >
              <ExternalLink size={22} />
              <span className="font-bebas text-lg">DEEPBLUEDISTILLERIES.CA</span>
            </a>
          </div>

          <div className="text-sm text-gray-400">
            Proudly crafted in British Columbia. Drink responsibly. Must be 19+.
          </div>
        </div>
      </footer>
    </div>
  );
}