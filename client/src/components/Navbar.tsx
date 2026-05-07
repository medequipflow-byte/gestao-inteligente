/* =============================================================
   MedEquipFlow — Navbar Component
   Style: Soft Luxury Health | Glass morphism | Sticky top
   ============================================================= */

import { useState, useEffect } from "react";
import logo from "@/assets/imagemmedequip-svg.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Recursos", href: "#recursos" },
    { label: "Produto", href: "#produto" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-cyan-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="MedEquipFlow Logo"
              className="h-17 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  color: "#0a1628",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00d9ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#0a1628")}
              >
                {link.label}
              </a>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "oklch(0.28 0.07 265)" }}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: "oklch(0.88 0.03 290 / 0.3)" }}
          >
            {navLinks.map((link) => (
              
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-semibold"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  color: "oklch(0.45 0.05 265)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
