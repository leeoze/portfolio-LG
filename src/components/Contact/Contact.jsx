// src/components/Contact/Contact.jsx
import styles from './Contact.module.css';

// Ícones SVG inline — sem dependência de lib externa
const Icons = {
  whatsapp: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.073 23.25a.75.75 0 00.916.99l5.515-1.758A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.24-1.375l-.375-.217-3.875 1.234 1.258-3.77-.234-.386A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
};

const CONTACT_LINKS = [
  {
    id: 'whatsapp',
    icon: Icons.whatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/5511982022521',
    primary: true,
  },
  {
    id: 'linkedin',
    icon: Icons.linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leojosegomes',
    primary: false,
  },
  {
    id: 'github',
    icon: Icons.github,
    label: 'GitHub',
    href: 'https://github.com/leeoze',
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contato" className={`${styles.contact} section`}>
      <div className="container">

        {/* Cabeçalho */}
        <div className={styles.header}>
          <span className="section-tag">Contato</span>
          <h2 className="section-title">Vamos Conversar?</h2>

          {/* 👇 CORREÇÃO PRINCIPAL */}
          <p className={styles.sectionSubtitle}>
            Aberto a oportunidades, freelas e bate-papos sobre tecnologia.
            Escolha o canal de sua preferência.
          </p>
        </div>

        {/* Botões */}
        <div className={styles.linksList}>
          {CONTACT_LINKS.map(link => (
            <a
              key={link.id}
              href={link.href}
              className={`${styles.contactBtn} ${
                link.primary ? styles.contactBtnPrimary : styles.contactBtnOutline
              }`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Contato via ${link.label}`}
            >
              <span className={styles.contactBtnIcon}>{link.icon}</span>
              <span className={styles.contactBtnLabel}>{link.label}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}