"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import ElectricBorder from '@/components/ElectricBorder'
import StaggeredMenu from "@/components/StaggeredMenu";
import GoosePeek from "@/components/GoosePeek";
import Link from "next/link";
import LiquidEther from "@/components/LiquidEther";
import "@/components/LiquidEther.css";
import { useState, useEffect, useRef } from "react";



const navMenuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },

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


export default function SalsaVerdePage() {
  const [showEther, setShowEther] = useState(true);

  return (
<main className="relative z-10 min-h-screen w-full bg-black text-white">
      
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

      {/* HERO */}
      <section className="w-full pt-24 pb-16 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/salsa-bottle.webp"
            alt="Sour Goose Salsa Verde"
            width={400}
            height={600}
            className="mx-auto"
          />

          <h1
            className="mt-6 text-6xl md:text-7xl font-bebas tracking-wide"
            style={{ color: "#8FC81C" }}
          >
            SOUR GOOSE SALSA VERDE
          </h1>

          <p className="text-xl text-yellow-300 mt-3">
            Fresh. Zesty. A wild twist no one saw coming.
          </p>
          <a
  href="https://deepbluedistilleries.ca/product-tag/sour-goose/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-6 px-10 py-3 text-black bg-yellow-300 font-bold text-xl hover:bg-yellow-400 transition">
    BUY NOW
  </button>
</a>

        </motion.div>
      </section>

      {/* TASTE NOTES */}
      <section className="w-full py-16 px-8 max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl font-bebas mb-6"
          style={{ color: "#8FC81C" }}
        >
          TASTE NOTES
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed">
          Salsa Verde is bold, bright, and uniquely refreshing — lime-forward,
          herb-kissed, and unexpectedly addictive. A flavour made for the brave.
        </p>

        <div className="mt-8 space-y-2 text-gray-300">
          <p>
            <span className="font-bold" style={{ color: "#8FC81C" }}>
              Ingredients:
            </span>{" "}
            Vodka, Lime, Herb Extracts, Natural Flavours
          </p>

          <p>
            <span className="font-bold" style={{ color: "#8FC81C" }}>
              Notes:
            </span>{" "}
            Zesty · Fresh · Wild
          </p>

          <p>
            <span className="font-bold" style={{ color: "#8FC81C" }}>
              ABV:
            </span>{" "}
            35%
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="w-full py-20 px-8 max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl font-bebas mb-6"
          style={{ color: "#8FC81C" }}
        >
          THE SALSA VERDE CHAOS THEORY
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Born from experimentation, perfected through chaos. Salsa Verde is the
          flavour no one asked for but everyone remembers. Crisp, citrusy,
          herb-forward, and dangerously refreshing — an audacious twist crafted
          for the boldest flavour fiends.
        </p>
      </section>

      {/* CTA FOOTER */}
      <section
        className="w-full py-20 text-black text-center px-6"
        style={{ backgroundColor: "#8FC81C" }}
      >
        <h3 className="text-4xl font-bebas mb-4">READY TO GET ZESTY?</h3>
        <a
  href="https://deepbluedistilleries.ca/product-tag/sour-goose/"
  target="_blank"
  rel="noopener noreferrer"
>
        <button className="px-12 py-4 bg-yellow-300 text-black text-xl font-bold hover:bg-yellow-400 transition">
          ADD TO CART
        </button>
        </a>
      </section>

   {/* FOOTER */}
<footer className="bg-black bg-opacity-80 py-12 border-t border-sour-red mt-24 relative z-10">
  <div className="max-w-6xl mx-auto text-center space-y-8">

    <div className="flex justify-center gap-10">
      {/* Instagram */}
      <a
        href="https://instagram.com/drinksourgoose"
        className="flex items-center gap-2 text-lightning-yellow hover:text-white"
      >
        <Instagram size={22} />
        <span className="font-bebas text-lg">@DRINKSOURGOOSE</span>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@drinksourgoose"
        className="flex items-center gap-2 text-lightning-yellow hover:text-white"
      >
        <TikTokIcon className="w-[22px] h-[22px]" />
        <span className="font-bebas text-lg">@DRINKSOURGOOSE</span>
      </a>

      {/* Deep Blue Distilleries */}
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
    </main>
  );
}
