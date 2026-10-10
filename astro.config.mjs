// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Cambia esto por tu dominio final (ej. https://felixgarcia.dev)
  site: 'https://example.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});
