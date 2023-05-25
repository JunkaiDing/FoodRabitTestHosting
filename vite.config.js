// import { sveltekit } from '@sveltejs/kit/vite';
// import type { UserConfig } from 'vite';
// import WindiCSS from 'vite-plugin-windicss';
//
// const config: UserConfig = {
// 	plugins: [sveltekit(), WindiCSS()]
// };
//
// export default config;
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, mergeConfig } from 'vite';
import windicss from 'vite-plugin-windicss';

/** The common config, used by both SvelteKit and Storybook. */
export const commonConfig = defineConfig({
	plugins: [windicss()],
	css: {
		preprocessorOptions: {
			scss: { additionalData: '@use "src/variables.scss" as *;' }
		}
	},
	server: {
		fs: {
			allow: ['..']
		}
	},
	define: {
		global: {}
	}
});

/** SvelteKit specific config. */
export const sveltekitConfig = mergeConfig(commonConfig, { plugins: [sveltekit()] });

// The config that Vite uses is the SvelteKit one
export default sveltekitConfig;
