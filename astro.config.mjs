import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from "@tailwindcss/vite";
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
	integrations: [sitemap(), partytown()],
	output: 'server',
	adapter: vercel(),
	vite: {
		plugins: [tailwindcss()],
	},
});
