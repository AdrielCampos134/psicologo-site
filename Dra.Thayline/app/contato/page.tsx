"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

type FormState = {
  name: string;
  phone: string;
  email: string;
  modality: string;
  plan: string;
  source: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  modality: "Presencial",
  plan: "Sessão Avulsa",
  source: "Instagram",
  message: "",
};

export default function ContatoPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("/api/agendamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { success: boolean; message: string };
      if (data.success) {
        setSuccess(data.message);
        setForm(initialState);
      }
    } catch {
      setSuccess("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="page-hero page-hero-soft contact-hero">
        <div className="shell centered">
          <Reveal>
            <p className="eyebrow">Atendimento humanizado e sem pressa</p>
            <h1 className="page-title">Vamos conversar?</h1>
            <p className="lead lead-centered">Um espaço para você se sentir ouvida, acolhida e segura para iniciar seu processo.</p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-section">
        <div className="shell contact-layout">
          <Reveal x={-24}>
            <div className="contact-info-panel">
              <h2 className="section-title">Canais de contato</h2>
              <p className="contact-intro">
                Escolha a forma que for mais confortável para você. Responderei com atenção e orientações sobre o melhor formato de atendimento.
              </p>

              <div className="contact-highlight-grid">
                <a className="contact-highlight-card" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
                  <span className="contact-icon" aria-hidden="true">◌</span>
                  <h3>WhatsApp</h3>
                  <p>(00) 90000-0000</p>
                </a>
                <a className="contact-highlight-card" href="mailto:contato@drathayline.com.br">
                  <span className="contact-icon" aria-hidden="true">◌</span>
                  <h3>E-mail</h3>
                  <p>contato@drathayline.com.br</p>
                </a>
                <a className="contact-highlight-card" href="https://instagram.com" target="_blank" rel="noreferrer">
                  <span className="contact-icon" aria-hidden="true">◌</span>
                  <h3>Instagram</h3>
                  <p>@drathayline</p>
                </a>
              </div>

              <div className="contact-meta">
                <p>Segunda a Sexta: 8h às 20h</p>
                <p>Sábado: 8h às 13h (presencial)</p>
              </div>

              <div className="map-wrapper contact-map">
                <iframe
                  title="Mapa"
                  src="https://www.google.com/maps?q=São%20Paulo&output=embed"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal x={24}>
            <form className="booking-form contact-form-panel" onSubmit={onSubmit}>
              <p className="form-kicker">Pré-agendamento</p>
              <h2 className="contact-form-title">Solicitar atendimento</h2>

              <label className="floating-field">
                <input
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder=" "
                />
                <span>Nome completo*</span>
              </label>

              <label className="floating-field">
                <input
                  required
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder=" "
                />
                <span>WhatsApp*</span>
              </label>

              <label className="floating-field">
                <input
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder=" "
                />
                <span>E-mail</span>
              </label>

              <p className="field-label">Modalidade*</p>
              <div className="toggle-group">
                {["Presencial", "Online", "Infantil/Adolescente"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={form.modality === option ? "active" : ""}
                    onClick={() => updateField("modality", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="contact-form-row">
                <select value={form.plan} onChange={(e) => updateField("plan", e.target.value)}>
                  <option>Sessão Avulsa</option>
                  <option>Pacote Mensal</option>
                  <option>Pacote Trimestral</option>
                </select>

                <select value={form.source} onChange={(e) => updateField("source", e.target.value)}>
                  <option>Instagram</option>
                  <option>Google</option>
                  <option>Indicação</option>
                  <option>Outro</option>
                </select>
              </div>

              <label className="floating-field">
                <textarea
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder=" "
                  rows={4}
                />
                <span>Mensagem opcional</span>
              </label>

              <div className="contact-actions">
                <motion.button className="btn btn-primary" whileTap={{ scale: 0.98 }} disabled={loading}>
                  {loading ? "Enviando..." : "Solicitar agendamento"}
                </motion.button>
                <a
                  className="text-link"
                  href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20prefiro%20contato%20direto%20no%20WhatsApp."
                  target="_blank"
                  rel="noreferrer"
                >
                  Prefere contato direto? Me chame no WhatsApp →
                </a>
              </div>

              {success ? (
                <motion.p className="success-msg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {success}
                </motion.p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
