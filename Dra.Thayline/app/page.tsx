"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

const areas = [
  {
    title: "Ansiedade e Síndrome do Pânico",
    desc: "Entenda os gatilhos da ansiedade e desenvolva recursos para viver com mais segurança.",
  },
  {
    title: "Depressão e Transtornos do Humor",
    desc: "Acolhimento e estratégias para recuperar energia, sentido e presença na rotina.",
  },
  {
    title: "Autoestima e Desenvolvimento Pessoal",
    desc: "Fortaleça sua identidade e construa uma relação mais gentil com você mesma.",
  },
  {
    title: "Relacionamentos e Vínculos Afetivos",
    desc: "Aprenda a se posicionar com clareza e criar relações mais saudáveis.",
  },
  {
    title: "Psicologia Infantil (6–12 anos)",
    desc: "Intervenções lúdicas com suporte aos responsáveis durante o processo.",
  },
  {
    title: "Psicologia para Adolescentes",
    desc: "Escuta acolhedora e abordagem adaptada aos desafios da adolescência.",
  },
];

const passos = [
  ["📞 Primeiro contato", "Você me envia uma mensagem e agendamos uma conversa inicial."],
  [
    "🗓 Sessão de acolhimento",
    "Entendo sua demanda, suas necessidades e o que te trouxe até aqui.",
  ],
  [
    "🧭 Plano terapêutico",
    "Juntas construímos um caminho personalizado para o seu processo.",
  ],
  [
    "🌱 Evolução contínua",
    "Sessões regulares com acompanhamento dedicado ao seu crescimento.",
  ],
] as const;

const testimonials = [
  {
    text: "Cheguei muito sobrecarregada e saí das sessões com mais clareza para lidar com a minha rotina.",
    name: "M.S.",
    period: "Paciente há 2 anos",
  },
  {
    text: "O processo foi respeitoso e humano do início ao fim. Me senti acolhida de verdade.",
    name: "C.L.",
    period: "Paciente há 1 ano",
  },
  {
    text: "Percebi mudanças reais na minha autoestima e na forma como me relaciono comigo.",
    name: "L.T.",
    period: "Paciente há 3 anos",
  },
  {
    text: "Minha filha se adaptou muito bem ao atendimento e nós, pais, também fomos orientados.",
    name: "A.R.",
    period: "Paciente há 8 meses",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-split">
        <div className="hero-left">
          <div className="shell hero-content">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              ✦ Psicóloga | CRP/XX 99999
            </motion.p>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              Um espaço seguro
              <br />
              para se reconectar
              <br />
              <em>com você mesma.</em>
            </motion.h1>
            <motion.p
              className="lead"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Atendimento presencial e online para adultos, crianças e adolescentes.
              Um processo terapêutico feito com escuta genuína e compromisso com seu
              crescimento.
            </motion.p>
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              <Link href="/contato" className="btn btn-primary">
                Agendar minha consulta
              </Link>
              <Link href="/sobre" className="text-link">
                Conhecer a Dra. Thayline →
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="hero-right">
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="gold-circle" />
            <div className="portrait-frame">
              <Image
                src="/img/Psi1.jpg"
                alt="Dra. Thayline sorrindo"
                width={560}
                height={700}
                priority
              />
            </div>
          </motion.div>
        </div>
        <div className="shell hero-pills">
          <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>🌿 Atendimento Presencial</motion.span>
          <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }}>💻 Atendimento Online</motion.span>
          <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}>👧 Crianças e Adolescentes</motion.span>
        </div>
      </section>

      <section className="section section-cream centered">
        <div className="shell">
          <Reveal>
            <blockquote className="impact-quote">
              “Pedir ajuda não é fraqueza. É o primeiro passo para uma vida mais leve.”
            </blockquote>
            <motion.span
              className="quote-line"
              initial={{ width: 0 }}
              whileInView={{ width: 200 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />
            <p>— Dra. Thayline Silva Menezes</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <h2 className="section-title">Áreas de Atuação</h2>
          </Reveal>
          <div className="cards-grid three-col areas-grid">
            {areas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.06}>
                <article className="soft-card area-card">
                  <span className="card-icon">✦</span>
                  <h3>{area.title}</h3>
                  <p>{area.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/especialidades" className="text-link with-space">
              Ver todas as especialidades →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell two-col">
          <Reveal x={-20}>
            <div className="portrait-frame portrait-small">
              <Image
                src="/img/Psi1menor.jpg"
                alt="Dra. Thayline em consultório"
                width={480}
                height={560}
              />
            </div>
          </Reveal>
          <Reveal x={20}>
            <h2 className="section-title">Sobre a Dra. Thayline</h2>
            <p className="crp-badge">CRP/XX 99999</p>
            <p>
              Com abordagem em Terapia Cognitivo-Comportamental (TCC), acompanho
              adultos, crianças e adolescentes com foco em acolhimento, clareza e
              evolução constante.
            </p>
            <div className="stats-row">
              <AnimatedCounter value={8} suffix="+" label="anos de experiência" />
              <AnimatedCounter value={500} suffix="+" label="pacientes atendidos" />
              <AnimatedCounter value={3} label="especializações" />
            </div>
            <Link href="/sobre" className="text-link with-space">
              Minha história completa →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <h2 className="section-title">Como é a terapia comigo</h2>
          </Reveal>
          <div className="timeline-grid process-grid">
            {passos.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="timeline-card process-card">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell">
          <Reveal>
            <h2 className="section-title centered-text">O que dizem minhas pacientes</h2>
          </Reveal>
          <TestimonialCarousel items={testimonials} />
          <Reveal>
            <Link href="/depoimentos" className="text-link with-space centered-inline">
              Ver todos os relatos →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section final-cta centered">
        <div className="shell">
          <Reveal>
            <div className="cta-panel">
              <p className="eyebrow">✦ Atendimento presencial e online</p>
              <h2 className="section-title">Pronta para começar?</h2>
              <p className="cta-subtext">
                A primeira sessão é um espaço de acolhimento para entender sua
                história e decidir, com calma, os próximos passos.
              </p>
              <div className="cta-actions">
                <Link href="/contato" className="btn btn-primary btn-large">
                  Agendar minha primeira consulta
                </Link>
                <a
                  className="btn btn-outline"
                  href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20primeira%20consulta."
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
