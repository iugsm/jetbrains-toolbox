import type { Software } from "@/utils";
import { emitter } from "@/utils/emitter";
import { ref } from "vue";

export const useInstall = () => {
  const disabled = ref(false);

  const installFn = (data: Software) => {
    if (disabled.value) return;
    disabled.value = true;
    emitter.emit(new CustomEvent("install", { detail: data }));
  };

  return { disabled, installFn };
};
