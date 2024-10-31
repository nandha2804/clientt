// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/clientt/', // Ensure this is correct for GitHub Pages
  build: {
    outDir: 'dist', // Ensure this is set to 'dist'
  }
});
