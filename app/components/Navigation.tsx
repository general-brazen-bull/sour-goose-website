"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/our-story", label: "OUR STORY" },
    { href: "/product", label: "PRODUCT" },
    { href: "/cocktails", label: "COCKTAILS" },
    { href: "/where-to-buy", label: "WHERE TO BUY" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-sour-red">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
  
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Sour Goose Logo.webp"
            alt="Sour Goose Logo"
            width={110}
            height={40}
            className="h-8 md:h-9 w-auto object-contain"
            priority
          />
        </Link>
  
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {[
            { href: "/", label: "HOME" },
           
            { href: "/contact", label: "CONTACT" }
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-bebas text-xs sm:text-sm md:text-base text-white hover:text-sour-red hover-lightning transition"
            >
              {link.label}
            </Link>
          ))}
  
          {/* CTA */}
          <a
  href="https://deepbluedistilleries.ca/product/sour-goose-750ml/"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-2 sm:ml-4 inline-flex items-center justify-center rounded-md font-bebas text-xs sm:text-sm md:text-base text-white px-4 sm:px-5 md:px-6 py-1 bg-sour-red hover:bg-red-700 transition hover-lightning"
>
  SHOP NOW
</a>
        </div>
  
        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-sour-red">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
  
      {/* Mobile Navigation */}
      {isOpen && (
  <div className="md:hidden bg-black border-t border-sour-red">
    <div className="px-4 py-4 space-y-2">
      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className="block font-bebas text-lg text-white hover:text-sour-red hover-lightning"
      >
        HOME
      </Link>
      <Link
        href="/contact"
        onClick={() => setIsOpen(false)}
        className="block font-bebas text-lg text-white hover:text-sour-red hover-lightning"
      >
        CONTACT
      </Link>
      <a
        href="https://deepbluedistilleries.ca/product/sour-goose-750ml/"
        target="_blank"
        rel="noopener noreferrer"
        className="block font-bebas text-lg text-sour-red hover:text-white hover-lightning"
      >
        SHOP NOW
      </a>
    </div>
  </div>
)}
    </div>
  </nav>
  
  )
}
