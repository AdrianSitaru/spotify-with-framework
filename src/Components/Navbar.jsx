import logo from "../Assets/spotify_logo2.jpg";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <img className="HeaderLogo" src={logo} alt="" />
      <span className="HamburgerMenu">|||</span>
      <ul className="NavbarContent">
        <li>
          <a href="#">Premium</a>
        </li>
        <li>
          <a href="#">Asistență</a>
        </li>
        <li>
          <a href="#">Descarcă</a>
        </li>
        <li>
          <span id="headerSign">|</span>
        </li>
        <li>
          <a href="#">Înregistrează-te</a>
        </li>
        <li>
          <a href="#">Conectează-te</a>
        </li>
      </ul>
    </div>
  );
}
