<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";
import { ref, watch, reactive, onMounted, watchEffect, toRef } from "vue";
const options: TypedOptions = {
  strings: ["/*let\'s record the world , form now , but not only now .*/"],
  loop: true,
  typeSpeed: 30,
  backDelay: 1500,
};



</script>

<template>
  <div class="Welcome">


    <div class="title">Welcome Stranger
      <Typed class="typedBox" :options="options">
        <div class="typing"></div>
      </Typed>
    </div>
  </div>
</template>

<style scoped lang="less">
.Welcome {
  height: calc(~'100vh - 64px');
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
  .title {
    margin: auto;
    font-size: 2.5em;
    .typedBox{
      margin: 0.2em 0;
      display: flex;
      font-size: 0.5em;
    }
  }
  
}
</style>
