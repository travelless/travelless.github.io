---
title: Linux系统指令学习
tags: 
 - Linux
date: '2023-06-05'
intro: 总结一些生活和学业当中使用的linux系统指令。
---

# **linux系统指令学习**

## **ls  --用于显示指定工作目录下之内容**

   ### 指令

   ```
   ls [-command] [name...]
   ```

   ### command参数：

	   -a 显示所有文件及目录 (**.** 开头的隐藏文件也会列出)
	   -d 只列出目录（不递归列出目录内的文件）。
	   -l 以长格式显示文件和目录信息，包括权限、所有者、大小、创建时间等。
	   -r 倒序显示文件和目录。
	   -t 将按照修改时间排序，最新的文件在最前面。
	   -A 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)。
	   -F 在列出的文件名称后加一符号；例如可执行档则加 "*", 目录则加 "/"。
	   -R 递归显示目录中的所有文件和子目录。

   ### 实例

   ```
   # ls /    # 列出根目录下的所有目录
   bin               dev   lib         media  net   root     srv  upload  www
   boot              etc   lib64       misc   opt   sbin     sys  usr
   home  lost+found  mnt    proc  selinux  tmp  var
   ```

   ### 特殊用法

   ```
   ls "my file.txt"    # 列出文件名为"my file.txt"的文件
   ls *.txt         # 列出所有扩展名为.txt的文件
   ls -ltr s*		# 列出目前工作目录下所有名称是 s 开头的文件，越新的排越后面
   ```

---

## **cd  --用于切换当前工作目录**

   #### 指令

   ```
   cd [dirName]
   ```

   #### 实例

   ```
   cd /usr/bin		# 跳到 /usr/bin/
   ```

---
## **stat  -- 以文字的格式来显示 inode 的内容(文件或目录信息)**

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

---

## **tail --用于打印文件尾部内容或持续监听文件内容** 

### **指令**
```
tail [-command] [name]
```
### **command 参数**
- -n { 数字 } 显示倒数n行
- -n -{ 数字 } 显示从第n行到最后一行的内容
- -f 持续监视并显示文件新增内容
- -F 类似于 -f ,但是文件丢失后会等待该文件新建
### **name**   - 文件名
---

## **find --用于系统中的文件查找**
### **使用格式**
```
find [range] -[command] [target]
```
	1. range 范围 指定从哪个目录开始查找
	2. command 参数 
	3. target 查找内容
### **三种时间**
	1. -a  Access time  访问时间
	2. -m  Modify time  修改时间（内容）
	3. -c  Change time  更改时间（状态）
### **常用参数**
	1. -name 按名称搜索
	2. -iname 忽略名称大小写
	3. -type 按类型查找（d：目录，f：文件，l：符号链接）
	4. -user 按用户查找
	5. -group 按文件所属组查找
	6. -[a/m/c]min +n 第n分钟之前[访问/编辑/更改]过的文件
	7. -[a/m/c]min -n 第n分钟以内[访问/编辑/更改]过的文件
	8. -[a/m/c]time +n 第n天之前[访问/编辑/更改]过的文件
	9. -[a/m/c]time +n 第n天以内[访问/编辑/更改]过的文件
### **示例**
```
find . -name "test.txt"  //查找当前目录下文件名为test.txt的文件
find . -iname "test.txt" //忽略大小写的前提下，查找当前目录下文件名为test.txt的文件，即test.TXT也会被查找到
find . -type d //查找当前目录下的目录文件
find . -amin -5 //查找当前目录下5分钟以内被访问过的文件
```

---
## **grep**
### **使用格式**
```
grep -[command] [content] [target]
```
	command  参数
	content  查询内容
	target  目标文件
### **常用参数**
	1. -i 忽略大小写
	2. -r 递归查找目录下所有文件
	3. -e 指定查找内容，可跟多个查找内容
	4. -E 启用正则表达式
	5. -v 反向查找，输出不匹配的行
	6. -l 只输出包含匹配内容的文件名
	7. -n 显示匹配内容的行号
	8. -w 只输出完全匹配的内容

---

## **管道符号**
### **基础知识**
	- 0：标准输入 包括命令和参数在内的shell指令为标准输入
	- 1：标准输出 标准输入后系统返回的非报错内容
	- 2：标准错误输出 标准输入后系统返回的报错内容
### **基础用法**
	链接多个命令，并将前面命令的标准输出作为后面命令的标准输入。
```
[命令1] | [命令2]  //即将将命令1的标准输出作为命令2的标准输入
```
### **示例**
```
$ cat test.txt //命令1
	hello  //命令1标准输出

$ grep "hello" test2.txt //命令2
	hello //命令2标准输出
	helloworld //命令2标准输出

$ cat test.txt | grep test2.txt
	hello //最终命令标准输出
	helloworld //最终命令标准输出
```
---
