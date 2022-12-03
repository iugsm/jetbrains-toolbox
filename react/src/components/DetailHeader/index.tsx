import style from "./style.module.scss";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export default function DetailHeader({ name = "" }) {
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <nav className={style.back} onClick={() => navigate(-1)}>
        <ArrowBackIosIcon /> 工具
      </nav>
      <h1 className={style.title}>{name}</h1>
    </header>
  );
}
