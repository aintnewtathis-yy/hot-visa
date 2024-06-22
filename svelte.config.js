import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: preprocess({
		scss: {
			syntax: 'scss',
			prependData: `@import './src/app.scss';`
		}
	}),
	kit: {
		adapter: adapter({ out: 'build' }),
		alias: {
			$db: './src/db',
		}
	}
};

export default config;