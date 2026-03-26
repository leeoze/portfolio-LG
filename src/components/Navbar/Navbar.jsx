// src/components/Navbar/Navbar.jsx
// Componente de navegação com menu hambúrguer e toggle de tema
import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

// Links de navegação reutilizáveis
const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Detecta scroll para adicionar sombra ao navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detecta a seção ativa via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Fecha o menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fecha o menu e rola até a seção
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')
        ) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  // Ícone de tema
  const ThemeIcon = theme === 'dark' ? '☀️' : '🌙';

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo com iniciais */}
          <a
            href="#sobre"
            className={styles.logo}
            onClick={e => handleNavClick(e, '#sobre')}
            aria-label="Leonardo Gomes — início"
          >
            <span className={styles.logoMark}>LG</span>
            <span className={styles.logoName}>Leonardo Gomes</span>
          </a>

          {/* Links desktop */}
          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.slice(1) ? styles.active : ''}
                  onClick={e => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Controles */}
          <div className={styles.controls}>
            {/* Botão de tema */}
            <button
              className={styles.themeBtn}
              onClick={toggleTheme}
              aria-label={`Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
              title={`Tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
            >
              {ThemeIcon}
            </button>

            {/* Hambúrguer */}
            {/* FIX: aria-label agora é dinâmico — reflete o estado real do menu */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        role="dialog"
        aria-label="Menu de navegação"
        aria-hidden={!menuOpen}
      >
        <div className="container">
          <ul>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.slice(1) ? styles.active : ''}
                  onClick={e => handleNavClick(e, href)}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
