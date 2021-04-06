/**
 * Env Plugin options.
 */

export interface EnvOptions {
  /**
   * prefix for client-side injection
   * @default 'VUE_APP'
   */
  prefix: string
  /**
   * client-side env path
   * @default 'process.env'
   */
  mountedPath: 'process.env' | 'import.meta.env'
  /**
   * write to process.env
   * vite default not，whilte vue-cli yes
   * @default false
   */
  ignoreProcessEnv: boolean
}

export type UserOptions = Partial<EnvOptions>
