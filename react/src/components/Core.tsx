import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { subscribe, unsubscribe } from "~/utils/event";
import { progressState } from "~/stores/progress";
import { Software } from "~/utils";
import { installListState } from "~/stores/software";

const Core = () => {
  const setInstallList = useSetRecoilState(installListState);
  const [progressMap, setProgressMap] = useRecoilState(progressState);

  const handleInstall = (evt: CustomEvent) => {
    const software = evt.detail as Software;
    setInstallList((prev) => [...prev, { ...software, status: "downloading" }]);

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
        setInstallList((prev) => {
          const res = prev.map((element) => {
            const temp = { ...element };
            if (temp.id === software.id) temp.status = "installing";
            return temp;
          });
          return res;
        });

        // 2000ms 后修改为 installed
        setTimeout(() => {
          setInstallList((prev) => {
            const res = prev.map((element) => {
              const temp = { ...element };
              if (temp.id === software.id) temp.status = "installed";
              return temp;
            });
            return res;
          });
        }, 2000);
      }

      // 设置百分比
      setProgressMap((prev) => new Map(prev.set(software.id, percent!)));
    }, 1000);
  };

  useEffect(() => {
    subscribe("onInstall", handleInstall);

    return () => {
      unsubscribe("onInstall", handleInstall);
    };
  }, []);

  return <></>;
};

export default Core;
