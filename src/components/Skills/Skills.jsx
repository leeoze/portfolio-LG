// src/components/Skills/Skills.jsx
// Seção de habilidades — grid de tecnologias
import styles from './Skills.module.css';

// Tecnologias exibidas no grid (somente ícone e nome)
const TECH_LIST = [
  { icon: '🌐', name: 'HTML5' },
  { icon: '🎨', name: 'CSS3' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '⚛️', name: 'React' },
  { icon: '🔺', name: 'Next.js' },
  { icon: '🔷', name: 'TypeScript' },
  { icon: '🗂️', name: 'Git' },
  { icon: '🐙', name: 'GitHub' },
  { icon: '📦', name: 'Vite' },
  { icon: '🔗', name: 'REST API' },
  { icon: '🟡', name: 'Node.js' },
  { icon: '🧪', name: 'Jest' },
];

export default function Skills() {
  return (
    <section id="habilidades" className={`${styles.skills} section`}>
      <div className="container">

        {/* Cabeçalho centralizado */}
        <div className={styles.header}>
          <span className="section-tag">Competências</span>
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
            Tecnologias e ferramentas que utilizo no desenvolvimento dos meus projetos.
          </p>
        </div>

        {/* Grid de tecnologias */}
        <div className={styles.techGrid}>
          {TECH_LIST.map((tech, i) => (
            <div
              key={tech.name}
              className={styles.techCard}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className={styles.techIcon}>{tech.icon}</span>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
