"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const especializacoes = [
  {
    title: "Psicologia Clínica de Adultos",
    desc: "Acolhimento para questões emocionais, fases de mudança e busca de equilíbrio no dia a dia.",
  },
  {
    title: "Psicologia Infantil e do Adolescente",
    desc: "Intervenções adaptadas ao desenvolvimento com orientação para pais e responsáveis.",
  },
  {
    title: "Terapia Cognitivo-Comportamental (TCC)",
    desc: "Método estruturado que ajuda você a identificar padrões e construir respostas mais saudáveis.",
  },
  {
    title: "Ansiedade e Transtornos de Humor",
    desc: "Estratégias terapêuticas para reduzir sofrimento e retomar sua autonomia emocional.",
  },
  {
    title: "Orientação para Pais",
    desc: "Apoio para fortalecer vínculo, rotina e comunicação com seus filhos em diferentes fases.",
  },
  {
    title: "Desenvolvimento de Autoestima",
    desc: "Processo para reconhecer sua história, seus limites e construir autoconfiança com leveza.",
  },
];

const formacao = [
  "Graduação em Psicologia — [Universidade], [Ano]",
  "Especialização em TCC — [Instituto], [Ano]",
  "Especialização em Psicologia Infantil — [Instituto], [Ano]",
  "Curso de Atualização em Ansiedade e Pânico — [Ano]",
];

export default function SobrePage() {
  return (
    <main>
      <section className="page-hero page-hero-soft">
        <div className="shell two-col">
          <Reveal x={-20}>
            <div className="portrait-frame portrait-large">
              <Image
                src="/img/Psi1menor.jpg"
                alt="Dra. Thayline Silva Menezes"
                width={560}
                height={700}
                priority
              />
            </div>
          </Reveal>
          <Reveal x={20}>
            <p className="eyebrow">Psicóloga Clínica | CRP/XX 99999</p>
            <h1 className="page-title">Dra. Thayline Silva Menezes</h1>
            <p className="lead">
              Cada pessoa chega com uma história única. Meu trabalho é te oferecer
              escuta, direção e presença para que você se sinta segura ao longo desse processo.
            </p>
            <p className="crp-badge">CRP/XX 99999</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell bio-grid">
          <Reveal>
            <h2 className="section-title">Minha trajetória</h2>
            <p>
              Minha atuação clínica é guiada por uma prática humana e ética. Na terapia,
              você encontra um espaço para ser ouvida sem pressa, compreender padrões
              que te adoecem e construir novos caminhos no seu ritmo.
            </p>
            <p>
              Trabalho com a Terapia Cognitivo-Comportamental (TCC), integrando técnicas
              práticas à sua realidade para que o processo seja profundo e aplicável na vida real.
            </p>
          </Reveal>
          <div className="timeline-vertical">
            {formacao.map((item, index) => (
              <Reveal key={item} x={-24} delay={index * 0.08}>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <p>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell">
          <Reveal>
            <h2 className="section-title">Especializações</h2>
          </Reveal>
          <div className="cards-grid">
            {especializacoes.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="soft-card">
                  <span className="card-icon">✦</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="/especialidades">Saiba mais</a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell centered-quote">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            “Acredito em uma terapia que acolhe sua dor e também fortalece sua potência para viver com mais presença.”
          </motion.blockquote>
          <p>— Dra. Thayline Silva Menezes</p>
        </div>
      </section>
    </main>
  );
}
