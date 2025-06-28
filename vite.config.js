import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/Myportfolio/',   // Important for GitHub Pages path!
  plugins: [react()],
});
