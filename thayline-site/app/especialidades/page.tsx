"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const especialidades = [
  {
    title: "Ansiedade e Síndrome do Pânico",
    text: "Quando a mente está em alerta constante, tudo parece pesado. Na terapia, você aprende a reconhecer gatilhos, regular sintomas e retomar a sensação de segurança.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1000&q=80",
  },
  {
    title: "Depressão e Transtornos do Humor",
    text: "Acolhemos o sofrimento sem julgamento e construímos estratégias possíveis para recuperar energia, sentido e vínculo com a sua rotina.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1000&q=80",
  },
  {
    title: "Autoestima e Autoconhecimento",
    text: "Você não precisa viver em guerra com você mesma. O processo terapêutico fortalece sua identidade e sua capacidade de fazer escolhas mais alinhadas com quem você é.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1000&q=80",
  },
  {
    title: "Relacionamentos e Vínculos",
    text: "Entender padrões afetivos, comunicação e limites é essencial para relações mais saudáveis. Juntas, trabalhamos vínculos com mais clareza e cuidado.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=80",
  },
  {
    title: "Psicologia Infantil (6–12 anos)",
    text: "A terapia com crianças respeita o tempo da infância e utiliza recursos lúdicos. Pais e responsáveis participam com orientações práticas durante o processo.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1000&q=80",
  },
  {
    title: "Psicologia para Adolescentes",
    text: "A adolescência traz desafios emocionais e relacionais intensos. O atendimento é adaptado para oferecer escuta, autonomia e suporte à família.",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1000&q=80",
  },
];

export default function EspecialidadesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell centered">
          <Reveal>
            <h1 className="page-title">Especialidades</h1>
            <p className="lead lead-centered">Um cuidado terapêutico personalizado para cada fase da sua vida.</p>
          </Reveal>
        </div>
      </section>

      {especialidades.map((item, index) => (
        <section key={item.title} className={`section alt-row ${index % 2 ? "reverse" : ""}`}>
          <div className="shell split-alt">
            <Reveal x={index % 2 ? 30 : -30}>
              <div className="section-image">
                <Image src={item.image} alt={item.title} width={680} height={460} />
              </div>
            </Reveal>
            <Reveal x={index % 2 ? -30 : 30}>
                <h2 className="section-title">{item.title}</h2>
              <p>{item.text}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section section-cream centered">
        <div className="shell">
          <Reveal>
            <h2 className="section-title">Sua situação não está na lista? Vamos conversar.</h2>
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20atendimento."
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
