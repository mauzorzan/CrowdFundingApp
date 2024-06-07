import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development or production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: '/CrowdFundingApp/', // Ensure this matches your GitHub repository name
    build: {
      outDir: 'build', // Specify the output directory for the build
    },
    define: {
      'process.env': env, // Load environment variables
    },
  };
});
