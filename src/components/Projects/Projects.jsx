// src/components/Projects/Projects.jsx
// Seção de projetos — projetos reais de Leonardo Gomes
import styles from './Projects.module.css';

/**
 * Dados dos projetos reais
 * Cada projeto: id, emoji, bgColor, bgColorDark, title, status, description, tags, repoUrl
 */
const PROJECTS = [
  {
    id: 1,
    emoji: '📓',
    bgColor: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    bgColorDark: 'linear-gradient(135deg, #3d2010 0%, #5c3018 100%)',
    title: 'Diário de Bordo',
    status: 'done',
    description:
      'Aplicação web progressiva (PWA) desenvolvida com HTML5, CSS3 e JavaScript puro para registro de notas e atividades diárias. Funciona 100% offline, sem servidor backend, armazenando dados localmente no dispositivo com total privacidade.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'LocalStorage'],
    repoUrl: 'https://github.com/leeoze/diario-de-bordo-PWAs.git',
  },
  {
    id: 2,
    emoji: '✅',
    bgColor: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    bgColorDark: 'linear-gradient(135deg, #0d2040 0%, #0d3050 100%)',
    title: 'Lista de Tarefas',
    status: 'done',
    description:
      'Aplicação React para criação e organização de atividades. Permite cadastrar tarefas com datas, horários e cores personalizadas, visualizar o tempo restante via cronômetro regressivo e identificar tarefas expiradas com destaque visual.',
    tags: ['React', 'Hooks', 'CSS3', 'LocalStorage'],
    repoUrl: 'https://github.com/leeoze/Lista-de-Tarefas.git',
  },
  {
    id: 3,
    emoji: '🔢',
    bgColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    bgColorDark: 'linear-gradient(135deg, #002820 0%, #003830 100%)',
    title: 'Contador de Tarefas',
    status: 'done',
    description:
      'Gerenciador de tarefas construído com Next.js 15, TypeScript e testes automatizados com Pipeline CI/CD. Permite listar, adicionar, marcar como concluída ou pendente e remover tarefas com confirmação. Exibe contador em tempo real de total, pendentes e concluídas.',
    tags: ['Next.js 15', 'TypeScript', 'Jest', 'CI/CD', 'React'],
    repoUrl: 'https://github.com/leeoze/task-app.git',
  },
];

// Sub-componente: Card de Projeto
function ProjectCard({ project, delay }) {
  const { emoji, bgColor, title, status, description, tags, repoUrl } = project;

  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Thumbnail com overlay de link */}
      <div
        className={styles.thumbnail}
        style={{ background: bgColor }}
      >
        <span>{emoji}</span>

        <div className={styles.thumbnailOverlay}>
          <a href={repoUrl} className={`${styles.overlayBtn} ${styles.secondary}`} target="_blank" rel="noreferrer">
            ⌨️ Ver Código
          </a>
        </div>
      </div>

      {/* Corpo do card */}
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <span className={`${styles.cardStatus} ${status === 'done' ? styles.statusDone : styles.statusWip}`}>
            {status === 'done' ? '✓ Concluído' : '⟳ Em andamento'}
          </span>
        </div>

        <p className={styles.cardDesc}>{description}</p>

        {/* Tags de tecnologias */}
        <div className={styles.tags}>
          {tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer com link GitHub */}
      <div className={styles.cardFooter}>
        <div className={styles.cardLinks}>
          <a href={repoUrl} className={styles.cardLink} target="_blank" rel="noreferrer">
            ⌨️ GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

// Componente principal
export default function Projects() {
  return (
    <section id="projetos" className={`${styles.projects} section`}>
      <div className="container">
        {/* Cabeçalho da seção */}
        <div className={styles.header}>
          <span className="section-tag">Portfólio</span>
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Projetos desenvolvidos ao longo da minha jornada de aprendizado,
            aplicando tecnologias e boas práticas na prática.
          </p>
        </div>

        {/* Grid de projetos */}
        <div className={styles.grid}>
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
