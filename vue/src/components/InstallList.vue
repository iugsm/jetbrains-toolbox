<script lang="ts" setup>
  import { sourceData, type Software } from "@/assets/data";
  import { useInstallMap, type InstallSoftware } from "@/stores/software";
  import { storeToRefs } from "pinia";
  import { computed } from "vue";

  import SoftwareComponent from "./Software.vue";

  const installMapStore = useInstallMap();
  const { installMap } = storeToRefs(installMapStore);

  const installList = computed(() => {
    let list: InstallSoftware[] = [];

    let allSoftwareMap = new Map<string, Software>();
    sourceData.forEach((item) => allSoftwareMap.set(item.name, item));

    for (const [key, value] of installMap.value) {
      const temp: InstallSoftware = {
        ...allSoftwareMap.get(key.name)!,
        key: key.name + key.version,
        version: key.version,
        status: value.status,
      };
      list.push(temp);
    }
    return list;
  });
</script>

<template>
  <h2 class="title" v-if="installList.length > 0">已安装</h2>

  <template v-for="item in installList" :key="item.version + item.key">
    <SoftwareComponent :software="item" />
  </template>
</template>

<style lang="scss" scoped>
  .title {
    font-size: 13px;
    color: var(--text-gray);
    cursor: pointer;
  }
</style>
