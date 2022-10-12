import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/edge";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap()],
  adapter: vercel(),
  output: "server"
});