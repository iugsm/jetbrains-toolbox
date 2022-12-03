import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { softwareListState } from "~/stores/software";
import { Software } from "~/utils";

export const useInstallState = (software: Software) => {
  const { installMap } = useRecoilValue(softwareListState);

  const status = useMemo(() => {
    return installMap.get(software.id)?.status;
  }, [software, installMap]);

  return status;
};
