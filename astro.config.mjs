// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
const site = process.env.SITE_URL || 'https://example.github.io';
const base = process.env.BASE_PATH || '/';
export default defineConfig({
  site, base,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
