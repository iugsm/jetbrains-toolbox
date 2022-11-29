import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import DetailHeader from "~/components/DetailHeader";

export default function Detail() {
  const { name } = useParams();
  const [searchParams] = useSearchParams();

  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (searchParams.get("tab") === "version") {
      setTab(1);
    }
  }, [searchParams]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      <DetailHeader name={name} />

      <Tabs value={tab} onChange={handleChange}>
        <Tab label="概述" />
        <Tab label="版本" />
      </Tabs>

      {}
    </>
  );
}
