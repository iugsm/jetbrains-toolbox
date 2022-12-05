import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";
import { softwareData, type Software } from "@/utils";

export type Status = "downloading" | "installing" | "installed";

// 安装列表
export const useInstallList = defineStore("installList", () => {
  const installList = reactive<Software[]>([]);
  return { installList };
});

// 可用列表
export const useAvaliableList = defineStore("avaliableList", () => {
  const installListStore = useInstallList();

  const avaliableList = computed(() => {
    const installNameSet = new Set();
    installListStore.installList.forEach((element) =>
      installNameSet.add(element.name)
    );

    const list: Software[] = [];
    softwareData.forEach((element) => {
      if (!installNameSet.has(element.name) && element.children !== undefined) {
        list.push(element);
      }
    });
    return list;
  });
  return { avaliableList };
});

export const useInstallStatusMap = defineStore("installStatusMap", () => {
  const statusMap = ref<Map<number, Status>>(new Map());

  const updateStatusMap = (id: number, status: Status) => {
    statusMap.value.set(id, status);
  };

  return { statusMap, updateStatusMap };
});

export const useDownloadPercentMap = defineStore("downloadPercentMap", () => {
  const percentMap = ref<Map<number, number>>(new Map());

  const updatePercentMap = (id: number, percent: number) => {
    percentMap.value.set(id, percent);
  };

  return { percentMap, updatePercentMap };
});
