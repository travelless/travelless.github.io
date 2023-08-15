---
title: Linux系统指令学习
tags: 
 - Linux
date: '2023-06-05'
intro: 总结一些生活和学业当中使用的linux系统指令。
---

## **磁盘管理**

1. ### ls  --用于显示指定工作目录下之内容

   #### 指令

   ```
    ls [-command] [name...]
   ```

   #### command参数：

   - -a 显示所有文件及目录 (**.** 开头的隐藏文件也会列出)
   - -d 只列出目录（不递归列出目录内的文件）。
   - -l 以长格式显示文件和目录信息，包括权限、所有者、大小、创建时间等。
   - -r 倒序显示文件和目录。
   - -t 将按照修改时间排序，最新的文件在最前面。
   - -A 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)。
   - -F 在列出的文件名称后加一符号；例如可执行档则加 "*", 目录则加 "/"。
   - -R 递归显示目录中的所有文件和子目录。

   #### 实例

   ```
   # ls /    # 列出根目录下的所有目录
   bin               dev   lib         media  net   root     srv  upload  www
   boot              etc   lib64       misc   opt   sbin     sys  usr
   home  lost+found  mnt    proc  selinux  tmp  var
   ```

   #### 特殊用法

   ```
   ls "my file.txt"    # 列出文件名为"my file.txt"的文件
   ls *.txt         # 列出所有扩展名为.txt的文件
   ls -ltr s*		# 列出目前工作目录下所有名称是 s 开头的文件，越新的排越后面
   ```

2. ### cd  --用于切换当前工作目录

   #### 指令

   ```
   cd [dirName]
   ```

   #### 实例

   ```
   cd /usr/bin		# 跳到 /usr/bin/
   ```

3. ### stat  -- 以文字的格式来显示 inode 的内容(文件或目录信息)

   #### 指令

   ```
   stat [文件或目录]
   ```

   #### 实例

   ```
   # stat testfile                # 输出"testfile"文件夹的具体信息
     File: `testfile'
     Size: 102             Blocks: 8          IO Block: 4096   regular file
   Device: 807h/2055d      Inode: 1265161     Links: 1
   Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
   Access: 2014-08-13 14:07:20.000000000 +0800
   Modify: 2014-08-13 14:07:07.000000000 +0800
   Change: 2014-08-13 14:07:07.000000000 +0800
   ```

   

