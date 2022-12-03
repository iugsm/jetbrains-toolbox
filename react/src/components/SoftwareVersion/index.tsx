import React from "react";
import { Software } from "~/utils";
import StatusStage from "./StatusStage";
import style from "./style.module.scss";

const SoftwareVersion: React.FC<{ software: Software }> = ({ software }) => {
  return (
    <section className={style.wrap}>
      <div className={style.name}>
        {software.versionName}
        <p className={style.code}>{software.versionCode}</p>
      </div>

      <div className={style.date}>{software.date}</div>
      <div className={style.status}>
        <StatusStage software={software} />
      </div>
    </section>
  );
};

export default SoftwareVersion;
