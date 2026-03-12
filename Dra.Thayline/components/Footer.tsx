type SocialPlatform = "instagram" | "whatsapp" | "linkedin";

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (platform === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 4.5a7.5 7.5 0 0 0-6.48 11.3L5 20l4.3-.5A7.5 7.5 0 1 0 12 4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 9.7c.18-.45.39-.45.57-.45h.48c.15 0 .33.03.42.24l.51 1.23c.09.21.06.33-.06.48l-.39.48c-.12.15-.24.3-.1.54.15.24.66 1.08 1.59 1.75.72.51 1.32.66 1.59.75.24.09.39.06.54-.09l.66-.72c.15-.18.3-.21.51-.12l1.11.51c.21.09.36.15.42.27.06.12.06.69-.12 1.08-.18.39-1.02.93-1.41.99-.36.06-.81.09-1.32-.09-.3-.09-.66-.24-1.14-.45-2.01-.87-3.3-2.91-3.42-3.09-.12-.18-.81-1.08-.81-2.07 0-.99.51-1.47.69-1.68Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M6.5 8.5A2 2 0 1 0 6.5 4.5A2 2 0 0 0 6.5 8.5ZM4.8 9.8h3.4V20H4.8V9.8Zm5.2 0h3.2v1.4h.05c.44-.83 1.52-1.7 3.13-1.7 3.35 0 3.96 2.2 3.96 5.06V20h-3.4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.61 0-1.86 1.25-1.86 2.55V20H10V9.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialLink({ href, platform, label }: { href: string; platform: SocialPlatform; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="social-link">
      <span className="social-icon" aria-hidden="true">
        <SocialIcon platform={platform} />
      </span>
      <span>{label}</span>
    </a>
  );
}

export default function Footer() {
  return (
    // ✅ padding reduzido para o rodapé não ficar tão alto
    <footer className="site-footer" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="shell footer-grid">
        <div>
          <h3 className="footer-logo">Dra. Thayline Silva Menezes</h3>
          <p className="footer-tag">Cuidar de você começa aqui.</p>
          <p className="footer-crp">CRP/XX 99999</p>
        </div>

        <div>
          <div className="footer-info-grid">
            <div>
              <h4>Contato</h4>
              <div className="footer-contact-list">
                <p>WhatsApp: (00) 90000-0000</p>
                {/* ✅ e-mail na mesma linha — white-space evita quebra indesejada */}
                <p style={{ whiteSpace: "nowrap" }}>
                  E-mail:{" "}
                  <a href="mailto:contato@drathayline.com.br" className="contact-link">
                    contato@drathayline.com.br
                  </a>
                </p>
                <p>Segunda a Sexta: 8h às 20h</p>
              </div>
            </div>

            <div>
              <h4 className="social-title">Redes sociais</h4>
              <div className="footer-socials">
                <SocialLink href="https://instagram.com" platform="instagram" label="Instagram" />
                <SocialLink href="https://wa.me/5500000000000" platform="whatsapp" label="WhatsApp" />
                <SocialLink href="https://linkedin.com" platform="linkedin" label="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Dra. Thayline Silva Menezes — CRP/XX 99999
      </div>
    </footer>
  );
}