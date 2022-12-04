import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { useMenu } from "~/hooks/useMenu";
import Description from "./Description";
import { Software as SoftwareType } from "~/utils";
import style from "./style.module.scss";

const Software: React.FC<{ software: SoftwareType }> = ({ software }) => {
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
        <Description software={software} />
      </main>
    </section>
  );
};

export default Software;
