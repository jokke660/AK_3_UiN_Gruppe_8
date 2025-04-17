import { App } from "../App";
import { createBrowserRouter } from "react-router";
import { Index } from "../components/Index/Index";
import { getPerson } from "./loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => getPerson(),
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
]);
