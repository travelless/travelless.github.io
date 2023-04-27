<script setup>
  import module from './module.vue'
  import { ref } from 'vue'
</script>

<template>
  <el-container class="main">
    <button @click="touch">123</button>
    <el-main>
      <div class="modules">
        <module icon='/todo.jpg' type=todo title=todoList intro=代办事项记录></module>
        <module icon='/ts.webp' type=IT title=技术博客 intro=技术博客都在这里></module>
        <module icon='/daily.jpg' type=daily title=日常生活事 intro=记录一些日常生活的趣事或者思考></module>
      </div>
    </el-main>

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
  }
  
</style>