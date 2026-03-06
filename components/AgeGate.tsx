"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function AgeGate() {
  const [birthYear, setBirthYear] = useState("")
  const [error, setError] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)

    const year = parseInt(birthYear, 10)
    const currentYear = new Date().getFullYear()
    const age = currentYear - year

    if (isNaN(year) || birthYear.length !== 4 || age < 0) {
      setError("Please enter a valid 4-digit year.")
      setIsVerifying(false)
      return
    }

    if (age < 19) {
      setError("Sorry, you're too young to enter.")
      setIsVerifying(false)
      return
    }

    // Save verification cookie (30 days)
    document.cookie = "age-verified=true; path=/; max-age=2592000; SameSite=Lax"

    // Reload so the server layout sees the cookie
    window.location.reload()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center age-gate-bg animate-fade-in">

      {/* Background Effect */}
      <div className="absolute inset-0 lightning-bg opacity-20" />

      {/* Age Gate Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto text-center">

        {/* Logo */}
        <div className="mb-12 w-full flex justify-center px-4">
          <div className="w-full max-w-[800px]">
            <Image
              src="/sour-goose-logo.webp"
              alt="Sour Goose Logo"
              width={581}
              height={134}
              priority
              sizes="(max-width: 768px) 90vw, 600px"
              className="mx-auto object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-3xl font-avenir font-bold text-white mb-6">
          ⚡ AGE VERIFICATION ⚡
        </div>

        {/* Form */}
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-xl font-bold mb-4 text-white">
                What year were you born?
              </label>

              <Input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                placeholder="YYYY"
                className="text-center text-2xl font-bold bg-black border-sour-red border-2 text-white placeholder-gray-400 h-16 w-full"
                required
              />
            </div>

            {error && (
              <div className="text-sour-red text-xl font-bold bg-black/80 p-4 rounded border-2 border-sour-red">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isVerifying || !birthYear}
              className="w-full bg-sour-red hover:bg-red-700 text-white font-bebas text-2xl h-16 hover-lightning disabled:opacity-50"
            >
              {isVerifying ? "VERIFYING..." : "UNLOOSE THE GOOSE"}
            </Button>

          </form>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-sm text-white">
          Must be 19+ to enter. Drink responsibly.
        </div>

      </div>
    </div>
  )
}