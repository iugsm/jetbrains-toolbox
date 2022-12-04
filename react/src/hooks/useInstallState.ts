import { useRecoilValue } from "recoil";
import { installStatusState } from "~/stores/software";
import { Software } from "~/utils";

export const useInstallState = (software: Software) => {
  const status = useRecoilValue(installStatusState);
  return status.get(software.id);
};
