/* =============================================================
   MedEquipFlow — CTA Section (Acesso Antecipado)
   Style: Futurista | Azul Marinho a Ciano
   ============================================================= */

import { useState } from "react";
import AccessRequestModal from "./AccessRequestModal";

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="contato"
      className="py-10 relative overflow-hidden"
      style={{ background: "#f5f7fa" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0066cc 0%, #00a8e8 100%)",
            padding: "5rem 3rem",
            boxShadow: "0 20px 60px rgba(0, 102, 204, 0.2)",
          }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Pronto para Transformar{" "}
              <span
                style={{
                  color: "#00d9ff",
                }}
              >
                sua Gestão?
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Seja um dos primeiros a experimentar o MedEquipFlow. Solicite seu acesso antecipado e descubra como podemos otimizar a gestão de seus equipamentos médicos.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3.5 rounded-lg font-semibold transition-all duration-300"
              style={{
                background: "#00d9ff",
                color: "#0a1628",
                fontSize: "0.95rem",
                fontFamily: "'Nunito Sans', sans-serif",
                boxShadow: "0 8px 30px rgba(0, 217, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 40px rgba(0, 217, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(0, 217, 255, 0.3)";
              }}
            >
              Solicitar Acesso Agora
            </button>

            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.85rem",
                marginTop: "1.5rem",
              }}
            >
              Responderemos em até 24 horas com os próximos passos.
            </p>
          </div>
        </div>
      </div>
      <AccessRequestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
