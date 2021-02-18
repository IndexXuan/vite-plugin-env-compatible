# vite-plugin-env-compatible

> inject to process.env like vue-cli or create-react-app

## Motivation
- `vite` expose `VITE_XXX` to `import.meta.env.VITE_XXX`, but not loaded to process.env like vue-cli or create-react-app
- this plugin support setting prefix like `VUE_APP_` or `REACT_APP_` and loaded to process.env
- just for compatibility

## Usage
```sh
yarn add @nibfe/vite-plugin-env-compatible
```

```ts
// vite.config.ts
import envCompatible from 'vite-plugin-env-compatible'

// @see https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...other plugins
    envCompatible()
  ],
})
```

## Underlying
- dotenv & dotenv-expand
- [vite](https://github.com/vitejs/vite/blob/27785f7fcc5b45987b5f0bf308137ddbdd9f79ea/packages/vite/src/node/config.ts#L791)
