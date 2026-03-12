"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Testimonial = {
  text: string;
  name: string;
  period: string;
};

type Props = {
  items: Testimonial[];
};

export default function TestimonialCarousel({ items }: Props) {
  const [active, setActive] = useState(0);

  const visible = useMemo(() => {
    return [0, 1, 2].map((offset) => items[(active + offset) % items.length]);
  }, [active, items]);

  return (
    <div>
      <div className="testimonial-row">
        {visible.map((item) => (
          <motion.article
            key={`${item.name}-${item.period}`}
            className="testimonial-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="quote-mark">“</div>
            <p>{item.text}</p>
            <h4>{item.name}</h4>
            <span>{item.period}</span>
          </motion.article>
        ))}
      </div>
      <div className="dot-nav">
        {items.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`dot ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
            aria-label={`Ir para depoimento ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
