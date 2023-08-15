<script setup lang="ts">
import { useData, withBase } from "vitepress";
import { computeTags }  from "../computeTags.js";
import { ref } from "vue";

const posts = useData().theme.value.posts;
const tags = computeTags(posts);
const selectedTag = ref([]);
const selectTag = (item) =>{
  selectedTag.value = item[1];
}

</script>

<template>
  <el-container class="main">
    <el-main class="body">
      <div class="tags">
        <div class="T"> Tags </div>
        <div class="items">
          <div class="types" v-for="item in tags" @click="selectTag(item)">
            <a class="item" :id="item[1].length.toString()">{{ item[0] }}</a>
          </div>
        </div>
      </div>
      <div class="posts">
        <a :href="withBase(article.regularPath)" v-for="(article, index) in selectedTag" :key="index" class="post">
          <div class="post-container">
              <div class="post-dot"></div>
              {{ article.frontMatter.title }}
          </div>
          <div class="date">{{ article.frontMatter.date }}</div>
        </a>
      </div>
    </el-main>
  </el-container>
</template>


<style lang="less">
  .main{
    user-select:none;
    display: flex;  
    overflow: hidden;
    transition: all 0.4s;
    .body{
      display: flex;
      color: var(--vp-c-text-2);
      flex-direction: column;
      align-items: center;
      margin-top: 1%;
      background-color: var(--vp-c-bg);
      box-shadow: var(--vp-shadow-1);
      transition:all 1s;
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
          flex-wrap:wrap;
          .types{
            white-space: normal;
            display: flex;
            flex-direction: row;
            .item{
              white-space:nowrap;
              margin: 0.3rem .9rem;
              position: relative;
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
                color: var(--vp-c-text-1);
              }
            }
          }
        }
      }
      .posts{
        display: flex;
        flex-direction: column;
        width: 50%;
        .post{
          display: flex;
          flex-direction: row;
          width: 100%;
          position: relative;
          &:hover{
              color: var(--vp-c-text-1);
            }
          .post-container{
            position: relative;
            left: 10%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0.5rem 0;
            transition: all 0.4s;
          }
          .date{
            font-size: 80%;
            position: relative;
            left: 70%;
            top: 0.5rem;
          }

        }
        
      }

      
    }

  }
  
</style>