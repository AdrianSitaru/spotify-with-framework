import "../Styles/PremiumSection.css";

export default function PremiumSection() {
  return (
    <div className="PremiumSection">
      <h2>De ce să treci la Premium?</h2>
      <div className="Container">
        <div>
          <img src="./Assets/First-image.png" alt="image" />
          <h3>Descarci muzică.</h3>
          <p>Asculți de oriunde.</p>
        </div>
        <div>
          <img src="./Assets/second-image.png" alt="image" />
          <h3>Ascultă muzică fără anunțuri.</h3>
          <p>Te bucuri non-stop de muzică.</p>
        </div>
        <div>
          <img src="./Assets/third-image.png" alt="image" />
          <h3>Redă orice melodie.</h3>
          <p>Chiar și pe dispozitivul mobil</p>
        </div>
        <div>
          <img src="./Assets/four-image.png" alt="image" />
          <h3>Omiteri nelimitate.</h3>
          <p>Doar apeși butonul Înainte.</p>
        </div>
      </div>
    </div>
  );
}
