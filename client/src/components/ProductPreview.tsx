/* =============================================================
   MedEquipFlow — Product Preview Section
   Style: Futurista | Azul Marinho a Ciano
   ============================================================= */

import { useEffect, useRef, useState } from "react";

export default function ProductPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="produto"
      ref={sectionRef}
      className="py-10 relative overflow-hidden text-center"
      style={{ background: "#f5f7fa" }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Centered — Text */}
          <div className="flex flex-col items-center">
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "#0a1628",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Conheça o{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0066cc, #00d9ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MedEquipFlow
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                color: "#4a5f7f",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginBottom: "3rem",
                maxWidth: "700px",
              }}
            >
              Uma plataforma inteligente desenvolvida especialmente para o setor de saúde, com foco em segurança, conformidade e eficiência operacional. Monitore, controle e otimize seus equipamentos médicos em tempo real.
            </p>

            <div className="space-y-6 max-w-2xl text-left">
              {[
                "Dashboard em tempo real com visualização completa de todos os equipamentos",
                "Alertas inteligentes para manutenção preventiva e falhas críticas",
                "Relatórios automáticos para conformidade regulatória",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "linear-gradient(135deg, #0066cc, #00d9ff)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: "#0a1628",
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
