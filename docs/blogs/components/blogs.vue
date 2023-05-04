<script setup lang="ts">
  import module from './module.vue'
  import fileTree from '../../src/fileTree.json'
  import { reactive, ref } from 'vue';
  console.log(fileTree.fileDetail);
  const fileDetail = ref(fileTree.fileDetail);
  const page = ref(1);
  const changePage = (val: number) => {
    page.value = val;
    for(let i in fileDetail.value){
      // console.log(i);
      if(parseInt(i) >= (val-1)*5 && parseInt(i)<val*5){
        console.log(fileDetail.value[i].idx); 
      }
    }
  }
</script>

<template>
  <el-container class="main">
    <el-main class="near-blog">
      <div class="modules" v-for="item in fileDetail" v-show="page *5 > item.idx && (page -1) *5 <= item.idx ">
        <module :data="item"></module>
      </div>
      <div class="pagination-block">
        <el-pagination layout="prev, pager, next" 
        background
        class="pagination"
        :current-page="page"
        :total="fileDetail.length"
        @current-change="changePage"
        :page-size="5"
        />
      </div>
    </el-main>
  </el-container>
</template>


<style lang="less">
  .main{
    overflow: hidden;
    display: flex;
    transition: all 0.4s;
    .near-blog{
      margin: 3%;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      flex-wrap: wrap;
      align-content: space-around;
      align-items: center;
      @media (max-width: 480px) {
        .modules{
          width:100%;
          display: flex;
        }
      }
      @media screen and (min-width: 480px) {
        .modules{
          width: 50%;
          display: flex;
        }
      }
      .pagination-block{
        width: 100%;
        display: flex;
        margin-top: 2%;
        justify-content: center;
        li{
          background-color: var(--vp-c-bg) !important;
          color: var(--vp-c-text-1);
          &:hover{
            color: var(--vp-c-brand) !important;
          }
        }
        button{
          background-color: var(--vp-c-bg) !important;
          color: var(--vp-c-text-1) !important;
          &:hover{
            color: var(--vp-c-brand) !important;
          }
        }
        .btn-prev:disabled{
          color: var(--vp-c-text-1) !important;
        }
        .btn-next:disabled{
          color: var(--vp-c-text-1) !important;
        }
        .is-active{
          // background-color:black  !important;
          color: var(--vp-c-brand) !important;
        }
      }
    }
  }
  
</style>