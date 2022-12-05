import { useInstallStatusMap } from "@/stores/software";
import { computed } from "vue";

export const useInstallStatus = (id: number) => {
  const store = useInstallStatusMap();

  const status = computed(() => {
    return store.statusMap.get(id);
  });
  return status;
};
