import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kailashrao.github.io',
  base: '/Learning-JavaScript/AstroJS/first-astro-site',
  integrations: [tailwind()]
});