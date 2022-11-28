import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { subscribe, unsubscribe } from "~/event";
import { progressState } from "~/stores/progress";
import { InstallMapKey, installMapState } from "~/stores/software";

const Core = () => {
  const setInstallMap = useSetRecoilState(installMapState);
  const [progress, setProgress] = useRecoilState(progressState);

  const handleInstall = (data: any) => {
    if (data.detail && data.detail.name && data.detail.version) {
      const arg: InstallMapKey = {
        name: data.detail.name,
        version: data.detail.version,
      };

      setInstallMap(
        (prev) => new Map(prev.set(arg, { status: "downloading" }))
      );

      const progressKey = `${arg.name}${arg.version}`;

      let percent = progress.get(progressKey);

      if (percent === undefined) {
        percent = 0;
        setProgress((prev) => new Map(prev.set(progressKey, 0)));
      }

      let intervalId = setInterval(() => {
        if (percent! < 100) {
          percent =
            percent! + Math.random() * 10 > 100
              ? 100
              : (percent = percent! + Math.random() * 10);
        } else {
          clearInterval(intervalId);
          setInstallMap(
            (prev) => new Map(prev.set(arg, { status: "installing" }))
          );

          setTimeout(() => {
            setInstallMap(
              (prev) => new Map(prev.set(arg, { status: "installed" }))
            );
          }, 2000);
        }
        setProgress((prev) => new Map(prev.set(progressKey, percent!)));
      }, 1000);
    }
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
