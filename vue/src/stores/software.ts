import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { sourceData, type Software } from "@/assets/data";

export type InstallStatus =
  | "downloading"
  | "installing"
  | "installed"
  | "uninstalling";
export interface InstallMapKey {
  name: string;
  version: string;
}
export interface InstallMapValue {
  status: InstallStatus;
}

export type InstallSoftware = Software & {
  version: string;
  key: string;
  status: InstallStatus;
};

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useInstallMap = defineStore("installMap", () => {
  const installMap = reactive(new Map<InstallMapKey, InstallMapValue>());
  return { installMap };
});

export const useAvaliableList = defineStore("avaliableList", () => {
  const installMap = useInstallMap();

  const avaliableList = computed(() => {
    const nameSet = new Set<string>();
    for (const [key] of installMap.installMap) {
      nameSet.add(key.name);
    }

    const res = sourceData.filter((item) => !nameSet.has(item.name));
    return res;
  });

  return {
    avaliableList,
  };
});
