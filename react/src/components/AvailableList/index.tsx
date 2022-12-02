import { useRecoilValue } from "recoil";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { avaliableListState } from "~/stores/software";
import style from "./style.module.scss";
import SoftwarePure from "../Software/SoftwarePure";

export default function AvailableList() {
  const avaliable = useRecoilValue(avaliableListState);

  return (
    <section>
      <header className={style.header}>
        <ArrowForwardIosIcon />
        可用
      </header>

      {avaliable.map((item) => (
        <SoftwarePure key={item.id} software={item} />
      ))}
    </section>
  );
}
