"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Especialidades", href: "/especialidades" },
  { label: "Consultas", href: "/consultas" },
  { label: "Consultório", href: "/consultorio" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="shell header-inner">
          <Link href="/" className="logo-wrap" aria-label="Página inicial">
            <div className="logo-main">Dra. Thayline</div>
            <span className="logo-line" />
            <div className="logo-sub">Silva Menezes | Psicóloga</div>
          </Link>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/contato" className="btn btn-outline">
              Agendar Consulta
            </Link>
            <button
              className="menu-btn"
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              className="drawer-backdrop"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.aside
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
            >
              <div className="drawer-head">
                <div className="logo-main">Dra. Thayline</div>
                <button
                  className="drawer-close"
                  onClick={() => setOpen(false)}
                  type="button"
                  aria-label="Fechar"
                >
                  ×
                </button>
              </div>
              <nav className="drawer-nav" aria-label="Menu mobile">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.35 }}
                  >
                    <Link href={link.href} onClick={() => setOpen(false)}>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link
                href="/contato"
                className="btn btn-primary"
                onClick={() => setOpen(false)}
              >
                Agendar Consulta
              </Link>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
