"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Slide = {
  src: string;
  feature: string;
};

type Props = {
  slides: Slide[];
};

export default function ConsultorioGallery({ slides }: Props) {
  const [active, setActive] = useState(0);

  const showPrev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);
  const showNext = () => setActive((prev) => (prev + 1) % slides.length);

  if (slides.length === 0) return null;

  return (
    <div className="consultorio-carousel">
      <div className="carousel-stage">
        <button className="carousel-nav left" type="button" onClick={showPrev} aria-label="Foto anterior">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M15 5L8 12L15 19" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="carousel-viewport">
          <AnimatePresence mode="wait">
            <motion.div
              className="carousel-slide"
              key={slides[active].src}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <Image src={slides[active].src} alt={`Ambiente ${active + 1}`} width={1200} height={760} priority={active === 0} />
              <p className="carousel-feature">{slides[active].feature}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="carousel-nav right" type="button" onClick={showNext} aria-label="Próxima foto">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 5L16 12L9 19" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <p className="carousel-counter">
        {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </p>

      <div className="carousel-thumbs">
        {slides.map((slide, index) => (
          <button
            type="button"
            className={`carousel-thumb ${index === active ? "is-active" : ""}`}
            key={slide.src}
            onClick={() => setActive(index)}
            aria-label={`Ver foto ${index + 1}: ${slide.feature}`}
          >
            <Image src={slide.src} alt={`Miniatura ambiente ${index + 1}`} width={220} height={140} />
          </button>
        ))}
      </div>
    </div>
  );
}
