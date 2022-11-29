<script lang="ts" setup>
  import { emitterKey } from "@/emitter";
  import { useProgress } from "@/stores/progress";
  import { useInstallMap, type InstallMapKey } from "@/stores/software";
  import { storeToRefs } from "pinia";
  import { inject } from "vue";

  const emitter = inject(emitterKey);

  type InstallE = {
    name: string;
    version: string;
  };

  const installMapstore = useInstallMap();
  const progressStore = useProgress();
  const { installMap } = storeToRefs(installMapstore);
  const { progressMap } = storeToRefs(progressStore);

  const handleInstall = (e: unknown) => {
    const arg: InstallMapKey = {
      name: (e as InstallE).name,
      version: (e as InstallE).version,
    };

    installMap.value.set(arg, { status: "downloading" });
    const progressKey = `${arg.name}${arg.version}`;

    let percent = progressMap.value.get(progressKey);
    if (percent === undefined) {
      percent = 0;
      progressMap.value.set(progressKey, percent);
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
        installMap.value.set(arg, { status: "installing" });

        // 2000ms 后修改为 installed
        setTimeout(() => {
          installMap.value.set(arg, { status: "installed" });
        }, 2000);
      }

      progressMap.value.set(progressKey, percent!);
    }, 1000);
  };

  emitter?.on("install", handleInstall);
</script>

<template></template>
