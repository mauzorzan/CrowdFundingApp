import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CrowdFundingApp/', // Ensure this matches your GitHub repository name
  build: {
    outDir: 'build',
  },
  define: {
    'process.env': process.env,
  },
});
