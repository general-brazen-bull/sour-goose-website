"use client";

import DecryptedText from "@/components/DecryptedText";
import StaggeredMenu from "@/components/StaggeredMenu";
import Image from "next/image";
import { Instagram, ExternalLink } from "lucide-react";
import Link from "next/link";
import { TikTokIcon } from "@/components/icons/TikTokIcon";

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

export default function CocktailsMobile() {
  return (
    <div className="min-h-screen text-white">
      {/* HEADER / NAV */}
      <header className="fixed top-0 left-0 right-0 z-[100000] bg-black/35 backdrop-blur-md border-b border-red-700/70">
        <div className="max-w-6xl mx-auto px-4 h-[64px] flex items-center justify-between">
          
          {/* CLICKABLE LOGO — FIXED */}
          <Link
            href="/"
            aria-label="Go to home"
            className="relative z-[200000] pointer-events-auto"
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

      {/* PAGE */}
      <main className="px-4 pt-28 pb-24">
        {/* COCKTAILS */}
        <div className="text-center mb-10">
          <DecryptedText
            text="COCKTAILS"
            speed={90}
            sequential
            maxIterations={12}
            revealDirection="start"
            animateOn="view"
            onFinish={() => {}}
            className="font-bebas text-lightning-yellow lightning-text text-[clamp(4rem,10vw,6rem)]"
            encryptedClassName="font-bebas text-lightning-yellow text-[clamp(4rem,10vw,6rem)]"
          />
        </div>

        {/* COCKTAIL IMAGES — 1 PER ROW */}
        <div className="space-y-16 mb-20">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/raspcocktails.webp"
              alt="Raspberry Cocktail Recipes"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/salsacocktails.webp"
              alt="Salsa Verde Cocktail Recipes"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* SHOOTERS */}
        <div className="text-center mb-10">
          <DecryptedText
            text="SHOOTERS"
            speed={90}
            sequential
            maxIterations={12}
            revealDirection="start"
            animateOn="view"
            onFinish={() => {}}
            className="font-bebas text-lightning-yellow lightning-text text-[clamp(4rem,10vw,6rem)]"
            encryptedClassName="font-bebas text-lightning-yellow text-[clamp(4rem,10vw,6rem)]"
          />
        </div>

        {/* SHOOTER IMAGES — 1 PER ROW */}
        <div className="space-y-16 mb-4">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/raspshooters.webp"
              alt="Raspberry Shooter Recipes"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/salsashooters.webp"
              alt="Salsa Verde Shooter Recipes"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </main>

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
  );
}
