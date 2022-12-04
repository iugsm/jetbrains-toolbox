import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { CssBaseline } from "@mui/material";
import App from "./App";
import Scheduler from "./components/Scheduler";
import "~/assets/styles/base.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <CssBaseline />
      <App />
      <Scheduler />
    </RecoilRoot>
  </React.StrictMode>
);
