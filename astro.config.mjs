// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";



// https://astro.build/config
export default defineConfig({
	site: 'https://luisdavid01.me',
	i18n: {
		defaultLocale: 'en',
		locales: ['es', 'en'],
		routing: {
			prefixDefaultLocale: true,
		}
	},

	vite: {
		plugins: [tailwindcss()],
	},
})
