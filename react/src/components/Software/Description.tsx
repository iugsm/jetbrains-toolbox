import React from "react";
import { LinearProgress } from "@mui/material";
import { usePercent } from "~/hooks/usePercent";
import { InstallSoftware } from "~/stores/software";
import style from "./style.module.scss";

const Description: React.FC<{ software: InstallSoftware }> = ({ software }) => {
  const percent = usePercent(software);

  return (
    <div className={style.status}>
      {software.status === "installed" && (
        <p className={style.description}>{software.description}</p>
      )}

      {percent !== undefined &&
        (software.status === "downloading" ||
          software.status === "installing") && (
          <>
            <p className={style.status_text}>
              {software.status === "downloading" && "下载中..."}
              {software.status === "installing" && "正在安装..."}
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
