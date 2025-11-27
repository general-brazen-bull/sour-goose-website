import Navigation from "../components/Navigation"
import { Button } from "@/components/ui/button"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="font-bebas text-6xl md:text-8xl text-lightning-yellow lightning-text mb-8">
              PROUDLY CRAFTED IN
              <br />
              BRITISH COLUMBIA
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-sour-red mb-12">FAMILIAR FLAVOUR. NEW HOMETOWN.</h2>
          </section>

          {/* Story Content */}
          <section className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="text-xl leading-relaxed text-gray-300">
                <p className="mb-6">
                  Born from the wild spirit of British Columbia, Sour Goose isn't your typical liqueur. We're the rebels
                  of the raspberry world, crafting something bold, tart, and unapologetically different.
                </p>

                <p className="mb-6">
                  While others play it safe with syrupy sweetness, we embrace the sour. We celebrate the pucker. We're
                  here to shake up your taste buds and challenge everything you thought you knew about raspberry
                  liqueur.
                </p>

                <p className="mb-6">
                  From the mountains to the coast, B.C. is our playground. This province breeds independence,
                  creativity, and a little bit of that "don't tell us what to do" attitude. That's exactly what you'll
                  taste in every bottle of Sour Goose.
                </p>

                <p>We're not just making liqueur – we're making a statement. Bold. Tart. Unforgettable.</p>
              </div>

              <div className="font-bebas text-3xl text-lightning-yellow lightning-text">#GooseGotJuice</div>
            </div>

            <div className="flex justify-center relative">
              <img
                src="/placeholder.svg?height=600&width=400&text=GOOSE+MASCOT+WITH+LIGHTNING+EYES"
                alt="Sour Goose Mascot with Lightning Bolt Eyes"
                className="w-80 h-auto hover-lightning"
              />
              <div className="absolute top-0 right-0 text-4xl animate-bounce">⚡</div>
              <div className="absolute bottom-10 left-0 text-4xl animate-pulse">⚡</div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-sour-red/20 p-12 rounded-lg border border-sour-red">
            <h3 className="font-bebas text-4xl text-lightning-yellow mb-6">READY TO TASTE THE REBELLION?</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-sour-red hover:bg-red-700 font-bebas text-xl px-8 py-4 hover-lightning">
                FIND SOUR GOOSE
              </Button>
              <Button
                variant="outline"
                className="border-lightning-yellow text-lightning-yellow hover:bg-lightning-yellow hover:text-black font-bebas text-xl px-8 py-4 hover-lightning bg-transparent"
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
