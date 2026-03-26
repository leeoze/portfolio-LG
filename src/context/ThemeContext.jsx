// src/context/ThemeContext.jsx
// Contexto global para gerenciar o tema claro/escuro da aplicação
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

/**
 * ThemeProvider - Provedor do contexto de tema
 * Persiste a preferência do usuário no localStorage
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Recupera o tema salvo ou usa a preferência do sistema
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Aplica o atributo data-theme ao elemento raiz
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Alterna entre claro e escuro
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme - Hook customizado para consumir o contexto de tema
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  return context;
}
