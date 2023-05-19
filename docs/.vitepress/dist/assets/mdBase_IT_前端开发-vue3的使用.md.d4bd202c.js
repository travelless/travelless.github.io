import{_ as s,o as a,c as t,O as e}from"./chunks/framework.1eb88449.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{"intro":"Vue3的入门教程，在不求甚解的前提下快速学会基于Vue3框架的开发。"},"headers":[],"relativePath":"mdBase/IT/前端开发-vue3的使用.md","lastUpdated":null}'),n={name:"mdBase/IT/前端开发-vue3的使用.md"},o=e(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>本篇主要围绕Vue3的使用展开，有关yarn和vite等开发环境的问题不再一一赘述。</p><h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h2><h3 id="初始结构" tabindex="-1">初始结构 <a class="header-anchor" href="#初始结构" aria-label="Permalink to &quot;初始结构&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├─.vscode</span></span>
<span class="line"><span style="color:#A6ACCD;">├─node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">├─public</span></span>
<span class="line"><span style="color:#A6ACCD;">├─src											------工作目录</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─assets											------存放图片等静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─components										------存放vue组件</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─App.vue										------vue项目根组件</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─main.ts										</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─style.css										</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─vite-env.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─.gitignore</span></span>
<span class="line"><span style="color:#A6ACCD;">├─index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">├─package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─tsconfig.node.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─vite.confige.ts</span></span></code></pre></div><p>本篇的主讲内容是上述结构中做了注解的部分，若对其余目录结构感兴趣，这里有一些优秀的博客</p><p><a href="https://juejin.cn/post/6931234988281036807" target="_blank" rel="noreferrer">花五分钟重新认知 Vue 项目 src 目录</a></p><p><a href="https://www.runoob.com/vue3/vue3-directory-structure.html" target="_blank" rel="noreferrer">菜鸟教程</a></p><h2 id="组合式开发" tabindex="-1">组合式开发 <a class="header-anchor" href="#组合式开发" aria-label="Permalink to &quot;组合式开发&quot;">​</a></h2><h3 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h3><p><code>setup()</code> 钩子是在组件中使用组合式 API 的入口，即只有在 <code>setup()</code> 函数内部，我们才可以使用组合式API进行开发。</p><p>当你使用混合式开发时(同时使用组合式开发和选项式开发)，你可能会用到 <code>setup()</code> 函数，在本篇中反而会很少看到该函数，这是因为Vue3为我们准备了一个很好用的 <code>setup</code> 语法糖，即在 <code>script</code> 标签中写入 <code>setup</code> ，随后我们在 <code>script</code> 标签中的代码都将被视为组合式。</p>`,12),p=[o];function l(c,r,i,d,u,A){return a(),t("div",null,p)}const _=s(n,[["render",l]]);export{C as __pageData,_ as default};
