// src/components/About/About.jsx
// Seção hero — apresentação principal sem avatar
import { useCallback } from 'react';
import styles from './About.module.css';

export default function About() {
  // Scroll suave centralizado — sem querySelector inline no JSX
  const scrollTo = useCallback((id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="sobre" className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.hero}>
          
          <h1 className={styles.name}>
            Leonardo <span>Gomes</span>
          </h1>

          <p className={styles.role}>
            <span className={styles.roleDot} aria-hidden="true" />
            Desenvolvedor Front-End
          </p>

          <p className={styles.bio}>
            Em constante evolução.
          </p>

          <div className={styles.actions}>
            <a href="#projetos" className="btn btn-primary" onClick={scrollTo('projetos')}>
              Ver Projetos
            </a>
            <a href="#contato" className="btn btn-outline" onClick={scrollTo('contato')}>
              Entrar em Contato
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
