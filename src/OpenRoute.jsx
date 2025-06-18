import { Navigate, useRoutes } from "react-router-dom";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import NotFound from "./pages/Page404";
import SuperLogin from "./pages/Panel/login";
import ResetPassword from "./pages/Panel/Password/ResetPassword";

// ----------------------------------------------------------------------

export default function Routes(props) {
  return useRoutes([
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "/", element: <SuperLogin /> },
        { path: "/login", element: <Navigate to="/" /> },
        { path: "/super-login", element: <SuperLogin /> },
        { path: "/404", element: <NotFound /> },
      ],
    },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}
