/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Make Vitest globals available (e.g., `describe`, `it`)
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    exclude: [...configDefaults.exclude],
    coverage: {
      exclude: ['**/*.config.{js,ts}'],
    },
  },
  server: {
    port: 3000,
  },
});
