import { IconButton, LinearProgress } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import style from "./style.module.scss";
import { useRecoilValue } from "recoil";
import { progressState } from "~/stores/progress";
import { TInstallSoftware } from "~/stores/software";

const Software: React.FC<{ software: TInstallSoftware }> = ({ software }) => {
  const progressMap = useRecoilValue(progressState);
  const percent = progressMap.get(software.id);

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
