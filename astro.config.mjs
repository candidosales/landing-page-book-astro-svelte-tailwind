import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap(), partytown()],
  adapter: vercel(),
  output: "server"
});