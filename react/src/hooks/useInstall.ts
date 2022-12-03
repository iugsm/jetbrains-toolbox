import { useState } from "react";
import { Software } from "~/utils";
import { emitter } from "~/utils/emitter";

export const useInstall = () => {
  const [disabled, setDisabled] = useState(false);

  const onInstall = (data: Software) => {
    if (disabled) return;
    setDisabled(true);

    emitter.emit(new CustomEvent("install", { detail: data }));
  };

  return {
    disabled,
    onInstall,
  };
};
