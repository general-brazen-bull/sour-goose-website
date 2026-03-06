import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { cookies } from "next/headers"
import AgeGate from "../components/AgeGate"
import "./globals.css"

// ----------- FONTS -----------
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

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

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

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
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const verified = cookieStore.get("age-verified")?.value === "true"

  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/sour-goose-logo.webp"
          fetchPriority="high"
        />
      </head>

      <body className="bg-black text-white overflow-x-hidden">
        {!verified ? <AgeGate /> : children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
