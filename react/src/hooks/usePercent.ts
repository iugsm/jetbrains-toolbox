import { useRecoilValue } from "recoil";
import { progressState } from "~/stores/progress";
import { InstallSoftware } from "~/stores/software";

export const usePercent = (software: InstallSoftware) => {
  const progressMap = useRecoilValue(progressState);
  return progressMap.get(software.id);
};
