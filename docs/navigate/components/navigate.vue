<script setup lang="ts">
  import module from './module.vue'
  import fileTree from '../../src/fileTree.json'
  import { reactive, ref } from 'vue';
  console.log(fileTree.fileDict);
  const fileDetail = ref(fileTree.fileDetail);  
  const fileDict = ref(fileTree.fileDict);
</script>

<template>
  <el-container class="main">
    <el-main style="overflow:hidden">
      <div class="modules" v-for="item in fileDetail">
        <module :data="item"></module>
      </div>
    </el-main>
    <el-main style="width:20% ;" class="body">
      <div> 博客分类 </div>
      <div class="types" v-for="item in fileDict">
        <a class="item" :href="item.link">{{ item.name }}</a>
      </div>
    </el-main>
  </el-container>
  
</template>


<style lang="less">
  .main{
    overflow: hidden;
    transition: all 0.4s;
    .modules{
      width: 80%;
      margin-left:10%;
      margin-right:25%;
      display:flex;
      flex-wrap: wrap;
    }
    .body{
      position: relative;
      color: var(--vp-c-text-2);
      overflow: hidden;
      margin-top: 1%;
      // margin-right:10%;
      flex-wrap: wrap;
      font-weight: bold;
      font-size: 160;
      background-color: var(--vp-c-bg);
      border-left: 1.5px solid var(--vp-c-text-3);
      box-shadow: var(--vp-shadow-1);
      transition:all 1s;
      .types{
        width: 100%;
        margin: 5% 0;
        .item{
          width: 60%;
          margin-left:5%;
          display:flex;
          flex-wrap: wrap;
          transition: all 0.4s;
          &:hover{
            font-weight: bolder;
            color: var(--vp-c-text-1);
            // box-shadow: var(--vp-shadow-3);
          }
        }
      }
      
    }

  }
  
</style>