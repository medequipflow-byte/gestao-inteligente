/* =============================================================
   MedEquipFlow — Problems Section (A Dor)
   Style: Futurista | Azul Marinho a Ciano | Amigável
   ============================================================= */

import { useEffect, useRef, useState } from "react";

const problems = [
  {
    icon: "⚠️",
    title: "Equipamentos Parados",
    description: "Falta de visibilidade sobre o status real dos equipamentos causa paradas inesperadas e perda de produtividade.",
  },
  {
    icon: "⏱️",
    title: "Perda de Tempo",
    description: "Processos manuais e desorganizados consomem horas valiosas da equipe que poderiam ser investidas em pacientes.",
  },
  {
    icon: "📊",
    title: "Falta de Informação",
    description: "Decisões baseadas em dados incompletos ou desatualizados comprometem a qualidade do gerenciamento.",
  },
];

export default function ProblemsSection() {
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
      ref={sectionRef}
      className="py-10 relative overflow-hidden"
      style={{ background: "#f5f7fa" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#0a1628",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Os Desafios da Gestão{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0066cc, #00d9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tradicional
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              color: "#4a5f7f",
              fontSize: "1rem",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Hospitais e clínicas enfrentam desafios críticos na gestão de equipamentos médicos.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={`problem-${index}`}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(245, 247, 250, 0.95))",
                  border: "1.5px solid rgba(0, 217, 255, 0.15)",
                  boxShadow: "0 4px 20px rgba(0, 102, 204, 0.08)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0, 217, 255, 0.4)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0, 102, 204, 0.15)";
                  (e.currentTarget as HTMLDivElement).style.background = "linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(245, 247, 250, 1))";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0, 217, 255, 0.15)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0, 102, 204, 0.08)";
                  (e.currentTarget as HTMLDivElement).style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(245, 247, 250, 0.95))";
                }}
              >
                <div
                  className="text-5xl mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 102, 204, 0.1), rgba(0, 217, 255, 0.1))",
                  }}
                >
                  {problem.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    color: "#0a1628",
                    fontSize: "1.15rem",
                    marginBottom: "0.75rem",
                    marginTop: "1rem",
                  }}
                >
                  {problem.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    color: "#4a5f7f",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
