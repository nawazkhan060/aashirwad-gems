import Collection from "./components/Collection";
import FAQ from "./components/FAQ";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RashiGuide from "./components/RashiGuide";
import TrustBar from "./components/TrustBar";
import VisitUs from "./components/VisitUs";
import WhatsAppPopup from "./components/WhatsAppPopup";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-50 font-sans text-maroon-950">
      <a
        href="#collection"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-maroon-950"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Collection />
        <RashiGuide />
        <WhyUs />
        <VisitUs />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
      <WhatsAppPopup />
    </div>
  );
}
