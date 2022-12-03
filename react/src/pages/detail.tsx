import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import DetailHeader from "~/components/DetailHeader";
import { softwareData } from "~/utils";
import SoftwareVersion from "~/components/SoftwareVersion";
import style from "~/assets/styles/detail.module.scss";

export default function Detail() {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const initTabValue = searchParams.get("tab") || "about";

  const [tab, setTab] = useState(initTabValue);

  const versionList = softwareData.filter((element) => element.name === name);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <>
      <DetailHeader name={name} />

      <Tabs value={tab} onChange={handleChange} className={style.tabs}>
        <Tab value="about" label="概述" className={style.tab} />
        <Tab value="version" label="版本" className={style.tab} />
      </Tabs>

      <section
        style={{ display: tab === "about" ? "" : "none" }}
        className={style.about_section}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nostrum
        facere impedit libero laudantium repellendus obcaecati! Culpa aspernatur
        pariatur soluta neque earum laboriosam quisquam, praesentium non iure
        reiciendis nam odio?
      </section>

      <section
        style={{ display: tab === "version" ? "" : "none" }}
        className={style.version_section}
      >
        {versionList.map((item) => (
          <SoftwareVersion software={item} key={item.id} />
        ))}
      </section>
    </>
  );
}
