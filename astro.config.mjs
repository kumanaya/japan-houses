import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://japan-houses.local',
  server: { port: 4321 },
  markdown: { shikiConfig: { theme: 'nord' } },
  vite: {
    build: { rollupOptions: { output: { manualChunks: undefined } } }
  }
});
