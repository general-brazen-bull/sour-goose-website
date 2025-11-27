"use client"

import Navigation from "../components/Navigation"
import { Button } from "@/components/ui/button"
import { Mail, Instagram, ExternalLink, MapPin } from "lucide-react"
import { TikTokIcon } from "@/components/icons/TikTokIcon"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="font-bebas text-6xl md:text-8xl text-lightning-yellow lightning-text mb-8">
              LET'S TALK GOOSE
            </h1>
            <div className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              <p className="mb-4">Got a question? Want to stock us? Or just feeling a little sour?</p>
              <p className="text-sour-red font-bold">Drop us a line — we don't bite (but our liqueur might).</p>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Email */}
            <div className="bg-sour-red/20 p-8 rounded-lg border border-sour-red text-center hover-lightning">
              <Mail className="w-16 h-16 text-lightning-yellow mx-auto mb-6" />
              <h2 className="font-bebas text-3xl text-lightning-yellow mb-4">EMAIL US</h2>
              <p className="text-lg text-white mb-6">
                For general inquiries, wholesale opportunities, distillery tours or just to say hi
              </p>
              <a href="mailto:info@sourgoose.ca" className="inline-block">
                <Button className="bg-lightning-yellow text-black hover:bg-yellow-400 font-bebas text-xl px-8 py-4 hover-lightning">
                  INFO@SOURGOOSE.CA
                </Button>
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-lightning-yellow/20 p-8 rounded-lg border border-lightning-yellow text-center hover-lightning">
              <Instagram className="w-16 h-16 text-lightning-yellow mx-auto mb-6" />
              <h2 className="font-bebas text-3xl text-lightning-yellow mb-4">FOLLOW THE GOOSE</h2>
              <p className="text-lg text-white mb-6">
                Stay updated with the latest Goose news, cocktail recipes, and behind-the-scenes content
              </p>
              <a href="https://instagram.com/drinksourgoose" target="_blank" rel="noopener noreferrer">
                <Button className="bg-sour-red hover:bg-red-700 text-white font-bebas text-xl px-8 py-4 hover-lightning">
                  @DRINKSOURGOOSE
                </Button>
              </a>
            </div>
          </section>

          {/* Website Link */}
          <section className="text-center mb-20">
            <div className="bg-black/60 p-8 rounded-lg border border-gray-700">
              <ExternalLink className="w-12 h-12 text-lightning-yellow mx-auto mb-4" />
              <h3 className="font-bebas text-2xl text-white mb-4">VISIT OUR DISTILLERY SITE</h3>
              <a
                href="https://deepbluedistilleries.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightning-yellow hover:text-white text-xl font-bebas hover-lightning"
              >
                DEEPBLUEDISTILLERIES.CA
              </a>
            </div>
          </section>

          {/* Business Inquiries */}
          <section className="mb-20">
            <div className="bg-sour-red p-8 rounded-lg text-center">
              <h3 className="font-bebas text-4xl text-white mb-6">BUSINESS INQUIRIES</h3>
              <div className="grid md:grid-cols-2 gap-8 text-black">
                <div>
                  <h4 className="font-bebas text-2xl mb-4">WHOLESALE & DISTRIBUTION</h4>
                  <p className="text-lg">
                    Interested in carrying Sour Goose? We'd love to work with retailers, bars, and restaurants who want
                    to offer something bold and different.
                  </p>
                </div>
                <div>
                  <h4 className="font-bebas text-2xl mb-4">EVENTS & PARTNERSHIPS</h4>
                  <p className="text-lg">
                    Looking to feature Sour Goose at your event or collaborate on something exciting? Let's make it
                    happen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Location Info */}
          <section className="text-center">
            <div className="bg-lightning-yellow/20 p-8 rounded-lg border border-lightning-yellow">
              <MapPin className="w-12 h-12 text-lightning-yellow mx-auto mb-4" />
              <h3 className="font-bebas text-3xl text-lightning-yellow mb-4">PROUDLY BASED IN BRITISH COLUMBIA</h3>
              <p className="text-lg text-white mb-6">Spreading the tart across Canada, one bottle at a time.</p>
              <div className="font-bebas text-4xl text-sour-yellow lightning-text">#GooseGotJuice</div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-sour-red">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">

            {/* Instagram */}
            <a
              href="https://instagram.com/drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning"
            >
              <Instagram size={22} />
              <span className="font-bebas text-base sm:text-lg lg:text-xl">@DRINKSOURGOOSE</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@drinksourgoose"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning"
            >
              <TikTokIcon className="w-[22px] h-[22px] text-lightning-yellow transition-colors duration-200 group-hover:text-white" />
              <span className="font-bebas text-base sm:text-lg lg:text-xl">@DRINKSOURGOOSE</span>
            </a>

            {/* Website */}
            <a
              href="https://deepbluedistilleries.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lightning-yellow hover:text-white hover-lightning"
            >
              <ExternalLink size={22} />
              <span className="font-bebas text-base sm:text-lg lg:text-xl">DEEPBLUEDISTILLERIES.CA</span>
            </a>
          </div>

          {/* Disclaimer */}
          <div className="text-sm sm:text-base text-gray-400">
            Proudly crafted in British Columbia. Drink responsibly. Must be 19+.
          </div>
        </div>
      </footer>
    </div>
  )
}
