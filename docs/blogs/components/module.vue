<template>
  <a class="module" :href=data.link>
    <div class="bottom">
      <div class="T">{{ data.text }}</div>
      <div class="intro">{{ data.intro }}</div>
      <div class="detile">updated: {{ time }}</div>
      <!-- <div>type</div> -->
    </div>
    <!-- <img class="image" :src="icon" alt="image" v-if="icon"/> -->
  </a>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { gettime } from './gettime.js'

  const props = defineProps<{
    data:any
  }>()
  const time = gettime(props.data.stat.mtime)

</script>

<style lang="less">
.module{
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.3rem;
  margin: 1% 4%;
  color: var(--vp-c-text-2);
  flex-wrap: wrap;
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-1);
  border-radius: 0.2rem;
  transition: all 0.4s;
  background-color: var(--vp-c-mute);
  &:hover{
    color: var(--vp-c-text-1);
    box-shadow: var(--vp-shadow-3);
  }
  .image {
    border-radius: 0.7rem;
    box-shadow: inset;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--vp-c-mute);
    transition: background-color 0.25s;
  }
  .bottom{
    margin-left:5%;
    margin-right:20%;
    .T{
      font-size: 1.3rem;
      flex-grow: 1;
      flex-wrap: wrap;
      text-overflow: ellipsis;
      line-height: 2rem;
      font-weight: 600;
    }
    .intro{
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      // text-overflow: ellipsis;
      line-height: 1.7rem;
      font-size: 0.8rem;
    }
    .detile{
      overflow: hidden;
      flex-grow: 1;
      flex-wrap: wrap;
      text-overflow: ellipsis;
      line-height: 2rem;
      font-size: 0.7rem;
      font-weight: 600;
    }
  }
  

}





.button {
  padding: 0;
  min-height: auto;
}


</style>