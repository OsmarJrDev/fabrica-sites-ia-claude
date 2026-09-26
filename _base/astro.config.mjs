// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // [PREENCHER: trocar pelo dominio real do cliente antes do deploy de producao]
  site: 'https://exemplo-demo.com.br',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  // Imagens responsivas nativas do Astro: gera srcset/sizes automaticamente
  // e aplica o CSS de redimensionamento, para toda <Image />/<Picture /> que
  // usar a prop layout. Ligado por padrao em todo template (25/09/2026).
  image: {
    responsiveStyles: true,
    layout: 'constrained'
  },

  // Fonts API do Astro: os arquivos de fonte sao baixados e auto-hospedados
  // no build. Nunca usar <link> para fonts.googleapis.com.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--font-titulo',
      weights: [500, 600, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['serif']
    },
    {
      provider: fontProviders.google(),
      name: 'Inter Tight',
      cssVariable: '--font-corpo',
      weights: [400, 500, 700],
      fallbacks: ['sans-serif']
    }
  ]
});