"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFlavoursOpen, setIsFlavoursOpen] = useState(false)

  return (
    <nav
    className="
      fixed top-0 left-0 right-0 z-40
      bg-black/90 backdrop-blur-sm border-b border-sour-red
      h-[70px]                 /* ⭐ Taller bar */
      sm:h-[78px]              /* ⭐ Slightly taller on bigger phones */
      flex items-center justify-between   /* ⭐ Center the content */
      px-4                     /* ⭐ Keep padding tight */
    "
  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-full">
          
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
          <div className="hidden md:flex items-center space-x-6">

            {/* HOME */}
            <Link
              href="/"
              className="font-bebas ui-tight text-xs sm:text-sm md:text-base text-white hover:text-sour-red hover-lightning transition"
            >
              HOME
            </Link>

            {/* FLAVOURS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setIsFlavoursOpen(true)}
              onMouseLeave={() => setIsFlavoursOpen(false)}
            >
              <button
                type="button"
                className="font-bebas ui-tight text-xs sm:text-sm md:text-base text-white hover:text-sour-red hover-lightning flex items-center transition"
              >
                FLAVOURS
                <ChevronDown size={16} className="ml-1" />
              </button>

              {isFlavoursOpen && (
                <div className="absolute left-0 top-full bg-black border border-sour-red rounded-sm shadow-lg w-44 py-1 z-50">

                  <Link
                    href="/raspberry"
                    className="block px-4 py-2 font-bebas ui-tight text-white hover:text-[#FF0000] hover-lightning whitespace-nowrap transition"
                  >
                    Raspberry
                  </Link>

                  <Link
                    href="/salsa-verde"
                    className="block px-4 py-2 font-bebas ui-tight text-white hover:text-[#8FC81C] hover-lightning whitespace-nowrap transition"
                  >
                    Salsa Verde
                  </Link>

                </div>
              )}
            </div>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="font-bebas ui-tight text-xs sm:text-sm md:text-base text-white hover:text-sour-red hover-lightning transition"
            >
              CONTACT
            </Link>

            {/* CTA */}
            <a
              href="https://deepbluedistilleries.ca/product/sour-goose-750ml/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 sm:ml-4 inline-flex items-center justify-center rounded-md font-bebas ui-tight text-xs sm:text-sm md:text-base text-white px-4 sm:px-5 md:px-6 py-1 bg-sour-red hover:bg-red-700 transition hover-lightning"
            >
              SHOP NOW
            </a>

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-sour-red"
          >
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
                className="block font-bebas ui-tight text-lg text-white hover:text-sour-red hover-lightning"
              >
                HOME
              </Link>

              <Link
                href="/raspberry"
                onClick={() => setIsOpen(false)}
                className="block font-bebas ui-tight text-lg text-white hover:text-[#FF0000] hover-lightning"
              >
                Raspberry
              </Link>

              <Link
                href="/salsa-verde"
                onClick={() => setIsOpen(false)}
                className="block font-bebas ui-tight text-lg text-white hover:text-[#8FC81C] hover-lightning"
              >
                Salsa Verde
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block font-bebas ui-tight text-lg text-white hover:text-sour-red hover-lightning"
              >
                CONTACT
              </Link>

              <a
                href="https://deepbluedistilleries.ca/product-tag/sour-goose/"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-bebas ui-tight text-lg text-sour-red hover:text-white hover-lightning"
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
