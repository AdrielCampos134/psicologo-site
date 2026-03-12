"use client";

import Reveal from "@/components/ui/Reveal";

const depoimentos = [
  "Cheguei ao consultório da Dra. Thayline em um momento muito difícil da minha vida. O acolhimento foi imediato e eu finalmente senti que não estava sozinha. — M.S.",
  "Minha filha de 9 anos apresentava muita ansiedade escolar. Em 3 meses de acompanhamento, ela voltou a sorrir e se sentir segura. — A.R.",
  "O atendimento online funcionou perfeitamente para minha rotina. Profissional incrível, sensível e muito preparada. — C.L.",
  "Nunca imaginei que terapia me ajudaria tanto com meus relacionamentos. Hoje consigo me posicionar com mais clareza. — L.T.",
  "Aprendi a reconhecer meus limites sem culpa. Foi um processo respeitoso e transformador. — F.N.",
  "Com a terapia, consegui atravessar um período de luto com mais suporte e presença emocional. — D.P.",
  "Meu filho adolescente criou vínculo com a Dra. e a comunicação em casa melhorou muito. — R.G.",
  "Encontrei um espaço onde pude ser eu mesma, sem julgamentos. Isso fez toda diferença. — V.S.",
];

export default function DepoimentosPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell centered">
          <Reveal>
            <span className="google-badge">⭐ 5.0 — Avaliações verificadas</span>
            <h1 className="page-title">Histórias reais de transformação</h1>
            <p className="lead lead-centered">Nomes preservados para resguardar a privacidade de cada paciente.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell masonry-testimonials">
          {depoimentos.map((depo, index) => (
            <Reveal key={depo} delay={index * 0.04}>
              <article className="testimonial-masonry-card">
                <div className="quote-mark">“</div>
                <p>{depo}</p>
                <div className="stars">★★★★★</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section centered">
        <div className="shell">
          <Reveal>
            <h2 className="section-title">Comece sua história</h2>
            <a href="/contato" className="btn btn-primary">
              Agendar Consulta
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
