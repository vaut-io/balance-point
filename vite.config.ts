import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		imagetools(),
		sveltekit(),
		tailwindcss(),
	]
});
