import { useRecoilValue } from "recoil";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { softwareListState } from "~/stores/software";
import SoftwarePure from "../Software/SoftwarePure";
import style from "./style.module.scss";

export default function AvailableList() {
  const { avaliableList } = useRecoilValue(softwareListState);

  return (
    <section>
      <header className={style.header}>
        <ArrowForwardIosIcon />
        可用
      </header>

      {avaliableList.map((item) => (
        <SoftwarePure key={item.id} software={item} />
      ))}
    </section>
  );
}
