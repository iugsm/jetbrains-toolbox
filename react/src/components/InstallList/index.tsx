import React from "react";
import { useRecoilValue } from "recoil";
import { installListState } from "~/stores/software";
import SoftwareComponent from "../Software/Software";
import style from "./style.module.scss";

const InstallList: React.FC = () => {
  const installList = useRecoilValue(installListState);

  if (installList.length > 0) {
    return (
      <>
        <h2 className={style.title}>已安装</h2>

        {installList.map((item) => (
          <SoftwareComponent software={item} key={item.id} />
        ))}
      </>
    );
  }

  return <></>;
};

export default InstallList;
