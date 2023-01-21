import "../Styles/HeroBanner.css";
import "./HeaderButtons";
import Buttons from "./HeaderButtons";

export default function HeroBanner() {
  return (
    <div className="HeroBanner">
      <div className="HeroBannerContainer">
        <h1>0.00 EUR pentru 3 Luni de Premium</h1>
        <h2>
          Bucură-te de muzică fără anunțuri,redare offline și multe altele.
          Anulezi oricând.
        </h2>
        <p>
          Doar pentru abonamentul Individual. 4.99 EUR/lună după{" "}
          <a href="#">Se aplică Termenii și condițiile.</a> Ofertă disponibilă
          doar pentru utilizatorii care nu au mai încercat versiunea Premium.
          Oferta se încheie pe 31.12.2022.
        </p>
        <Buttons />
      </div>
      <div className="image">
        <img className="heroImage" src="/Assets/hero_image.jpg" alt="" />
      </div>
    </div>
  );
}
