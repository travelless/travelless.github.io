<template>
  <a class="module" :href=link>
    <img class="image" :src="icon" alt="image" v-if="icon"/>
    <div class="bottom">
      <div class="title">
        <div class="T">{{ title }}</div>
        <div class="time">{{ currentDate }}</div>
      </div>
      <div class="intro">{{ intro }}</div>
    </div>
    
  </a>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const time = new Date()
  const currentDate = ref(time.toDateString())
  const props = defineProps<{
    icon?: string
    title: string
    intro?: string
    type: string
  }>()
  const baseUrl = '../mdBase/'
  const link = baseUrl + props.type + '/'
</script>

<style lang="less">
.module{
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin: 2% 4%;
  color: var(--vp-c-text-2);
  flex-wrap: wrap;
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-1);
  border-radius: 0.7rem;
  transition: all 0.4s;
  background-color: var(--vp-c-mute);
  &:hover{
    color: var(--vp-c-text-1);
    box-shadow: var(--vp-shadow-3);
  }
  .image {
    border-radius: 0.7rem;
    box-shadow: inset;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--vp-c-mute);
    transition: background-color 0.25s;
  }
  .bottom{
    .title{
      display: flex;
      overflow: hidden;
      flex-grow: 1;
      flex-wrap: wrap;
      text-overflow: ellipsis;
      line-height: 2rem;
      font-size: 0.7rem;
      font-weight: 600;
      justify-content: space-between;
      .T{
        font-size: 1.3rem;
      }
    }
    .intro{
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      // text-overflow: ellipsis;
      line-height: 1.7rem;
      font-size: 1rem;

    }
  }
  

}





.button {
  padding: 0;
  min-height: auto;
}


</style>