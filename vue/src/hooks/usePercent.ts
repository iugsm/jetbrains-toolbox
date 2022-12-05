import { computed } from "vue";
import { useDownloadPercentMap } from "@/stores/software";

export const usePercent = (id: number) => {
  const store = useDownloadPercentMap();

  const percent = computed(() => {
    return store.percentMap.get(id);
  });

  return percent;
};
