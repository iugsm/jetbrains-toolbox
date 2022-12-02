import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { softwareData, type Software } from "@/utils";

export type InstallStatus =
  | "downloading"
  | "installing"
  | "installed"
  | "uninstalling";

export type TInstallSoftware = Software & { status: InstallStatus };

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useInstallList = defineStore("installListSotre", () => {
  const installList = ref<TInstallSoftware[]>([]);

  return {
    installList,
  };
});

export const useAvaliableList = defineStore("avaliableListStore", () => {
  const installListStore = useInstallList();

  const avaliableList = computed(() => {
    const installSet = new Set();

    installListStore.installList.forEach((element) => {
      installSet.add(element.name);
    });

    const list: Software[] = [];
    softwareData.forEach((element) => {
      if (!installSet.has(element.name) && element.children !== undefined) {
        list.push(element);
      }
    });
    return list;
  });

  return {
    avaliableList,
  };
});
