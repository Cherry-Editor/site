import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'cherry-editor.github.io',
  base: "site",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server"
});