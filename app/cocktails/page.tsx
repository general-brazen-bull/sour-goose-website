import Navigation from "../components/Navigation"

export default function CocktailsPage() {
  const cocktails = [
    {
      name: "Goose on the Loose",
      style: "Raspberry Mule Style",
      ingredients: ["Sour Goose", "Ginger beer", "Fresh lime", "Ice"],
      glass: "Copper mug with lime wedge",
      image: "/placeholder.svg?height=300&width=300&text=GOOSE+ON+THE+LOOSE",
    },
    {
      name: "Sour Slammer",
      style: "Shot with Lemon & Sugar Rim",
      ingredients: ["Sour Goose", "Lemon juice", "Dash of simple syrup"],
      glass: "Shot glass with sugar rim",
      image: "/placeholder.svg?height=300&width=300&text=SOUR+SLAMMER",
    },
    {
      name: "Juicy Goosey",
      style: "Raspberry Spritz Variation",
      ingredients: ["Sour Goose", "Prosecco", "Soda", "Lemon twist"],
      glass: "Wine or spritz glass",
      image: "/placeholder.svg?height=300&width=300&text=JUICY+GOOSEY",
    },
  ]

  const shots = [
    {
      name: "Goose Star",
      ingredients: ["Sour Goose", "Vanilla vodka", "Passionfruit syrup", "Lime juice"],
      optional: "Sugar rim",
      taste: "A tart raspberry punch with a tropical kiss.",
      image: "/placeholder.svg?height=250&width=250&text=GOOSE+STAR",
    },
    {
      name: "Lightning Bolt",
      ingredients: ["Sour Goose", "Blue curaçao", "Lemon juice"],
      optional: "Edible glitter or lemon twist",
      taste: "Electric raspberry lemonade with a citrus zing.",
      image: "/placeholder.svg?height=250&width=250&text=LIGHTNING+BOLT",
    },
    {
      name: "Juice Bomb",
      ingredients: ["Sour Goose", "Peach schnapps", "Irish cream"],
      optional: "Layered shot",
      taste: "A creamy-tart surprise that goes off in your mouth.",
      image: "/placeholder.svg?height=250&width=250&text=JUICE+BOMB",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="font-bebas text-6xl md:text-8xl text-lightning-yellow lightning-text mb-8">
              COCKTAILS & SHOTS
            </h1>
            <p className="text-2xl text-sour-red font-bold">MIX IT UP WITH THE GOOSE</p>
          </section>

          {/* Cocktails Section */}
          <section className="mb-20">
            <h2 className="font-bebas text-5xl text-sour-red text-center mb-12">SIGNATURE COCKTAILS</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {cocktails.map((cocktail, index) => (
                <div key={index} className="bg-sour-red/20 p-8 rounded-lg border border-sour-red hover-lightning">
                  <img
                    src={cocktail.image || "/placeholder.svg"}
                    alt={cocktail.name}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />

                  <h3 className="font-bebas text-3xl text-lightning-yellow mb-2">{cocktail.name}</h3>

                  <p className="text-lg font-bold text-white mb-4">{cocktail.style}</p>

                  <div className="mb-4">
                    <h4 className="font-bold text-sour-red mb-2">INGREDIENTS:</h4>
                    <ul className="text-gray-300 space-y-1">
                      {cocktail.ingredients.map((ingredient, i) => (
                        <li key={i}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-sour-red mb-2">SERVED IN:</h4>
                    <p className="text-gray-300">{cocktail.glass}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Shots Section */}
          <section>
            <h2 className="font-bebas text-5xl text-lightning-yellow text-center mb-12">SIGNATURE SHOTS</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {shots.map((shot, index) => (
                <div
                  key={index}
                  className="bg-lightning-yellow/20 p-8 rounded-lg border border-lightning-yellow hover-lightning"
                >
                  <img
                    src={shot.image || "/placeholder.svg"}
                    alt={shot.name}
                    className="w-full h-40 object-cover rounded-lg mb-6"
                  />

                  <h3 className="font-bebas text-3xl text-lightning-yellow mb-4">{shot.name}</h3>

                  <div className="mb-4">
                    <h4 className="font-bold text-sour-red mb-2">INGREDIENTS:</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      {shot.ingredients.map((ingredient, i) => (
                        <li key={i}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>

                  {shot.optional && (
                    <div className="mb-4">
                      <h4 className="font-bold text-sour-red mb-2">OPTIONAL:</h4>
                      <p className="text-gray-300 text-sm">{shot.optional}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-bold text-sour-red mb-2">TASTES LIKE:</h4>
                    <p className="text-white font-medium">{shot.taste}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-20 bg-black/60 p-12 rounded-lg border border-sour-red">
            <h3 className="font-bebas text-4xl text-lightning-yellow mb-6">READY TO GET JUICY?</h3>
            <p className="text-xl text-white mb-8">Find Sour Goose at your local retailer and start mixing!</p>
            <div className="font-bebas text-3xl text-sour-red lightning-text">#GooseGotJuice</div>
          </section>
        </div>
      </main>
    </div>
  )
}
