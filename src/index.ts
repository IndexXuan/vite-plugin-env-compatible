import type { Plugin } from 'vite'
import type { UserOptions } from './lib/options'
import { loadEnv } from './lib/env'
import { name } from '../package.json'

export default function envCompatible(userOptions: UserOptions = {}): Plugin {
  const options: UserOptions = {
    mountedPath: 'process.env',
    ...userOptions,
  }
  return {
    name: 'zone:env-compatible',
    enforce: 'pre',
    config(config) {
      const mode = config.mode
      if (!mode) {
        console.log(
          `[$${name}]: mode is undefined, cannot auto load .env.*, please check your bin/vite_dev script for --mode`,
        )
        process.exit(1)
      }
      const root = config.root || process.cwd()
      const env = loadEnv({
        mode,
        root,
        prefix: options.prefix || 'VUE_APP_',
        ignoreProcessEnv: options.ignoreProcessEnv || false,
      })
      const myDefine: Record<string, string> = {}
      Object.keys(env).map(key => {
        const value = env[key]

        /**
         * const a = "'development'"
         * const b = '"development"'
         * const c = 'development'
         * const ret1 = JSON.stringify(a)
         * const ret2 = JSON.stringify(b)
         * const ret3 = JSON.stringify(c)
         * console.log(JSON.stringify(ret1).startsWith(`"`)) // true
         * console.log(JSON.stringify(ret2).startsWith(`"`)) // true
         * console.log(JSON.stringify(ret3).startsWith(`"`)) // true
         */
        myDefine[`${options.mountedPath}.${key}`] = JSON.stringify(value)
      })
      config.define = {
        ...(config.define || {}),
        ...myDefine,
      }
    },
  }
}

export type { UserOptions as EnvCompatibleOptions }
