import { Navigate, useRoutes } from "react-router-dom";
import NotFound from "./pages/Page404";
import Panel from "./pages/Panel";

// ----------------------------------------------------------------------

export default function NotFoundRoute(props) {
  return useRoutes([
    {
      path: "*",
      element: <Panel />,
    },
  ]);
}
