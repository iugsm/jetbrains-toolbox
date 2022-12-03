import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("~/pages/index"));
const Detail = React.lazy(() => import("~/pages/detail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:name",
    element: <Detail />,
  },
]);

export default router;
