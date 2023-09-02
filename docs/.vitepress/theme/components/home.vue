<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";
const options: TypedOptions = {
  strings: ["This is a story of firstmeet."],
  loop: true,
  typeSpeed: 25,
  backDelay: 1500,
};


</script>

<template>
  <div class="Welcome">
    <div class="title">Coding World.
      <Typed class="typedBox" :options="options">
        /*&nbsp;<div class="typing"></div>&nbsp;*/
      </Typed>
    </div>
  </div>
</template>

<style scoped lang="less">
.Welcome {
  height: calc(~'100vh - 64px');
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
  .title {
    margin: auto;
    font-size: 2.5em;
    .typedBox{
      justify-content: center;
      margin: 1em 0.2em;
      display: flex;
      font-size: 0.5em;
    }
  }
  
}
</style>
