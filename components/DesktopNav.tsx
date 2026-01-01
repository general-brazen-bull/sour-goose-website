"use client";

import Link from "next/link";
import StaggeredMenu from "@/components/StaggeredMenu";

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

export default function DesktopNav() {
  return (
    <div className="fixed top-0 left-0 w-full z-[99999] flex items-center justify-between px-6 pt-4">
      {/* LOGO */}
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

      {/* MENU */}
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
  );
}
