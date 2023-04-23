
### vitepress博客及创新实践相关任务

1. 完善博客的页面布局
   1. 测边框修改
   2. 呼出窗口美化
   3. 前端显示文档时应添加字段：创建日期、修改日期等
   ！！！！3. 根据.story域名修改博客外观
2. 完善博客的路径逻辑，写入新的文档或创建新的分类的操作太麻烦。
   ！！！！1. **遍历mdBase文件夹获得item增添至navigate组件和config.js，而不是每次增加类型就手动添加。
   2. 增加script脚本，例如通过yarn setup增加新类型，yarn post增加新文档。
   3. 增加git hook，根据新增内容（eg：新增分类 xx / xx 分类中新增文档 xx ）自动编写git commit内容。
3. 思考如何将从语雀后端得到的doc结构直接合并到vitepress中。
   1. 初步思路：从后端获取doc结构后根据 yarn setup 或yarn post 等接口新增至本地，然后自动git push，自动部署。