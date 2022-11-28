import style from "./style.module.css";

import { Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function HomeHeader() {
  return (
    <header className={style.header}>
      <div className={style.brand}>
        <img
          className={style.logo}
          src="https://resources.jetbrains.com/storage/products/company/brand/logos/Toolbox_icon.svg"
          alt=""
        />
        <div className={style.name}>
          <span>JetBrains</span>
          Toolbox
        </div>
      </div>

      <IconButton size="small" style={{ color: "#fff" }}>
        <Settings />
      </IconButton>
    </header>
  );
}
