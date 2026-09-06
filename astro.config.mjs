// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://atrispsiquiatria.com.br',
  build: {
    // CSS de cada pagina e pequeno (poucos KB) -- embutir no HTML em vez de
    // servir como <link rel="stylesheet"> externo remove uma viagem de rede
    // do caminho critico de renderizacao (achado do PageSpeed Insights mobile).
    inlineStylesheets: 'always',
  },
});
