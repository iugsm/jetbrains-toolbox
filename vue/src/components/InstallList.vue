<script lang="ts" setup>
  import { useInstallList } from "@/stores/software";
  import { storeToRefs } from "pinia";

  import SoftwareComponent from "./Software.vue";

  const installListStore = useInstallList();
  const { installList } = storeToRefs(installListStore);

  // const installList = computed(() => {
  //   let list: InstallSoftware[] = [];

  //   let allSoftwareMap = new Map<string, Software>();
  //   sourceData.forEach((item) => allSoftwareMap.set(item.name, item));

  //   for (const [key, value] of installMap.value) {
  //     const versionCode = allSoftwareMap
  //       .get(key.name)
  //       ?.versions.filter((item) => item.code === key.version)[0].name;
  //     const temp: InstallSoftware = {
  //       ...allSoftwareMap.get(key.name)!,
  //       key: key.name + key.version,
  //       version: key.version,
  //       versionCode: versionCode || "",
  //       status: value.status,
  //     };
  //     list.push(temp);
  //   }
  //   return list;
  // });
</script>

<template>
  <div v-if="installList.length > 0" class="container">
    <h2 class="title">已安装</h2>

    <template v-for="item in installList" :key="item.version + item.key">
      <SoftwareComponent :software="item" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-block: var(--padding-block);
  }

  .title {
    font-weight: 500;
    font-size: 13px;
    height: 28px;
    line-height: 28px;
    color: var(--text-gray);
    padding-inline: var(--padding-inline);
  }
</style>
