import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { sourceData, Software } from "~/assets/data";
import { installMapState, InstallStatus } from "~/stores/software";
import SoftwareComponent from "../Software/Software";
import style from "./style.module.scss";

export type InstallSoftware = Software & {
  version: string;
  key: string;
  status: InstallStatus;
};

const InstallList: React.FC = () => {
  const installMap = useRecoilValue(installMapState);

  const list = useMemo(() => {
    let toolList: InstallSoftware[] = [];
    let allToolMap = new Map<string, Software>();

    sourceData.forEach((item) => allToolMap.set(item.name, item));

    for (const [key, value] of installMap) {
      const temp: InstallSoftware = {
        ...allToolMap.get(key.name)!,
        key: key.name + key.version,
        version: key.version,
        status: value.status,
      };
      toolList.push(temp);
    }

    return toolList;
  }, [installMap]);

  if (list.length > 0) {
    return (
      <>
        <h2 className={style.title}>已安装</h2>

        {list.map((item) => (
          <SoftwareComponent software={item} key={item.key} />
        ))}
      </>
    );
  }

  return <></>;
};

export default InstallList;
