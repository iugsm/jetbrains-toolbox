import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Scheduler from "./components/Scheduler";
import router from "./router";

export default function App() {
  return (
    <div style={{ maxWidth: "65ch", margin: "0 auto" }}>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
      <Scheduler />
    </div>
  );
}
