import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { Software } from "~/utils";
import { useInstall } from "~/hooks/useInstall";
import { useMenu } from "~/hooks/useMenu";
import style from "./style.module.scss";

const SoftwarePure: React.FC<{ software: Software }> = ({ software }) => {
  const { disabled, onInstall } = useInstall();
  const { setAnchorEl, ...reset } = useMenu();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <section className={style.wrap}>
      <Link to={`/${software.name}`} className={style.link}></Link>
      <img src={software.logo} className={style.logo} alt="logo" />

      <main className={style.main}>
        <div className={style.info}>
          <h3 className={style.name}>{software.name}</h3>

          <Button
            className={style.install}
            onClick={() => onInstall(software)}
            disabled={disabled}
          >
            安装
          </Button>

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
                可用版本
              </Link>
            </MenuItem>
          </Menu>
        </div>

        {/* 状态和描述 */}
        <div className={style.status}>
          <p className={style.description}>{software.description}</p>
        </div>
      </main>
    </section>
  );
};

export default SoftwarePure;
