/* =============================================================
   MedEquipFlow — Features Section
   Style: Futurista | Azul Marinho a Ciano
   3 feature cards: Monitoramento, Adaptabilidade, Relatórios
   ============================================================= */

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "📡",
    tag: "Monitoramento",
    title: "Atualização Dinâmica",
    description:
      "Acompanhe as solicitações e o status de todos os equipamentos. Receba alertas sobre falhas, manutenções pendentes e disponibilidade de ativos críticos.",
    highlights: ["Dashboard", "Alertas", "Histórico completo"],
  },
  {
    icon: "🔄",
    tag: "Rastreabilidade",
    title: "Adaptabilidade aos Recursos",
    description:
      "Com um modelo baseado em licenciamento da plataforma, permitindo expansão progressiva dentro das instituições. Mesmo com o input manual, já conseguimos estruturar e organizar os dados.",
    highlights: ["Atualização dinâmica", "Redução nos custos", "Escalabilidade"],
  },
  {
    icon: "📈",
    tag: "Tecnologia",
    title: "Relatórios & Insights",
    description:
      "Gere relatórios detalhados sobre performance e utilização dos equipamentos. Tome decisões estratégicas baseadas em dados confiáveis e atualizados.",
    highlights: ["Relatórios automáticos", "Análise de dados", "Exportação em PDF/Excel"],
  },
];

export default function FeaturesSection() {
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
      id="recursos"
      ref={sectionRef}
      className="py-10 relative overflow-hidden"
      style={{ background: "#f5f7fa" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
            Três Pilares que{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0066cc, #00d9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transformam a Gestão
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              color: "#4a5f7f",
              fontSize: "1rem",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Monitoramento contínuo, rastreabilidade e relatórios inteligentes que trabalham juntos para otimizar suas operações.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
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
                {/* Icon */}
                <div
                  className="text-4xl mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 102, 204, 0.1), rgba(0, 217, 255, 0.1))",
                  }}
                >
                  {feature.icon}
                </div>

                {/* Tag */}
                <div
                  className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    background: "rgba(0, 217, 255, 0.1)",
                    color: "#0066cc",
                    fontFamily: "'Nunito Sans', sans-serif",
                    border: "1px solid rgba(0, 217, 255, 0.3)",
                  }}
                >
                  {feature.tag}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#0a1628",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    color: "#4a5f7f",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {feature.description}
                </p>

                {/* Highlights */}
                <ul
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#4a5f7f",
                  }}
                >
                  {feature.highlights.map((highlight, i) => (
                    <li key={`highlight-${i}`} className="flex items-start gap-2 mb-2">
                      <span
                        className="text-lg leading-none mt-0.5"
                        style={{
                          color: "#00d9ff",
                        }}
                      >
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
