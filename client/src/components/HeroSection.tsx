/* =============================================================
   MedEquipFlow — Hero Section
   Style: Futurista | Azul Marinho a Ciano | Fundo claro
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import logo from "@/assets/imagemmedequip-svg.svg";
import AccessRequestModal from "./AccessRequestModal";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-10 md:pt-40 md:pb-16 overflow-hidden"
      style={{ background: "#f5f7fa" }}>
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0, 217, 255, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-4 px-6 py-3 rounded-full text-sm font-bold mb-6 border"
              style={{
                background: "rgba(0, 217, 255, 0.1)",
                color: "#0066cc",
                borderColor: "#00d9ff",
                fontFamily: "'Nunito Sans', sans-serif",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontSize: "1.1rem",
              }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "#00d9ff" }} />
              Lançamento 2026
            </div>

            {/* Headline */}
            <h1
              className="leading-tight mb-6"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#0a1628",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Gestão Inteligente{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0066cc, #00d9ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                de Equipamentos
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg mb-8"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                color: "#4a5f7f",
                lineHeight: 1.8,
                maxWidth: "520px",
              }}
            >
              O recurso certo, na hora certa. Com inteligência e sem desperdício. Monitore, controle e otimize seus equipamentos médicos em tempo real.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 rounded-xl font-bold transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #0066cc, #0052a3)",
                  color: "white",
                  fontSize: "1.05rem",
                  fontFamily: "'Nunito Sans', sans-serif",
                  boxShadow: "0 10px 25px rgba(0, 102, 204, 0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 15px 35px rgba(0, 102, 204, 0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 10px 25px rgba(0, 102, 204, 0.25)";
                }}
              >
                Solicitar Acesso Antecipado
              </button>
              <a
                href="#recursos"
                className="px-8 py-4 rounded-xl font-bold transition-all duration-300 border-2 flex items-center justify-center"
                style={{
                  borderColor: "rgba(0, 102, 204, 0.2)",
                  color: "#0066cc",
                  fontSize: "1.05rem",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0, 102, 204, 0.05)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0, 102, 204, 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0, 102, 204, 0.2)";
                }}
              >
                Ver Recursos
              </a>
            </div>


          </div>

          {/* Right — Logo Ampliado */}
          <div
            className={`transition-all duration-1000 delay-300 flex items-center justify-center ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <img
              src={logo}
              alt="MedEquipFlow Logo"
              className="object-contain transition-transform duration-700 hover:scale-105"
              style={{
                width: "140%",
                maxWidth: "750px",
                filter: "drop-shadow(0 20px 40px rgba(0, 102, 204, 0.15))",
              }}
            />
          </div>
        </div>
      </div>
      <AccessRequestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
