"use client";

import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";

const modalidades = [
  {
    icon: "🏢",
    title: "Presencial",
    text: "Consultório localizado em [Cidade]. Ambiente reservado e acolhedor.",
  },
  {
    icon: "💻",
    title: "Online",
    text: "Via videochamada segura. Mesma qualidade, de onde você estiver.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Infantil/Adolescente",
    text: "Abordagem adaptada, com orientação para os responsáveis.",
  },
];

const planos = [
  {
    title: "Sessão Avulsa",
    price: "R$ 180,00",
    items: [
      "Duração: 50 minutos",
      "Presencial ou Online",
      "Sem compromisso de continuidade",
      "Ideal para primeira consulta ou retorno eventual",
    ],
    cta: "Agendar sessão",
  },
  {
    title: "Pacote Mensal",
    price: "R$ 620,00",
    badge: "Mais escolhido",
    items: [
      "4 sessões por mês",
      "Economia de R$ 100",
      "Agendamento prioritário",
      "Suporte por mensagem entre sessões",
      "Relatório de evolução trimestral",
    ],
    cta: "Quero este plano",
  },
  {
    title: "Pacote Trimestral",
    price: "R$ 1.740,00",
    items: [
      "12 sessões (3 meses)",
      "Economia de R$ 420",
      "Tudo do pacote mensal",
      "Sessão bônus ao final do trimestre",
      "Plano terapêutico escrito personalizado",
    ],
    cta: "Quero este plano",
  },
];

const faqs = [
  {
    question: "Como sei se preciso de terapia?",
    answer:
      "Se você sente que está difícil lidar sozinha com emoções, conflitos ou sobrecarga, a terapia pode ser um espaço seguro para organizar tudo isso.",
  },
  {
    question: "Quantas sessões vou precisar?",
    answer:
      "Depende da sua demanda e dos objetivos. Na prática clínica, definimos juntas uma frequência e revisamos o plano ao longo do processo.",
  },
  {
    question: "As sessões online são tão eficazes quanto as presenciais?",
    answer:
      "Sim. Com estrutura adequada e vínculo terapêutico, o atendimento online pode ser tão efetivo quanto o presencial.",
  },
  {
    question: "O que acontece na primeira sessão?",
    answer:
      "A primeira sessão é de acolhimento: você apresenta sua história, suas dificuldades e alinhamos expectativas sobre o tratamento.",
  },
  {
    question: "Posso cancelar ou remarcar sessões?",
    answer:
      "Sim, com aviso prévio combinado em contrato para manter organização e continuidade do acompanhamento.",
  },
  {
    question: "Meus dados e relatos são confidenciais?",
    answer:
      "Sim. O sigilo profissional é um compromisso ético da psicologia e é respeitado em todo o processo.",
  },
  {
    question: "Atende crianças de qual idade?",
    answer:
      "Atendo crianças a partir de 6 anos, com abordagem lúdica e participação dos responsáveis em momentos estratégicos.",
  },
  {
    question: "Como funciona o atendimento para adolescentes?",
    answer:
      "A condução é adaptada à fase da adolescência, valorizando escuta, vínculo e autonomia, com alinhamentos pontuais com a família.",
  },
];

export default function ConsultasPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell centered">
          <Reveal>
            <h1 className="page-title">Consultas</h1>
            <p className="lead lead-centered">Transparência, acolhimento e compromisso desde o primeiro contato.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell cards-grid three-col">
          {modalidades.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="soft-card">
                <span className="card-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell centered">
          <Reveal>
            <h2 className="section-title">Investimento no seu bem-estar</h2>
            <p className="lead lead-centered">Transparência desde o início.</p>
          </Reveal>
          <div className="cards-grid three-col pricing-grid">
            {planos.map((plano, index) => (
              <Reveal key={plano.title} delay={index * 0.08}>
                <article className={`pricing-card ${plano.badge ? "featured" : ""}`}>
                  {plano.badge ? <span className="pricing-badge">{plano.badge}</span> : null}
                  <h3>{plano.title}</h3>
                  <p className="price">{plano.price}</p>
                  <ul>
                    {plano.items.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <button className="btn btn-primary">{plano.cta}</button>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="notes">Formas de pagamento: PIX, cartão de débito/crédito e transferência bancária.</p>
          <p className="notes">Valores sujeitos a reajuste. Atendimento pelo plano de saúde não disponível no momento.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <h2 className="section-title">Perguntas frequentes</h2>
          </Reveal>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </main>
  );
}
