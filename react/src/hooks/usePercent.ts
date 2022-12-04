import { useRecoilValue } from "recoil";
import { downloadPercentState } from "~/stores/software";
import { Software } from "~/utils";

export const usePercent = (software: Software) => {
  const progressMap = useRecoilValue(downloadPercentState);
  return progressMap.get(software.id);
};
