import { IconButton, LinearProgress } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { InstallSoftware } from "../InstallList";
import style from "./style.module.scss";
import { useRecoilValue } from "recoil";
import { progressState } from "~/stores/progress";
import { useMemo } from "react";

const Software: React.FC<{ software: InstallSoftware }> = ({ software }) => {
  const progressMap = useRecoilValue(progressState);

  const progressKey = `${software.name}${software.version}`;

  const percent = useMemo(() => {
    const res = progressMap.get(progressKey);
    return res;
  }, [progressMap]);

  return (
    <section className={style.wrap}>
      <img src={software.logo} className={style.logo} alt="" />

      <main className={style.main}>
        <div className={style.info}>
          <h3 className={style.name}>{software.name}</h3>

          <IconButton className={style.more}>
            <MoreVertIcon />
          </IconButton>
        </div>

        {/* 状态和描述 */}
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
      </main>
    </section>
  );
};

export default Software;
