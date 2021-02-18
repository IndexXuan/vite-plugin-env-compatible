# @nibfe/vite-plugin-env-compatible

> 为 Vite 项目增加类似 Vue CLI 的环境变量注入模式

## 用法
- 执行 `yarn add @nibfe/vite-plugin-env-compatible`

## 技术选型
- dotenv & dotenv-expand

## 说明
- `vite` 官方的环境变量相关功能其实已经基于 `dotenv` & `dotenv-expand` 做了，但是默认仅将 `VITE_` 开头的环境变量注入 client 代码，且采用最新的 es module 的 `import.meta.env` 来挂载
- 本插件支持设置要注入的环境变量前缀(默认 `VUE_APP_` 来兼容 vue-cli，用户可以设置为任意的，例如 `REACT_APP_` 等)，且注入到 `process.env` 上
