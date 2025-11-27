import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "Sour Goose - Bold Raspberry Liqueur",
  description:
    "IT'S TART, IT'S JUICY, IT'S HERE. A bold raspberry liqueur with a sharp twist. Proudly crafted in British Columbia.",
  keywords: "raspberry liqueur, sour goose, british columbia, cocktails, spirits",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-inter bg-black text-white overflow-x-hidden">
        {children}
        <Analytics /> {/* This enables Vercel Analytics */}
      </body>
    </html>
  )
}
