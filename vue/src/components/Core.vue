<script lang="ts" setup>
  import { emitterKey } from "@/emitter";
  import { useProgress } from "@/stores/progress";
  import { useInstallList } from "@/stores/software";
  import type { Software } from "@/utils";
  import { storeToRefs } from "pinia";
  import { inject } from "vue";

  const emitter = inject(emitterKey);

  type InstallE = {
    name: string;
    version: string;
  };

  const installListStore = useInstallList();
  const progressStore = useProgress();
  const { installList } = storeToRefs(installListStore);
  const { progressMap } = storeToRefs(progressStore);

  const handleInstall = (e: unknown) => {
    const software = e as Software;

    const index =
      installList.value.push({ ...software, status: "downloading" }) - 1;

    // 获取百分比
    let percent = progressMap.value.get(software.id);
    if (percent === undefined) {
      // 没有就添加
      percent = 0;
      progressMap.value.set(software.id, percent);
    }

    let intervalID = setInterval(() => {
      if (percent! < 100) {
        percent =
          percent! + Math.random() * 10 > 100
            ? 100
            : (percent = percent! + Math.random() * 10);
      } else {
        clearInterval(intervalID);

        // 修改状态为 installing
        installList.value[index].status = "installing";
        // installMap.value.set(arg, { status: "installing" });

        // 2000ms 后修改为 installed
        setTimeout(() => {
          installList.value[index].status = "installed";
          // installMap.value.set(arg, { status: "installed" });
        }, 2000);
      }

      progressMap.value.set(software.id, percent!);
    }, 1000);
  };

  emitter?.on("install", handleInstall);
</script>

<template></template>
