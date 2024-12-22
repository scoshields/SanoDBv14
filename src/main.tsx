import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Error boundary for development
if (import.meta.env.DEV) {
  window.onerror = (msg, url, line, col, error) => {
    console.error('Global error:', { msg, url, line, col, error });
  };
}

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);