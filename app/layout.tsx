import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Load fonts with CSS variables
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

// ----------- SITE-WIDE SEO -----------
export const metadata: Metadata = {
  title: "Sour Goose — Bold, Vibrant Liqueurs",
  description:
    "Sour Goose is a bold, vibrant line of flavour-packed liqueurs crafted in British Columbia. Try our Raspberry, Salsa Verde, and upcoming limited-edition flavours.",
  keywords: [
    "Sour Goose",
    "raspberry liqueur",
    "salsa verde liqueur",
    "liqueur",
    "bold liqueurs",
    "craft spirits",
    "British Columbia spirits",
    "BC craft distillery",
    "Flash Bang Spirits",
  ],
  openGraph: {
    title: "Sour Goose — Bold, Vibrant Liqueurs",
    description:
      "A flavour-first liqueur brand crafted in British Columbia. Raspberry, Salsa Verde, and more to come.",
    url: "https://drinksourgoose.com",
    siteName: "Sour Goose",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sour Goose — Bold, Vibrant Liqueurs",
    description:
      "A bright, bold liqueur line crafted in British Columbia. Raspberry, Salsa Verde, and more.",
  },
}

// ----------- ROOT LAYOUT -----------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      {/* No global font override — lets Bebas work where applied */}
      <body className="bg-black text-white overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
