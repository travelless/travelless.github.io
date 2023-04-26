<script setup>
  import module from './module.vue'
  import { ref } from 'vue'


</script>

<template>
  <el-container class="main">
    <el-main>
      <div class="modules">
        <module icon='/todo.jpg' type=todo title=todoList intro=代办事项记录></module>
        <module icon='/ts.webp' type=IT title=技术博客 intro=技术博客都在这里捏></module>
        <module icon='/daily.jpg' type=daily title=日常生活事 intro=记录一些日常生活的趣事或者思考></module>
      </div>
    </el-main>
    <!-- <el-aside class="aside">
      <el-main class="asideMain">
        侧边栏，暂时没想好写什么
      </el-main>
      <div>
        <el-main class="asideContainer" >
          呼出侧边栏，纠结写成个人简介还是快捷跳转
        </el-main>
      </div>
      
    </el-aside> -->

  </el-container>
  
</template>


<style lang="less">
  .main{
    overflow: hidden;
    .modules{
      margin-left: 15%;
      display:flex;
      flex-wrap: wrap;
    }
    .aside{
      display: flex;
      .asideContainer{
        width:30vw;
        transition: all 0.4s;
        background-color: var(--vp-c-mute);
        position: fixed;
        left: 98vw;
        height: calc(~'85vh - 64px');
        border: 1px solid var(--vp-c-divider);
        box-shadow: var(--vp-shadow-1);
        border-radius: 0.7rem;
        padding: 4vh 0 4vh 8vh;
        &:hover{
          left: 72vw;
          color: var(--vp-c-text-1);
          box-shadow: var(--vp-shadow-3);
        }
      }
      .asideMain{
        // background-color: black;
        position: relative;
        width: 30vw;
        height: calc(~'89vh - 64px - 1.4rem');
      }
    }
  }
  
</style>