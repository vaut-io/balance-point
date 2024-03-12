import { defineConfig } from 'vite';
// import { enhancedImages } from '@sveltejs/enhanced-img';
import { imagetools } from 'vite-imagetools';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [
		// enhancedImages(),
		sveltekit(),
		imagetools(),
	]
});
