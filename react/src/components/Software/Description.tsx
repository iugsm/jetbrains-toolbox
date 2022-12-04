import React from "react";
import { LinearProgress } from "@mui/material";
import { usePercent } from "~/hooks/usePercent";
import style from "./style.module.scss";
import { Software } from "~/utils";
import { useInstallState } from "~/hooks/useInstallState";

const Description: React.FC<{ software: Software }> = ({ software }) => {
  const status = useInstallState(software);
  const percent = usePercent(software);

  return (
    <div className={style.status}>
      {status === "installed" && (
        <p className={style.description}>{software.versionName}</p>
      )}

      {percent !== undefined &&
        (status === "downloading" || status === "installing") && (
          <>
            <p className={style.status_text}>
              {status === "downloading" && "下载中..."}
              {status === "installing" && "正在安装..."}
            </p>
            <LinearProgress
              className={style.progress}
              variant="determinate"
              value={percent}
            />
          </>
        )}
    </div>
  );
};

export default Description;
