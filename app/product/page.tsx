import Navigation from "../components/Navigation"
import { Button } from "@/components/ui/button"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="font-bebas text-6xl md:text-8xl text-lightning-yellow lightning-text mb-8">
              FLAVOUR PROFILE
            </h1>
            <div className="text-2xl text-sour-red font-bold mb-8">
              IT'S JUICY. IT'S PUNCHY. IT'S GOOSE WITH AN ATTITUDE.
            </div>
          </section>

          {/* Product Image and Description */}
          <section className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=600&width=300&text=SOUR+GOOSE+BOTTLE+PRODUCT"
                alt="Sour Goose Raspberry Liqueur"
                className="w-64 md:w-80 h-auto hover-lightning"
              />
            </div>

            <div className="space-y-8">
              <div className="text-xl leading-relaxed text-gray-300 mb-8">
                <p className="text-2xl font-bold text-white mb-6">
                  Sour Goose hits with a jolt. This is not your syrupy sweet liqueur. It's loud, tart, and
                  unapologetically sour — bursting with bold raspberry flavour that grabs your attention and doesn't let
                  go.
                </p>
              </div>

              {/* Flavor Notes */}
              <div className="space-y-6">
                <div className="border-l-4 border-sour-red pl-6">
                  <h3 className="font-bebas text-2xl text-lightning-yellow mb-2">FRUIT</h3>
                  <p className="text-lg text-gray-300">Ripe raspberry with a wild edge</p>
                </div>

                <div className="border-l-4 border-sour-red pl-6">
                  <h3 className="font-bebas text-2xl text-lightning-yellow mb-2">ACIDITY</h3>
                  <p className="text-lg text-gray-300">Clean, sharp tartness right up front</p>
                </div>

                <div className="border-l-4 border-sour-red pl-6">
                  <h3 className="font-bebas text-2xl text-lightning-yellow mb-2">SWEETNESS</h3>
                  <p className="text-lg text-gray-300">Subtle — just enough to balance the bite</p>
                </div>

                <div className="border-l-4 border-sour-red pl-6">
                  <h3 className="font-bebas text-2xl text-lightning-yellow mb-2">FINISH</h3>
                  <p className="text-lg text-gray-300">Crisp, mouthwatering, slightly puckering</p>
                </div>
              </div>
            </div>
          </section>

          {/* Product Specs */}
          <section className="bg-sour-red p-12 rounded-lg mb-20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-bebas text-6xl text-black mb-2">750ML</div>
                <div className="text-xl font-bold text-black">VOLUME</div>
              </div>

              <div>
                <div className="font-bebas text-6xl text-black mb-2">15%</div>
                <div className="text-xl font-bold text-black">ABV</div>
              </div>

              <div>
                <div className="font-bebas text-6xl text-lightning-yellow mb-2">$21.48</div>
                <div className="text-xl font-bold text-black">RETAIL</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center space-y-8">
            <div className="bg-lightning-yellow/20 p-8 rounded-lg border border-lightning-yellow">
              <h3 className="font-bebas text-3xl text-lightning-yellow mb-4">WANT TO CARRY US?</h3>
              <p className="text-xl text-white mb-6">Let's talk.</p>
              <Button className="bg-lightning-yellow text-black hover:bg-yellow-400 font-bebas text-xl px-8 py-4 hover-lightning">
                CONTACT US
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-sour-red hover:bg-red-700 font-bebas text-xl px-8 py-4 hover-lightning">
                FIND SOUR GOOSE
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-bebas text-xl px-8 py-4 hover-lightning bg-transparent"
              >
                MIX A COCKTAIL
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
