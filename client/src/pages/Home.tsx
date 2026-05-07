/* =============================================================
   MedEquipFlow — Home Page (Landing Page - Versão Resumida)
   Style: Futurista | Azul Marinho a Ciano Vívido
   Sections: Navbar > Hero > Problems > Features > Product > CTA > Footer
   ============================================================= */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductPreview from "@/components/ProductPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f7fa" }}>
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <ProductPreview />
      <CTASection />
      <Footer />
    </div>
  );
}
