<script lang="ts" setup>
  defineProps<{
    name: string;
  }>();
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="link">
      <v-icon icon="mdi-chevron-left" size="14" />工具
    </RouterLink>

    <h2 class="name">
      {{ name }}
    </h2>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 10;

    background-color: var(--background);
    color: #fff;
    padding: var(--padding-block) var(--padding-inline);

    .link {
      all: unset;
      font-size: 13px;
      color: var(--blue-gray);
      cursor: pointer;
      transition: filter 0.2s;
      display: inline-flex;
      align-items: center;
      position: relative;
      left: -4px;

      &:hover {
        filter: brightness(1.2);
      }
    }

    .name {
      font-size: 24px;
      font-weight: bold;
    }
  }
</style>
