// src/App.jsx
// Componente raiz que organiza as seções do portfólio
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

const FOOTER_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contato', label: 'Contato' },
];

function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 0',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-primary)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-display)',
        }}>
          © {new Date().getFullYear()}{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Leonardo Gomes</span>
        </p>

        <nav aria-label="Rodapé" style={{ display: 'flex', gap: '1.5rem' }}>
          {FOOTER_LINKS.map(({ href, label }) => (
            <a key={href} href={href} style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
