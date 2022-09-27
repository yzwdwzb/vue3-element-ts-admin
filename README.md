### target
1. 学习Vue3新特性
2. 熟悉Composition API
3. 熟悉TS

### start

```shell
npm install
//仅启动前台
npm run dev

//启动前台和 本地node服务器
npm install -g concurrently
npm run serve
```

### progress
1. layout布局
2. 路由
3. pinia 数据持久化

### plugins
1. vue-router
2. pinia
3. pinia-plugin-persist
4. element-plus

### git commit
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