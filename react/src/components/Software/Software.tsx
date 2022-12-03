import { IconButton, LinearProgress, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRecoilValue } from "recoil";
import { progressState } from "~/stores/progress";
import { TInstallSoftware } from "~/stores/software";
import { Link } from "react-router-dom";
import { useMenu } from "~/hooks/useMenu";
import style from "./style.module.scss";

const Software: React.FC<{ software: TInstallSoftware }> = ({ software }) => {
  const progressMap = useRecoilValue(progressState);
  const percent = progressMap.get(software.id);
  const { setAnchorEl, ...reset } = useMenu();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <section className={style.wrap}>
      <img src={software.logo} className={style.logo} alt="" />

      <main className={style.main}>
        <div className={style.info}>
          <h3 className={style.name}>{software.name}</h3>

          <IconButton className={style.more} onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>

          <Menu {...reset} className={style.menu}>
            <MenuItem dense className={style.menu_item}>
              <Link to={`/${software.name}`} className={style.menu_link}>
                关于 {software.name}
              </Link>
            </MenuItem>
            <MenuItem dense className={style.menu_item}>
              <Link
                to={`/${software.name}?tab=version`}
                className={style.menu_link}
              >
                其它版本
              </Link>
            </MenuItem>
          </Menu>
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
