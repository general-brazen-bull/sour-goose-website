import CocktailsDesktop from "./components/CocktailsDesktop";
import CocktailsMobile from "./components/CocktailsMobile";

export default function CocktailsPage() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <CocktailsDesktop />
      </div>

      {/* Mobile */}
      <div className="block lg:hidden">
        <CocktailsMobile />
      </div>
    </>
  );
}