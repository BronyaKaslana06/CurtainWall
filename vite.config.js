import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import CSV from "vite-plugin-csv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    CSV(),
  ],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
