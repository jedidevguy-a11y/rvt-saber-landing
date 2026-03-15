import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use base: '/' when serving from a custom domain (rvt-saber.app).
// Change to base: '/rvt-saber-landing/' if deploying to a GitHub Pages
// project URL (username.github.io/rvt-saber-landing) without a custom domain.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
