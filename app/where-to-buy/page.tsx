import Navigation from "../components/Navigation"
import { Button } from "@/components/ui/button"
import { MapPin, Store } from "lucide-react"

export default function WhereToBuyPage() {
  const retailers = [
    { name: "BC Liquor Stores", type: "Government Store", locations: "Multiple Locations" },
    { name: "Save-On-Foods", type: "Grocery Chain", locations: "Select Locations" },
    { name: "IGA", type: "Grocery Store", locations: "Various Locations" },
    { name: "Thrifty Foods", type: "Grocery Chain", locations: "Vancouver Island" },
    { name: "London Drugs", type: "Pharmacy/Retail", locations: "Select Stores" },
    { name: "Sobeys", type: "Grocery Chain", locations: "BC Locations" },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="font-bebas text-6xl md:text-8xl text-lightning-yellow lightning-text mb-8">WHERE TO BUY</h1>
            <p className="text-2xl text-sour-red font-bold mb-8">FIND THE GOOSE NEAR YOU</p>
            <div className="text-xl text-gray-300">Available across British Columbia at select retailers</div>
          </section>

          {/* Store Locator */}
          <section className="mb-20">
            <div className="bg-sour-red/20 p-12 rounded-lg border border-sour-red text-center">
              <MapPin className="w-16 h-16 text-lightning-yellow mx-auto mb-6" />
              <h2 className="font-bebas text-4xl text-lightning-yellow mb-6">STORE LOCATOR</h2>
              <p className="text-xl text-white mb-8">
                Use our interactive map to find Sour Goose at retailers near you
              </p>
              <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center mb-8">
                <div className="text-center text-gray-400">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg">Interactive Map Coming Soon</p>
                  <p className="text-sm">Enter your postal code to find nearby retailers</p>
                </div>
              </div>
              <Button className="bg-lightning-yellow text-black hover:bg-yellow-400 font-bebas text-xl px-8 py-4 hover-lightning">
                SEARCH LOCATIONS
              </Button>
            </div>
          </section>

          {/* Retail Partners */}
          <section className="mb-20">
            <h2 className="font-bebas text-5xl text-sour-red text-center mb-12">RETAIL PARTNERS</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retailers.map((retailer, index) => (
                <div
                  key={index}
                  className="bg-black/60 p-6 rounded-lg border border-gray-700 hover:border-sour-red hover-lightning"
                >
                  <Store className="w-8 h-8 text-lightning-yellow mb-4" />
                  <h3 className="font-bebas text-2xl text-white mb-2">{retailer.name}</h3>
                  <p className="text-sour-red font-bold mb-2">{retailer.type}</p>
                  <p className="text-gray-300">{retailer.locations}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action for Retailers */}
          <section className="text-center">
            <div className="bg-lightning-yellow/20 p-12 rounded-lg border border-lightning-yellow">
              <h3 className="font-bebas text-4xl text-lightning-yellow mb-6">WANT US IN YOUR STORE?</h3>
              <p className="text-xl text-white mb-8">
                We're always looking to partner with new retailers who want to offer their customers something bold and
                different.
              </p>
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  Contact us to discuss wholesale opportunities and get Sour Goose on your shelves.
                </p>
                <Button className="bg-lightning-yellow text-black hover:bg-yellow-400 font-bebas text-xl px-8 py-4 hover-lightning">
                  CONTACT US
                </Button>
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="mt-20 text-center">
            <div className="bg-sour-red/20 p-8 rounded-lg border border-sour-red">
              <h4 className="font-bebas text-2xl text-lightning-yellow mb-4">CAN'T FIND US?</h4>
              <p className="text-lg text-white mb-4">
                Ask your local retailer to stock Sour Goose, or contact us directly and we'll help you track down a
                bottle.
              </p>
              <div className="font-bebas text-xl text-sour-red">#GooseGotJuice</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
