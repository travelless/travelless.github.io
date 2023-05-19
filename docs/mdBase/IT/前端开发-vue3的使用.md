---
intro: Vue3的入门教程，在不求甚解的前提下快速学会基于Vue3框架的开发。
---

## 前言

本篇主要围绕Vue3的使用展开，有关yarn和vite等开发环境的问题不再一一赘述。

## 项目结构

### 初始结构

```
├─.vscode
├─node_modules
├─public
├─src											------工作目录
|  ├─assets											------存放图片等静态资源
|  ├─components										------存放vue组件
|  ├─App.vue										------vue项目根组件
|  ├─main.ts										
|  ├─style.css										
|  ├─vite-env.d.ts
├─.gitignore
├─index.html
├─package.json
├─README.md
├─tsconfig.json
├─tsconfig.node.json
├─vite.confige.ts
```

本篇的主讲内容是上述结构中做了注解的部分，若对其余目录结构感兴趣，这里有一些优秀的博客

[花五分钟重新认知 Vue 项目 src 目录](https://juejin.cn/post/6931234988281036807)

[菜鸟教程](https://www.runoob.com/vue3/vue3-directory-structure.html)

## 组合式开发

### setup

`setup()` 钩子是在组件中使用组合式 API 的入口，即只有在 `setup()` 函数内部，我们才可以使用组合式API进行开发。

当你使用混合式开发时(同时使用组合式开发和选项式开发)，你可能会用到 `setup()` 函数，在本篇中反而会很少看到该函数，这是因为Vue3为我们准备了一个很好用的 `setup` 语法糖，即在 `script` 标签中写入 `setup` ，随后我们在 `script` 标签中的代码都将被视为组合式。

