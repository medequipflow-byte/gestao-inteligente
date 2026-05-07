/* =============================================================
   MedEquipFlow — Access Request Modal
   Style: Soft Luxury Health | Advanced capture form
   ============================================================= */

import { useState } from "react";
import { X, Mail, CheckCircle, User, Building, Phone, MessageSquare } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface AccessRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function AccessRequestModal({ isOpen, onClose }: AccessRequestModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.company.trim()) newErrors.company = "Empresa/Instituição é obrigatória";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Insira um email válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);

    try {
      // Enviar para o banco de dados via Supabase
      const { error } = await supabase
        .from('solicitacoes_acesso')
        .insert([
          { 
            nome_completo: formData.name,
            email_profissional: formData.email,
            empresa: formData.company,
            telefone: formData.phone || null,
            mensagem: formData.message || null
          }
        ]);

      if (error) throw error;

      setSubmitted(true);
      
      // Fechar modal após 3 segundos
      setTimeout(() => {
        onClose();
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
        setSubmitted(false);
      }, 3000);
    } catch (err) { console.error("Erro no formulário:", err); } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
        style={{ opacity: isOpen ? 1 : 0 }}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        onClick={(e) => {
          // Close modal if clicking outside the white box
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all duration-300"
          style={{
            transform: isOpen ? "scale(1)" : "scale(0.95)",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="relative p-6"
            style={{
              background: "linear-gradient(135deg, #f8faff, #f0f4f8)",
              borderBottom: "1px solid rgba(0, 217, 255, 0.1)",
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/50 rounded-lg transition-colors duration-200"
              aria-label="Fechar"
            >
              <X size={20} color="#4a5f7f" />
            </button>

            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0066cc, #0052a3)",
                }}
              >
                <Mail size={20} color="white" />
              </div>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#0a1628",
                }}
              >
                Solicitar Acesso
              </h2>
            </div>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                color: "#4a5f7f",
                fontSize: "0.85rem",
                lineHeight: 1.4,
              }}
            >
              Preencha os dados abaixo para entrar em nossa lista de espera.
            </p>
          </div>

          {/* Content (Scrollable) */}
          <div className="p-6 overflow-y-auto custom-scrollbar" style={{ flex: 1 }}>
            {submitted ? (
              <div className="text-center py-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "linear-gradient(135deg, #0066cc, #0052a3)",
                  }}
                >
                  <CheckCircle size={32} color="white" />
                </div>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#0a1628",
                    marginBottom: "0.5rem",
                  }}
                >
                  Tudo certo!
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    color: "#4a5f7f",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  Suas informações foram salvas com sucesso em nossa base de dados. Nossa equipe entrará em contato em breve através do e-mail informado.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div>
                    <label className="block text-xs font-bold uppercase mb-1.5" style={{ color: "#0a1628", letterSpacing: "0.025em" }}>
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-3" color="#a0b0c0" />
                      <input
                        id="name"
                        type="text"
                        placeholder="João Silva"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 transition-all focus:outline-none"
                        style={{
                          borderColor: errors.name ? "#ff3333" : "#f0f4f8",
                          backgroundColor: "#f8faff",
                        }}
                      />
                    </div>
                    {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase mb-1.5" style={{ color: "#0a1628", letterSpacing: "0.025em" }}>
                      E-mail Profissional *
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-3" color="#a0b0c0" />
                      <input
                        id="email"
                        type="email"
                        placeholder="joao@instituicao.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 transition-all focus:outline-none"
                        style={{
                          borderColor: errors.email ? "#ff3333" : "#f0f4f8",
                          backgroundColor: "#f8faff",
                        }}
                      />
                    </div>
                    {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Empresa */}
                  <div>
                    <label className="block text-xs font-bold uppercase mb-1.5" style={{ color: "#0a1628", letterSpacing: "0.025em" }}>
                      Empresa / Instituição *
                    </label>
                    <div className="relative">
                      <Building size={16} className="absolute left-3 top-3" color="#a0b0c0" />
                      <input
                        id="company"
                        type="text"
                        placeholder="Hospital Central"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 transition-all focus:outline-none"
                        style={{
                          borderColor: errors.company ? "#ff3333" : "#f0f4f8",
                          backgroundColor: "#f8faff",
                        }}
                      />
                    </div>
                    {errors.company && <p className="text-[10px] text-red-500 mt-1">{errors.company}</p>}
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-xs font-bold uppercase mb-1.5" style={{ color: "#0a1628", letterSpacing: "0.025em" }}>
                      Telefone (Opcional)
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-3" color="#a0b0c0" />
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 transition-all focus:outline-none"
                        style={{
                          borderColor: "#f0f4f8",
                          backgroundColor: "#f8faff",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs font-bold uppercase mb-1.5" style={{ color: "#0a1628", letterSpacing: "0.025em" }}>
                    Mensagem Adicional (Opcional)
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3" color="#a0b0c0" />
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Como podemos ajudar?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 transition-all focus:outline-none resize-none"
                      style={{
                        borderColor: "#f0f4f8",
                        backgroundColor: "#f8faff",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-bold transition-all duration-300 disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #0066cc, #0052a3)",
                    color: "white",
                    fontSize: "0.95rem",
                    boxShadow: "0 8px 25px rgba(0, 102, 204, 0.25)",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 35px rgba(0, 102, 204, 0.35)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 25px rgba(0, 102, 204, 0.25)";
                  }}
                >
                  {loading ? "Processando..." : "Confirmar Solicitação"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
