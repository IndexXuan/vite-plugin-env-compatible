/**
 * Mock Plugin options.
 */

export interface EnvOptions {
  /**
   * 要注入客户端代码的前缀
   * @default 'VUE_APP'
   */
  prefix: string
  /**
   * 注入到客户端代码后的访问路径
   * @default 'process.env'
   */
  mountedPath: 'process.env' | 'import.meta.env'
  /**
   * 是否不写入 process.env
   * vite 默认不写入，但是 vue-cli 写入，这里可以设置
   * @default false
   */
  ignoreProcessEnv: boolean
}

export type UserOptions = Partial<EnvOptions>
