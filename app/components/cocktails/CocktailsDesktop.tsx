"use client";

import DecryptedText from "@/components/DecryptedText";
import StaggeredMenu from "@/components/StaggeredMenu";
import Image from "next/image";
import { Mail, Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TikTokIcon } from "@/components/icons/TikTokIcon"
import DesktopNav from "@/components/DesktopNav";




const navMenuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Raspberry", ariaLabel: "Raspberry flavour", link: "/raspberry" },
  { label: "Salsa Verde", ariaLabel: "Salsa Verde flavour", link: "/salsa-verde" },
  { label: "Cocktails", ariaLabel: "View cocktail recipes", link: "/cocktails" },
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

export default function CocktailsDesktop() {
  return (
    <div className="min-h-screen text-white">
      {/* HEADER / NAV (StaggeredMenu) */}
      <header className="fixed top-0 left-0 right-0 z-[100000] bg-black/35 backdrop-blur-md border-b border-red-700/70">
        <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">
          <a href="/" aria-label="Go to home" className="pointer-events-auto">
            <img src="/Sour Goose Logo.webp" alt="Sour Goose" className="h-8 w-auto" />
          </a>

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

      {/* PAGE */}
      <main className="px-16 pt-24">
        {/* COCKTAILS HEADING */}
        <div className="text-center mb-4">
          <DecryptedText
            text="COCKTAILS"
            speed={90}
            sequential
            maxIterations={12}
            revealDirection="start"
            animateOn="view"
            className="font-bebas text-lightning-yellow lightning-text text-[clamp(4rem,6vw,7rem)]"
            encryptedClassName="font-bebas text-lightning-yellow text-[clamp(4rem,6vw,7rem)]"
            onFinish={() => {}}
          />
        </div>

        <div className="max-w-[90vw] mx-auto grid grid-cols-2 gap-16 items-center">
  <div className="h-[100vh] flex items-center justify-center">
    <img
      src="/raspcocktails.webp"
      alt="Raspberry Cocktails"
      className="h-full w-auto object-contain rounded-2xl"
    />
  </div>

  <div className="h-[100vh] flex items-center justify-center">
    <img
      src="/salsacocktails.webp"
      alt="Salsa Verde Cocktails"
      className="h-full w-auto object-contain rounded-2xl"
    />
  </div>
</div>

        {/* SHOOTERS HEADING */}
        <div className="text-center mt-4 mb-4">
          <DecryptedText
            text="SHOOTERS"
            speed={90}
            sequential
            maxIterations={12}
            revealDirection="start"
            animateOn="view"
            className="font-bebas text-lightning-yellow lightning-text text-[clamp(4rem,6vw,7rem)]"
            encryptedClassName="font-bebas text-lightning-yellow text-[clamp(4rem,6vw,7rem)]"
            onFinish={() => {}}
          />
        </div>

      
        <div className="max-w-[90vw] pb-20 mx-auto grid grid-cols-2 gap-16 items-center">
  <div className="h-[100vh] flex items-center justify-center">
    <img
      src="/raspshooters.webp"
      alt="Raspberry Cocktails"
      className="h-full w-auto object-contain rounded-2xl"
    />
  </div>

  <div className="h-[100vh] flex items-center justify-center">
    <img
      src="/salsashooters.webp"
      alt="Salsa Verde Cocktails"
      className="h-full w-auto object-contain rounded-2xl"
    />
  </div>
</div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-sour-red relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            <a
              href="https://instagram.com/drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning"
            >
              <Instagram size={22} />
              <span className="font-bebas-ui text-lg tracking-wide">@DRINKSOURGOOSE</span>
            </a>

            <a
              href="https://www.tiktok.com/@drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning"
            >
              <TikTokIcon className="w-[22px] h-[22px]" />
              <span className="font-bebas-ui text-lg tracking-wide">@DRINKSOURGOOSE</span>
            </a>

            <a
              href="https://deepbluedistilleries.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning"
            >
              <ExternalLink size={22} />
              <span className="font-bebas-ui text-lg tracking-wide">DEEPBLUEDISTILLERIES.CA</span>
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
