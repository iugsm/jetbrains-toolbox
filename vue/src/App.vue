<script setup lang="ts">
  import { provide } from "vue";
  import { RouterView } from "vue-router";
  import Core from "@/components/Core.vue";

  import mitt from "mitt";
  import { emitterKey, type Events } from "./emitter";

  const emitter = mitt<Events>();

  provide(emitterKey, emitter);
</script>

<template>
  <div class="layout">
    <RouterView />

    <Core />
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    max-width: 65ch;
    margin: 0 auto;
  }
</style>
