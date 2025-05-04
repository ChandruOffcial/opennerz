import { createBrowserRouter, Outlet } from "react-router";
import Website from "../feature/website/Website";

// function ProtectedRoute() {
//   return <Outlet />;
// }

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Website />,
  },
  {
    path: "/login",
    element: <p>Login</p>,
  },
]);
