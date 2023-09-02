<script setup>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { onMounted } from 'vue' 

console.log(import.meta.env.VITE_TEST)

const config = {
  clientID: '5663f5222dc80679220c',
  clientSecret: import.meta.env.VITE_TEST_SECTET,
  repo: 'travelless.github.io ',      // The repository of store comments,
  owner: 'travelless',
  admin: ['travelless'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
}

const gitalk = new Gitalk(config)

onMounted(()=>{
  gitalk.render('gitalk-container')
})
</script>

<template>
  <div id="gitalk-container"></div>
</template>

<style scoped>
  #gitalk-container{
    margin-left: 30%;
    width: 40%;
  }

</style>
