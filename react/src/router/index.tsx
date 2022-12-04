import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/index";
import Detail from "~/pages/detail";

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
