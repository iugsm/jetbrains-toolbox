import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useInstall } from "~/hooks/useInstall";
import { useInstallState } from "~/hooks/useInstallState";
import { Software } from "~/utils";
import style from "./style.module.scss";

const StatusStage: React.FC<{ software: Software }> = ({ software }) => {
  const { disabled, onInstall } = useInstall();
  const status = useInstallState(software);

  switch (status) {
    case "downloading":
      return (
        <div className={style.downloading}>
          <CircularProgress size={14} className={style.circular_progress} />
          正在下载
        </div>
      );
    case "installing":
      return <div>安装中...</div>;
    case "installed":
      return <div>已安装</div>;
    default:
      return (
        <Button
          className={style.install_btn}
          onClick={() => onInstall(software)}
          disabled={disabled}
        >
          安装
        </Button>
      );
  }
};

export default StatusStage;
