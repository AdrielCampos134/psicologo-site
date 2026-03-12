"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const whatsappUrl =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Thayline.";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      href={whatsappUrl}
      className="whatsapp-fab"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 28, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      aria-label="Conversar no WhatsApp"
    >
      <span className="tooltip">Olá! Vamos conversar? 💬</span>
      <span className="fab-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M12 3.6a8.4 8.4 0 0 0-7.26 12.64L4.16 20l3.92-.54A8.4 8.4 0 1 0 12 3.6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.32 8.7c.14-.35.31-.35.45-.35h.38c.12 0 .26.02.32.19l.39.95c.07.16.05.25-.05.37l-.3.37c-.1.12-.19.23-.08.42.12.19.51.83 1.22 1.35.55.39 1.02.51 1.22.58.19.07.3.05.42-.07l.51-.55c.12-.14.23-.16.39-.09l.86.39c.16.07.28.12.32.21.05.09.05.53-.09.83-.14.3-.78.72-1.08.76-.28.05-.63.07-1.02-.07-.23-.07-.51-.19-.88-.35-1.54-.67-2.53-2.24-2.62-2.38-.09-.14-.63-.83-.63-1.59 0-.76.39-1.13.53-1.29Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </motion.a>
  );
}
