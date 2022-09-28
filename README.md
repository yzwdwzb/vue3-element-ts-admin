### Target
1. 学习Vue3新特性
2. 熟悉Composition API
3. 熟悉TS

### Getting started
```shell
npm install
//仅启动前台
npm run dev

//启动前台和 本地服务器
npm install -g concurrently json-server
npm run serve
```

### Progress
1. layout布局
2. 路由
3. pinia 数据持久化

### Used
1. [vue3](https://cn.vuejs.org/)
2. [vue-router](https://router.vuejs.org/zh/)
3. [typescript](https://www.typescriptlang.org/zh/docs/)
4. [pinia](https://pinia.web3doc.top/core-concepts/getters.html)
5. [pinia-plugin-persist](https://seb-l.github.io/pinia-plugin-persist/)
6. [element-plus](https://element-plus.gitee.io/zh-CN/#/zh-CN)
7. [json-server](https://github.com/typicode/json-server)
8. [axios](https://www.axios-http.cn/)

### Git commit
- feat：新功能（feature）。
- fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。
- fix：产生diff并自动修复此问题。适合于一次提交直接修复问题
- to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix
- docs：文档（documentation）。
- style：风格（不影响代码运行的变动）。
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）。
- perf：优化相关，比如提升性能、体验。
- test：增加测试。
- chore：构建过程或辅助工具的变动。
- revert：回滚到上一个版本。
- merge：代码合并。
- sync：同步主线或分支的Bug。

### Steps

#### pinia-plugin-persist

**Install**
```shell
npm install pinia-plugin-persist
```
**Config**
`main.ts`
```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()
pinia.use(piniaPersist)

createApp({})
  .use(pinia)
  .mount('#app')
```
`tsconfig.json`
```json
{
  "compilerOptions": {
    "types": [
      "pinia-plugin-persist"
    ]
  },
}
```
**Usage**
`stores/store.ts`
```typescript
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state() {
    return {
      userInfo: {
        nickName: "",
        avatar:''
      },
    };
  },
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ["userInfo"],    //需要持久化的key
        storage: localStorage,
      },
    ],
  },
});

```