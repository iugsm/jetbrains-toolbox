<script lang="ts" setup>
  import { useAvaliableList } from "@/stores/software";
  import SoftwarePure from "./SoftwarePure.vue";

  const store = useAvaliableList();
</script>

<template>
  <h2 class="title"><v-icon icon="mdi-chevron-down"></v-icon> 可用</h2>
  <template v-for="item in store.avaliableList" :key="item.name">
    <SoftwarePure :software="item" />
  </template>
</template>

<style lang="scss" scoped>
  .title {
    font-size: 13px;
    color: var(--text-gray);
    cursor: pointer;
  }
</style>
