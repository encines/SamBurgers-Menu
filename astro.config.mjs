// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tiosamburgers.com",
  output: "server",

  adapter: netlify(),
  integrations: [mdx(), sitemap(), react(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
  },
});
