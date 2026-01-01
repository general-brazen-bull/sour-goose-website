import CocktailsDesktop from "../components/cocktails/CocktailsDesktop";
import CocktailsMobile from "../components/cocktails/CocktailsMobile";

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