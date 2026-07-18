import styles from "./Skills.module.css";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiGithub,
  SiVite,
  SiNodedotjs,
  SiJest,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiFastapi,
  SiRedis,
} from "react-icons/si";

import { TbApi, TbDatabase } from "react-icons/tb";

const TECH_LIST = [
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss, name: "CSS3" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiVite, name: "Vite" },
  { icon: TbApi, name: "REST API" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiJest, name: "Jest" },
  { icon: SiPython, name: "Python" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiKubernetes, name: "Kubernetes" },
  { icon: SiFastapi, name: "FastAPI" },
  { icon: TbDatabase, name: "SQLAlchemy" },
  { icon: SiRedis, name: "Redis" },
];

export default function Skills() {
  return (
    <section id="habilidades" className={`${styles.skills} section`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Competências</span>

          <h2 className="section-title">Habilidades</h2>

          <p
            className="section-subtitle"
            style={{ margin: "0 auto 3rem" }}
          >
            Tecnologias e ferramentas que utilizo no desenvolvimento dos meus
            projetos.
          </p>
        </div>

        <div className={styles.techGrid}>
          {TECH_LIST.map((tech, i) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className={styles.techCard}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Icon className={styles.techIcon} />
                <span className={styles.techName}>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}