import { RouterProvider } from "react-router-dom";
import DefaultLayout from "./Layout/default";
import router from "./router";

export default function App() {
  return (
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  );
}
