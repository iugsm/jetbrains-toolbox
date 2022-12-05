<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Scheduler from "./components/Scheduler.vue";
</script>

<template>
  <div class="layout">
    <RouterView />
  </div>

  <Scheduler />

  <p class="copyright">
    素材版权归
    <a
      href="https://www.jetbrains.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      JetBrains
    </a>
    所有，本项目仅供学习使用
  </p>
</template>

<style lang="scss" scoped>
  .layout {
    width: min(65ch, 100%);
    margin: 0 auto;
    min-height: calc(100vh - 36px);
    min-height: calc(100dvh - 36px);
  }

  .copyright {
    height: 36px;
    line-height: 36px;
    margin: 0;
    padding: 0;
    color: #aaa;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    a {
      all: unset;
      cursor: pointer;
    }
  }
</style>
