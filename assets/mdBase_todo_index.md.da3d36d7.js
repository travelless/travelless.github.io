import{_ as e,o as t,c as i,O as o}from"./chunks/framework.7e954154.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"mdBase/todo/index.md"}'),s={name:"mdBase/todo/index.md"},a=o('<p>#todoList</p><h3 id="vitepress博客及创新实践相关任务" tabindex="-1">vitepress博客及创新实践相关任务 <a class="header-anchor" href="#vitepress博客及创新实践相关任务" aria-label="Permalink to &quot;vitepress博客及创新实践相关任务&quot;">​</a></h3><ol><li>完善博客的页面布局 <ol><li>测边框修改</li><li>呼出窗口美化</li></ol></li><li>完善博客的路径逻辑，写入新的文档或创建新的分类的操作太麻烦。 <ol><li>增加script脚本，例如通过yarn setup增加新类型，yarn post增加新文档。</li><li>遍历mdBase文件夹获得item增添至navigate组件和config.js，而不是每次增加类型就手动添加。</li><li>增加git hook，根据新增内容（eg：新增分类 xx / xx 分类中新增文档 xx ）</li></ol></li><li>思考如何将从语雀后端得到的doc结构直接合并到vitepress中。 <ol><li>初步思路：从后端获取doc结构后根据 yarn setup 或yarn post 等接口新增至本地，然后自动git push，自动部署。</li></ol></li></ol>',3),l=[a];function r(n,_,d,c,p,m){return t(),i("div",null,l)}const u=e(s,[["render",r]]);export{h as __pageData,u as default};