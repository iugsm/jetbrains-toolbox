import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Core from "./components/Core";
import router from "./router";

export default function App() {
  return (
    <div style={{ maxWidth: "65ch", margin: "0 auto" }}>
      <RouterProvider router={router} />
      <CssBaseline />
      <Core />
    </div>
  );
}
