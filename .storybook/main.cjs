// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions"
//   ],
//   "framework": "@storybook/svelte",
//   "core": {
//     "builder": "@storybook/builder-vite"
//   },
//   "svelteOptions": {
//     "preprocess": import("../svelte.config.js").preprocess
//   },
//   "features": {
//     "storyStoreV7": true
//   }
// }
const { mergeConfig } = require('vite')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/svelte',
  core: { builder: '@storybook/builder-vite' },
  svelteOptions: import('../svelte.config.js'),
  async viteFinal(storybookConfig) {
    const { commonConfig } = await import('../vite.config.js')
    return mergeConfig(commonConfig, storybookConfig)
  },
}