import { defineConfig } from 'tsup'

export default defineConfig({
  splitting: false,
  sourcemap: false,
  minify: true,
  clean: true,
  dts: true,
  skipNodeModulesBundle: true,
  format: ["esm","cjs","iife"],
  esbuildOptions: (options) => {
    options.footer = {
      // This will ensure we can continue writing this plugin
      // as a modern ECMA module, while still publishing this as a CommonJS
      // library with a default export, as that's how ESLint expects plugins to look.
      // @see https://github.com/evanw/esbuild/issues/1182#issuecomment-1011414271
      js: 'module.exports = module.exports.default;',
    }
  },
  entry: ['src/index.ts'],
})