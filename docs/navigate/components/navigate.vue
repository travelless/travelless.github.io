<script setup lang="ts">
  import fileTree from '../../src/fileTree.json'
  import { reactive, ref } from 'vue';
  console.log(fileTree.fileDict);
  const fileDict = ref(fileTree.fileDict);

</script>

<template>
  <el-container class="main">
    <el-main class="body">
      <div class="tags">
        <div class="T"> Tags </div>
        <div class="items">
          <div class="types" v-for="item in fileDict">
            <a class="item" :href="item.link" :id="item.itemLenth.toString()">{{ item.name }}</a>
          </div>
        </div>
      </div>

        
      
    </el-main>
  </el-container>
</template>


<style lang="less">
  .main{
    flex-wrap: wrap-reverse;
    display: flex;  
    overflow: hidden;
    transition: all 0.4s;
    .body{
      display: flex;
      color: var(--vp-c-text-2);
      overflow: hidden;
      margin-top: 1%;
      background-color: var(--vp-c-bg);
      box-shadow: var(--vp-shadow-1);
      transition:all 1s;
      justify-content: center;
      .tags{
        @media screen and (max-width: 768px) {
          width: 100%;          
        }
        @media screen and (min-width: 768px) {
          width: 40%;
        }
        flex-direction: column;
        align-items: flex-start;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px dashed #c7c7c7;
        .T{
          font-size: 150%;
          margin: 5% 0;
        }
        .items{
          width: 100%;
          display: flex;
          .types{
            margin: 0.5rem 1.5rem;
            display: flex;
            flex-direction: row;
            .item{
              position: relative;
              flex-flow: 1;
              display:flex;
              transition: all 0.4s;
              &:before {
                content: attr(id);
                position: absolute;
                right: -0.5rem;
                bottom: 0.5rem;
                font-size: smaller;
              }
              &:hover{
                // font-weight: bolder;
                color: var(--el-menu-item-hover-fill);
              }
            }
          }
        }
      }
      

      
    }

  }
  
</style>