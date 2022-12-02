import { Button } from "@mui/material";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { installListState, InstallStatus } from "~/stores/software";
import { Software } from "~/utils";
import { publish } from "~/utils/event";
import style from "./style.module.scss";

const SoftwareVersion: React.FC<{ software: Software }> = ({ software }) => {
  const installList = useRecoilValue(installListState);
  const [disabled, setDisabled] = useState(false);

  const handleInstall = () => {
    if (disabled) return;
    setDisabled(true);
    publish("onInstall", { ...software });
  };

  const statusElement = () => {
    let status: InstallStatus | undefined;
    const current = installList.filter((item) => item.id === software.id);
    if (current.length) {
      status = current[0].status;
    }

    switch (status) {
      case "downloading":
        return <div>正在下载</div>;
      case "installing":
        return <div>安装中...</div>;
      case "installed":
        return <div>已安装</div>;
      default:
        return (
          <Button
            className={style.install_btn}
            onClick={handleInstall}
            disabled={disabled}
          >
            安装
          </Button>
        );
    }
  };

  return (
    <section className={style.wrap}>
      <div className={style.name}>
        {software.versionName}
        <p className={style.code}>{software.versionCode}</p>
      </div>

      <div className={style.date}>{software.date}</div>

      <div className={style.status}>{statusElement()}</div>
    </section>
  );
};

export default SoftwareVersion;
