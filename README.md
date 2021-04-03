# vite-plugin-env-compatible

> inject to process.env like vue-cli or create-react-app

<p align="center">
  <a href="https://github.com/IndexXuan/vite-plugin-env-compatible/actions/workflows/npm-publish.yml">
   <img alt="NPM Publish" src="https://github.com/IndexXuan/vite-plugin-env-compatible/actions/workflows/npm-publish.yml/badge.svg" style="max-width:100%;">
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-env-compatible" rel="nofollow">
    <img alt="downloads" src="https://img.shields.io/npm/dt/vite-plugin-env-compatible.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-env-compatible" rel="nofollow">
    <img alt="npm version" src="https://img.shields.io/npm/v/vite-plugin-env-compatible.svg?style=flat" style="max-width:100%;">
  </a>
  <a href="https://github.com/IndexXuan/vite-plugin-env-compatible/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" style="max-width:100%;">
  </a>
</p>

## Motivation
- `vite` expose `VITE_XXX` to `import.meta.env.VITE_XXX`, but not loaded to process.env like vue-cli or create-react-app
- this plugin support setting prefix like `VUE_APP_` or `REACT_APP_` and loaded to process.env
- just for compatibility

## Usage
```sh
yarn add vite-plugin-env-compatible
```

```ts
// vite.config.ts
import envCompatible from 'vite-plugin-env-compatible'

// @see https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...other plugins
    envCompatible(/* options */)
  ],
})
```

## Options
- [@see](https://github.com/IndexXuan/vite-plugin-env-compatible/blob/main/src/lib/options.ts)

## Underlying
- dotenv & dotenv-expand
- [vite](https://github.com/vitejs/vite/blob/27785f7fcc5b45987b5f0bf308137ddbdd9f79ea/packages/vite/src/node/config.ts#L791)


## Further
- [vue-cli-plugin-vite](https://github.com/IndexXuan/vue-cli-plugin-vite)
