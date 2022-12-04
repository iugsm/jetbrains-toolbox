import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  installListState,
  downloadPercentState,
  installStatusState,
} from "~/stores/software";
import { Software } from "~/utils";
import { emitter } from "~/utils/emitter";

export const useInstallProcess = () => {
  // 安装列表
  const setInstallList = useSetRecoilState(installListState);
  // 设置安装状态
  const setStatusMap = useSetRecoilState(installStatusState);
  // 进度条
  const [progressMap, setProgressMap] = useRecoilState(downloadPercentState);

  const handleInstall = (evt: CustomEvent) => {
    const software = evt.detail as Software;
    setInstallList((prev) => [...prev, { ...software }]);
    setStatusMap((prev) => new Map(prev.set(software.id, "downloading")));

    // 获取百分比
    let percent = progressMap.get(software.id);
    if (percent === undefined) {
      // 没有就添加
      percent = 0;
      setProgressMap((prev) => new Map(prev.set(software.id, 0)));
    }

    let intervalID = setInterval(() => {
      if (percent! < 100) {
        percent =
          percent! + Math.random() * 10 > 100
            ? 100
            : (percent = percent! + Math.random() * 10);
      } else {
        clearInterval(intervalID);

        // 修改状态为 installing
        setStatusMap((prev) => new Map(prev.set(software.id, "installing")));

        // 2000ms 后修改为 installed
        setTimeout(() => {
          setStatusMap((prev) => new Map(prev.set(software.id, "installed")));
        }, 2000);
      }

      // 设置百分比
      setProgressMap((prev) => new Map(prev.set(software.id, percent!)));
    }, 1000);
  };

  useEffect(() => {
    emitter.addEventListener("install", handleInstall);

    return () => {
      emitter.removeEventListener("install", handleInstall);
    };
  }, []);
};
