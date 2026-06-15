// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bosoul.example.com',
  output: 'static',
  fonts: [
    {
      name: 'Vollkorn',
      cssVariable: '--font-vollkorn',
      provider: fontProviders.google(),
      weights: [400, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['serif'],
    },
    {
      name: 'Open Sans',
      cssVariable: '--font-open-sans',
      provider: fontProviders.google(),
      weights: [400, 600, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['sans-serif'],
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'el'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', el: 'el-GR' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: { '@assets': '/src/assets' } },
  },
});
