import { defineStore } from "pinia";
import { reactive } from "vue";

export const useProgress = defineStore("installProgress", () => {
  // id - precent
  const progressMap = reactive(new Map<number, number>());

  return {
    progressMap,
  };
});
