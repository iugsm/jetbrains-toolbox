import { defineStore } from "pinia";
import { reactive } from "vue";

export const useProgress = defineStore("installProgress", () => {
  const progressMap = reactive(new Map<string, number>());

  return {
    progressMap,
  };
});
