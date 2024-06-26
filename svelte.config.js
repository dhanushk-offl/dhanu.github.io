import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		postcss: true,
		preserve: ['partytown']
	}),

	kit: {
		adapter: adapter()
	}
}

export default config;
