import CocktailsDesktop from "../components/cocktails/CocktailsDesktop";
import CocktailsMobile from "../components/cocktails/CocktailsMobile";

export default function CocktailsPage() {
  return (
    <>
      <div className="hidden lg:block">
        <CocktailsDesktop />
      </div>

      <div className="block lg:hidden">
        <CocktailsMobile />
      </div>
    </>
  );
}
