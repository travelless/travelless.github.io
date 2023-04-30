---
intro: serverless框架的了解和学习记录
---

##  初识serverless框架

### 1、通过serverless文档、一些技术博客和视频了解该框架

- [看懂 Serverless，这一篇就够了](https://www.cnblogs.com/gezp/p/13354180.html)  
- [玩转 Serverless 架构](https://www.bilibili.com/video/BV1RD4y1n7tL?p=1&vd_source=643340c2f44b473b11977cd9c50cb771)

### 2、serverless的概念整理

- FaaS（Function as a Service，函数即服务）
- BaaS（Backend as a Service，后端即服务）
- PaaS（平台即服务）
- LaaS（基础架构即服务）
- SaaS（软件即服务）

#### 广义serverless

构建和运行软件时不需要关心服务器，简化配置代码运行环境的一种思想。

运行仍需要服务器，只是使用相应的框架大幅度减少了服务器相关的操作和概念。

#### 狭义的serverless

狭义的serverless指某厂商构建的以serverless思想为核心的产品，本质上是FaaS产品和BaaS产品的组合。

##### FaaS产品

FaaS产品是一种为开发者提供函数代码运行环境的服务。实际上就是一个云厂商在自己的服务器上部署的一种以容器技术为基础的可弹性伸缩的云服务。用户将自己的服务以代码（具体服务）和yalm文件（描述运行环境）的形式提交给FaaS产品，而FaaS则会为用户的服务新建容器并根据用户提供的yalm文件部署对应的环境，进而运行代码，最终实现用户的服务。

FaaS专注于行为和计算，即FaaS并不会存储数据，只对接收数据进行处理并输出数据。每次运行服务，FaaS产品将会新建容器，以全新的环境运行代码，运行结束后销毁容器。因而如果在FaaS实例服务中定义全局变量，并不会继承到下一次该实例服务的运行中来，上一次运行时的变量已经随着容器的销毁而被销毁，本次运行的变量是被重新初始化出来的新变量。

##### BaaS产品

BaaS产品则是一种为服务实例提供存储能力的服务，通常以接口的形式提供服务。常见的BaaS产品有AWS DynameDB、阿里云表格存储、消息中间件等。

BaaS产品专注于存储信息，用户通过BaaS服务将数据存储至云端，以便下次使用。在FaaS实例服务中引入BaaS产品服务，以api的形式调用BaaS服务，这就是BaaS产品。