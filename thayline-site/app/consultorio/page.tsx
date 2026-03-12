"use client";

import Reveal from "@/components/ui/Reveal";
import ConsultorioGallery from "@/components/ui/ConsultorioGallery";

const slides = [
  {
    src: "/img/Consultorio/authentic-scene-young-person-undergoing-psychological-therapy.jpg",
    feature: "Isolamento acústico total",
  },
  {
    src: "/img/Consultorio/authentic-scene-young-person-undergoing-psychological-therapy%20(1).jpg",
    feature: "Climatização",
  },
  {
    src: "/img/Consultorio/family-therapy-psychologist-office.jpg",
    feature: "Entrada discreta e privativa",
  },
  {
    src: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1600&h=900&fit=crop&q=80",
    feature: "Estacionamento nas proximidades",
  },
];

export default function ConsultorioPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell centered">
          <Reveal>
            <h1 className="page-title">Um espaço pensado para você</h1>
            <p className="lead lead-centered">Conforto, privacidade e acolhimento em cada detalhe.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell">
          <ConsultorioGallery slides={slides} />
        </div>
      </section>

      <section className="section">
        <div className="shell two-col">
          <Reveal>
            <h2 className="section-title">Endereço</h2>
            <p>Rua Exemplo, 123 - Centro, [Cidade/UF]</p>
          </Reveal>
          <Reveal>
            <div className="map-wrapper">
              <iframe
                title="Mapa do consultório"
                src="https://www.google.com/maps?q=São%20Paulo&output=embed"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
