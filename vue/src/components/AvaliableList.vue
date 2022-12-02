<script lang="ts" setup>
  import { useAvaliableList } from "@/stores/software";
  import SoftwarePure from "./SoftwarePure.vue";

  const store = useAvaliableList();
</script>

<template>
  <div class="container">
    <h2 v-ripple class="title">
      <v-icon icon="mdi-chevron-down" size="15"></v-icon>可用
    </h2>
    <template v-for="item in store.avaliableList" :key="item.id">
      <SoftwarePure :software="item" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-block: var(--padding-block);
  }

  .title {
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    height: 28px;
    line-height: 28px;
    color: var(--text-gray);
    cursor: pointer;

    i {
      margin-inline-start: 8px;
      margin-inline-end: 4px;
    }
  }
</style>
