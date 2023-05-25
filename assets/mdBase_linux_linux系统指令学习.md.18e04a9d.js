import{_ as a,o as s,c as l,O as e}from"./chunks/framework.1eb88449.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{"intro":"总结一些生活和学业当中使用的linux系统指令。"},"headers":[],"relativePath":"mdBase/linux/linux系统指令学习.md","lastUpdated":1684982050000}'),n={name:"mdBase/linux/linux系统指令学习.md"},t=e(`<h2 id="磁盘管理" tabindex="-1"><strong>磁盘管理</strong> <a class="header-anchor" href="#磁盘管理" aria-label="Permalink to &quot;**磁盘管理**&quot;">​</a></h2><ol><li><h3 id="ls-用于显示指定工作目录下之内容" tabindex="-1">ls --用于显示指定工作目录下之内容 <a class="header-anchor" href="#ls-用于显示指定工作目录下之内容" aria-label="Permalink to &quot;ls  --用于显示指定工作目录下之内容&quot;">​</a></h3><h4 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-label="Permalink to &quot;指令&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ls [-command] [name...]</span></span></code></pre></div><h4 id="command参数" tabindex="-1">command参数： <a class="header-anchor" href="#command参数" aria-label="Permalink to &quot;command参数：&quot;">​</a></h4><ul><li>-a 显示所有文件及目录 (<strong>.</strong> 开头的隐藏文件也会列出)</li><li>-d 只列出目录（不递归列出目录内的文件）。</li><li>-l 以长格式显示文件和目录信息，包括权限、所有者、大小、创建时间等。</li><li>-r 倒序显示文件和目录。</li><li>-t 将按照修改时间排序，最新的文件在最前面。</li><li>-A 同 -a ，但不列出 &quot;.&quot; (目前目录) 及 &quot;..&quot; (父目录)。</li><li>-F 在列出的文件名称后加一符号；例如可执行档则加 &quot;*&quot;, 目录则加 &quot;/&quot;。</li><li>-R 递归显示目录中的所有文件和子目录。</li></ul><h4 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># ls /    # 列出根目录下的所有目录</span></span>
<span class="line"><span style="color:#A6ACCD;">bin               dev   lib         media  net   root     srv  upload  www</span></span>
<span class="line"><span style="color:#A6ACCD;">boot              etc   lib64       misc   opt   sbin     sys  usr</span></span>
<span class="line"><span style="color:#A6ACCD;">home  lost+found  mnt    proc  selinux  tmp  var</span></span></code></pre></div><h4 id="特殊用法" tabindex="-1">特殊用法 <a class="header-anchor" href="#特殊用法" aria-label="Permalink to &quot;特殊用法&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ls &quot;my file.txt&quot;    # 列出文件名为&quot;my file.txt&quot;的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">ls *.txt         # 列出所有扩展名为.txt的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -ltr s*		# 列出目前工作目录下所有名称是 s 开头的文件，越新的排越后面</span></span></code></pre></div></li><li><h3 id="cd-用于切换当前工作目录" tabindex="-1">cd --用于切换当前工作目录 <a class="header-anchor" href="#cd-用于切换当前工作目录" aria-label="Permalink to &quot;cd  --用于切换当前工作目录&quot;">​</a></h3><h4 id="指令-1" tabindex="-1">指令 <a class="header-anchor" href="#指令-1" aria-label="Permalink to &quot;指令&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd [dirName]</span></span></code></pre></div><h4 id="实例-1" tabindex="-1">实例 <a class="header-anchor" href="#实例-1" aria-label="Permalink to &quot;实例&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd /usr/bin		# 跳到 /usr/bin/</span></span></code></pre></div></li><li><h3 id="stat-以文字的格式来显示-inode-的内容-文件或目录信息" tabindex="-1">stat -- 以文字的格式来显示 inode 的内容(文件或目录信息) <a class="header-anchor" href="#stat-以文字的格式来显示-inode-的内容-文件或目录信息" aria-label="Permalink to &quot;stat  -- 以文字的格式来显示 inode 的内容(文件或目录信息)&quot;">​</a></h3><h4 id="指令-2" tabindex="-1">指令 <a class="header-anchor" href="#指令-2" aria-label="Permalink to &quot;指令&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">stat [文件或目录]</span></span></code></pre></div><h4 id="实例-2" tabindex="-1">实例 <a class="header-anchor" href="#实例-2" aria-label="Permalink to &quot;实例&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># stat testfile                # 输出&quot;testfile&quot;文件夹的具体信息</span></span>
<span class="line"><span style="color:#A6ACCD;">  File: \`testfile&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Size: 102             Blocks: 8          IO Block: 4096   regular file</span></span>
<span class="line"><span style="color:#A6ACCD;">Device: 807h/2055d      Inode: 1265161     Links: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)</span></span>
<span class="line"><span style="color:#A6ACCD;">Access: 2014-08-13 14:07:20.000000000 +0800</span></span>
<span class="line"><span style="color:#A6ACCD;">Modify: 2014-08-13 14:07:07.000000000 +0800</span></span>
<span class="line"><span style="color:#A6ACCD;">Change: 2014-08-13 14:07:07.000000000 +0800</span></span></code></pre></div></li></ol>`,2),o=[t];function i(c,p,r,d,h,u){return s(),l("div",null,o)}const b=a(n,[["render",i]]);export{C as __pageData,b as default};
