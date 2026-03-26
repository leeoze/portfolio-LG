// src/main.jsx
// Ponto de entrada da aplicação React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import App from './App.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ThemeProvider fornece contexto de tema para toda a árvore de componentes */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
