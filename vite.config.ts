import react from '@vitejs/plugin-react';
import path from "path";
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@/*": path.resolve(__dirname, "./src/*"),
      "@tests": path.resolve(__dirname, "./tests"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@components/*": path.resolve(__dirname, "./src/components/*"),
      "@classes": path.resolve(__dirname, "./src/classes"),
      "@classes/*": path.resolve(__dirname, "./src/classes/*"),
    },
  },
  plugins: [
    react(),
    nodePolyfills()
  ],
})
