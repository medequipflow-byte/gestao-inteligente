/* =============================================================
   MedEquipFlow — Footer
   Style: Futurista | Azul Marinho a Ciano
   Instagram: @medequipflow
   ============================================================= */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/medequipflow",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/medequip-flow-gestão-inteligente-de-equipamentos-a90417408",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
  ];

  const footerLinks = [
    {
      title: "Produto",
      links: [
        { label: "Recursos", href: "#recursos" },
        { label: "Prévia", href: "#produto" },
        { label: "Segurança", href: "#" },
        { label: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre nós", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carreiras", href: "#" },
        { label: "Contato", href: "#contato" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { label: "Documentação", href: "#" },
        { label: "Central de Ajuda", href: "#" },
        { label: "Status", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
  ];

  return (
    <footer
      style={{ background: "#0a1628" }}
    >
      {/* Main footer content */}
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #0066cc, #00d9ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MedEquipFlow
              </span>
            </a>

            <p
              className="mb-6"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                color: "#a0b0c0",
                fontSize: "0.88rem",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Gestão inteligente de equipamentos médicos. Transformando a eficiência operacional do setor de saúde com tecnologia de ponta.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(0, 217, 255, 0.1)",
                    color: "#a0b0c0",
                    border: "1px solid rgba(0, 217, 255, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(0, 217, 255, 0.2)";
                    el.style.color = "#00d9ff";
                    el.style.borderColor = "rgba(0, 217, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(0, 217, 255, 0.1)";
                    el.style.color = "#a0b0c0";
                    el.style.borderColor = "rgba(0, 217, 255, 0.2)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                className="mb-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.82rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        color: "#a0b0c0",
                        fontSize: "0.88rem",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#00d9ff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#a0b0c0")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(0, 217, 255, 0.1)" }}
      >
        <div className="container mx-auto px-6 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              color: "#4a5f7f",
              fontSize: "0.8rem",
            }}
          >
            © {currentYear} MedEquipFlow. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Privacidade", "Termos de Uso", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  color: "#4a5f7f",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00d9ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5f7f")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
