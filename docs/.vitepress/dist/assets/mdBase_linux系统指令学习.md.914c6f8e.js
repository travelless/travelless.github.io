import{_ as a,o as s,c as n,V as e}from"./chunks/framework.069143a0.js";const g=JSON.parse('{"title":"Linux系统指令学习","description":"","frontmatter":{"title":"Linux系统指令学习","tags":["Linux"],"date":"2023-06-05","intro":"总结一些生活和学业当中使用的linux系统指令。"},"headers":[],"relativePath":"mdBase/linux系统指令学习.md","lastUpdated":1692126583000}'),t={name:"mdBase/linux系统指令学习.md"},l=e(`<h1 id="linux系统指令学习" tabindex="-1"><strong>linux系统指令学习</strong> <a class="header-anchor" href="#linux系统指令学习" aria-label="Permalink to &quot;**linux系统指令学习**&quot;">​</a></h1><h2 id="ls-用于显示指定工作目录下之内容" tabindex="-1"><strong>ls --用于显示指定工作目录下之内容</strong> <a class="header-anchor" href="#ls-用于显示指定工作目录下之内容" aria-label="Permalink to &quot;**ls  --用于显示指定工作目录下之内容**&quot;">​</a></h2><h3 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-label="Permalink to &quot;指令&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ls [-command] [name...]</span></span></code></pre></div><h3 id="command参数" tabindex="-1">command参数： <a class="header-anchor" href="#command参数" aria-label="Permalink to &quot;command参数：&quot;">​</a></h3><pre><code>   -a 显示所有文件及目录 (**.** 开头的隐藏文件也会列出)
   -d 只列出目录（不递归列出目录内的文件）。
   -l 以长格式显示文件和目录信息，包括权限、所有者、大小、创建时间等。
   -r 倒序显示文件和目录。
   -t 将按照修改时间排序，最新的文件在最前面。
   -A 同 -a ，但不列出 &quot;.&quot; (目前目录) 及 &quot;..&quot; (父目录)。
   -F 在列出的文件名称后加一符号；例如可执行档则加 &quot;*&quot;, 目录则加 &quot;/&quot;。
   -R 递归显示目录中的所有文件和子目录。
</code></pre><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># ls /    # 列出根目录下的所有目录</span></span>
<span class="line"><span style="color:#A6ACCD;">bin               dev   lib         media  net   root     srv  upload  www</span></span>
<span class="line"><span style="color:#A6ACCD;">boot              etc   lib64       misc   opt   sbin     sys  usr</span></span>
<span class="line"><span style="color:#A6ACCD;">home  lost+found  mnt    proc  selinux  tmp  var</span></span></code></pre></div><h3 id="特殊用法" tabindex="-1">特殊用法 <a class="header-anchor" href="#特殊用法" aria-label="Permalink to &quot;特殊用法&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ls &quot;my file.txt&quot;    # 列出文件名为&quot;my file.txt&quot;的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">ls *.txt         # 列出所有扩展名为.txt的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -ltr s*		# 列出目前工作目录下所有名称是 s 开头的文件，越新的排越后面</span></span></code></pre></div><hr><h2 id="cd-用于切换当前工作目录" tabindex="-1"><strong>cd --用于切换当前工作目录</strong> <a class="header-anchor" href="#cd-用于切换当前工作目录" aria-label="Permalink to &quot;**cd  --用于切换当前工作目录**&quot;">​</a></h2><h4 id="指令-1" tabindex="-1">指令 <a class="header-anchor" href="#指令-1" aria-label="Permalink to &quot;指令&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd [dirName]</span></span></code></pre></div><h4 id="实例-1" tabindex="-1">实例 <a class="header-anchor" href="#实例-1" aria-label="Permalink to &quot;实例&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd /usr/bin		# 跳到 /usr/bin/</span></span></code></pre></div><hr><h2 id="stat-以文字的格式来显示-inode-的内容-文件或目录信息" tabindex="-1"><strong>stat -- 以文字的格式来显示 inode 的内容(文件或目录信息)</strong> <a class="header-anchor" href="#stat-以文字的格式来显示-inode-的内容-文件或目录信息" aria-label="Permalink to &quot;**stat  -- 以文字的格式来显示 inode 的内容(文件或目录信息)**&quot;">​</a></h2><h4 id="指令-2" tabindex="-1">指令 <a class="header-anchor" href="#指令-2" aria-label="Permalink to &quot;指令&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">stat [文件或目录]</span></span></code></pre></div><h4 id="实例-2" tabindex="-1">实例 <a class="header-anchor" href="#实例-2" aria-label="Permalink to &quot;实例&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># stat testfile                # 输出&quot;testfile&quot;文件夹的具体信息</span></span>
<span class="line"><span style="color:#A6ACCD;">  File: \`testfile&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Size: 102             Blocks: 8          IO Block: 4096   regular file</span></span>
<span class="line"><span style="color:#A6ACCD;">Device: 807h/2055d      Inode: 1265161     Links: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)</span></span>
<span class="line"><span style="color:#A6ACCD;">Access: 2014-08-13 14:07:20.000000000 +0800</span></span>
<span class="line"><span style="color:#A6ACCD;">Modify: 2014-08-13 14:07:07.000000000 +0800</span></span>
<span class="line"><span style="color:#A6ACCD;">Change: 2014-08-13 14:07:07.000000000 +0800</span></span></code></pre></div><hr><h2 id="tail-用于打印文件尾部内容或持续监听文件内容" tabindex="-1"><strong>tail --用于打印文件尾部内容或持续监听文件内容</strong> <a class="header-anchor" href="#tail-用于打印文件尾部内容或持续监听文件内容" aria-label="Permalink to &quot;**tail --用于打印文件尾部内容或持续监听文件内容**&quot;">​</a></h2><h3 id="指令-3" tabindex="-1"><strong>指令</strong> <a class="header-anchor" href="#指令-3" aria-label="Permalink to &quot;**指令**&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tail [-command] [name]</span></span></code></pre></div><h3 id="command-参数" tabindex="-1"><strong>command 参数</strong> <a class="header-anchor" href="#command-参数" aria-label="Permalink to &quot;**command 参数**&quot;">​</a></h3><ul><li>-n { 数字 } 显示倒数n行</li><li>-n -{ 数字 } 显示从第n行到最后一行的内容</li><li>-f 持续监视并显示文件新增内容</li><li>-F 类似于 -f ,但是文件丢失后会等待该文件新建</li></ul><h3 id="name-文件名" tabindex="-1"><strong>name</strong> - 文件名 <a class="header-anchor" href="#name-文件名" aria-label="Permalink to &quot;**name**   - 文件名&quot;">​</a></h3><hr><h2 id="find-用于系统中的文件查找" tabindex="-1"><strong>find --用于系统中的文件查找</strong> <a class="header-anchor" href="#find-用于系统中的文件查找" aria-label="Permalink to &quot;**find --用于系统中的文件查找**&quot;">​</a></h2><h3 id="使用格式" tabindex="-1"><strong>使用格式</strong> <a class="header-anchor" href="#使用格式" aria-label="Permalink to &quot;**使用格式**&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">find [range] -[command] [target]</span></span></code></pre></div><pre><code>1. range 范围 指定从哪个目录开始查找
2. command 参数 
3. target 查找内容
</code></pre><h3 id="三种时间" tabindex="-1"><strong>三种时间</strong> <a class="header-anchor" href="#三种时间" aria-label="Permalink to &quot;**三种时间**&quot;">​</a></h3><pre><code>1. -a  Access time  访问时间
2. -m  Modify time  修改时间（内容）
3. -c  Change time  更改时间（状态）
</code></pre><h3 id="常用参数" tabindex="-1"><strong>常用参数</strong> <a class="header-anchor" href="#常用参数" aria-label="Permalink to &quot;**常用参数**&quot;">​</a></h3><pre><code>1. -name 按名称搜索
2. -iname 忽略名称大小写
3. -type 按类型查找（d：目录，f：文件，l：符号链接）
4. -user 按用户查找
5. -group 按文件所属组查找
6. -[a/m/c]min +n 第n分钟之前[访问/编辑/更改]过的文件
7. -[a/m/c]min -n 第n分钟以内[访问/编辑/更改]过的文件
8. -[a/m/c]time +n 第n天之前[访问/编辑/更改]过的文件
9. -[a/m/c]time +n 第n天以内[访问/编辑/更改]过的文件
</code></pre><h3 id="示例" tabindex="-1"><strong>示例</strong> <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;**示例**&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">find . -name &quot;test.txt&quot;  //查找当前目录下文件名为test.txt的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -iname &quot;test.txt&quot; //忽略大小写的前提下，查找当前目录下文件名为test.txt的文件，即test.TXT也会被查找到</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -type d //查找当前目录下的目录文件</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -amin -5 //查找当前目录下5分钟以内被访问过的文件</span></span></code></pre></div><hr><h2 id="grep" tabindex="-1"><strong>grep</strong> <a class="header-anchor" href="#grep" aria-label="Permalink to &quot;**grep**&quot;">​</a></h2><h3 id="使用格式-1" tabindex="-1"><strong>使用格式</strong> <a class="header-anchor" href="#使用格式-1" aria-label="Permalink to &quot;**使用格式**&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">grep -[command] [content] [target]</span></span></code></pre></div><pre><code>command  参数
content  查询内容
target  目标文件
</code></pre><h3 id="常用参数-1" tabindex="-1"><strong>常用参数</strong> <a class="header-anchor" href="#常用参数-1" aria-label="Permalink to &quot;**常用参数**&quot;">​</a></h3><pre><code>1. -i 忽略大小写
2. -r 递归查找目录下所有文件
3. -e 指定查找内容，可跟多个查找内容
4. -E 启用正则表达式
5. -v 反向查找，输出不匹配的行
6. -l 只输出包含匹配内容的文件名
7. -n 显示匹配内容的行号
8. -w 只输出完全匹配的内容
</code></pre><hr><h2 id="管道符号" tabindex="-1"><strong>管道符号</strong> <a class="header-anchor" href="#管道符号" aria-label="Permalink to &quot;**管道符号**&quot;">​</a></h2><h3 id="基础知识" tabindex="-1"><strong>基础知识</strong> <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;**基础知识**&quot;">​</a></h3><pre><code>- 0：标准输入 包括命令和参数在内的shell指令为标准输入
- 1：标准输出 标准输入后系统返回的非报错内容
- 2：标准错误输出 标准输入后系统返回的报错内容
</code></pre><h3 id="基础用法" tabindex="-1"><strong>基础用法</strong> <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;**基础用法**&quot;">​</a></h3><pre><code>链接多个命令，并将前面命令的标准输出作为后面命令的标准输入。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[命令1] | [命令2]  //即将将命令1的标准输出作为命令2的标准输入</span></span></code></pre></div><h3 id="示例-1" tabindex="-1"><strong>示例</strong> <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;**示例**&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ cat test.txt //命令1</span></span>
<span class="line"><span style="color:#A6ACCD;">	hello  //命令1标准输出</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ grep &quot;hello&quot; test2.txt //命令2</span></span>
<span class="line"><span style="color:#A6ACCD;">	hello //命令2标准输出</span></span>
<span class="line"><span style="color:#A6ACCD;">	helloworld //命令2标准输出</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ cat test.txt | grep test2.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">	hello //最终命令标准输出</span></span>
<span class="line"><span style="color:#A6ACCD;">	helloworld //最终命令标准输出</span></span></code></pre></div><hr>`,57),o=[l];function r(i,c,p,d,h,u){return s(),n("div",null,o)}const C=a(t,[["render",r]]);export{g as __pageData,C as default};
