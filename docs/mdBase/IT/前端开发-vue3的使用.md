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

## 开发基础

### 模板语法

#### [插值语法](https://cn.vuejs.org/guide/essentials/template-syntax.html#text-interpolation)

#### [Attribute 绑定及简写](https://cn.vuejs.org/guide/essentials/template-syntax.html#attribute-bindings)

### 组合式开发 - - setup

`setup()` 钩子是在组件中使用组合式 API 的入口，即只有在 `setup()` 函数内部，我们才可以使用组合式API进行开发。

当你使用混合式开发时(同时使用组合式开发和选项式开发)，你可能会用到 `setup()` 函数，在本篇中反而会很少看到该函数，这是因为Vue3为我们准备了一个很好用的 `setup` 语法糖，即在 `script` 标签中写入 `setup` ，随后我们在 `script` 标签中的代码都将被视为组合式。

### 响应式基础

#### 响应式API`ref` 和 `reactive`

由`ref` 和 `reactive`注册的变量被称为响应式变量。vue会主动监测响应式状态的变量，当他们发生变化时，与其相关的一切都将跟着变化。

你可以在 [vue文档](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#reactivity-fundamentals) 中找到关于`ref`和`reactive`的一切。

#### `ref` 和 `reactive`的区别

`reactive`只能声明对象，不能声明具体的值。

`ref`可以响应式声明任何变量，包括值、数组、对象等。

### 条件渲染

#### `v-if`和`v-show`

作用：条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。

衍生：`v-else` 、 `v-else-if`

#### [区别](https://cn.vuejs.org/guide/essentials/conditional.html#v-if-vs-v-show)

### 事件处理

#### 事件监听及其缩写

`v-on` 和 `@` 都可以用来监听dom事件

[官方文档](https://cn.vuejs.org/guide/essentials/event-handling.html#event-handling)

### [`Props`](https://cn.vuejs.org/guide/components/props.html)

## 基于组件库的开发实践

### `elementPlus`组件库

[`elementPlus`](https://element-plus.org/zh-CN/)是一个非常强大的组件库，他基于Vue3为我们提供了很多实用的模板化组件，大大加快了开发速度。

[安装指南](https://element-plus.org/zh-CN/guide/installation.html#%E5%AE%89%E8%A3%85)

[引入指南](https://element-plus.org/zh-CN/guide/quickstart.html#%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5)

## 