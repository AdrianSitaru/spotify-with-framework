import HeroBanner from "./Components/HeroBanner";
import Navbar from "./Components/Navbar";
import PremiumSection from "./Components/PremiumSection";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <PremiumSection />
    </div>
  );
}
